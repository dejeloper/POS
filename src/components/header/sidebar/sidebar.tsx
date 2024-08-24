"use client";

import { useEffect } from "react";

import { Search } from "lucide-react";
import {
  ISidebar,
  SidebarAside,
  SidebarSheet,
} from "@/components/header/sidebar";
import { ModeToggle } from "../nav";
import { Input } from "@/components/ui/input";
import { BreadcrumbBar } from "../breadcrumb";
import { AvatarMenu } from "../avantar-menu";

export function Sidebar({ session, sidebarMenu, menuBreadcrumb }: ISidebar) {
  return (
    <>
      <SidebarAside session={session!} sidebarMenu={sidebarMenu} />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex justify-between items-center w-full gap-x-2">
            <SidebarSheet session={session!} sidebarMenu={sidebarMenu} />

            <BreadcrumbBar menuBreadcrumb={menuBreadcrumb} />
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
              />
            </div>

            <ModeToggle className="flex md:hidden" />
            <AvatarMenu session={session!} />
          </div>
        </header>
      </div>
    </>
  );
}
