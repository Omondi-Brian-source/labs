import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import AddNewClient from "@/components/clients/add-new-client";
import { ClientSectionCards } from "@/components/clients/client-section-cards";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { IconLayoutColumns, IconUserPlus } from "@tabler/icons-react";
import { Filter, PlusCircle, UserPlus } from "lucide-react";

export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <ClientSectionCards />
        <div className="w-full flex">
          <div>
            <form>
              <div>
                <Input placeholder="Search client records" />
              </div>
            </form>
          </div>
          <div className="flex justify-between px-4 lg:px-6 w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <IconLayoutColumns />
                  <span className="hidden lg:block">Customize columns</span>
                  <span className="lg:hidden">Columns</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                Column list content here
              </DropdownMenuContent>
            </DropdownMenu>

            <AddNewClient />
          </div>
        </div>
      </div>
    </div>
  );
}
