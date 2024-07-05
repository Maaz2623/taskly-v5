"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  const { userId } = useAuth();

  return (
    <div className="w-full flex justify-between items-center">
      <p>Welcome to Taskly</p>
      <Button>
        <Link className="" href={`${!userId ? "/sign-in" : "/dashboard"}`}>
          {!userId ? <p>Sign up</p> : <p className="flex justify-center items-center gap-2">Dashboard <Image src="/assets/arrow.svg" width={18} height={18} alt="arrow" /></p>}
        </Link>
      </Button>
    </div>
  );
};

export default HomePage;
