"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLinkItem = ({ link, user }) => {
  const { data } = authClient.useSession();
  const users = data?.user;

  const shouldHide = link.authOnly && !users;
  const pathname = usePathname();
  const isActive = pathname === link.path;

  return (
    <li className={`items-center gap-2 ${shouldHide ? "hidden" : "flex"}`}>
      <Link
        href={link.path}
        className={`relative font-outfit text-sm md:text-base xl:text-lg  transition-all duration-300 ease-in-out
          ${
            isActive
              ? "text-[#4F46E5] font-semibold"
              : "text-gray-600 hover:text-[#4F46E5]"
          }
        `}
      >
        {/* Text */}
        <span className="relative pb-1">
          {link.title}

          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-[#4F46E5] transition-all duration-300
              ${isActive ? "w-full" : "w-0"}
            `}
          />
        </span>
      </Link>
    </li>
  );
};

export default NavLinkItem;
