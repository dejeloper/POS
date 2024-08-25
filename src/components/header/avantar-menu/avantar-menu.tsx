import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button, buttonVariants } from "@/components/ui/button";
import { AvatarMenuImage } from "./avatar-menu-image";
import { Session } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const menuUser = [
  {
    name: "Cuenta",
    href: "/page/users/edit/",
  },
  {
    name: "Actividades",
    href: "/page/users/activity/",
  },
  {
    name: "Cambio Contraseña",
    href: "/page/users/pass/",
  },
];

export function AvatarMenu({ session }: { session: Session }) {
  const user = session ? session?.user?.name : "Usuario";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <AvatarMenuImage src="/Admin.jpg" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel asChild>
          <span className="flex justify-center cursor-default">
            {user?.toUpperCase()}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuUser &&
          menuUser.map((menu, i) => (
            <DropdownMenuItem asChild key={i}>
              <Link
                className="cursor-pointer transition-colors text-foreground hover:bg-accent hover:text-foreground/85"
                href={`${menu.href}${user}`}
              >
                {menu.name}
              </Link>
            </DropdownMenuItem>
          ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full cursor-pointer transition-colors text-foreground bg-transparent hover:bg-accent hover:text-foreground/85"
            )}
            onClick={() => signOut()}
          >
            <span className="text-left">Cerrar sesión</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
