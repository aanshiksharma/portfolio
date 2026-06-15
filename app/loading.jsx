"use client";

import Loader from "@/components/Loader";
import Image from "next/image";

function Loading() {
  return (
    <section className="fixed inset-0 z-100 h-dvh flex">
      <div className="grid grid-cols-5 h-full absolute inset-0">
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
      </div>

      <div className="relative w-full text-dark-foreground flex justify-between px-4 sm:px-6 py-8">
        <div className="space-y-6">
          <p className="text-4xl text-dark-secondary uppercase">
            full stack web developer
          </p>

          <Image
            src="/logo.png"
            alt="aanshik sharma"
            width={200}
            height={10}
            className="text-dark-foreground uppercase"
          />
        </div>

        <Loader />
      </div>
    </section>
  );
}

export default Loading;
