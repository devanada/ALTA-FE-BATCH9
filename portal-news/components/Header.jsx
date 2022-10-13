import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="h-16 flex justify-between items-center px-8 py-4 mb-8 border-b border-white bg-neutral-800 sticky top-0 z-10">
      <Link href="/">
        <a className="text-white text-2xl font-bold">Portal Berita</a>
      </Link>
    </div>
  );
}

export default Header;
