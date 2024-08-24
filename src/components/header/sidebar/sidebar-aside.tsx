import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  SidebarLogOut,
  SidebarModeToggle,
  ISidebar,
  ISidebarMenu,
} from "@/components/header/sidebar";
import { Focus } from "lucide-react";

export function SidebarAside({ session, sidebarMenu }: ISidebar) {
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
            sidebarMenu &&
            sidebarMenu.map((menu: ISidebarMenu, i) => (
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
        <SidebarModeToggle />
        {session && <SidebarLogOut />}
      </nav>
    </aside>
  );
}
