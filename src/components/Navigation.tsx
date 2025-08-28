import { Button } from "@/components/ui/button";
import { Home, Pill, MessageCircle } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/medications", icon: Pill, label: "Medications" },
    { path: "/chat", icon: MessageCircle, label: "Chat" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 md:relative md:bottom-auto md:border-t-0 md:border-r md:w-64 md:h-screen md:p-6">
      <div className="flex justify-around md:flex-col md:space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              className={`flex-1 md:flex-none md:justify-start ${
                isActive 
                  ? "bg-gradient-to-r from-health-primary to-health-primary/80 text-white shadow-[var(--shadow-health)]" 
                  : "hover:bg-muted"
              }`}
              asChild
            >
              <Link to={item.path}>
                <Icon className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}