import type { Metadata } from "next";
import { Suspense } from "react";
import { Quiz } from "@/components/quote-quiz/quiz";

export const metadata: Metadata = {
  title: "See What Your Family May Qualify For",
  openGraph: { title: "See What Your Family May Qualify For — FinalExpense.support" },
  twitter: { title: "See What Your Family May Qualify For — FinalExpense.support" },
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={null}>
      <Quiz />
    </Suspense>
  );
}
