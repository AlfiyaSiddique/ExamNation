import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Sidebar = ({ items, userType }) => {
  const { pathname } = useLocation();
  const navigator = useNavigate()

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b">
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <h2 className="text-lg font-semibold">
                  {userType === "student" ? "Student Portal" : "Admin Portal"}
                </h2>
              </div>
            </div>
            <nav className="flex-1 overflow-auto p-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-[#25b7ea] text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t">
              <Button
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigator("/");
                }}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex h-screen w-64 flex-col border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-lg font-semibold">
              {userType === "student" ? "Student Portal" : "Admin Portal"}
            </h2>
          </div>
        </div>
        <nav className="flex-1 overflow-auto p-2">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-[#25b7ea] text-primary-foreground font-bold"
                  : "hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
            onClick={() => {
              localStorage.removeItem("token");
              navigator("/");
            }}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
