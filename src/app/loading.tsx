import { Skeleton } from "@/components/ui/skeleton";

export default function Loading({ text = "" }: { text?: string }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row bg-primary shadow-lg border-r-4 w-[20rem] items-center gap-2 p-2 rounded-xl">
        <Skeleton className="rounded-full w-[4.5rem] h-[4.5rem]" />
        <div className="flex flex-col gap-2 w-9/12">
          <p className="text-background font-bold">{text}...</p>
          <Skeleton className="w-11/12 h-2 rounded-full" />
          <Skeleton className="w-9/12 h-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}
