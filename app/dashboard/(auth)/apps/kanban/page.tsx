import { generateMeta } from "@/lib/utils";
import { AlertCircleIcon } from "lucide-react";

export async function generateMetadata() {
  return generateMeta({
    title: "Kanban",
    description:
      "Create a layout where you can easily manage your projects and tasks with the Kanban template. Optimize your workflow with flexible and customizable columns.",
    canonical: "/apps/kanban"
  });
}

export default function Page() {
  return (
    <div className="flex h-[90vh] items-center justify-center text-center">
      <div className="max-w-screen-sm space-y-4">
        <h1 className="flex items-center justify-center text-3xl font-bold tracking-tight lg:text-4xl">
          <svg
            className="mr-5 h-9 w-9 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Kanban
        </h1>
        <div className="">
          Easily manage your projects and tasks with Kanban board. Organize your workflow and
          increase team productivity with drag-and-drop.
        </div>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <AlertCircleIcon className="h-4 w-4 text-orange-400" />
          This page is currently under construction.
        </div>
      </div>
    </div>
  );
}
