"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { useSidebar } from "~/components/ui/sidebar"; // Import useSidebar

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const { state } = useSidebar(); // Get the sidebar state

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder
  }

  return (
    <div className="flex items-center gap-x-2 text-xs font-medium capitalize">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <Sun
              className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "scale-0" : "scale-100"}`}
            />
            <Moon
              className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "scale-100" : "scale-0"}`}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {state === "expanded" && <div>{theme}</div>}
    </div>
  );
}
