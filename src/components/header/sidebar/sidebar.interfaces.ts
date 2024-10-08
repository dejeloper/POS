import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Session } from "next-auth";
import { LucideProps } from "lucide-react";
import { IBreadcrumbBar } from "../breadcrumb";

export interface ISidebarMenu {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface ISidebar {
  session?: Session;
  sidebarMenu?: ISidebarMenu[];
  menuBreadcrumb?: IBreadcrumbBar[];
}
