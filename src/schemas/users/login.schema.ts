import { z } from "zod";

export const userLoginSchema = z.object({
  username: z.string().trim().min(1, { message: "El usuario es obligatorio" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "La contraseña es obligatoria" }),
});
