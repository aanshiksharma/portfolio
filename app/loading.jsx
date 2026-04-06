"use client";

import Loader from "@/components/Loader";

function Loading() {
  return (
    <section className="fixed inset-0 z-100 h-screen flex items-end">
      <div className="grid grid-cols-5 h-full absolute inset-0">
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
        <span className="bg-animation bg-dark-background h-full w-full" />
      </div>

      <div className="relative w-full text-dark-secondary flex items-end justify-between px-4 sm:px-6 py-6">
        <div className="space-y-2">
          <h4 className="text-4xl capitalize">full stack web developer</h4>
          <h1 className="text-xl uppercase">aanshik sharma</h1>
        </div>

        <Loader />
      </div>
    </section>
  );
}

export default Loading;
