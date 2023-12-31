"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import { usePathname, useRouter } from "next/navigation";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function LanguageDropdown() {
  const pathName = usePathname();
  const router = useRouter();

  const languages = [
    { value: "en", label: "English" },
    { value: "de", label: "de" },
    
  ];

  const handleLocaleChange = (event: any) => {
    const locale = event;
    const redirectedPathName = getRedirectedPathName(locale);
    router.push(redirectedPathName);
  };

  const getRedirectedPathName = (locale: any) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="p-4 relative">
      <Menu
        as="div"
        className="absolute  right-0 inline-block text-left z-40 max-w-7xl"
      >
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold text-gray-800 bg-white border border-gray-500 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none ">
          Language
          {/* <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" /> */}
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
            <div className="py-1">
              {languages.map((lng, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={() => handleLocaleChange(lng.value)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-900",
                        "text-gray-900 px-4 py-2 text-sm capitalize cursor-pointer"
                      )}
                    >
                      {lng.label}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
