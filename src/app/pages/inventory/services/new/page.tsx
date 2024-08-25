import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";

export default function NewServicePage() {
  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Inventario",
      href: "/pages/inventory",
    },
    {
      name: "Listado de Servicios",
      href: "/pages/inventory/services",
    },
    {
      name: "Agregar Servicio",
      href: "/pages/inventory/services/new",
    },
  ];

  return (
    <PagesWrapper center={true} menuBreadcrumb={menuBreadcrumb}>
      <div className="flex flex-col justify-center m-4 ">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
          Agregar Servicio
        </h1>
      </div>
    </PagesWrapper>
  );
}
