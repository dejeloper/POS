import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SidebarLogOut() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-accent"
            variant="ghost"
            size="icon"
            onClick={() => signOut()}
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Salir</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Salir</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
