"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { LanguageDropdown } from "./LanguageDropdown";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  //   const lang: any = pathName.split("/")[1];
  const handleNavLinkClick = (path: any) => {
    const locale = pathName.split("/")[1];
    const newPath = path.includes(`/${locale}`)
      ? path.replace(`/${locale}`, `/${locale}`)
      : `/${locale}${path}`;
    router.push(newPath);
  };

  const nav = [
    { href: "/", lable: "Home" },
    { href: "/second-page", lable: "Second Page" },
  ];

  return (
    <>
      <LanguageDropdown />
      <nav className="hidden space-x-10 md:flex">
        {nav?.map((navItem: any, index: number) => (
          <div
            key={index}
            className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
            onClick={() => handleNavLinkClick(navItem.href)}
          >
            {navItem.lable}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
