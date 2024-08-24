import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function UsersPage() {
  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Lista de Usuarios",
      href: "/pages/users",
    },
  ];

  return (
    <PagesWrapper center={true} menuBreadcrumb={menuBreadcrumb}>
      <div className="flex flex-col justify-center m-4 ">
        <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
          Usuarios
        </h1>
        <Link
          href="/pages/users/register"
          className={buttonVariants({ variant: "primary" })}
        >
          New User
        </Link>
      </div>
    </PagesWrapper>
  );
}
