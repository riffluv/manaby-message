"use client";
import { cubicBezier } from "framer-motion";
/**
 * HomeView Component - ホームページビュー
 *
 * @description メインのホームページコンポーネント
 */

import { AnimatedTitle } from "@/components/common/AnimatedTitle";
import { BearIcon } from "@/components/common/BearIcon";
import { CharacterHeader } from "@/components/common/CharacterHeader";
import { MessageButton } from "@/components/common/MessageButton";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import { useScrollEnhancement } from "@/hooks/useScrollEnhancement";
import { componentStyles } from "@/styles/components";
import { themes } from "@/styles/themes";
import { tokens } from "@/styles/tokens";
import { PersonConfig, ViewType } from "@/types/message";
import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export interface HomeViewProps {
  /** メッセージデータ */
  messages: PersonConfig[];
  /** ナビゲーションハンドラー */
  onNavigate: (view: ViewType) => void;
}

export function HomeView({ messages, onNavigate }: HomeViewProps) {
  const containerProps = componentStyles.messageCard.container;
  const { gpuAcceleration } = usePerformanceOptimization();
  useScrollEnhancement();
  return (
    <Box {...componentStyles.page.container} {...themes.home.background}>
      <Container {...componentStyles.page.content}>
        <VStack
          gap={{
            base: tokens.spacing["2xl"],
            md: tokens.spacing["3xl"],
          }}
          align="center"
          w="100%"
        >
          {/* 現代的キャラクターヘッダー */}
          <CharacterHeader>
            <AnimatedTitle text="Thanks!" delay={0.4} />
          </CharacterHeader>

          {/* 改良されたメッセージコンテナ */}
          <MotionBox
            {...componentStyles.animations.fadeInUp}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: cubicBezier(0.16, 1, 0.3, 1),
            }}
            w="100%"
            maxW={{ base: "100%", sm: "400px", md: "600px", lg: "720px" }}
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            <VStack
              gap={{
                base: tokens.spacing.xl,
                md: tokens.spacing["2xl"],
              }}
            >
              {/* グラスモーフィズムメッセージカード */}
              <MotionBox
                {...containerProps}
                style={gpuAcceleration}
                whileHover={{
                  y: -2,
                  scale: 1.01,
                  transition: {
                    duration: 0.25,
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 },
                }}
              >
                {/* 装飾的な熊さんアイコン群 */}
                <BearIcon
                  position={{
                    top: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  opacity={0.9}
                  size={28}
                  imageSize={20}
                />
                <BearIcon
                  position={{
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-250%)",
                  }}
                  opacity={0.6}
                  size={20}
                  imageSize={14}
                  display={{ base: "none", md: "flex" }}
                />
                <BearIcon
                  position={{
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(150%)",
                  }}
                  opacity={0.6}
                  size={20}
                  imageSize={14}
                  display={{ base: "none", md: "flex" }}
                />

                <VStack
                  gap={{
                    base: tokens.spacing.lg,
                    md: tokens.spacing.xl,
                  }}
                >
                  <Text {...componentStyles.messageCard.text.label}>お二人へ</Text>

                  <Text
                    {...componentStyles.messageCard.text.primary}
                    textAlign="center"
                    maxW="none"
                  >
                    manaby大宮事業所で一緒に学んだ日々は、私にとってとても貴重な時間でした。
                    お二人がいてくれたおかげで、Web制作の勉強も楽しく続けることができました。
                    いつも支えてくれて、本当にありがとうございました。
                    これからもお二人の活躍を心から応援しています。
                  </Text>
                </VStack>
              </MotionBox>

              {/* 平等な横並びアクションエリア */}
              <Box 
                w="100%" 
                pt={{ base: tokens.spacing["2xl"], md: tokens.spacing["3xl"] }}
                pb={{ base: tokens.spacing.md, md: tokens.spacing.lg }}
              >
                <HStack
                  gap={{
                    base: tokens.spacing.lg,
                    md: tokens.spacing.xl,
                  }}
                  justify="center"
                  align="center"
                  flexWrap="wrap"
                >
                  {messages.map((person, index) => (
                    <MessageButton
                      key={person.id}
                      onClick={() => onNavigate(person.id)}
                      label={person.buttonLabel}
                      delay={0.6 + index * 0.2}
                    />
                  ))}
                </HStack>
              </Box>
            </VStack>
          </MotionBox>

          {/* 改良されたフッター */}
          <MotionBox
            {...componentStyles.animations.fadeIn}
            textAlign="center"
            mt={{ base: tokens.spacing.lg, md: tokens.spacing.xl }}
            px={tokens.spacing.md}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: cubicBezier(0.16, 1, 0.3, 1),
            }}
          >
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color={tokens.colors.gray[400]}
              lineHeight="1.6"
              fontWeight={tokens.typography.fontWeights.medium}
            >
              Web制作で学んだ技術を込めて作成しました
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
}
