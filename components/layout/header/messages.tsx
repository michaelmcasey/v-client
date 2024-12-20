import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { messages, type Message } from "./data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

export default function Messages() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="link" className="relative text-foreground">
          <MailIcon className="animate-tada h-5 w-5" />
          <Badge className="absolute bottom-[calc(100%-10px)] left-[calc(100%-12px)] h-4 w-4 items-center justify-center rounded-full p-0 text-[8px] font-semibold">
            3
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[999] mx-4 max-w-sm p-0 lg:w-[320px]">
        <DropdownMenuLabel>
          <div className="border-default-100 flex justify-between border-b px-4 py-3">
            <div className="text-default-800 text-sm font-medium">Messages</div>
            <div className="text-default-800 text-xs md:text-right">
              <Link href="" className="underline">
                View all
              </Link>
            </div>
          </div>
        </DropdownMenuLabel>
        <div className="h-[300px] xl:h-[350px]">
          <ScrollArea className="h-full">
            {messages.map((item: Message, index: number) => (
              <DropdownMenuItem
                key={`inbox-${index}`}
                className="group flex cursor-pointer gap-9 px-4 py-2">
                <div className="flex flex-1 items-start gap-2">
                  <div className="flex-none">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={`${process.env.DASHBOARD_BASE_URL}/images/avatars/${item.image}`}
                      />
                      <AvatarFallback> {item.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-1 flex-col gap-0.5">
                    <div className="text-default-600 dark:group-hover:text-default-800 truncate text-sm font-normal">
                      {item.title}
                    </div>
                    <div className="text-default-600 dark:group-hover:text-default-700 line-clamp-1 text-xs font-light">
                      {item.desc}
                    </div>
                    <div className="text-default-400 dark:group-hover:text-default-500 text-xs">
                      {" "}
                      {item.date}
                    </div>
                  </div>
                </div>
                {item.hasnotifaction && (
                  <div className="flex-0">
                    <span className="dark:border-default-400 inline-block h-[10px] w-[10px] rounded-full border border-destructive-foreground bg-destructive" />
                  </div>
                )}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
