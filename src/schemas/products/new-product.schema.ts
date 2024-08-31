import { z } from "zod";

export const NewProductSchema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().optional(),
    status: z
      .enum(["pending", "active", "outOfStock"], {
        message: "El estado es obligatorio",
      })
      .default("active"),
    category: z.enum(["product", "service"], {
      message: "La categoría es obligatoria",
    }),
    sectionCode: z.string().min(1, "El código de sección es obligatorio"),
    saleType: z.enum(["unit", "weight", "combo"], {
      message: "El tipo de venta es obligatorio",
    }),
    costPrice: z.coerce
      .number()
      .min(1, "El precio de costo debe ser un número positivo"),
    profitMargin: z.coerce
      .number()
      .min(5, "La ganancia debe ser al menos 5%")
      .max(10000, "La ganancia debe ser como máximo 10000%"),
    salePrice: z.coerce
      .number()
      .positive("El precio de venta debe ser un número positivo"),
    wholesaleQuantity: z.coerce
      .number()
      .int()
      .min(5, "La cantidad de mayoreo debe ser al menos 5"),
    wholesalePrice: z.coerce
      .number()
      .positive("El precio de mayoreo debe ser un número positivo"),
    inventory: z.boolean().optional().default(true),
    initialStock: z.coerce
      .number()
      .int()
      .min(0, "El stock inicial debe ser un número entero no negativo")
      .optional()
      .default(0),
    minimumStock: z.coerce
      .number()
      .int()
      .min(0, "El stock mínimo debe ser mayor o igual a 0")
      .optional()
      .default(0),
    maximumStock: z.coerce
      .number()
      .int()
      .min(0, "El stock máximo debe ser mayor o igual a 0")
      .optional()
      .default(0),
    hasSupplier: z.boolean().optional().default(false),
    supplierCode: z.string().optional(),
    imageUrls: z
      .array(z.string().url("Debe ser una URL válida"))
      .max(10, "Puedes proporcionar hasta 10 URLs de imágenes")
      .optional(),
  })
  .refine(
    (data) => {
      const allZero =
        data.initialStock === 0 &&
        data.minimumStock === 0 &&
        data.maximumStock === 0;
      return data.minimumStock <= data.maximumStock || allZero;
    },
    {
      message: "El stock mínimo no puede ser mayor que el stock máximo",
      path: ["minimumStock"],
    }
  )
  .refine(
    (data) => {
      const allZero =
        data.initialStock === 0 &&
        data.minimumStock === 0 &&
        data.maximumStock === 0;
      return data.maximumStock >= data.minimumStock || allZero;
    },
    {
      message: "El stock máximo no puede ser menor que el stock mínimo",
      path: ["maximumStock"],
    }
  );
