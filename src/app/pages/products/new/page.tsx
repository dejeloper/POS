import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";

export default function NewProductPage() {
  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Productos y Servicios",
      href: "/pages/products",
    },
    {
      name: "Agregar Producto o Servicio",
      href: "/pages/products/new",
    },
  ];

  return (
    <PagesWrapper menuBreadcrumb={menuBreadcrumb}>
      <span>Nuevo Producto o Servicio</span>
    </PagesWrapper>
  );
}
