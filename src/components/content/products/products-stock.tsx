import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { PlusCircle } from "lucide-react";

export const ProductsStock = () => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-1">
        <CardHeader>
          <CardTitle>Inventario</CardTitle>
          <CardDescription>
            A continuación un resumen del inventario del producto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SKU</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="w-[100px]">Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">GGPC-001</TableCell>
                <TableCell>
                  <Label htmlFor="stock-1" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-1" type="number" defaultValue="100" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-1" className="sr-only">
                    Price
                  </Label>
                  <Input id="price-1" type="number" defaultValue="99.99" />
                </TableCell>
                <TableCell>
                  <ToggleGroup type="single" defaultValue="s" variant="outline">
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">GGPC-002</TableCell>
                <TableCell>
                  <Label htmlFor="stock-2" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-2" type="number" defaultValue="143" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-2" className="sr-only">
                    Price
                  </Label>
                  <Input id="price-2" type="number" defaultValue="99.99" />
                </TableCell>
                <TableCell>
                  <ToggleGroup type="single" defaultValue="m" variant="outline">
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">GGPC-003</TableCell>
                <TableCell>
                  <Label htmlFor="stock-3" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-3" type="number" defaultValue="32" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-3" className="sr-only">
                    Stock
                  </Label>
                  <Input id="price-3" type="number" defaultValue="99.99" />
                </TableCell>
                <TableCell>
                  <ToggleGroup type="single" defaultValue="s" variant="outline">
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Nombre</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead className="w-[150px]">Sección</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">
                  Shampoo para perros
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-1" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-1" type="number" defaultValue="30" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-1" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-1" type="number" defaultValue="15.00" />
                </TableCell>
                <TableCell>Baño y Peluquería</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Cortauñas</TableCell>
                <TableCell>
                  <Label htmlFor="stock-2" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-2" type="number" defaultValue="50" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-2" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-2" type="number" defaultValue="8.00" />
                </TableCell>
                <TableCell>Baño y Peluquería</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Cepillo de dientes para perros
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-3" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-3" type="number" defaultValue="40" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-3" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-3" type="number" defaultValue="6.00" />
                </TableCell>
                <TableCell>Baño y Peluquería</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Acondicionador para gatos
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-4" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-4" type="number" defaultValue="20" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-4" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-4" type="number" defaultValue="12.00" />
                </TableCell>
                <TableCell>Baño y Peluquería</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Máquina cortapelo
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-5" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-5" type="number" defaultValue="10" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-5" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-5" type="number" defaultValue="45.00" />
                </TableCell>
                <TableCell>Baño y Peluquería</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Alimento seco para perros (10kg)
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-6" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-6" type="number" defaultValue="25" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-6" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-6" type="number" defaultValue="40.00" />
                </TableCell>
                <TableCell>Alimentos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Alimento húmedo para gatos (1kg)
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-7" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-7" type="number" defaultValue="35" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-7" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-7" type="number" defaultValue="25.00" />
                </TableCell>
                <TableCell>Alimentos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Alimento para cachorros (5kg)
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-8" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-8" type="number" defaultValue="15" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-8" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-8" type="number" defaultValue="30.00" />
                </TableCell>
                <TableCell>Alimentos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Alimento para gatos adultos (5kg)
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-9" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-9" type="number" defaultValue="20" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-9" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-9" type="number" defaultValue="35.00" />
                </TableCell>
                <TableCell>Alimentos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Alimento para aves (2kg)
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-10" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-10" type="number" defaultValue="50" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-10" className="sr-only">
                    Precio
                  </Label>
                  <Input id="price-10" type="number" defaultValue="20.00" />
                </TableCell>
                <TableCell>Alimentos</TableCell>
              </TableRow>
              {/* Puedes continuar agregando más filas con los datos restantes */}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-center border-t p-4">
          <Button size="sm" variant="ghost" className="gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            Add Variant
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
