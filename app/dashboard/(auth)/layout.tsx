import { cookies } from "next/headers";

import MainLayout from "@/components/main-layout";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieStoreValue = cookieStore.get("sidebar:state")?.value;

  return (
    <SidebarProvider defaultOpen={cookieStoreValue ? JSON.parse(cookieStoreValue) : true}>
      <MainLayout>{children}</MainLayout>
    </SidebarProvider>
  );
}
