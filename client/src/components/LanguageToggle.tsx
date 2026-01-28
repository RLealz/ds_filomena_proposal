import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-border">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
          language === "en"
            ? "bg-primary text-white"
            : "text-foreground hover:bg-secondary/10"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("pt")}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
          language === "pt"
            ? "bg-primary text-white"
            : "text-foreground hover:bg-secondary/10"
        }`}
      >
        PT
      </button>
    </div>
  );
}
