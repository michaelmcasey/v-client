import ThemeSwitch from "./theme-switch";
import Notifications from "./notifications";
import UserMenu from "./user-menu";
import Messages from "./messages";
import Search from "./search";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { HeaderBreadcrumb } from "./breadcrumb";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex flex-col">
      <header className="flex h-14 items-center gap-2 border-b bg-background px-4 lg:h-[60px]">
        <SidebarTrigger className="*:size-5" />
        <HeaderBreadcrumb />
        <div className="flex-1 flex justify-center">
          <Search />
        </div>
        <div className="flex items-center gap-2">
          <Messages />
          <Notifications />
          <ThemeSwitch />
          <UserMenu />
        </div>
      </header>
    </div>
  );
}
