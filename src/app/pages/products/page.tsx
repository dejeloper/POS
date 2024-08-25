import Link from "next/link";
import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";
import { buttonVariants } from "@/components/ui/button";

export default function ProductsPage() {
  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Productos y Servicios",
      href: "/pages/products",
    },
  ];

  return (
    <PagesWrapper center={true} menuBreadcrumb={menuBreadcrumb}>
      <div className="flex flex-col justify-center m-4 ">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
          Listado de Productos y Servicios
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Link
            href="/pages/products/new"
            className={buttonVariants({ variant: "primary" })}
          >
            Producto o Servicio Nuevo
          </Link>{" "}
          <Link
            href="/pages/products/details"
            className={buttonVariants({ variant: "primary" })}
          >
            Ver un Producto o Servicio
          </Link>
        </div>
      </div>
    </PagesWrapper>
  );
}
