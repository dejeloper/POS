import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, username, password } = await request.json();

    if (!email || !username || !password) {
      const status = 400;
      return NextResponse.json(
        {
          status,
          message: "Faltan campos requeridos: Correo, Usuario o Contraseña",
          data: null,
          success: false,
        },
        { status }
      );
    }

    const emailFound = await prisma.user.findUnique({
      where: { email },
    });

    if (emailFound) {
      const status = 400;
      return NextResponse.json(
        {
          status,
          message: "El Correo ya se encuentra registrado",
          data: null,
          success: false,
        },
        { status }
      );
    }

    const userFound = await prisma.user.findUnique({
      where: { username },
    });

    if (userFound) {
      const status = 400;
      return NextResponse.json(
        {
          status,
          message: "El Usuario ya se encuentra registrado",
          data: null,
          success: false,
        },
        { status }
      );
    }

    const encryptPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: encryptPassword,
      },
    });
    const status = 201;
    const { password: _, ...newUser } = user;
    return NextResponse.json(
      {
        status,
        message: "Usuario creado exitosamente",
        data: newUser,
        success: true,
      },
      { status }
    );
  } catch (error) {
    if (error instanceof Error) {
      const status = 500;
      return NextResponse.json(
        {
          status,
          message:
            error instanceof Error
              ? error.message
              : "Error interno del servidor",
          data: null,
          success: false,
        },
        { status }
      );
    }
  }
}
