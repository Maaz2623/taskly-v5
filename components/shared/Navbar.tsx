"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { userId } = useAuth();

  return (
    <div className="w-full flex justify-between items-center z-10">
      <div className="flex justify-center items-center gap-2">
        <Image src="/assets/logo.svg" width={25} height={25} alt="logo" />
        <p className="text-2xl font-bold">Taskly</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        {userId && (
          <Button variant="link" className="underline">
            <SignOutButton />
          </Button>
        )}

        <Button>
          <Link className="" href={`${!userId ? "/sign-in" : "/dashboard"}`}>
            {!userId ? (
              <p>Sign in</p>
            ) : (
              <p className="flex justify-center items-center gap-2">
                Dashboard{" "}
                <Image
                  src="/assets/arrow.svg"
                  width={18}
                  height={18}
                  alt="arrow"
                />
              </p>
            )}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
