"use client";

import Image from "next/image";
import { useEffect, useRef, useState, CSSProperties } from "react";

type Direction = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface DecoShapeProps {
  color?: "green" | "red" | "white";
  width?: number;
  /** スマホ（lg未満）でのみ適用する幅。未指定なら width を使用 */
  mobileWidth?: number;
  /** @deprecated height is auto-calculated from width based on SVG aspect ratio */
  height?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  /** スマホ（lg未満）でのみ適用する位置。未指定なら通常の値を使用 */
  mobileTop?: string;
  mobileLeft?: string;
  mobileRight?: string;
  mobileBottom?: string;
  rotate?: number;
  delay?: number;
  direction?: Direction;
  zIndex?: number;
  flip?: boolean;
  className?: string;
}

export default function DecoShape({
  color = "green",
  width = 300,
  mobileWidth,
  top,
  left,
  right,
  bottom,
  mobileTop,
  mobileLeft,
  mobileRight,
  mobileBottom,
  rotate = 0,
  delay = 0,
  direction = "top-left",
  zIndex = 5,
  flip = false,
  className,
}: DecoShapeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hasMobileOverride =
    mobileWidth !== undefined ||
    mobileTop !== undefined ||
    mobileLeft !== undefined ||
    mobileRight !== undefined ||
    mobileBottom !== undefined;

  useEffect(() => {
    if (!hasMobileOverride) return;
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [hasMobileOverride]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const src =
    color === "green"
      ? "/images/shapes/shape-green.svg"
      : color === "white"
      ? "/images/shapes/shape-white.svg"
      : "/images/shapes/shape-red.svg";

  const effectiveWidth = isMobile && mobileWidth !== undefined ? mobileWidth : width;
  const aspectRatio = color === "red" ? 629 / 340 : 641 / 333;
  const height = effectiveWidth / aspectRatio;

  // 全シェイプ右斜め下から登場
  void direction;
  const flipScale = flip ? "scaleX(-1)" : "";
  const visibleTransform = `rotate(${rotate}deg) ${flipScale}`.trim();
  const hiddenTransform = `translate(200px, 200px) rotate(${rotate}deg) ${flipScale}`.trim();

  const style: CSSProperties = {
    position: "absolute",
    top: isMobile && mobileTop !== undefined ? mobileTop : top,
    left: isMobile && mobileLeft !== undefined ? mobileLeft : left,
    right: isMobile && mobileRight !== undefined ? mobileRight : right,
    bottom: isMobile && mobileBottom !== undefined ? mobileBottom : bottom,
    width: `${effectiveWidth}px`,
    height: `${height}px`,
    transform: isVisible ? visibleTransform : hiddenTransform,
    opacity: isVisible ? 1 : 0,
    transition: `transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.8s ease-out ${delay}s`,
    pointerEvents: "none",
    zIndex,
  };

  return (
    <div ref={ref} style={style} className={className} aria-hidden="true">
      <Image src={src} alt="" width={effectiveWidth} height={height} unoptimized />
    </div>
  );
}
