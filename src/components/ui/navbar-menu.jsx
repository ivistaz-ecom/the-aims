"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { GoArrowDownRight } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Toggle the submenu on click
    setActive(active === item ? null : item);
  };

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white flex items-center text-[14px] group"
        style={{ fontSize: '14px' }}
        onClick={handleClick}
      >
        {item} <GoArrowDownRight className={`transition-transform duration-200 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${active === item ? '-rotate-90' : 'group-hover:-rotate-90'}`} />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] transform -mt-1">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-b-lg overflow-hidden shadow-xl">
                <motion.div
                  layout
                  className="w-max h-full p-0">
                  <div className="flex flex-col">
                    {children}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  const menuRef = useRef(null);

  const handleMouseLeave = () => {
    setActive(null);
  };

  // Handle clicks outside the menu to close submenus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActive(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setActive]);

  return (
    <nav
      ref={menuRef}
      onMouseLeave={handleMouseLeave}
      className="relative shadow-input flex justify-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 py-2 md:py-2 lg:py-3 xl:py-4 2xl:py-6 text-white">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  href,
  submenu,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (submenu) {
    return (
      <div className="group relative">
        <div className="text-[14px] transition-all duration-200 px-3 py-2 w-full block m-0 p-0 border-0 text-gray-700 hover:bg-[#0C2165] hover:text-white" style={{ fontSize: '14px' }}>
          {children}
          <span className="ml-2 text-xs">▶</span>
        </div>

        {/* Nested Submenu */}
        <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-xl min-w-[200px] z-50">
          <div className="py-2">
            {submenu.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#0C2165] hover:text-white transition-all duration-200"
                style={{ fontSize: '14px' }}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      {...rest}
      style={{ fontSize: '14px' }}
      className={`text-[14px] transition-all duration-200 px-3 py-2 w-full block m-0 p-0 border-0 ${isActive
        ? "bg-[#6e3299] text-white"
        : "text-gray-700 hover:bg-[#0C2165] hover:text-white"
        }`}>
      {children}
    </Link>
  );
};
