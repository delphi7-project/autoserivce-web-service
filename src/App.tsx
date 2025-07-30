
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Diagnostics from "./pages/Diagnostics";
import Maintenance from "./pages/Maintenance";
import Prices from "./pages/Prices";
import Reviews from "./pages/Reviews";
import Guarantees from "./pages/Guarantees";
import Equipment from "./pages/Equipment";
import FAQ from "./pages/FAQ";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
