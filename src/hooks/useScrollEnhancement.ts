/**
 * useScrollEnhancement Hook - スクロール体験向上
 */
"use client";

import { useEffect } from "react";

export function useScrollEnhancement() {
  useEffect(() => {
    // スムーススクロールの設定
    const setScrollBehavior = () => {
      if (typeof window !== "undefined") {
        // CSS Scroll Snap対応
        document.documentElement.style.scrollBehavior = "smooth";
        
        // iOS Safariでのスクロール最適化
        (document.documentElement.style as any).webkitOverflowScrolling = "touch";
        
        // スクロールバーのスタイリング（Webkit系）
        const style = document.createElement("style");
        style.textContent = `
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(249, 115, 22, 0.3);
            border-radius: 3px;
            transition: background 0.2s ease;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(249, 115, 22, 0.5);
          }
          
          /* スクロール体験の向上 */
          * {
            scroll-padding-top: 2rem;
          }
          
          /* モバイルでのスクロール最適化 */
          @media (max-width: 768px) {
            body {
              -webkit-overflow-scrolling: touch;
              overscroll-behavior: contain;
            }
          }
        `;
        document.head.appendChild(style);
        
        return () => {
          document.head.removeChild(style);
        };
      }
    };

    const cleanup = setScrollBehavior();
    
    return cleanup;
  }, []);

  // スムーズスクロール関数
  const scrollToTop = (behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({ top: 0, behavior });
  };

  const scrollToElement = (elementId: string, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return {
    scrollToTop,
    scrollToElement,
  };
}
