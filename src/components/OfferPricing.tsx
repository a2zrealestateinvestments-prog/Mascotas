import { ClipboardList, CalendarDays, DoorOpen, Clock, Puzzle, LifeBuoy, Gift } from 'lucide-react';
import { Section, CtaButton } from './Shared';

export function OfferPricing() {
  const deliverables = [
    { title: "Manual R.E.L.A.J.A.", desc: "El protocolo completo detallado paso a paso en formato digital.", icon: ClipboardList },
    { title: "Calendario de 14 Días", desc: "Ruta de entrenamiento diaria exacta. Qué hacer y cuándo.", icon: CalendarDays },
    { title: "Protocolo La Puerta", desc: "Técnicas ocultas para insensibilizar la salida silenciosamente.", icon: DoorOpen },
    { title: "Crono de Ausencias", desc: "Tabla científica de tiempos seguros para dejarlo solo.", icon: Clock },
    { title: "Juegos Olfativos", desc: "Mecánicas para bajar el cortisol del perro en 5 minutos.", icon: Puzzle },
    { title: "Guía de S.O.S.", desc: "Qué hacer exactamente si hay una recaída o emergencia.", icon: LifeBuoy }
  ];

  const bonuses = [
    { title: "Audio Subliminal Calmante", desc: "Pistas binaurales diseñadas para frecuencias caninas.", value: "$29 USD" },
    { title: "Lista de Juguetes Seguros", desc: "Qué comprar y qué evitar para cuando se queda solo.", value: "$15 USD" }
  ];

  return (
    <>
      <Section className="pb-10 pt-10">
        <h2 className="text-3xl font-bold text-center mb-10 font-montserrat">Lo que recibes al instante</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-20">
          {deliverables.map((item, i) => (
            <div key={i} className="bg-white border border-border-light rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
               <div className="absolute bg-blue-50/50 w-32 h-32 -top-10 -right-10 rounded-full group-hover:scale-[2.5] transition-transform duration-700 z-0"></div>
               <div className="relative z-10 flex flex-col items-start">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-blue-100 mb-6 group-hover:border-primary/30 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-neutral-text">{item.title}</h3>
                  <p className="text-[15px] text-neutral-light leading-relaxed">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 font-montserrat text-accent uppercase tracking-wide">
          + Bonificaciones Exclusivas
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, i) => (
             <div key={i} className="bg-white border-2 border-accent rounded-xl p-6 relative flex flex-col shadow-sm">
                <div className="bg-accent text-white font-bold text-[11px] px-3 py-1 uppercase rounded absolute top-4 right-4">Bonus Gratis</div>
                <h4 className="font-bold text-lg font-montserrat mb-2 text-neutral-text pr-24">{bonus.title}</h4>
                <p className="text-[14px] text-neutral-light mb-4 leading-relaxed">{bonus.desc}</p>
                <div className="border-t border-border-light pt-3 mt-auto flex justify-between items-center">
                  <span className="text-[12px] font-bold text-accent uppercase">Valorado en {bonus.value}</span>
                  <span className="text-secondary font-bold text-[14px]">✓ Incluido</span>
                </div>
             </div>
          ))}
        </div>
      </Section>

      {/* Pricing Anchor */}
      <section id="pricing" className="bg-gradient-to-br from-white to-[#f0f7ff] border border-border-light rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6 md:p-10 mb-6 flex justify-between items-center sm:flex-row flex-col gap-6">
         <div>
            <p className="uppercase text-[11px] md:text-[13px] tracking-[1px] mb-2 font-semibold text-neutral-light">Inversión única hoy</p>
            <div className="text-6xl md:text-7xl font-bold font-montserrat text-accent leading-none -mb-1">
              $12.00
              <span className="text-2xl text-neutral-light/50 font-normal line-through ml-4">$97.00</span>
            </div>
         </div>
         <div className="text-center sm:text-right w-full sm:w-auto">
            <div className="text-[12px] text-neutral-text mb-2">Pago seguro procesado por</div>
            <div className="flex gap-2 justify-center sm:justify-end mb-4">
               <div className="w-10 h-6 bg-gray-200 rounded"></div>
               <div className="w-10 h-6 bg-gray-200 rounded"></div>
               <div className="w-10 h-6 bg-gray-200 rounded"></div>
            </div>
            <div id="offer-cta" className="mt-4">
              <CtaButton href="https://pay.hotmart.com/I106222086U" text="COMPRAR AHORA" />
            </div>
         </div>
      </section>
    </>
  );
}
