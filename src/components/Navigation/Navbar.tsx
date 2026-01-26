import { MdBrightness7, MdBrightness4, MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useTheme } from "next-themes";
import { GiRecycle } from "react-icons/gi";

export default function Navbar({ collapsed }: { collapsed: boolean }) {
  const { theme, setTheme } = useTheme();
  const user = "Guest"
  const notifications: number = 3;
  return (
    <nav
      className={`
    overflow-auto
    py-3 px-6 
    bg-card
    flex items-center justify-between 
    w-full sticky top-0 z-10 
    transition-[padding] duration-200 ease-in-out
    ${collapsed ? "pl-26" : "pl-76"}
  `}
    >
      {/* Main Header */}
      <div className="flex items-center gap-4">
        <div className="p-1.5 bg-primary rounded-full inline-block">
          <GiRecycle className="size-6 text-[#FFFFFF]" />
        </div>
        {/* Name */}
        <p className="font-bold bg-linear-to-br from-primary to-primary-light bg-clip-text text-transparent">
          EcoCycle Co.
        </p>
        {/* Tagline */}
        <div className="px-3 py-1.5 bg-primary-light/10 rounded-full">
          <p className="text-xs font-semibold text-primary">
            Sustainable Inventory Management
          </p>
        </div>
      </div>

      {/* SubHeader */}
      <div className="flex gap-1.5 items-center">
        {/* notif */}
        <button className="p-1.5 rounded-full bg-primary/5 cursor-pointer hover:bg-primary/15 transition-colors ease-in-out duration-200 relative">
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-error text-white text-[13px] leading-0 w-4.5 h-4.5 flex items-center justify-center rounded-full">
              {notifications > 9 ? "9+" : notifications}
            </span>
          )}
          <MdNotifications className="size-6 text-muted-foreground" />
        </button>
        {/* theme toggle */}
        <button
          className="p-1.5 rounded-full bg-primary/5 cursor-pointer hover:bg-primary/15 transition-colors ease-in-out duration-200"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <MdBrightness7 className="size-6 text-muted-foreground" />
          ) : (
            <MdBrightness4 className="size-6 text-muted-foreground" />
          )}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 ml-2">
          <p className="text-sm text-secondary-light">Hello, {user}</p>
          <div className="p-1 rounded-full bg-primary/20 cursor-pointer hover:bg-primary/30 transition-colors ease-in-out duration-200">
            <FaUserCircle className="size-9 text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
}
