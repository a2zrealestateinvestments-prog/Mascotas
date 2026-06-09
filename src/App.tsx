import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemMethod } from './components/ProblemMethod';
import { BenefitsSocialProof } from './components/BenefitsSocialProof';
import { OfferPricing } from './components/OfferPricing';
import { FaqDeepDiveFooter } from './components/FaqDeepDiveFooter';
import { ChevronRight } from 'lucide-react';

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('offer-cta')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-bg-light lg:grid lg:grid-cols-[420px_1fr] xl:grid-cols-[480px_1fr]">
      {/* Sidebar / Hero */}
      <div className="bg-white border-r border-border-light lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto flex flex-col justify-center hide-scrollbar z-20">
         <Hero />
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 lg:p-8 xl:p-12 overflow-x-hidden">
         <div className="max-w-[1000px] mx-auto space-y-8">
            <ProblemMethod />
            <BenefitsSocialProof />
            <OfferPricing />
            <FaqDeepDiveFooter />
         </div>
      </div>

      {/* Sticky Bottom Bar for Mobile */}
      <div 
        className={`fixed bottom-0 left-0 w-full bg-white border-t border-border-light p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-50 md:hidden transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
         <a 
           href="#offer-cta"
           onClick={scrollToPricing}
           className="w-full bg-gradient-to-b from-green-500 to-green-600 text-white font-poppins font-bold text-[18px] py-4 rounded-full flex justify-center items-center gap-2 shadow-[0_4px_10px_rgba(34,197,94,0.3)] active:scale-95 transition-transform"
         >
            ACCEDER POR SOLO $12 <ChevronRight className="w-5 h-5 relative top-[1px]" />
         </a>
      </div>
    </div>
  );
}
