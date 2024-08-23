"use client";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export function LogOutButton() {
  return (
    <>
      <Button
        className="flex items-center justify-center"
        variant="outline"
        size="icon"
        onClick={() => signOut()}
      >
        <LogOutIcon className="h-[1.2rem] w-[1.2rem] text-foreground" />
      </Button>
    </>
  );
}
