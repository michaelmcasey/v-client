import { promises as fs } from "fs";
import path from "path";
import { generateMeta } from "@/lib/utils";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import OrdersDataTable from "./data-table";

export async function generateMetadata() {
  return generateMeta({
    title: "Orders Page",
    description:
      "A list of orders generated using the Tanstack Table. Built with Tailwind CSS, Shadcn UI and Next.js.",
    canonical: "/pages/orders"
  });
}

async function getOrders() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/(auth)/pages/orders/data.json")
  );

  return JSON.parse(data.toString());
}

export default async function Page() {
  const orders = await getOrders();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 divide-x">
          <h1 className="text-2xl font-bold">Orders</h1>
          <Breadcrumb className="hidden ps-6 lg:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/default">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/pages/orders">Pages</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Button asChild>
          <Link href="#">
            <PlusCircledIcon className="me-2" /> Create Order
          </Link>
        </Button>
      </div>
      <OrdersDataTable data={orders} />
    </div>
  );
}
