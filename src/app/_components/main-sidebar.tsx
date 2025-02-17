"use client";

import {
  Settings,
  Boxes,
  FileText,
  PanelLeftClose,
  User2,
  LucideHome,
  Menu,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { ModeToggle } from "~/components/ui/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "~/components/ui/sidebar";

const menuItems = [
  { icon: LucideHome, label: "Home" },
  { icon: Boxes, label: "Models" },
  { icon: FileText, label: "About" },
  { icon: Settings, label: "Settings" },
];

export function MainSidebar() {
  const { state, isMobile, toggleSidebar } = useSidebar();

  //   if (isMobile) {
  //     return (
  //       <div className="bg-background fixed bottom-0 left-0 right-0 z-50 border-t">
  //         <div className="flex items-center justify-around p-2">
  //           {menuItems.map((item) => (
  //             <Button
  //               key={item.label}
  //               variant="ghost"
  //               size="icon"
  //               className="h-12 w-12 rounded-full"
  //             >
  //               <item.icon className="h-5 w-5" />
  //               <span className="sr-only">{item.label}</span>
  //             </Button>
  //           ))}
  //           <Button
  //             variant="ghost"
  //             size="icon"
  //             className="h-12 w-12 rounded-full"
  //           >
  //             <ModeToggle />
  //           </Button>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <>
      {/* {isMobile && (
        <Button
          variant="outline"
          size="icon"
          className="fixed left-4 top-4 z-50"
          onClick={toggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </Button>
      )} */}

      {isMobile && (
        <div className="bg-background/95 supports-[backdrop-filter]:bg-background/70 fixed left-0 right-0 top-0 z-50 border-b backdrop-blur">
          <div className="container flex h-14 items-center px-2">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      )}

      <Sidebar collapsible="icon">
        <SidebarContent>
          {/* Header */}
          <SidebarGroup>
            <SidebarMenuButton className="h-12">
              <User2 />
              <span>Username</span>
              <span className="text-muted-foreground ml-auto text-xs">
                Admin
              </span>
            </SidebarMenuButton>
          </SidebarGroup>

          {/* Menu Section */}
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LucideHome />
                    <span>Main</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Boxes />
                    <span>Models</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FileText />
                    <span>About</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Projects Section */}
          {/* <SidebarGroup>
           <SidebarGroupLabel>Projects</SidebarGroupLabel>
           <SidebarGroupContent>
             <SidebarMenu>
               <SidebarMenuItem>
                 <SidebarMenuButton>
                   <span>Design Engineering</span>
                 </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                 <SidebarMenuButton>
                   <span>Sales & Marketing</span>
                 </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                 <SidebarMenuButton>
                   <Timer />
                   <span>Travel</span>
                 </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                 <SidebarMenuButton>
                   <MoreHorizontal />
                   <span>More</span>
                 </SidebarMenuButton>
               </SidebarMenuItem>
             </SidebarMenu>
           </SidebarGroupContent>
         </SidebarGroup> */}
        </SidebarContent>

        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <div
                    className={`flex w-full items-center ${state === "expanded" ? "justify-between" : "flex-col gap-2"}`}
                  >
                    <div
                      className={`${state === "expanded" ? "" : "flex w-full justify-center"}`}
                    >
                      <ModeToggle />
                    </div>
                    <SidebarTrigger
                      className={`${state === "expanded" ? "flex items-center gap-2" : "flex w-full justify-center"}`}
                    >
                      {state === "expanded" && (
                        <span className="text-sm font-medium">Collapse</span>
                      )}
                      <PanelLeftClose
                        className={`h-4 w-4 transition-transform duration-200 ${
                          state === "expanded" ? "" : "rotate-180"
                        }`}
                      />
                    </SidebarTrigger>
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
