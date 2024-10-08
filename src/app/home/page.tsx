"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/auth/login");
  }, [session, status]);

  const user = status === "authenticated" ? session?.user?.name : "";
  const title = "Hola 👋" + user?.toUpperCase() + " a POS";
  const description =
    "GENN es un sistema de punto de venta diseñado para optimizar la gestión de tu negocio. Con GENN, puedes realizar ventas, gestionar inventarios, y llevar un control detallado de las transacciones y reportes. GENN te ayuda a simplificar la operación diaria y a maximizar la eficiencia de tu negocio.";

  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
  ];

  return (
    <PagesWrapper center={false} menuBreadcrumb={menuBreadcrumb}>
      <div className="flex flex-col justify-center mx-4 ">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
          {title}
        </h1>
        <p className="mt-4 text-lg text-left text-foreground lg:mx-auto lg:w-3/4 2xl:w-2/3">
          {description}
        </p>
      </div>
    </PagesWrapper>
  );
}
