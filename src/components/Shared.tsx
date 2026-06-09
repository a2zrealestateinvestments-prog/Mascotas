import { ReactNode } from 'react';
import { Check } from 'lucide-react';

export const CtaButton = ({ href = "#offer-cta", text = "OBTENER ACCESO INMEDIATO", className = "" }: { href?: string, text?: string, className?: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('http')) {
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <a 
        href={href}
        className="bg-gradient-to-b from-green-500 to-green-600 text-white font-poppins font-semibold text-[18px] md:text-[20px] w-full max-w-[300px] h-[60px] rounded-[30px] hover:scale-105 transition-transform duration-300 shadow-[0_4px_15px_rgba(34,197,94,0.3)] flex items-center justify-center px-4"
        onClick={handleClick}
      >
        {text}
      </a>
      <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center text-[14px] text-neutral-light">
        <div className="flex items-center gap-1"><Check className="w-4 h-4 text-secondary" /> Pago 100% seguro</div>
        <div className="flex items-center gap-1"><Check className="w-4 h-4 text-secondary" /> Acceso inmediato</div>
        <div className="flex items-center gap-1"><Check className="w-4 h-4 text-secondary" /> Garantía de 14 días</div>
      </div>
    </div>
  );
};

export const Section = ({ children, className = "", id }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`w-full bg-white border border-border-light rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5 md:p-8 mb-6 ${className}`}>
    {children}
  </section>
);
