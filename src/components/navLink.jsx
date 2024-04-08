"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded-lg p-2 ${pathName === link.url && "bg-[rgb(17,42,49)] text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
