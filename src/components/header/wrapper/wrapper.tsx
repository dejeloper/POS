"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

import { IPagesWrapper } from "@/components/header/wrapper";
import { ISidebarMenu, Sidebar } from "@/components/header/sidebar";
import { cn } from "@/lib/utils";
import {
  Bone,
  Gem,
  Home,
  Package,
  Settings,
  ShoppingBag,
  UserCog,
  Wrench,
} from "lucide-react";
import Loading from "@/app/loading";

export function PagesWrapper({
  children,
  center = false,
  menuBreadcrumb,
}: IPagesWrapper) {
  const { data: session, status } = useSession();

  let currentPath = usePathname()?.replace(/$\//, "");
  currentPath = currentPath.replace(/^\//, "");

  if (status === "loading") {
    return <Loading text="Cargando" />;
  }

  if (status === "unauthenticated") {
    return redirect("/auth/login?nextpage=" + currentPath);
  }

  const sidebarMenu: ISidebarMenu[] = [
    {
      name: "Inicio",
      href: "/",
      icon: Home,
    },
    {
      name: "Ventas",
      href: "/sales",
      icon: ShoppingBag,
    },
    {
      name: "Productos",
      href: "/products",
      icon: Bone, //Gem,
    },
    {
      name: "Inventario",
      href: "/inventory",
      icon: Package,
    },
    {
      name: "Usuarios",
      href: "/users",
      icon: UserCog,
    },
    {
      name: "Configuraciones",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      <Sidebar
        session={session!}
        sidebarMenu={sidebarMenu}
        menuBreadcrumb={menuBreadcrumb}
      />

      <div className="flex flex-col h-screen overflow-auto cursor-default">
        <div
          className={cn(
            "h-[calc(100dvh-104px)] p-4 sm:ml-20 my-4 mx-6 rounded-md lg:w-3/4 lg:mx-auto"
            // , "border border-red-500 sm:border-blue-500 md:border-green-500 lg:border-yellow-500 xl:border-slate-500"
          )}
        >
          <div
            className={cn("flex flex-col justify-center pb-8", {
              "items-center h-full": center,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
