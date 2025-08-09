/**
 * usePerformanceOptimization Hook - パフォーマンス最適化
 */
"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

export function usePerformanceOptimization() {
  const rafId = useRef<number | null>(null);
  const isAnimating = useRef(false);

  // GPU加速の最適化
  const gpuAcceleration = useMemo(() => ({
    transform: "translateZ(0)",
    willChange: "transform",
    backfaceVisibility: "hidden" as const,
  }), []);

  // アニメーション最適化
  const optimizedAnimation = useCallback((callback: () => void) => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    rafId.current = requestAnimationFrame(() => {
      callback();
      isAnimating.current = false;
    });
  }, []);

  // メモリリーク防止
  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // 不要な再レンダリング防止
  const memoizedCallback = useCallback((fn: () => void) => {
    return fn;
  }, []);

  // Intersection Observer for lazy loading
  const useIntersectionObserver = useCallback((
    callback: (entries: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit
  ) => {
    const observer = useMemo(() => {
      if (typeof window === "undefined") return null;
      
      return new IntersectionObserver(callback, {
        rootMargin: "50px",
        threshold: 0.1,
        ...options,
      });
    }, [callback, options]);

    return observer;
  }, []);

  return {
    gpuAcceleration,
    optimizedAnimation,
    memoizedCallback,
    useIntersectionObserver,
  };
}
