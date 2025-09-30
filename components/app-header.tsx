"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "./toggle-theme";

export function AppHeader() {
  const pathname = usePathname();

  // grab last segment after splitting on '/'
  const segment =
    !pathname || pathname === "/"
      ? "dashboard"
      : pathname.split("/").filter(Boolean).pop() ?? "";

  // Capitalize first letter
  const currentPage = segment.charAt(0).toUpperCase() + segment.slice(1);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{currentPage}</h1>
        <div className="ml-auto flex items-center gap-2 h-full">
          <ToggleTheme />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <Button variant="ghost" asChild size="icon" className="flex group">
            <Link
              href="/dashboard/settings"
              aria-label="Settings"
              className="group"
            >
              <IconSettings className="size-5 group-hover:animate-spin" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
