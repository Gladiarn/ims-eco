import React from "react";
import { ColorKey, DashboardStat } from "../types";
import {
  MdEco,
  MdInventory,
  MdReceipt,
  MdTrendingDown,
  MdTrendingFlat,
  MdTrendingUp,
  MdWarning,
} from "react-icons/md";

export default function DashboardCard({ stat }: { stat: DashboardStat }) {
  const colorConfig: Record<ColorKey, { bg: string; text: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary" },
    warning: { bg: "bg-warning/10", text: "text-warning" },
    success: { bg: "bg-success/10", text: "text-success" },
    info: { bg: "bg-info/10", text: "text-info" },
    error: { bg: "bg-error/10", text: "text-error" },
  };

  const colors = colorConfig[stat.color as ColorKey] || colorConfig.primary;

  const getIcon = (title: string, color: string) => {
    switch (title) {
      case "Total Inventory":
        return <MdInventory className={`${color} size-7`} />;
      case "Low Stock":
        return <MdWarning className={`${color} size-7`} />;
      case "Carbon Saved":
        return <MdEco className={`${color} size-7`} />;
      case "Pending Orders":
        return <MdReceipt className={`${color} size-7`} />;
      default:
        return <div className="size-5" />;
    }
  };

  const getMetricIcon = (trend: string, size: number = 16) => {
    switch (trend) {
      case "up":
        return {
          icon: <MdTrendingUp size={size} className="text-success" />,
          color: "text-success",
        };
      case "down":
        return {
          icon: <MdTrendingDown size={size} className="text-error" />,
          color: "text-error",
        };
      case "neutral":
        return {
          icon: <MdTrendingFlat size={size} className="text-gray-500" />,
          color: "text-gray-500",
        };
      default:
        return {
          icon: <MdTrendingFlat size={size} className="text-gray-500" />,
          color: "text-gray-500",
        };
    }
  };

  return (
    <div className="w-full border-l-3 border-primary px-5 p-3 rounded-md bg-card flex flex-col gap-1 h-fit">
      {/* Top row*/}
      <div className="flex items-center gap-3">
        {/* Icon*/}
        <div className={`p-2 ${colors.bg} rounded-lg`}>
          {getIcon(stat.title, colors.text)}
        </div>

        {/* Title*/}
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">{stat.title}</p>
        </div>
      </div>

      {/* Middle row*/}
      <div className="flex items-baseline justify-between mt-3">
        {/* Value*/}
        <div>
          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          {stat.unit && <p className="text-sm text-gray-400">{stat.unit}</p>}
        </div>

        {/* metrics */}
        <div className="flex items-center gap-1 text-sm font-medium">
          <span>{getMetricIcon(stat.trend).icon}</span>
          <span className={`${getMetricIcon(stat.trend).color}`}>
            {stat.change}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-2">
        <p className="text-xs text-muted-foreground">{stat.description}</p>
      </div>
    </div>
  );
}
