import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SidebarModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Button
              className="dark:flex hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-accent"
              variant="ghost"
              size="icon"
              onClick={() => setTheme("light")}
            >
              <Sun className="h-5 w-5" />
            </Button>

            <Button
              className="flex dark:hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 hover:bg-accent"
              variant="link"
              size="icon"
              onClick={() => setTheme("dark")}
            >
              <Moon className="absolute h-5 w-5" />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          {theme === "dark" ? "Ligth Mode" : "Dark Mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
