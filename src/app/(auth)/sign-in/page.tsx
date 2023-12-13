"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>Sign in page</div>
      <Button
        onClick={() =>
          signIn("github", {
            callbackUrl: `${window.location.origin}`,
          })
        }
      >
        Login with github
      </Button>
    </div>
  );
};

export default Page;
