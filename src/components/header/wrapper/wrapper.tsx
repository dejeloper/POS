"use client";

import { useSession } from "next-auth/react";

import { IPagesWrapper } from "@/components/header/wrapper";
import { ISidebarMenu, Sidebar } from "@/components/header/sidebar";
import { cn } from "@/lib/utils";
import {
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

  if (status === "loading") {
    return <Loading text="Cargando" />;
  }

  if (status === "unauthenticated") {
    return <Loading text="Acceso denegado. Cargando" />;
  }

  const sidebarMenu: ISidebarMenu[] = [
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
      name: "Productos",
      href: "/pages/products",
      icon: Gem,
    },
    {
      name: "Servicios",
      href: "/pages/services",
      icon: Wrench,
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
    {
      name: "Configuraciones",
      href: "/pages/settings",
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
            className={cn("flex flex-col justify-center", {
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
