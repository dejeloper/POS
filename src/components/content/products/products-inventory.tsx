import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const ProductsInventory = () => {
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
                <TableHead className="w-[100px]">Nombre</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="w-[150px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">
                  Shampoo para perros
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-1">10</Label>
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-1" className="text-info">
                    Normal
                  </Label>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Cortauñas</TableCell>
                <TableCell>
                  <Label htmlFor="stock-2">50</Label>
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-2" className="text-success">
                    Máximo
                  </Label>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">
                  Cepillo de dientes para perros
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-2">2</Label>
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-2" className="text-warning">
                    Mínimo
                  </Label>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};
