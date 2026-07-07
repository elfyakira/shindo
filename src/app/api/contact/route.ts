import { NextRequest, NextResponse } from 'next/server';
import { googleForm } from '@/lib/site';

type ContactType = 'general' | 'recruit';

interface ContactFormData {
  type: ContactType;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone: string): boolean {
  if (!phone) return true;
  const re = /^[\d\-+()\s]+$/;
  return re.test(phone);
}

function validateFormData(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (data.type !== 'general' && data.type !== 'recruit') {
    errors.push({ field: 'type', message: 'お問い合わせ種別を選択してください' });
  }

  if (!data.name || !data.name.trim()) {
    errors.push({ field: 'name', message: 'お名前・会社名を入力してください' });
  }

  if (!data.email || !data.email.trim()) {
    errors.push({ field: 'email', message: 'メールアドレスを入力してください' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'メールアドレスの形式が正しくありません' });
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: '電話番号の形式が正しくありません' });
  }

  if (!data.message || !data.message.trim()) {
    errors.push({ field: 'message', message: 'お問い合わせ内容を入力してください' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'お問い合わせ内容は10文字以上で入力してください' });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // サーバーサイドバリデーション
    const errors = validateFormData(body);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Google フォームへ送信（entry ID に紐付け）
    const formData = new URLSearchParams();
    formData.append(googleForm.entries.type, googleForm.typeLabels[body.type]);
    formData.append(googleForm.entries.name, body.name);
    if (body.phone) {
      formData.append(googleForm.entries.phone, body.phone);
    }
    formData.append(googleForm.entries.email, body.email);
    formData.append(googleForm.entries.message, body.message);
    // プライバシーポリシー同意（フロントで同意済みのため固定値）
    formData.append(googleForm.entries.agree, googleForm.agreeValue);

    const response = await fetch(googleForm.formUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    // Google フォームは 200 を返す。5xx のみ失敗扱い
    if (!response.ok && response.status >= 500) {
      throw new Error(`Google Form submission failed: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        errors: [
          {
            field: 'general',
            message: '送信中にエラーが発生しました。しばらく経ってから再度お試しください。',
          },
        ],
      },
      { status: 500 }
    );
  }
}
