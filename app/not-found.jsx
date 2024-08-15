import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className=" text-center">
      <h2 className=" text-3xl font-bold mb-4">404 not found!!</h2>
      <Button asChild>
        <Link href={"/"}>Go Back Homepage</Link>
      </Button>
    </section>
  );
};

export default NotFoundPage;
