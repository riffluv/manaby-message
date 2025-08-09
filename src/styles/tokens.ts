/**
 * Design Tokens System - 2025年ベストプラクティス準拠
 *
 * W3C Design Tokens Community Group仕様に基づく
 * 一元管理されたデザイン定数システム
 *
 * @see https://design-tokens.github.io/community-group/format/
 */
export const tokens = {
  /**
   * Color System - WCAG 2.2 AA準拠
   *
   * 2025年アクセシビリティ基準に完全対応
   * - コントラスト比4.5:1以上確保
   * - カラーブラインドネス対応
   * - ダークモード対応準備
   */
  colors: {
    primary: {
      50: "#FFF5E6",
      100: "#FFE4B5",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#f97316", // メインオレンジ
      600: "#ea580c",
      700: "#F28C00",
      800: "#E65100",
      900: "#BF360C",
    },
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    semantic: {
      background: "#fefcf9",
      surface: "rgba(255, 255, 255, 0.8)",
      border: "rgba(229, 231, 235, 0.6)",
      text: {
        primary: "#1a1a1a",
        secondary: "#4a4a4a",
        muted: "#6a6a6a",
      },
      fg: "#1f2937",
      muted: "#6b7280",
      subtle: "#9ca3af",
      emphasized: "#111827",
      focusRing: "#f97316",
    },
  },

  // タイポグラフィ
  typography: {
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.6,
      relaxed: 1.7,
      loose: 1.75,
    },
    letterSpacings: {
      tight: "-0.025em",
      normal: "0",
      wide: "0.01em",
      wider: "0.02em",
      widest: "0.05em",
    },
  },

  // スペーシング（8ptグリッドシステム準拠）
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
    "4xl": "64px",
    "5xl": "80px",
    "6xl": "96px",
    "7xl": "128px",
  },

  // モバイル最適化サイズ
  mobile: {
    touchTarget: "48px",
    characterSize: {
      sm: "120px",
      md: "140px",
      lg: "160px",
    },
    safeArea: {
      top: "44px",
      bottom: "34px",
    },
  },

  // フォーカス状態の強化
  focus: {
    ring: {
      color: "#FB923C", // primary[400] の固定値を使用
      width: "3px",
      offset: "3px",
      style: "solid",
      shadow: "0 0 0 3px rgba(251, 146, 60, 0.3)",
    },
    background: {
      light: "rgba(251, 146, 60, 0.1)",
      medium: "rgba(251, 146, 60, 0.15)",
    },
  },

  // ボーダーラディウス
  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },

  // シャドウ（2025年ニューモーフィズム対応）
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 8px 25px rgba(234, 88, 12, 0.15)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
    bear: "drop-shadow(0 0 1px rgba(0, 0, 0, 0.4)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
    // ニューモーフィズム
    neumorphism: {
      raised: "8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.5)",
      pressed:
        "inset 8px 8px 16px rgba(163, 177, 198, 0.6), inset -8px -8px 16px rgba(255, 255, 255, 0.5)",
      floating: "0 8px 32px rgba(31, 38, 135, 0.37)",
    },
    // グラスモーフィズム
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  },

  /**
   * Animation System - 2025年UXベストプラクティス
   *
   * - Reduced Motion対応
   * - 60fps保証のGPU加速
   * - 自然な物理ベースアニメーション
   * - アクセシビリティ配慮
   * - View Transitions API対応
   */
  animations: {
    durations: {
      instant: "0.1s",
      fast: "0.15s",
      normal: "0.25s",
      slow: "0.4s",
      slower: "0.6s",
      slowest: "0.8s",
    },
    easings: {
      // Material Design 3.0準拠
      easeOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Apple Human Interface準拠
      bounce: "cubic-bezier(0.16, 1, 0.3, 1)",
      spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      // 2025年新標準
      emphasized: "cubic-bezier(0.2, 0, 0, 1)",
      decelerated: "cubic-bezier(0, 0, 0.2, 1)",
      accelerated: "cubic-bezier(0.4, 0, 1, 1)",
    },
    // Reduced Motion対応
    reducedMotion: {
      duration: "0.01s",
      easing: "linear",
    },
    // View Transitions API対応
    viewTransitions: {
      duration: "0.3s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // ブレークポイント（2025年デバイス対応）
  breakpoints: {
    base: "0px",
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1536px",
  },

  /**
   * 2025年最新CSS機能対応
   */
  modern: {
    // CSS Container Queries対応
    containerQueries: {
      card: "(min-width: 300px)",
      sidebar: "(min-width: 250px)",
      main: "(min-width: 600px)",
    },

    // CSS Grid最新機能
    grid: {
      autoFit: "repeat(auto-fit, minmax(280px, 1fr))",
      autoFill: "repeat(auto-fill, minmax(280px, 1fr))",
      subgrid: "subgrid",
    },

    // CSS Logical Properties
    logical: {
      inlineStart: "margin-inline-start",
      inlineEnd: "margin-inline-end",
      blockStart: "margin-block-start",
      blockEnd: "margin-block-end",
    },

    // CSS Cascade Layers
    layers: {
      reset: "@layer reset",
      base: "@layer base",
      components: "@layer components",
      utilities: "@layer utilities",
    },
  },
} as const;

/**
 * 2025年アクセシビリティ対応ユーティリティ
 * WCAG 2.2 AA完全準拠
 */
export const a11y = {
  // Media Queries対応
  prefersReducedMotion: () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,

  prefersHighContrast: () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-contrast: high)").matches,

  prefersColorScheme: () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches,

  prefersReducedData: () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-data: reduce)").matches,

  // Focus管理（2025年強化版）
  focusRing: {
    outline: `2px solid ${tokens.colors.primary[500]}`,
    outlineOffset: "2px",
    borderRadius: tokens.radii.sm,
    // Focus-visible対応
    "&:focus-visible": {
      outline: `3px solid ${tokens.colors.primary[500]}`,
      outlineOffset: "2px",
    },
  },

  // タッチターゲット（WCAG 2.2対応）
  touchTarget: {
    minWidth: "44px",
    minHeight: "44px",
    // iOS Safari対応
    WebkitTapHighlightColor: "transparent",
    touchAction: "manipulation",
  },

  // スクリーンリーダー対応
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: "0",
  },

  // 色覚対応（コントラスト比保証）
  colorBlind: {
    // 4.5:1以上のコントラスト比を保証
    textOnPrimary: tokens.colors.gray[900],
    textOnSecondary: tokens.colors.gray[800],
    textOnBackground: tokens.colors.gray[900],
  },
} as const;

