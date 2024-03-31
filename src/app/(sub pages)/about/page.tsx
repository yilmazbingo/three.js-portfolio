import Image from "next/image";
import bg from "../../../../public/background/about.jpg";
import RenderModel from "@/components/RenderModel/RenderModel";
import AboutDetails from "@/components/About";
import Hero from "@/components/About/Hero";
import dynamic from "next/dynamic";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center "
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <Hero />
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center ">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent pt-96">
            YILMAZ BINGOL
          </h1>
          <h1 className="text-foreground text-3xl ">
            Full Stack Smart Contract Developer
          </h1>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
