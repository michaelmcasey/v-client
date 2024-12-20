"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export function HeaderBreadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard/default">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {paths.length > 1 && paths.map((path, index) => {
          if (path === "dashboard") return null;
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const label = path.split("-").map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(" ");

          return (
            <React.Fragment key={path}>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                {index === paths.length - 1 ? (
                  <span className="font-medium text-foreground">{label}</span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
