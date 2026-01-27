import DashboardCard from "@/components/Cards/DashboardCard";
import { DashboardStat } from "@/components/types";
import React, { useState } from "react";

const dashboardStats: DashboardStat[] = [
  {
    id: 1,
    title: "Total Inventory",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    color: "primary",
    description: "Items in stock",
    unit: "items",
  },
  {
    id: 2,
    title: "Low Stock",
    value: "48",
    change: "-3.2%",
    trend: "down",
    color: "warning",
    description: "Items below threshold",
    unit: "SKUs",
  },
  {
    id: 3,
    title: "Carbon Saved",
    value: "2.4",
    change: "+8.7%",
    trend: "up",
    color: "success",
    description: "This month",
    unit: "tons",
  },
  {
    id: 4,
    title: "Pending Orders",
    value: "23",
    change: "+0",
    trend: "neutral",
    color: "info",
    description: "Awaiting fulfillment",
    unit: "orders",
  },
];

export default function Index() {

  const [dashboardStatsData, setDashboardStatsData] = useState<DashboardStat[]>(dashboardStats);

  return (
    <div className="w-full h-full bg-[#EEEEEE] p-10">
      {/* Dashboard header */}
      <div className="w-full flex gap-8">
        {dashboardStatsData.map((stat,index) => (
          <DashboardCard stat={stat} key={index}/>
        ))}
      </div>
    </div>
  );
}
