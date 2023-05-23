import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Content } from "@/components/Content";
export default async function Home() {
  return (
    <>
      Home
      <Suspense fallback={<div>Header loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Header />
      </Suspense>
      <Suspense fallback={<div>Content loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Content />
      </Suspense>
    </>
  );
}
