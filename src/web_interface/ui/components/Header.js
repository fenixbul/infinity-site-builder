import React from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  // Array of navigation items
  const navItems = [
    { path: "/", label: "Начало" },
    { path: "/donations", label: "Дарения" },
    { path: "/posts", label: "Публикации" },
    { path: "/about", label: "За фонда" },
    { path: "/contact", label: "Контакти" },
  ];

  const customTheme = {
    "link": {
      "base": "block py-2 pl-3 pr-4 md:p-0",
      "active": {
        "on": "bg-gray-200 text-white dark:text-white md:bg-transparent md:text-black",
        "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:hover:text-[#784D2A] md:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    }
  };

  return (
    <div className="shadow-md sticky md:relative top-0 z-50 bg-white">
      <Navbar rounded className="max-w-[1100px] mx-auto py-1" theme={customTheme}>
        <Navbar.Brand as={Link} href="/" className="flex items-center logo-link">
          {/* Logo for small screens */}
          <img
            src="/logo-symbol.png"
            className="mr-3 h-14 my-1 lg:hidden hidden md:block"
            alt="Mobile Logo"
          />
          {/* Logo for medium and larger screens */}
          <img
            src="/logo.svg"
            className="mr-3 h-16 w-64 md:hidden lg:block max-w-[260px]"
            alt="Desktop Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navItems.map((item) => (
            <Navbar.Link
              className={`text-base ${item.path === '/' ? 'md:hidden lg:block' : ''} ${router.pathname === item.path ? 'text-black' : 'text-[#8f9191]'}`}
              key={item.path}
              as={Link}
              href={item.path}
              active={router.pathname === item.path}
            >
              {item.label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
