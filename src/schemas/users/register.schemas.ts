import { z } from "zod";

export const userRegisterSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Debe ser un correo electrónico válido" })
      .trim()
      .min(1, { message: "El correo electrónico es obligatorio" }),
    username: z
      .string()
      .min(3, { message: "El usuario debe tener mínimo 3 caracteres" })
      .max(30, { message: "El usuario debe tener máximo 30 caracteres" })
      .trim()
      .min(1, { message: "El nombre de usuario es obligatorio" }),
    password: z
      .string()
      .min(8, { message: "La contraseña debe tener mínimo 8 caracteres" })
      .trim()
      .min(1, { message: "La contraseña es obligatoria" }),
    confirmPassword: z
      .string()
      .min(8, {
        message:
          "La confirmación de la contraseña debe tener mínimo 8 caracteres",
      })
      .trim()
      .min(1, { message: "La confirmación de la contraseña es obligatoria" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
      });
    }
  });
