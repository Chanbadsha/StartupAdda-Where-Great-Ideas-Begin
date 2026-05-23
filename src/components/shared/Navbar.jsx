"use client";

import { Link, Button, Badge, Avatar, Label, Dropdown } from "@heroui/react";
import { useEffect, useState } from "react";
import logo from "@/../public/logo.png";
import Image from "next/image";
import NavLinkItem from "@/utils/NavLinks";
import { ArrowUpRightFromSquare, Bell, CircleUserRound } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Gear, Persons } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

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
  // {
  //   name: "trending",
  //   path: "/trending",
  //   title: "Trending",
  //   private: false,
  //   authOnly: false,
  // },

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
  //   {
  //     name: "myInteractions",
  //     path: "/my-interactions",
  //     title: "My Interactions",
  //     private: true,
  //     authOnly: true,
  //   },
  //   {
  //     name: "auth",
  //     path: "/login",
  //     title: "Login / Register",
  //     private: false,
  //     authOnly: false,
  //     hideWhenLoggedIn: true,
  //   },
  //   {
  //     name: "profile",
  //     path: "/profile",
  //     title: "Profile",
  //     private: true,
  //     authOnly: true,
  //     showInDropdown: true,
  //   },
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
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
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
            <div className="flex items-center gap-1">
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
            </div>
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
              <Link className={`no-underline`} href="#">
                <Button className="bg-linear-to-tr from-[#160beb] to-[#544dd3] text-white font-medium px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
                  Post Idea
                </Button>
              </Link>

              <span className="hidden md:block text-sm md:text-base font-medium text-gray-600 hover:text-purple-600 transition">
                <Badge.Anchor>
                  <Avatar>
                    <Bell />
                  </Avatar>
                  <Badge color="danger" size="sm">
                    5
                  </Badge>
                </Badge.Anchor>
              </span>

              {/* User Icon */}

              <Dropdown>
                <Dropdown.Trigger className="rounded-full">
                  <Avatar>
                    <Avatar.Image alt="Junior Garcia" src={user?.image} />
                    <Avatar.Fallback delayMs={6000}>
                      {" "}
                      <CircleUserRound />
                    </Avatar.Fallback>
                  </Avatar>
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

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link, ind) => (
              <NavLinkItem key={ind} link={link} user={user}></NavLinkItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
