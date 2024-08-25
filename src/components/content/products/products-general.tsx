import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const ProductsGeneral = () => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>Producto</CardTitle>
          <CardDescription>Generalidades del producto</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" type="text" className="w-full" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Descripción</Label>
              <Textarea id="description" defaultValue="" className="min-h-32" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status">Estado</Label>
              <Select>
                <SelectTrigger id="status" aria-label="Seleccione el estado">
                  <SelectValue placeholder="Seleccione el estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pendiente</SelectItem>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="outofstock">Fuera de Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
