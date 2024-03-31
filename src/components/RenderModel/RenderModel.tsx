"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useEffect } from "react";
import { RenderModelProps } from "./RenderModel.types";
import NProgress from "nprogress";

const LazyLoad = () => {
  // useEffect(() => {
  //   NProgress.start();

  //   return () => {
  //     NProgress.done();
  //   };
  // });

  return <div className="text-white">Loading...</div>;
};

const RenderModel = ({ children, className }: RenderModelProps) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
      // dpr is the device pixel ratio. Here we are setting it to 1 and 2 for retina displays to prevent blurriness in the model rendering on high resolution screens.
    >
      <Suspense fallback={<LazyLoad />}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
