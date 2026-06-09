import { useState } from 'react';
import { Plus, Minus, Clock, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { Section, CtaButton } from './Shared';

export function FaqDeepDiveFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "¿Cuánto tiempo necesito dedicarle al día?", a: "El programa está diseñado para dueños ocupados. Solo necesitas entre 15 y 20 minutos diarios de práctica intencional, que incluso puedes dividir en sesiones cortas de 5 minutos a lo largo del día." },
    { q: "¿Funciona para perros adultos o adoptados?", a: "¡Sí! La neuroplasticidad canina permite reprogramar el cerebro sin importar la edad. De hecho, gran parte de los perros en el programa son adultos adoptados con traumas previos de abandono." },
    { q: "¿Necesito comprar herramientas o equipo especial?", a: "Absolutamente no. El método R.E.L.A.J.A.™ es 100% libre de herramientas aversivas. Solo necesitarás la comida favorita de tu perro, una puerta de tu casa y tu compromiso." },
    { q: "¿Qué pasa si intento el método y no me funciona?", a: "Tienes nuestra garantía incondicional de 14 días. Si aplicas el primer módulo y no ves un cambio en el nivel de ansiedad basal de tu perro, te devolvemos tu dinero. Sin letras chicas." },
    { q: "¿Es seguro realizar el pago online?", a: "Totalmente. Utilizamos plataformas de pago Stripe/PayPal con encriptación SSL de nivel bancario. Tu información financiera está protegida y nosotros nunca tenemos acceso a tus datos de tarjeta." }
  ];

  return (
    <>
      {/* Deep Dive / Comparativa */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-montserrat">Por qué la mayoría falla</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
           <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-red-400">
              <h3 className="font-bold text-xl md:text-2xl mb-6 font-montserrat flex items-center gap-3">
                 Lo Tradicional <span className="text-red-500 text-sm bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider font-bold">No Funciona</span>
              </h3>
              <ul className="space-y-4 text-neutral-light text-[16px] leading-relaxed">
                 <li className="flex items-start gap-3"><Minus className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> Regaños al llegar a casa si hubo destrozos.</li>
                 <li className="flex items-start gap-3"><Minus className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> Ignorar al perro abruptamente antes de salir.</li>
                 <li className="flex items-start gap-3"><Minus className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> Encerrarlo de golpe para "que se acostumbre".</li>
                 <li className="flex items-start gap-3"><Minus className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> Castigos que solo aumentan el miedo y la asociación negativa con quedarse solo.</li>
              </ul>
           </div>
           
           <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_25px_rgba(74,144,226,0.15)] border-t-[6px] border-primary relative">
              <div className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl mb-6 font-montserrat text-neutral-text">Método R.E.L.A.J.A.™</h3>
              <ul className="space-y-4 text-neutral-light text-[16px] leading-relaxed">
                 <li className="flex items-start gap-3"><Plus className="w-5 h-5 text-secondary shrink-0 mt-0.5" /> <strong className="text-neutral-text font-semibold">Reseteo nervioso:</strong> Baja el cortisol base.</li>
                 <li className="flex items-start gap-3"><Plus className="w-5 h-5 text-secondary shrink-0 mt-0.5" /> <strong className="text-neutral-text font-semibold">Micro-desensibilización:</strong> Exposición controlada sin detonar miedo.</li>
                 <li className="flex items-start gap-3"><Plus className="w-5 h-5 text-secondary shrink-0 mt-0.5" /> <strong className="text-neutral-text font-semibold">Refuerzo 100% positivo:</strong> Sin collares eléctricos ni castigos jamás.</li>
                 <li className="flex items-start gap-3"><Plus className="w-5 h-5 text-secondary shrink-0 mt-0.5" /> <strong className="text-neutral-text font-semibold">Asociaciones placenteras:</strong> Aprende que estar solo es señal de cosas buenas.</li>
              </ul>
           </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
         <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-montserrat">Preguntas Frecuentes</h2>
         <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white border transition-all duration-300 rounded-xl overflow-hidden cursor-pointer ${openFaq === i ? 'border-primary shadow-md' : 'border-border-light hover:border-gray-300'}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                 <div className={`p-6 md:px-8 py-5 flex justify-between items-center gap-4 transition-colors ${openFaq === i ? 'bg-blue-50/50' : 'bg-white'}`}>
                    <h4 className="font-bold font-montserrat text-[17px] md:text-lg text-neutral-text pr-4 leading-snug">{faq.q}</h4>
                    {openFaq === i ? 
                      <div className="bg-primary/10 p-1.5 rounded-full"><Minus className="w-5 h-5 text-primary shrink-0" /></div> : 
                      <div className="bg-gray-100 p-1.5 rounded-full"><Plus className="w-5 h-5 text-neutral-light shrink-0" /></div>
                    }
                 </div>
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 md:px-8 pb-6 pt-2 text-neutral-light leading-relaxed text-[15px] md:text-[16px]">
                      {faq.a}
                    </p>
                 </div>
              </div>
            ))}
         </div>
      </Section>

      {/* UrgenciaBanner */}
      <Section className="bg-warning-bg border-2 border-yellow-300">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center">
            <Clock className="w-6 h-6 text-accent shrink-0 animate-pulse" />
            <p className="text-neutral-text font-medium text-[15px] md:text-[16px]">
              Cada día que pasa, el patrón de estrés en el cerebro de tu perro se hace más fuerte. Empieza a revertirlo hoy por solo $12.
            </p>
         </div>
      </Section>

      <Section className="text-center pt-8 pb-8">
          <CtaButton className="mx-auto" />
      </Section>

      {/* Cierre Emocional */}
      <Section className="bg-gradient-to-br from-primary to-blue-800 border-none">
         <div className="max-w-[800px] mx-auto text-center w-full py-10 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-8 leading-tight text-white drop-shadow-md">
              Tu perro te está esperando para ser feliz
            </h2>
            <p className="text-lg md:text-xl mb-12 text-blue-100 leading-relaxed font-light drop-shadow">
              Él no quiere sufrir cada vez que te vas. Dale la herramienta para entender que siempre vuelves y que puede disfrutar tranquilamente su espacio.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.2)] max-w-[450px] mx-auto">
               <div className="mb-6">
                 <p className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-2">Precio regular <span className="line-through">$97</span></p>
                 <p className="text-accent font-bold text-5xl font-montserrat drop-shadow-lg">$12 USD</p>
                 <p className="text-white mt-2 font-medium text-sm">Pago único • Acceso Inmediato</p>
               </div>
               
               <a 
                 href="#offer-cta"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('offer-cta')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                 }}
                 className="bg-gradient-to-b from-green-500 to-green-600 text-white font-poppins font-bold text-lg md:text-xl w-full h-[60px] rounded-[30px] hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(34,197,94,0.4)] mx-auto mb-4 flex items-center justify-center border-b-4 border-green-700"
               >
                 SÍ, QUIERO PAZ MENTAL
               </a>
               
               <p className="text-blue-100 text-xs flex items-center justify-center gap-2">
                 <Lock className="w-3 h-3" /> Pago 100% Seguro Confirmado
               </p>
            </div>
         </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border-light py-6 md:py-8 mt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-neutral-light gap-4 px-4">
         <div>&copy; {new Date().getFullYear()} Perro Solo Sin Estrés • Todos los derechos reservados</div>
         <div className="flex gap-6 font-semibold uppercase">
           <a href="#" className="hover:text-neutral-text transition-colors">Privacidad</a>
           <a href="#" className="hover:text-neutral-text transition-colors">Términos</a>
           <a href="#" className="hover:text-neutral-text transition-colors">Soporte</a>
         </div>
      </footer>
    </>
  );
}
