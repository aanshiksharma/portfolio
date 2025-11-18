function HeroSectionVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 -z-10 object-cover w-full h-full hue-rotate-60 saturate-20"
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}

export default HeroSectionVideo;
