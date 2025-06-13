import darkLogo from "../../assets/hai-build-dark-logo.png";
import factifaiLogo from "../../assets/factifai-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useExploreModeContext } from "@/contexts/ExploreModeContext.tsx";
import { useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const { showGraph, setShowGraph, setIsExploreMode } = useExploreModeContext();

  useEffect(() => {
    // Update explore mode status when route changes
    if (location.pathname === "/explore-mode") {
      setIsExploreMode(true);
    } else {
      setIsExploreMode(false);
      // Reset graph view when navigating away from explore mode
      if (showGraph) {
        setShowGraph(false);
      }
    }
  }, [location.pathname, setIsExploreMode, showGraph, setShowGraph]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/95 backdrop-blur-md py-3 shadow-md z-50 transition-all duration-200 border-b border-border/40">
      <div className="px-6 flex items-center">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={factifaiLogo}
              alt="FACTIFAI Logo"
              className="h-5 my-1.5 w-auto translate-y-[1px]"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center gap-4">
          <img src={darkLogo} alt="HAI Build Logo" className="h-6 w-auto" />
        </div>
      </div>
    </header>
  );
};
