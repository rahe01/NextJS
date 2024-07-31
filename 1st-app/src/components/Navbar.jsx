"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const route = useRouter();
  const linkkkk = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Category",
      link: "/categories",
    },
  ];

  const handleLogin = () => {
    // Simulate login logic
    route.push("/login");
    console.log("Login clicked");
  };

  if (pathname.includes("/dashboard")) {
    return <div>dashboard layout</div>;
  }

  return (
    <div>
      <nav className="bg-red-400">
        {linkkkk.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`text-white hover:text-gray-300 ${
              pathname === item.link ? "text-gray-900" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        <button onClick={handleLogin}>Login</button>
      </nav>
    </div>
  );
}
