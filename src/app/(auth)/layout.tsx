"use client";

import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/" },
  { name: "ForgotPassword", href: "/forgotpassword" },
  { name: "Login", href: "/login" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      {/* {navLinks.map((links) => {
        const isActive = pathName.startsWith(links.href);
        return (
          <Link
            href={links.href}
            key={links.name}
            className={
              isActive ? "text-red-600 font-bold mr-4" : "mr-4 text-slate-600"
            }
          >
            {links.name}
          </Link>
        );
      })} */}
      {children}
    </div>
  );
}
