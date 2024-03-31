import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
import RenderModel from "@/components/RenderModel/RenderModel";
import Navigation from "@/components/common/Navigation/";

import dynamic from "next/dynamic";

const Chandelier = dynamic(() => import("@/components/models/Chandelier"), {
  ssr: false,
});

const Ethereum = dynamic(() => import("@/components/models/Ethereum"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Chandelier />
        </RenderModel>
      </div>
    </main>
  );
}
