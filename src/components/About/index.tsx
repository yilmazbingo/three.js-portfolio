import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h1 className="md:text-2xl lg:text-5xl text-black text-left w-full capitalize">
            Architect of Digital Innovation
          </h1>
          <p className="font-light text-white   text-xs sm:text-sm md:text-xl lg:text-3xl   ">
            Hello! I'm a passionate Software Engineer specializing in the realms
            of blockchain and full-stack development. With a deep proficiency in
            Ethereum, Solidity, Next.js, React.js, Node.js, JavaScript, Rust,
            Python, and developing large language models, I bring ideas to life
            through smart contracts and robust full-stack projects. My expertise
            lies in creating secure, efficient, and scalable solutions that push
            the boundaries of digital innovation. Whether it's decentralizing
            applications with Ethereum, crafting dynamic user experiences, or
            pioneering with AI, I'm dedicated to exploring the forefront of
            technology to build the future, one line of code at a time.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,ts,python,rust,react,nodejs,solidity,ai,webpack,svelte,django,stackoverflow,bootstrap,wasm,cloudflare,css,styledcomponents,docker,figma,firebase,redis,git,github,graphql,html,ipfs,kubernetes,linux,kali,mongodb,mysql,nextjs,npm,postgres,redux,sass,supabase,tailwind,threejs,vercel,heroku,vite,vscode,yarn`}
            alt="Yilmaz Bingol"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
