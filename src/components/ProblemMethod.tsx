import { Brain, TrendingUp, Target, HeartCrack } from 'lucide-react';
import { Section } from './Shared';

export function ProblemMethod() {
  return (
    <>
      <Section className="text-center py-8">
        <h2 className="text-xl md:text-2xl font-light text-primary font-montserrat leading-relaxed">
          Únete a +3,500 dueños que ya han recuperado su libertad y la paz mental de sus mejores amigos, <strong className="font-semibold text-neutral-text">sin métodos crueles ni medicamentos.</strong>
        </h2>
      </Section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
             <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-8 font-montserrat tracking-tight leading-tight">
               ¿Te rompe el corazón cerrar la puerta?
             </h2>
             <div className="bg-bg-light p-8 rounded-xl border-l-[4px] border-l-accent shadow-sm relative mb-8">
               <HeartCrack className="absolute top-8 right-8 w-16 h-16 text-primary opacity-[0.03] rotate-12" />
               <p className="text-xl md:text-2xl italic text-primary font-open-sans leading-relaxed">
                 "Cada vez que tomo las llaves, empieza a temblar. Llora, rasca la puerta y a veces destruye cosas. Me siento prisionero en mi propia casa por la culpa."
               </p>
             </div>
             <p className="text-lg text-neutral-light leading-relaxed">
               La ansiedad por separación no es rebeldía ni falta de entrenamiento básico. Es un estado de pánico real. Tu perro no está intentando castigarte por dejarlo, está aterrorizado de que no vuelvas.
             </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
               "Ladridos y aullidos incontrolables",
               "Destrucción de muebles o puertas",
               "Eliminación en casa (pipí/popó)",
               "Babeo excesivo y jadeos",
               "Intentos de escape desesperados",
               "Inapetencia mientras estás fuera"
            ].map((symptom, i) => (
              <div key={i} className="bg-bg-light p-5 rounded-xl flex items-start gap-4 shadow-sm border border-border-light hover:shadow-md transition-shadow">
                <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                <span className="text-neutral-text font-medium text-[16px]">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="mb-10 flex flex-col items-center">
           <div className="w-32 h-32 rounded-full border-[6px] border-secondary bg-white flex items-center justify-center mb-8 shadow-md">
             <span className="text-2xl font-bold text-neutral-text font-montserrat">R.E.L.A.J.A.™</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-6 font-montserrat">
             La Solución: El Método R.E.L.A.J.A.™
           </h2>
           <p className="text-lg md:text-xl text-neutral-light max-w-3xl mx-auto leading-relaxed">
             Un protocolo de 14 días basado en neurociencia canina moderna. En lugar de castigar el miedo, reprogramamos cómo el cerebro de tu perro procesa tu ausencia mediante tres pilares fundamentales.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { title: "Reseteo Cognitivo", desc: "Interrumpimos el ciclo de pánico y reducimos el cortisol base, creando un lienzo en blanco para aprender.", icon: Brain },
             { title: "Desensibilización", desc: "Aumentamos el umbral de tolerancia a tus salidas de forma indetectable, sin desencadenar su miedo.", icon: TrendingUp },
             { title: "Independencia", desc: "Enseñamos a tu perro a disfrutar de su compañía creando asociaciones positivas con tu ausencia.", icon: Target }
           ].map((pillar, i) => (
              <div key={i} className="group bg-bg-light p-6 rounded-2xl border border-border-light hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-primary transition-all duration-300">
                  <pillar.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-4 text-neutral-text">{pillar.title}</h3>
                <p className="text-[15px] text-neutral-light leading-relaxed">{pillar.desc}</p>
              </div>
           ))}
        </div>
      </Section>
    </>
  );
}
