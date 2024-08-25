import Link from "next/link";
import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";
import { buttonVariants } from "@/components/ui/button";

export default function ServicesPage() {
  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Servicios",
      href: "/pages/services",
    },
  ];

  return (
    <PagesWrapper center={true} menuBreadcrumb={menuBreadcrumb}>
      <div className="flex flex-col justify-center m-4 ">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
          Listado de Servicios
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Link
            href="/pages/services/new"
            className={buttonVariants({ variant: "primary" })}
          >
            Servicio Nuevo
          </Link>
        </div>
      </div>
    </PagesWrapper>
  );
}
