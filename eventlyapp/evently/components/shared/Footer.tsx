import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col wrapper flex-between flex-center gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Evently. All Rights reserved</p>
      </div>
    </footer>
  );
};
