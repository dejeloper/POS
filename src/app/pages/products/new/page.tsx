"use client";

import { useState } from "react";
import { IBreadcrumbBar } from "@/components/header/breadcrumb";
import { PagesWrapper } from "@/components/header/wrapper";
import { motion } from "framer-motion";

import { z } from "zod";
import { NewProductSchema } from "@/schemas/products/new-product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { CloudUpload } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export default function NewProductPage() {
  const menuBreadcrumb: IBreadcrumbBar[] = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Productos y Servicios",
      href: "/pages/products",
    },
    {
      name: "Agregar Producto o Servicio",
      href: "/pages/products/new",
    },
  ];

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const delta = currentStep - previousStep;

  const steps = [
    {
      id: "1",
      name: "Producto",
      detail: "Generalidades y Secciones",
      fields: ["name", "description", "status", "category", "sectionCode"],
    },
    {
      id: "2",
      name: "Precios",
      detail: "Valores y Ganancias",
      fields: [
        "saleType",
        "costPrice",
        "profitMargin",
        "salePrice",
        "wholesaleQuantity",
        "wholesalePrice",
      ],
    },
    {
      id: "3",
      name: "Inventario",
      detail: "Stock y Proveedor",
      fields: [
        "inventory",
        "initialStock",
        "minimumStock",
        "maximumStock",
        "hasSupplier",
        "supplierCode",
      ],
    },
    {
      id: "4",
      name: "Imagenes",
      detail: "Galería de Fotos",
      fields: ["imageUrls"],
    },
    { id: "5", name: "Finalizar", detail: "Confirmar y Guardar" },
  ];

  type ProductSchema = z.infer<typeof NewProductSchema>;
  type FieldName = keyof ProductSchema;

  const form = useForm<ProductSchema>({
    resolver: zodResolver(NewProductSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "active",
      category: undefined,
      sectionCode: "",
      saleType: undefined,
      costPrice: undefined,
      profitMargin: undefined,
      salePrice: undefined,
      wholesaleQuantity: undefined,
      wholesalePrice: undefined,
      inventory: true,
      initialStock: undefined,
      minimumStock: undefined,
      maximumStock: undefined,
      hasSupplier: false,
      supplierCode: "",
      imageUrls: undefined,
    },
  });

  console.log({ error: form.formState.errors });

  async function onSubmit2(dataNewProduct: ProductSchema) {
    console.log(dataNewProduct);
    console.log("Prueba onSubmit");
  }

  const processForm: SubmitHandler<ProductSchema> = (data) => {
    console.log(data);
    form.reset();
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const changeStep = async (step: number) => {
    setCurrentStep(step);
  };

  return (
    <PagesWrapper menuBreadcrumb={menuBreadcrumb}>
      <div>
        {/* Steps */}
        <section
          aria-label="progress"
          className="flex justify-start sm:justify-center"
        >
          <ol
            role="list"
            className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0"
          >
            {steps.map((step, index) => (
              <li key={step.name} className="flex items-center space-x-2.5">
                {currentStep > index ? (
                  <div
                    className="group flex w-full sm:flex-col md:flex-row border-l-2 text-success border-success/60 py-2 pl-2 transition-colors sm:border-l-0 sm:border-b-2 sm:pb-2 sm:pl-0 sm:pt-0 sm:pr-2 cursor-pointer"
                    onClick={() => changeStep(index)}
                  >
                    <div className="sm:flex sm:justify-center sm:pb-2">
                      <span className="flex items-center justify-center w-8 h-8 border border-success/50 rounded-full shrink-0 dark:border-success/50">
                        {step.id}
                      </span>
                    </div>
                    <span className="ml-2 md:text-left sm:text-center">
                      <h3 className="font-medium leading-tight ">
                        {step.name}
                      </h3>
                      <p className="text-xs">{step.detail}</p>
                    </span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className="group flex w-full sm:flex-col md:flex-row border-l-2 text-info border-info/60 py-2 pl-2 transition-colors sm:border-l-0 sm:border-b-2 sm:pb-2 sm:pl-0 sm:pt-0 sm:pr-2"
                    onClick={() => changeStep(index)}
                  >
                    <div className="sm:flex sm:justify-center sm:pb-2">
                      <span className="flex items-center justify-center w-8 h-8 border border-info/50 rounded-full shrink-0 dark:border-info/50">
                        {step.id}
                      </span>
                    </div>
                    <span className="ml-2 md:text-left sm:text-center dark:font-medium">
                      <h3 className="font-medium leading-tight ">
                        {step.name}
                      </h3>
                      <p className="text-xs">{step.detail}</p>
                    </span>
                  </div>
                ) : (
                  <div
                    className="group flex w-full sm:flex-col md:flex-row border-l-2 text-muted-foreground border-primary/60 py-2 pl-2 transition-colors sm:border-l-0 sm:border-b-2 sm:pb-2 sm:pl-0 sm:pt-0 sm:pr-2 cursor-pointer"
                    onClick={() => changeStep(index)}
                  >
                    <div className="sm:flex sm:justify-center sm:pb-2">
                      <span className="flex items-center justify-center w-8 h-8 border border-primary/50 rounded-full shrink-0 dark:border-primary/50">
                        {step.id}
                      </span>
                    </div>
                    <span className="ml-2 md:text-left sm:text-center">
                      <h3 className="font-medium leading-tight ">
                        {step.name}
                      </h3>
                      <p className="text-xs">{step.detail}</p>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>
        {/* Form */}
        <section aria-label="form-step" className="border-0 border-red-500">
          <FormProvider {...form}>
            <div className="items-center space-y-4 sm:flex my-12 sm:space-y-0 xl:mx-24 md:mx-12 sm:mx-8 mx-4">
              <Card className="mx-auto w-full">
                <CardContent>
                  <div className="flex justify-between space-y-1.5 py-6">
                    <section className="flex flex-col ">
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        {steps[currentStep].name}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {steps[currentStep].detail}
                      </p>
                    </section>
                    {/* Navegation */}
                    <section aria-label="navegation">
                      <div className="flex justify-between gap-4">
                        {/* Back */}
                        <button
                          type="button"
                          onClick={prev}
                          disabled={currentStep === 0}
                          className={cn(buttonVariants({ variant: "default" }))}
                        >
                          <span>Atrás</span>
                        </button>

                        {/* Next */}
                        <button
                          type="button"
                          onClick={next}
                          disabled={currentStep === steps.length - 1}
                          className={cn(buttonVariants({ variant: "default" }))}
                        >
                          <span>Siguiente</span>
                        </button>
                      </div>
                    </section>
                  </div>
                  <form
                    className="py-2"
                    onSubmit={form.handleSubmit(processForm)}
                  >
                    {currentStep === 0 && (
                      <motion.div
                        initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nombre</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="Producto de Prueba"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3">
                            <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Descripción</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="En este espacio puede agregar más detalle sobre el producto en general"
                                      className="min-h-32"
                                      {...field}
                                    ></Textarea>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3">
                            <FormField
                              control={form.control}
                              name="status"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Estado</FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      name={field.name}
                                      onValueChange={field.onChange}
                                    >
                                      <SelectTrigger aria-label="Seleccione el estado">
                                        <SelectValue
                                          ref={field.ref}
                                          onBlur={field.onBlur}
                                          placeholder="Seleccione el estado"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="pending">
                                          Pendiente
                                        </SelectItem>
                                        <SelectItem value="active">
                                          Activo
                                        </SelectItem>
                                        <SelectItem value="outOfStock">
                                          Fuera de Stock
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2 grid-cols-1">
                            <FormField
                              control={form.control}
                              name="category"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Categoría</FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      name={field.name}
                                      onValueChange={field.onChange}
                                    >
                                      <SelectTrigger aria-label="Seleccione la categoría">
                                        <SelectValue
                                          ref={field.ref}
                                          onBlur={field.onBlur}
                                          placeholder="Seleccione la categoría"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="product">
                                          Producto
                                        </SelectItem>
                                        <SelectItem value="service">
                                          Servicio
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="sectionCode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Sección</FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      name={field.name}
                                      onValueChange={field.onChange}
                                    >
                                      <SelectTrigger aria-label="Seleccione la sección">
                                        <SelectValue
                                          ref={field.ref}
                                          onBlur={field.onBlur}
                                          placeholder="Seleccione la sección"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="1">
                                          Baño y Peluquería
                                        </SelectItem>
                                        <SelectItem value="2">
                                          Alimentos
                                        </SelectItem>
                                        <SelectItem value="3">
                                          Snacks
                                        </SelectItem>
                                        <SelectItem value="4">
                                          Collares y correas
                                        </SelectItem>
                                        <SelectItem value="5">
                                          Productos de higiene
                                        </SelectItem>
                                        <SelectItem value="6">
                                          Juguetes
                                        </SelectItem>
                                        <SelectItem value="7">
                                          {" "}
                                          Consulta Veterinaria{" "}
                                        </SelectItem>
                                        <SelectItem value="8">
                                          Vacunación
                                        </SelectItem>
                                        <SelectItem value="9">
                                          Cirugía
                                        </SelectItem>
                                        <SelectItem value="10">
                                          Adopción
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 1 && (
                      <motion.div
                        initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <FormField
                              control={form.control}
                              name="saleType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Tipo de Venta</FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      name={field.name}
                                      onValueChange={field.onChange}
                                    >
                                      <SelectTrigger aria-label="Seleccione el Tipo de Venta">
                                        <SelectValue
                                          ref={field.ref}
                                          onBlur={field.onBlur}
                                          placeholder="Seleccione el Tipo de Venta"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="unit">
                                          Unidad
                                        </SelectItem>
                                        <SelectItem value="weight">
                                          Peso (Gramos)
                                        </SelectItem>
                                        <SelectItem value="combo">
                                          Combo
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2 grid-cols-1">
                            <FormField
                              control={form.control}
                              name="costPrice"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Precio Costo</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        placeholder="0,00"
                                        className="pl-8"
                                        {...field}
                                      />
                                      <div className="absolute text-foreground inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        $
                                      </div>
                                      <Label />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2 grid-cols-1">
                            <FormField
                              control={form.control}
                              name="profitMargin"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Porcentaje de Ganancia</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      placeholder="5"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="salePrice"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Precio Venta</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        placeholder="0,00"
                                        className="pl-8"
                                        {...field}
                                      />
                                      <div className="absolute text-foreground inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        $
                                      </div>
                                      <Label />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2 grid-cols-1">
                            <FormField
                              control={form.control}
                              name="wholesaleQuantity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Cantidad para Mayoreo</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      placeholder="5"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="wholesalePrice"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Precio para Mayoreo</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        placeholder="0,00"
                                        className="pl-8"
                                        {...field}
                                      />
                                      <div className="absolute text-foreground inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        $
                                      </div>
                                      <Label />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <FormField
                              control={form.control}
                              name="inventory"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                  <FormControl>
                                    <Checkbox
                                      name={field.name}
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                  <div className="space-y-1 leading-none">
                                    <FormLabel>
                                      ¿Este producto estará en el inventario?
                                    </FormLabel>
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2 grid-cols-1">
                            <FormField
                              control={form.control}
                              name="initialStock"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Stock Inicial</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Input
                                        type="number"
                                        placeholder="0"
                                        {...field}
                                      />
                                      <Label />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2 grid-cols-1">
                            <FormField
                              control={form.control}
                              name="minimumStock"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Stock Mínimo</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      placeholder="10"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="maximumStock"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Stock Máximo</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      placeholder="999999"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="grid gap-3">
                            <FormField
                              control={form.control}
                              name="hasSupplier"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                  <FormControl>
                                    <Checkbox
                                      name={field.name}
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                  <div className="space-y-1 leading-none">
                                    <FormLabel>
                                      ¿Este producto tiene proveedor?
                                    </FormLabel>
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                          <div
                            className={
                              form.watch("hasSupplier")
                                ? "grid gap-3 sm:grid-cols-2 grid-cols-1"
                                : "hidden"
                            }
                          >
                            <FormField
                              control={form.control}
                              name="supplierCode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Código Proveedor</FormLabel>
                                  <FormControl>
                                    <div className="flex justify-between w-full gap-3">
                                      <Input
                                        type="number"
                                        placeholder="999999"
                                        {...field}
                                        disabled
                                      />

                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button>Buscar Proveedor</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                          <DialogHeader>
                                            <DialogTitle>
                                              Buscar Proveedor
                                            </DialogTitle>
                                            <DialogDescription>
                                              Busque y seleccion el proveedor
                                              para este producto.
                                            </DialogDescription>
                                          </DialogHeader>
                                          <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                              <Label
                                                htmlFor="name"
                                                className="text-right"
                                              >
                                                Código
                                              </Label>
                                              <Input
                                                id="code"
                                                value="2u3nd-4r3v3r"
                                                className="col-span-3"
                                                disabled
                                              />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                              <Label
                                                htmlFor="username"
                                                className="text-right"
                                              >
                                                Nombre
                                              </Label>
                                              <Input
                                                id="name"
                                                value="Producto de Prueba"
                                                className="col-span-3"
                                                disabled
                                              />
                                            </div>
                                          </div>
                                          <DialogFooter className="sm:justify-end">
                                            <DialogClose asChild>
                                              <Button
                                                type="button"
                                                variant="secondary"
                                              >
                                                Seleccionar
                                              </Button>
                                            </DialogClose>
                                          </DialogFooter>
                                        </DialogContent>
                                      </Dialog>
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="supplierCode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Proveedor</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="Nombre del proveedor"
                                      disabled
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <div className="flex items-center justify-center w-full border-2 border-dashed rounded-md border-muted-foreground/50 p-6 transition-colors hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-primary">
                              <div className="text-center">
                                <CloudUpload className="mx-auto h-12 w-12 text-muted-foreground" />
                                <div className="mt-4 font-medium">
                                  <p>Arrastre y suelte sus imágenes aquí</p>
                                  <p className="text-sm text-muted-foreground">
                                    o haga clic para cargar
                                  </p>
                                </div>
                                <Input
                                  id="images"
                                  type="file"
                                  multiple
                                  className="sr-only"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-5  gap-4 mx-auto">
                            <img
                              src="/placeholder.svg"
                              width={50}
                              height={50}
                              alt="Preview"
                              className="object-cover w-full rounded-md"
                              style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                              }}
                            />
                            <img
                              src="/placeholder.svg"
                              width={50}
                              height={50}
                              alt="Preview"
                              className="object-cover w-full rounded-md"
                              style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                              }}
                            />
                            <div className="aspect-square w-full rounded-md bg-muted-foreground/10 border-2 border-dashed border-muted-foreground/50" />
                            <div className="aspect-square w-full rounded-md bg-muted-foreground/10 border-2 border-dashed border-muted-foreground/50" />
                            <div className="aspect-square w-full rounded-md bg-muted-foreground/10 border-2 border-dashed border-muted-foreground/50" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    {currentStep === 4 && (
                      <motion.div
                        initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <p>Hola</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </FormProvider>
        </section>
      </div>
    </PagesWrapper>
  );
}
