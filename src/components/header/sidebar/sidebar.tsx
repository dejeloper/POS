"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Focus,
  Home,
  Package,
  Settings,
  ShoppingBag,
  UserCog,
} from "lucide-react";

import { SidebarLogOut, SidebarModeToggle } from "@/components/header/sidebar";

export default function Sidebar() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
  }, [session, status]);

  const menus = [
    {
      name: "Inicio",
      href: "/",
      icon: Home,
    },
    {
      name: "Ventas",
      href: "/pages/sales",
      icon: ShoppingBag,
    },
    {
      name: "Inventario",
      href: "/pages/inventory",
      icon: Package,
    },
    {
      name: "Usuarios",
      href: "/pages/users",
      icon: UserCog,
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base cursor-none">
                <Focus className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Pos General</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">Pos General</TooltipContent>
          </Tooltip>

          {session &&
            menus &&
            menus.map((menu, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <Link
                    href={menu.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-accent"
                  >
                    <menu.icon className="h-5 w-5" />
                    <span className="sr-only">{menu.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{menu.name}</TooltipContent>
              </Tooltip>
            ))}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <TooltipProvider>
          {session && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/pages/settings"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-accent"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Configuraciones</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configuraciones</TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>

        <SidebarModeToggle />

        {session && <SidebarLogOut />}
      </nav>
    </aside>
  );
}
