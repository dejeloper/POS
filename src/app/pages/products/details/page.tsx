import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

import {
  ProductsGeneral,
  ProductsImages,
  ProductsInventory,
  ProductsProvider,
  ProductsSection,
  ProductsStock,
} from "@/components/content/products";

export default function DetailsProductsPage() {
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
      name: "Ver Producto o Servicio",
      href: "/pages/products/details",
    },
  ];

  return (
    <PagesWrapper menuBreadcrumb={menuBreadcrumb}>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8  ">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 p-4">
          <div className="flex items-center gap-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Agregar Producto o Servicio
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Link
                href="/pages/products"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Cancelar
              </Link>
              <Button size="sm">Guardar</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <ProductsGeneral />

              <ProductsStock />
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <ProductsSection />

              <ProductsInventory />

              <ProductsImages />

              <ProductsProvider />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Link
              href="/pages/products"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Cancelar
            </Link>
            <Button size="sm">Guardar</Button>
          </div>
        </div>
      </main>
    </PagesWrapper>
  );
}
