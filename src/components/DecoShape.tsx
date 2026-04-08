"use client";

import Image from "next/image";
import { useEffect, useRef, useState, CSSProperties } from "react";

type Direction = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface DecoShapeProps {
  color?: "green" | "red" | "white";
  width?: number;
  /** @deprecated height is auto-calculated from width based on SVG aspect ratio */
  height?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  delay?: number;
  direction?: Direction;
  zIndex?: number;
  flip?: boolean;
}

export default function DecoShape({
  color = "green",
  width = 300,
  top,
  left,
  right,
  bottom,
  rotate = 0,
  delay = 0,
  direction = "top-left",
  zIndex = 5,
  flip = false,
}: DecoShapeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const aspectRatio = color === "red" ? 629 / 340 : 641 / 333;
  const height = width / aspectRatio;

  // 全シェイプ右斜め下から登場
  void direction;
  const flipScale = flip ? "scaleX(-1)" : "";
  const visibleTransform = `rotate(${rotate}deg) ${flipScale}`.trim();
  const hiddenTransform = `translate(200px, 200px) rotate(${rotate}deg) ${flipScale}`.trim();

  const style: CSSProperties = {
    position: "absolute",
    top,
    left,
    right,
    bottom,
    width: `${width}px`,
    height: `${height}px`,
    transform: isVisible ? visibleTransform : hiddenTransform,
    opacity: isVisible ? 1 : 0,
    transition: `transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.8s ease-out ${delay}s`,
    pointerEvents: "none",
    zIndex,
  };

  return (
    <div ref={ref} style={style} aria-hidden="true">
      <Image src={src} alt="" width={width} height={height} unoptimized />
    </div>
  );
}
