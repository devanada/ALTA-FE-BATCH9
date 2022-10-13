import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ image, title, uri, date, body }) {
  return (
    <div className="w-full my-5 flex">
      <div className="w-1/4 block">
        <Image
          width={1280}
          height={720}
          layout="responsive"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-3/4 ml-5">
        <Link href={`/detail/${uri}`}>
          <a className="text-xl font-bold">{title}</a>
        </Link>
        <p className="font-thin text-neutral-500">{date}</p>
        <p className="text-neutral-500 text-justify flex-wrap">
          {body.substring(0, 200) + "..."}
        </p>
      </div>
    </div>
  );
}

export default Card;
