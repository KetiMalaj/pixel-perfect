import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ByNeedPage from "./pages/ByNeedPage.tsx";
import MarketingResearchPage from "./pages/MarketingResearchPage.tsx";
import CreativeMarketingPage from "./pages/CreativeMarketingPage.tsx";
import DigitalMarketingPage from "./pages/DigitalMarketingPage.tsx";
import DataPlatformsPage from "./pages/DataPlatformsPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/by-need/:slug" element={<ByNeedPage />} />
          <Route path="/services/marketing-research" element={<MarketingResearchPage />} />
          <Route path="/services/creative-marketing" element={<CreativeMarketingPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/data-platforms" element={<DataPlatformsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
