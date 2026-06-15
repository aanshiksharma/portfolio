import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Cursor() {
  useGSAP(() => {
    window.addEventListener("mousemove", (event) => {
      gsap.to("#cursor", {
        x: event.clientX - 5,
        y: event.clientY - 12,
        duration: 2,
        ease: "power4.out",
      });
    });
  }, []);

  return (
    <div
      id="cursor"
      className="fixed top-0 left-0 z-2 w-2.5 h-2.5 [@media(hover:hover)]:block hidden rounded-full bg-primary shadow shadow-primary"
    />
  );
}

export default Cursor;
