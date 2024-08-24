import { IBreadcrumbBar } from "../breadcrumb";

export interface IPagesWrapper {
  children: React.ReactNode;
  center?: boolean;
  menuBreadcrumb?: IBreadcrumbBar[];
}
