import Image from "next/image";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

function AboutSection() {
  return (
    <section className="min-h-screen px-12 py-50 flex flex-col gap-50">
      <h2 className="text-4xl max-w-4xl">
        I am a full stack web developer and I play guitar and I am also a
        singer. None of this makes sense but this is better than lorem ipsum
      </h2>

      <div className="rounded-3xl h-110 relative overflow-hidden">
        <Image
          src="/about-image.jpg"
          width={500}
          height={200}
          alt="aanshik's image"
          className="w-full h-full object-cover object-top hover:scale-120 transition ease-out duration-1000"
        />

        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-primary bg-background px-6 py-1 border border-r-0 border-foreground/30 shadow-lg rounded-l-full">
          <p>🧑🏽‍💻 Full Stack Web Developer</p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary bg-background px-6 py-3 border border-foreground/30 shadow-lg rounded-full">
          <ul className="flex items-center gap-2">
            <BsGithub className="hover:scale-120 transition ease-out duration-500 origin-bottom cursor-pointer" />
            <BsLinkedin className="hover:scale-120 transition ease-out duration-500 origin-bottom cursor-pointer" />
            <BsInstagram className="hover:scale-120 transition ease-out duration-500 origin-bottom cursor-pointer" />
          </ul>
        </div>
      </div>

      <h2 className="text-4xl max-w-3xl self-end">
        I am a full stack web developer and I play guitar and I am also a
        singer. I know none of this makes sense but I need stuff to put in here
        and this is better than lorem ipsum
      </h2>
    </section>
  );
}

export default AboutSection;
