import { ShieldCheck } from 'lucide-react';
import { CtaButton } from './Shared';

export function Hero() {
  return (
    <div className="flex flex-col h-full bg-white px-6 py-10 lg:px-10 lg:py-12 justify-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-secondary rounded-full w-max mb-6">
        <span className="text-secondary font-bold text-xs uppercase tracking-wide">MÉTODO R.E.L.A.J.A.™</span>
      </div>
      
      <h1 className="text-3xl lg:text-[38px] leading-[1.1] text-neutral-text mb-4 font-montserrat font-bold">
        Elimina la Ansiedad por Separación de tu Perro en 14 Días
      </h1>
      
      <p className="text-lg text-neutral-light mb-8 font-open-sans">
        Un protocolo digital paso a paso para que tu perro aprenda a estar solo en casa, feliz y sin destrozos.
      </p>

      <div className="w-full bg-border-light rounded-[20px] mb-8 flex items-center justify-center overflow-hidden relative" style={{aspectRatio: '4/3'}}>
        <img 
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800&h=1000" 
          alt="Perro relajado" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg flex items-center gap-2 shadow-sm">
           <ShieldCheck className="w-5 h-5 text-guarantee" />
           <div className="text-left leading-tight">
             <p className="text-[10px] text-neutral-light font-bold">MÉTODO COMPROBADO</p>
             <p className="text-xs font-bold text-neutral-text">Libre de Estrés</p>
           </div>
        </div>
      </div>

      <CtaButton />
      
      <p className="text-center text-xs text-neutral-light mt-6 flex flex-wrap justify-center items-center gap-y-2">
        <span className="flex items-center"><span className="text-secondary font-bold mr-1">✓</span> Acceso de por vida</span>
        <span className="mx-3 text-border-light hidden sm:inline">|</span>
        <span className="flex items-center"><span className="text-secondary font-bold mr-1">✓</span> Garantía 14 días</span>
      </p>
    </div>
  );
}
