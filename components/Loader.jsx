import { useLoader } from "@/app/hooks/useLoader";

const animationConfig = {
  repeat: -1,
  ease: "power1.inOut",
  repeatDelay: 0.2,
};

function Loader() {
  useLoader(animationConfig, 1, { max: 1, min: 0.05 }, { max: 1, min: 0.05 });
  return (
    <div className="loader relative">
      <div className="bg-dark-primary w-30 h-1 rounded-full absolute bottom-8 right-0 horizontal"></div>
      <div className="bg-dark-primary w-1 h-30 rounded-full absolute bottom-0 right-8 vertical"></div>
    </div>
  );
}

export default Loader;
