import { Input } from "./ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Artic </h1>
          </div>
          <div className="relative w-full md:w-64">
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
