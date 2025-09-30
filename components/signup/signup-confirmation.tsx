import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { GalleryVerticalEnd, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

const SignupConfirmationDialog = () => {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>
          <Link
            href="#"
            className="flex flex-col items-center gap-2 font-medium"
          >
            <div className="flex size-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <span className="sr-only">Greenspark Labs</span>
          </Link>
          <h1 className="text-xl font-bold">Email verification</h1>
        </CardTitle>
        <CardDescription>
          <div className="text-center text-sm">
            Please verify your email to{" "}
            <Link href={"/auth/login"}>continue</Link>
          </div>
        </CardDescription>

        <Separator className="my-4" />

        <CardContent>
          <div className="space-x-4">
            <Button>
              <Mail />
              Go to Mail
            </Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default SignupConfirmationDialog;
