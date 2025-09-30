"use client";

import * as React from "react";
import {
  IconChartBar,
  IconCreditCard,
  IconDashboard,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconInvoice,
  IconListDetails,
  IconMessageChatbot,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavAssistant } from "@/components/nav-assistant";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { APP_CONFIG } from "@/hooks/use-app-config";
import { NavBilling } from "./nav-billing";
import GreensparkLabsIcon from "@/lib/greenspark-labs-icon";
import { SparklesIcon } from "lucide-react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Clients",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navBilling: [
    {
      title: "Invoices",
      icon: IconInvoice,
      isActive: true,
      url: "/dashboard/invoicing",
    },
    {
      title: "Payments",
      icon: IconCreditCard,
      url: "/dashboard/payments",
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  assistant: [
    {
      name: "AI Assistant",
      url: "#",
      icon: IconMessageChatbot,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <SparklesIcon className="!size-5" />
                <span className="text-base font-semibold">
                  {APP_CONFIG.APP_NAME}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavBilling items={data.navBilling} />
        <NavAssistant items={data.assistant} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
