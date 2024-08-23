export default function HomePage() {
  const title = "Hola 👋 a GENN";
  const description =
    "GENN es un sistema de punto de venta diseñado para optimizar la gestión de tu negocio. Con GENN, puedes realizar ventas, gestionar inventarios, y llevar un control detallado de las transacciones y reportes. GENN te ayuda a simplificar la operación diaria y a maximizar la eficiencia de tu negocio.";

  const calltoAction =
    "Revisa tus objetivos y tareas por cumplir en la página 'Diario'.";

  const buttons = [
    {
      name: "Crear Objetivo",
      link: "/objectives/new",
    },
    {
      name: "Crear Tarea",
      link: "/tasks/new",
    },
    {
      name: "Diario",
      link: "/daily",
    },
  ];

  return (
    <div className="flex flex-col justify-center m-4 ">
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-foreground md:text-5xl lg:text-6xl  ">
        {title}
      </h1>
      <p className="mt-4 text-lg text-left text-foreground lg:mx-auto lg:w-3/4 2xl:w-2/3">
        {description}
      </p>
    </div>
  );
}
