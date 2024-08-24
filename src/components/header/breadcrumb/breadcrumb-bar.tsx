import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ISidebar } from "../sidebar";

export function BreadcrumbBar({ menuBreadcrumb }: ISidebar) {
  return (
    <>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {menuBreadcrumb &&
            menuBreadcrumb.map((miga, i, array) => (
              <div key={i} className="flex justify-center items-center gap-2">
                <BreadcrumbItem>
                  {i === array.length - 1 ? (
                    <BreadcrumbPage className="cursor-default">
                      {miga.name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={miga.href}>{miga.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {i !== array.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
