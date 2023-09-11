import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Customer from "./Customer";

export default function Customers({
  customers = [],
}: {
  customers: SanityDocument[];
}) {
  return (
    <div className="text-center container mx-auto flex-col">
      <h1 className="text-3xl p-4 font-semibold opacity-50">
        Some of our customers
      </h1>
      <div className="flex justify-center items-center">
        {customers.map((customer) => (
          <>
            <Customer customer={customer} />
          </>
        ))}
      </div>
    </div>
  );
}
