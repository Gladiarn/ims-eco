import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  MdDashboard,
  MdInventory,
  MdRecycling,
  MdPeople,
  MdSettings,
  MdEco,
  MdFactory,
  MdWarehouse,
  MdAssessment,
  MdReceipt,
  MdAnalytics,
} from "react-icons/md";
import { RiMenuUnfold4Line, RiMenuUnfold3Line } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";
import { useRouter } from "next/router";
import { menuItemTypes } from "../types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) {
  const { theme } = useTheme();

  const menuItems: menuItemTypes[] = [
    {
      icon: <MdDashboard className="text-muted-foreground size-6" />,
      label: "Dashboard",
      href: "/",
    },
    // CORE INVENTORY OPERATIONS
    {
      icon: <MdInventory className="text-muted-foreground size-6" />,
      label: "Inventory",
      subItems: [
        { label: "All Products", href: "/inventory/products" },
        { label: "By Warehouse", href: "/inventory/warehouse-view" },
        { label: "Low Stock", href: "/inventory/low-stock" },
        { label: "Categories", href: "/inventory/categories" },
      ],
    },
    {
      icon: <MdWarehouse className="text-muted-foreground size-6" />,
      label: "Warehouses",
      subItems: [
        { label: "All Locations", href: "/warehouses" },
        { label: "Transfer Stock", href: "/warehouses/transfers" },
        { label: "Stock Count", href: "/warehouses/stock-count" },
        { label: "Location Setup", href: "/warehouses/setup" },
      ],
    },
    // MOVEMENT & TRANSACTIONS
    {
      icon: <MdReceipt className="text-muted-foreground size-6" />,
      label: "Transactions",
      subItems: [
        { label: "Stock In", href: "/transactions/in" },
        { label: "Stock Out", href: "/transactions/out" },
        { label: "Adjustments", href: "/transactions/adjust" },
        { label: "View All", href: "/transactions" },
      ],
    },
    // ORDERS & FULFILLMENT
    {
      icon: <MdAssessment className="text-muted-foreground size-6" />,
      label: "Orders",
      subItems: [
        { label: "New Orders", href: "/orders/new" },
        { label: "To Fulfill", href: "/orders/fulfill" },
        { label: "By Warehouse", href: "/orders/by-warehouse" },
        { label: "Returns", href: "/orders/returns" },
      ],
    },
    // SUPPLY CHAIN
    {
      icon: <MdFactory className="text-muted-foreground size-6" />,
      label: "Supply Chain",
      subItems: [
        { label: "Suppliers", href: "/supply/suppliers" },
        { label: "Purchase Orders", href: "/supply/purchase-orders" },
        { label: "Deliveries", href: "/supply/deliveries" },
        { label: "Reordering", href: "/supply/reorder" },
      ],
    },
    // ANALYTICS & REPORTS
    {
      icon: <MdAnalytics className="text-muted-foreground size-6" />,
      label: "Analytics",
      subItems: [
        { label: "Dashboard", href: "/analytics" },
        { label: "Stock Value", href: "/analytics/valuation" },
        { label: "Turnover Rate", href: "/analytics/turnover" },
        { label: "Warehouse Performance", href: "/analytics/warehouse" },
      ],
    },
    // ECO-CYCLE SPECIFIC
    {
      icon: <MdEco className="text-muted-foreground size-6" />,
      label: "Sustainability",
      subItems: [
        { label: "Carbon Impact", href: "/sustainability/carbon" },
        { label: "Recycling Stats", href: "/sustainability/recycling" },
        { label: "Material Flow", href: "/sustainability/material-flow" },
      ],
    },
    // ADMINISTRATION
    {
      icon: <MdPeople className="text-muted-foreground size-6" />,
      label: "Team",
      href: "/team",
    },
    {
      icon: <MdSettings className="text-muted-foreground size-6" />,
      label: "Settings",
      href: "/settings",
    },
  ];
  const router = useRouter();
  const pathname = router.pathname;
  const [accordionValue, setAccordionValue] = useState<string>("");

  const collapseTrigger = () => {
    setCollapsed(!collapsed);
    setAccordionValue("");
  };

  return (
    <div
      className={`relative 
        w-full
        h-full
        border-r ${theme === "dark" ? "border-primary/10" : "border-primary/10"}
  
        transition-all ease-in-out duration-200
        flex flex-col
        overflow-hidden

`}
      style={{
        background: "var(--sidebar-bg)",
      }}
    >
      {/* Header */}
      <div
        className={`py-4 px-6 flex items-center justify-between border-b border-border ${collapsed ? "flex-col gap-2" : "flex-row gap-0"} `}
      >
        <div className="flex gap-3">
          <div className="p-2 bg-primary rounded-full">
            <FaLeaf className="size-6 text-[#FFFFFF]" />
          </div>
          {!collapsed && (
            <div className="flex flex-col -space-y-1">
              <h2 className="font-bold bg-linear-to-br from-primary-light to-primary bg-clip-text text-transparent text-lg">
                EcoCycle
              </h2>
              <p className="text-xs text-muted-foreground">Management</p>
            </div>
          )}
        </div>
        <div
          className="p-1.5 rounded-full bg-primary/5 cursor-pointer hover:bg-primary/15 transition-colors ease-in-out duration-200"
          onClick={() => collapseTrigger()}
        >
          {collapsed ? (
            <RiMenuUnfold3Line className="size-5 text-muted-foreground" />
          ) : (
            <RiMenuUnfold4Line className="size-5 text-muted-foreground" />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 overflow-hidden">
        {/* Navigation */}

        <Accordion
          type="single"
          collapsible
          className="h-full flex-1 overflow-y-auto"
          value={accordionValue}
          onValueChange={setAccordionValue}
        >
          <div className="flex flex-col pt-3 gap-1.5 h-full">
            {menuItems.map((item, index) => (
              <div key={index} className="px-3">
                {item.subItems ? (
                  <AccordionItem value={item.label}>
                    <AccordionTrigger
                      className="p-0"
                      collapsed={collapsed}
                      onClick={() => collapsed && setCollapsed(false)}
                    >
                      <Tooltip disableHoverableContent open={collapsed ? undefined : false}>
                        <TooltipTrigger asChild>
                          <div
                            className={`${pathname === item.href ? "bg-primary/10 pl-5" : "hover:bg-primary/10 hover:pl-5"} flex gap-3.5 items-center w-full rounded-lg p-3 transition-all ease-in-out duration-200 cursor-pointer`}
                          >
                            <span>{item.icon}</span>
                            {!collapsed && (
                              <span className="text-sm font-medium text-muted-foreground">
                                {item.label}
                              </span>
                            )}
                          </div>
                        </TooltipTrigger>
                        {collapsed && (
                          <TooltipContent side="right">
                            {item.label}
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </AccordionTrigger>
                    <AccordionContent className="border-0">
                      <div className="flex flex-col pl-11 gap-.5 py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="border-l border-muted-foreground pl-1 text-muted-foreground flex items-center gap-1 group"
                          >
                            <div className="w-2 border-t border-muted-foreground "></div>
                            <p className="group-hover:text-primary/80">
                              {subItem.label}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Tooltip disableHoverableContent open={collapsed ? undefined : false} >
                    <TooltipTrigger asChild>
                      <div>
                        <Link
                          href={item.href!}
                          className={`${pathname === item.href ? "bg-primary/10 pl-5" : "hover:bg-primary/10 hover:pl-5"} flex gap-3.5 items-center w-full rounded-lg p-3 transition-all ease-in-out duration-200 cursor-pointer`}
                        >
                          <span>{item.icon}</span>
                          {!collapsed && (
                            <span className="text-sm font-medium text-muted-foreground">
                              {item.label}
                            </span>
                          )}
                        </Link>
                      </div>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                )}
              </div>
            ))}
          </div>
        </Accordion>

        {/* tagline */}
        <div className="flex flex-col justify-center py-7 border-t border-border">
          {!collapsed ? (
            <div className="text-center">
              <p className="text-xs text-muted-foreground italic">
                Track Beyond Stock
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-1">
                Circular Inventory Management
              </p>
              <p className="text-[9px] text-muted-foreground/40 mt-2">
                © 2026 Bulilan
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="p-1.5 bg-primary/10 rounded-lg">
                <MdRecycling className="size-4 text-primary" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
