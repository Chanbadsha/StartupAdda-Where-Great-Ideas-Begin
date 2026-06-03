"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NavLinkItem = ({ link, user }) => {
  const { data } = authClient.useSession();
  const users = data?.user;

  const shouldHide = link.authOnly && !users;
  const pathname = usePathname();
  const isActive = pathname === link.path;

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`items-center gap-2 ${shouldHide ? "hidden" : "flex"}`}
    >
      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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

            {isActive && (
              <motion.span
                layoutId="navbar-indicator"
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#4F46E5]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </span>
        </Link>
      </motion.div>
    </motion.li>
  );
};

export default NavLinkItem;
