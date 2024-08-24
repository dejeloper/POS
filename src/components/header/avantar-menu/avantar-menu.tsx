import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { AvatarMenuImage } from "./avatar-menu-image";
import { Session } from "next-auth";
import Link from "next/link";

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
          <span className="flex justify-center">{user?.toUpperCase()}</span>
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
        <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
