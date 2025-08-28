import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-[#7a97e3]/10 via-purple-50 to-violet-50 border-b border-border/50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto flex items-center gap-4 lg:gap-6">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-[#7a97e3] hover:bg-[#7a97e3]/10"
          onClick={onMenuToggle}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {/* Logo Placeholder */}
        <Avatar className="h-20 w-20 rounded-full border-2 border-[#7a97e3]/30">
          <AvatarFallback className="bg-gradient-to-br from-[#7a97e3]/20 to-purple-100 text-[#7a97e3]">
            <div className="flex flex-col items-center">
              <div className="text-xs">CONF</div>
              <div className="text-xs">EDER</div>
            </div>
          </AvatarFallback>
        </Avatar>

        {/* Organization Name */}
        <div className="flex-1">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-[#7a97e3] leading-tight">
            All-Ukrainian Union
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            of Public Organizations
          </h1>
          <h2 className="text-base md:text-xl lg:text-2xl text-purple-600 mt-1">
            "Confederation of
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Organizations of Persons with Disabilities of Ukraine"
          </h2>
        </div>
      </div>
    </header>
  );
}
