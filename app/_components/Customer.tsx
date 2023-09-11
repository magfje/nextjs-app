"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default function Customer({ customer }: { customer: SanityDocument }) {
  return (
    <div className="container flex justify-center items-center mx-auto p-4 ">
      {customer?.image ? (
        <Image
          key={customer._id}
          className="m-0 w-1/3 mr-4 rounded-lg opacity-60"
          src={builder.image(customer.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={customer?.image?.alt}
          priority
        />
      ) : null}
    </div>
  );
}
