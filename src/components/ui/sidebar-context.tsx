"use client";

import React from "react";

import { createContext, useContext, useState, useCallback } from "react";

interface SidebarContext {
  isMobile: boolean;
  state: "expanded" | "collapsed";
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContext>({
  isMobile: false,
  state: "expanded",
  openMobile: false,
  setOpenMobile: (value: boolean) => {
    // This is just for the default context value
    console.log("setOpenMobile called with:", value);
  },
  toggleSidebar: () => {
    // This is just for the default context value
    console.log("toggleSidebar called");
  },
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [state, setState] = useState<"expanded" | "collapsed">("expanded");
  const [openMobile, setOpenMobile] = useState(false);

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setState((prev) => (prev === "expanded" ? "collapsed" : "expanded"));
    }
  }, [isMobile]);

  // Use useEffect to check for mobile view on mount and window resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isMobile, state, openMobile, setOpenMobile, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
