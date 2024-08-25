import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProductsProvider = () => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-5">
        <CardHeader>
          <CardTitle>Proveedor del Producto</CardTitle>
          <CardDescription>Datos del Proveedor</CardDescription>
        </CardHeader>
        <CardContent>
          <div></div>
          <Button size="sm" variant="secondary">
            Ver Información
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
