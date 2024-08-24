import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ISidebar, ISidebarMenu } from "@/components/header/sidebar";
import { Focus, PanelLeft } from "lucide-react";

export function SidebarSheet({ session, sidebarMenu }: ISidebar) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <SheetHeader className="hidden">
          <SheetTitle>Pos General</SheetTitle>
        </SheetHeader>
        <SheetDescription asChild>
          <nav className="grid gap-6 text-lg font-medium">
            <div className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
              <Focus className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Pos General</span>
            </div>

            {session &&
              sidebarMenu &&
              sidebarMenu.map((menu: ISidebarMenu, i) => {
                return (
                  <div key={i} className="border-0">
                    <SheetClose asChild>
                      <Link
                        href={menu.href}
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                      >
                        <menu.icon className="h-5 w-5" />
                        {menu.name}
                      </Link>
                    </SheetClose>
                  </div>
                );
              })}
          </nav>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
