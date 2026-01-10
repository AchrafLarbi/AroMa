"use client";

import { NavigationOptionsModel } from "@/data/_model/navigation.options.model";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Book, GitFork, Home, Menu, Search } from "lucide-react";
import MobileMenu from "./mobile-menu";

const navigationOptions: NavigationOptionsModel[] = [
  {
    label: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    label: "Recipes",
    path: "/recipes",
    icon: <Book />,
  },
  {
    label: "Github",
    path: "https://github.com/CodingByGopal/AroMaa-Next.js",
    icon: <GitFork />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50 shadow-sm">
      <section className="container">
        <div className="flex justify-between items-center gap-4 py-4">
          {/* Left Section - Logo & Navigation */}
          <div className="flex items-center gap-8">
            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu
                pathName={pathname}
                navigationOptions={navigationOptions}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-secondary"
                >
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Mobile Menu</span>
                </Button>
              </MobileMenu>
            </div>

            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationOptions.map((navOption, index) => (
                <Link
                  prefetch={false}
                  className={`
                                        px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                                        ${
                                          pathname === navOption?.path
                                            ? "bg-secondary text-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                        }
                                    `}
                  rel={navOption?.rel}
                  target={navOption?.target}
                  href={navOption?.path}
                  key={index}
                >
                  <span className="flex items-center gap-2">
                    {navOption?.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
// // Fixed bug - 9935

// // Fixed bug - 1677

// // Refactored code - 8794

// // Improved performance - 3156

// // Updated styles - 5316

// // Refactored code - 2923
