export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-full w-full flex flex-col items-center justify-center text-nowrap">
        <h1>
          <span className="font-sans border-r dark:border-white/30 border-black/30 inline-block mr-5 pr-6 text-2xl font-medium align-top leading-10 ">
            404
          </span>
          <span className="text-sm font-normal leading-10 m-0">
            Esta página no pudo ser encontrada.
          </span>
        </h1>
      </div>
    </div>
  );
}
