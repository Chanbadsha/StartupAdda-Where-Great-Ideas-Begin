"use client";

import { Link, Button, Badge, Avatar, Label, Dropdown } from "@heroui/react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import logo from "@/../public/logo.png";
import Image from "next/image";
import NavLinkItem from "@/utils/NavLinks";
import { ArrowUpRightFromSquare, Bell, CircleUserRound } from "lucide-react";
import { authClient } from "@/lib/auth-client";

import toast from "react-hot-toast";

const navLinks = [
  {
    name: "home",
    path: "/",
    title: "Home",
    private: false,
    authOnly: false,
  },
  {
    name: "ideas",
    path: "/ideas",
    title: "Ideas",
    private: false,
    authOnly: false,
  },
  {
    name: "explore",
    path: "/explore",
    title: "Explore",
    private: false,
    authOnly: false,
  },

  {
    name: "addIdea",
    path: "/add-idea",
    title: "Add Idea",
    private: true,
    authOnly: true,
  },
  {
    name: "myIdeas",
    path: "/my-ideas",
    title: "My Ideas",
    private: true,
    authOnly: true,
  },
  ,
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user || null;

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("You have been signed out");
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg"
    >
      <header className="mx-auto flex h-16 container items-center justify-between px-6">
        <div className="flex  gap-4 xl:gap-8">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1"
            >
              <Image
                src={logo}
                alt="Logo"
                width={600}
                className="w-6 md:w-7 lg:w-10 h-auto"
                height={600}
              ></Image>
              <p className="font-outfit text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-bold ">
                StartUp<span className="text-[#4F46E5]">Adda</span>
              </p>
            </motion.div>
          </div>
          <ul className="hidden items-center gap-4 md:flex">
            {navLinks.map((link, ind) => (
              <NavLinkItem key={ind} link={link} user={user}></NavLinkItem>
            ))}
          </ul>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              {/* Idea Post Button */}
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                <Link className={`no-underline`} href="/add-idea">
                  <Button className="bg-linear-to-tr from-[#160beb] to-[#544dd3] text-white font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
                    Post Idea
                  </Button>
                </Link>
              </motion.div>

              <span className="hidden md:block text-sm md:text-base font-medium text-gray-600 hover:text-purple-600 transition">
                <Badge.Anchor>
                  <motion.div
                    whileHover={{ rotate: [-10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Avatar>
                      <Bell />
                    </Avatar>
                  </motion.div>
                  <Badge color="danger" size="sm">
                    5
                  </Badge>
                </Badge.Anchor>
              </span>

              {/* User Icon */}

              <Dropdown>
                <Dropdown.Trigger className="rounded-full">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Avatar>
                      <Avatar.Image alt="Junior Garcia" src={user?.image} />
                      <Avatar.Fallback delayMs={6000}>
                        <CircleUserRound />
                      </Avatar.Fallback>
                    </Avatar>
                  </motion.div>
                </Dropdown.Trigger>
                <Dropdown.Popover>
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <Avatar.Image alt="Jane" src={user?.image} />
                        <Avatar.Fallback delayMs={60000}>
                          <CircleUserRound />
                        </Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      id="dashboard"
                      href="dashboard"
                      textValue="Dashboard"
                    >
                      <Label>Dashboard</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="logout"
                      textValue="Logout"
                      variant="danger"
                    >
                      <div
                        onClick={handleLogout}
                        className="flex w-full items-center justify-between gap-2"
                      >
                        <Label>Log Out</Label>
                        <ArrowUpRightFromSquare className="size-3.5 text-danger" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="hidden md:block text-sm md:text-base font-medium text-gray-600 hover:text-purple-600 transition"
              >
                Login
              </Link>

              {/* Get Started Button */}
              <Link className={"no-underline"} href="/auth/register">
                <Button className="bg-linear-to-tr from-[#160beb] to-[#544dd3] text-white font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-separator md:hidden"
          >
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((link, ind) => (
                <NavLinkItem key={ind} link={link} user={user}></NavLinkItem>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
