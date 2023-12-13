import LogoutButton from "@/components/LogoutButton";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import React from "react";

const Page = async () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      Dashboard page
      <Link href={"/"} className={buttonVariants()}>
        Home
      </Link>
      <LogoutButton />
    </div>
  );
};

export default Page;