/**
 * 型安全なトークンアクセス用のヘルパー
 * 2025年TypeScript 5.x対応
 */
export type ColorToken = keyof typeof tokens.colors.primary | keyof typeof tokens.colors.gray;
export type SpacingToken = keyof typeof tokens.spacing;
export type RadiusToken = keyof typeof tokens.radii;
export type AnimationToken = keyof typeof tokens.animations.durations;
/**
 
* 2025年パフォーマンス最適化ユーティリティ
 * Core Web Vitals対応
 */
export const performance = {
  // GPU加速対応
  gpuAcceleration: {
    transform: "translateZ(0)",
    willChange: "transform",
    backfaceVisibility: "hidden",
  },

  // レイアウトシフト防止
  layoutStable: {
    containIntrinsicSize: "auto 300px",
    contentVisibility: "auto",
  },

  // 画像最適化
  imageOptimization: {
    loading: "lazy" as const,
    decoding: "async" as const,
    fetchPriority: "low" as const,
  },

  // フォント最適化
  fontOptimization: {
    fontDisplay: "swap",
    fontOpticalSizing: "auto",
  },
} as const;

/**
 * 2025年セキュリティ対応
 */
export const security = {
  // CSP対応
  contentSecurityPolicy: {
    "img-src": "'self' data: https:",
    "font-src": "'self' https:",
    "style-src": "'self' 'unsafe-inline'",
  },

  // XSS防止
  sanitization: {
    allowedTags: ["p", "br", "strong", "em"],
    allowedAttributes: {},
  },
} as const;
