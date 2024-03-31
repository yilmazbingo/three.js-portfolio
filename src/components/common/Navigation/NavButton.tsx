"use client";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent/ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";
import { NavButtonProps } from "./Navigation.types";
import { getIcon } from "./Navigation.helpers";
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
// The motion function is a high-order component that takes a React component and returns a new version of it with additional props that allow you to control animations.
// By wrapping Link with motion, you create a new component (NavLink) that inherits all of the Link component's functionality but also includes the ability to animate transitions between states. This is particularly useful for animating elements in response to user interactions, like hover, focus, or click events, or when the component mounts or unmounts from the DOM.
const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link = "str",
  icon,
  newTab,
  labelDirection = "right",
}: NavButtonProps) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 320 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center 
        custom-bg
        "
              aria-label={label}
              // name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-15 h-15 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 github -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
        custom-bg
        "
              aria-label={label}
              // name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
