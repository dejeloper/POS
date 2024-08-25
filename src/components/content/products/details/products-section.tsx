import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProductsSection = () => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>Secciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="category">Categoría</Label>
              <Select>
                <SelectTrigger
                  id="category"
                  aria-label="Seleccione una Categoría"
                >
                  <SelectValue placeholder="Seleccione una Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product">Producto</SelectItem>
                  <SelectItem value="service">Servicio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="seccion">Sección</Label>
              <Select>
                <SelectTrigger id="seccion" aria-label="Seleccione la sección">
                  <SelectValue placeholder="Seleccione la sección" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="groomer">Baño y Peluquería</SelectItem>
                  <SelectItem value="food">Alimentos</SelectItem>
                  <SelectItem value="snacks">Snacks</SelectItem>
                  <SelectItem value="collars">Collares y correas</SelectItem>
                  <SelectItem value="hygiene">Productos de higiene</SelectItem>
                  <SelectItem value="toys">Juguetes</SelectItem>
                  <SelectItem value="veterinaryVisit">
                    Consulta Veterinaria
                  </SelectItem>
                  <SelectItem value="vaccine">Vacunación</SelectItem>
                  <SelectItem value="surgery">Vacunación</SelectItem>
                  <SelectItem value="Aadoption">Adopción</SelectItem>
                  <SelectItem value="daycare">Guardería</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
