import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";

export default function SettingsPage() {
  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Configuraciones",
      href: "/pages/settings",
    },
  ];

  return (
    <PagesWrapper center={true} menuBreadcrumb={menuBreadcrumb}>
      <div className="flex flex-col justify-center m-4 ">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
          Configuraciones
        </h1>
      </div>
    </PagesWrapper>
  );
}
