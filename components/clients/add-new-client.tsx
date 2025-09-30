import React from "react";
import { Button } from "../ui/button";
import { IconUserPlus } from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NewClientForm } from "./new-client-form";

const AddNewClient = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <IconUserPlus />
          Add new client
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create a new client record</SheetTitle>
          <SheetDescription>
            Add any relevant details to create a new client record in the
            system.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows px-4">
          <NewClientForm />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddNewClient;
