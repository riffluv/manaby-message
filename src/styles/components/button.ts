/**
 * Button Component Styles
 *
 * @description ボタン関連のスタイル定義
 */

import { tokens } from "../tokens";

export const buttonStyles = {
  message: {
    container: {
      gap: { base: tokens.spacing.md, md: tokens.spacing.lg },
      cursor: "pointer",
      transition: `all ${tokens.animations.durations.fast} ${tokens.animations.easings.emphasized}`,
      p: { base: tokens.spacing.md, md: tokens.spacing.lg },
      borderRadius: tokens.radii.xl,
      minW: { base: "140px", md: "160px" },
      minH: "48px",
      _hover: {
        transform: "translateY(-2px) scale(1.01)",
        "& > div": {
          background: `
            linear-gradient(135deg, ${tokens.colors.primary[500]}10, ${tokens.colors.primary[500]}06),
            linear-gradient(225deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.6))
          `,
          borderColor: `${tokens.colors.primary[500]}80`,
          boxShadow: `0 10px 22px ${tokens.colors.primary[500]}22, inset 0 1px 0 rgba(255,255,255,0.65)`,
          transform: "scale(1.06)",
        },
        _focus: {
          outline: "none",
          boxShadow: tokens.focus.ring.shadow,
          bg: tokens.focus.background.light,
          transform: "scale(1.02)",
          transition: `all ${tokens.animations.durations.fast} ${tokens.animations.easings.easeOut}`,
        },
        _focusVisible: {
          outline: `${tokens.focus.ring.width} ${tokens.focus.ring.style} ${tokens.focus.ring.color}`,
          outlineOffset: tokens.focus.ring.offset,
          boxShadow: tokens.focus.ring.shadow,
          bg: tokens.focus.background.medium,
        },
        "& svg": {
          color: tokens.colors.primary[600],
          transform: "scale(1.08)",
          filter: `drop-shadow(0 3px 6px ${tokens.colors.primary[500]}30)`,
        },
        "& p": {
          color: tokens.colors.semantic.text.primary,
          transform: "translateY(-1px)",
          fontWeight: tokens.typography.fontWeights.bold,
        },
      },
      _focus: {
        outline: "none",
        boxShadow: tokens.focus.ring.shadow,
        bg: tokens.focus.background.light,
        transform: "scale(1.02)",
        transition: `all ${tokens.animations.durations.fast} ${tokens.animations.easings.easeOut}`,
      },
      _focusVisible: {
        outline: `${tokens.focus.ring.width} ${tokens.focus.ring.style} ${tokens.focus.ring.color}`,
        outlineOffset: tokens.focus.ring.offset,
        boxShadow: tokens.focus.ring.shadow,
        bg: tokens.focus.background.medium,
      },
      _active: {
        transform: "scale(0.95)",
        transition: `transform ${tokens.animations.durations.instant} ${tokens.animations.easings.easeOut}`,
        bg: tokens.focus.background.medium,
      },
      // モバイル最適化
      touchAction: "manipulation",
      WebkitTapHighlightColor: "transparent",
      "@media (hover: none)": {
        _hover: {
          transform: "none",
          "& > div": {
            transform: "none",
          },
        },
        _active: {
          transform: "scale(0.95)",
          transition: "transform 0.1s ease-out",
          "& > div": {
            background: `
              linear-gradient(135deg, rgba(255, 247, 237, 0.9), rgba(255, 237, 213, 0.8)),
              radial-gradient(circle at 50% 50%, ${tokens.colors.primary[500]}25, transparent 70%)
            `,
            transform: "scale(0.9)",
            borderColor: tokens.colors.primary[600],
            boxShadow: `
              0 2px 8px ${tokens.colors.primary[500]}20,
              inset 0 2px 4px rgba(0, 0, 0, 0.1)
            `,
          },
          "& svg": {
            color: tokens.colors.primary[700],
            transform: "scale(0.9)",
          },
        },
      },
    },
    icon: {
      w: { base: "72px", md: "80px", lg: "88px" },
      h: { base: "72px", md: "80px", lg: "88px" },
      background: `
        linear-gradient(135deg, ${tokens.colors.primary[500]}0D, ${tokens.colors.primary[500]}08),
        linear-gradient(225deg, rgba(255,255,255,0.85), rgba(255,255,255,0.5))
      `,
      borderRadius: tokens.radii.full,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid",
      borderColor: `rgba(0,0,0,0.06)`,
      boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
      transition: `all ${tokens.animations.durations.fast} ${tokens.animations.easings.emphasized}`,
      position: "relative" as const,
      _hover: {
        boxShadow: `0 10px 20px ${tokens.colors.primary[500]}1F, inset 0 1px 0 rgba(255,255,255,0.9)`,
        background: `linear-gradient(135deg, ${tokens.colors.primary[400]}14, ${tokens.colors.primary[500]}0A), linear-gradient(225deg, rgba(255,255,255,0.92), rgba(255,255,255,0.7))`,
      },
    },
    label: {
      fontSize: {
        base: tokens.typography.fontSizes.sm,
        md: tokens.typography.fontSizes.md,
      },
      fontWeight: tokens.typography.fontWeights.semibold,
      color: tokens.colors.semantic.text.primary,
      letterSpacing: tokens.typography.letterSpacings.wide,
      transition: `color ${tokens.animations.durations.fast} ease, transform ${tokens.animations.durations.fast} ease`,
    },
  },
  back: {
    primary: {
      size: "lg",
      bg: `linear-gradient(135deg, ${tokens.colors.primary[500]}, ${tokens.colors.primary[600]})`,
      color: "white",
      borderRadius: tokens.radii.full,
      px: 8,
      py: 3,
      fontWeight: tokens.typography.fontWeights.semibold,
      boxShadow: `0 6px 14px ${tokens.colors.primary[500]}28`,
      border: "1px solid",
      borderColor: "rgba(255, 255, 255, 0.18)",
      _hover: {
        transform: "translateY(-1px) scale(1.01)",
        boxShadow: `0 10px 22px ${tokens.colors.primary[500]}33`,
        bg: `linear-gradient(135deg, ${tokens.colors.primary[400]}, ${tokens.colors.primary[500]})`,
      },
      _active: {
        transform: "translateY(0) scale(0.99)",
      },
      transition: `all ${tokens.animations.durations.fast} ${tokens.animations.easings.emphasized}`,
    },
    secondary: {
      bg: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(8px)",
      border: "1px solid",
      borderColor: "rgba(0, 0, 0, 0.06)",
      borderRadius: tokens.radii.full,
      px: 6,
      py: 2,
      color: tokens.colors.semantic.text.primary,
      fontWeight: tokens.typography.fontWeights.medium,
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
      _hover: {
        bg: "rgba(255, 255, 255, 0.95)",
        transform: "translateY(-1px)",
        boxShadow: "0 6px 14px rgba(0, 0, 0, 0.12)",
      },
      _active: {
        transform: "scale(0.98)",
      },
      transition: `all ${tokens.animations.durations.fast} ease-out`,
    },
  },
} as const;
