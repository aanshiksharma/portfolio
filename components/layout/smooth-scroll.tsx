"use client";

import { useEffect } from "react";
import Locomotive from "locomotive-scroll";

export function SmoothScroll() {
  useEffect(() => {
    const smoothScroll = new Locomotive();
  }, []);

  return null;
}
