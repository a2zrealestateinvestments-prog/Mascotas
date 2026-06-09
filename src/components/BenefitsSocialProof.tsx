import { CheckCircle2, Star, ShieldCheck, XCircle } from 'lucide-react';
import { Section } from './Shared';

export function BenefitsSocialProof() {
  return (
    <>
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-montserrat text-primary">Lo que vas a lograr:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {[
            "Salir de casa sin ataques de ansiedad ni lloros",
            "Terminar con la destrucción de muebles y puertas",
            "Dejar de preocuparte por las quejas de los vecinos",
            "Recuperar tu vida social y libertades sin culpa",
            "No más 'accidentes' dentro de la casa en tu ausencia",
            "Fortalecer el vínculo con un perro más seguro de sí mismo"
          ].map((benefit, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle2 className="w-7 h-7 text-secondary flex-shrink-0 mt-0.5 drop-shadow-sm" />
              <span className="text-lg md:text-xl text-neutral-text leading-tight">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="overflow-hidden">
        <div className="text-center mb-8">
           <h2 className="text-2xl md:text-3xl font-bold mb-3 font-montserrat">Historias de Transformación</h2>
           <p className="text-lg text-neutral-light">Más de <strong className="text-primary font-bold text-xl ml-1">+3,500 perros</strong> ya han recuperado su tranquilidad.</p>
        </div>
        
        <div className="flex overflow-x-auto pb-8 pt-4 snap-x snap-mandatory hide-scrollbar gap-8 md:gap-6 px-4 md:px-0 max-w-6xl mx-auto">
          {[
            { name: "Laura Gómez", location: "México", text: "No lo podía creer. Al día 8 dejé la cámara grabando y Firulais simplemente se fue a dormir a su cama. Antes era un mar de lágrimas. Esto no tiene precio y me devolvió la vida.", init: "LG" },
            { name: "Carlos y Max", location: "Colombia", text: "Estaba a punto de que me echaran del apartamento por los aullidos de Max. El método es claro, fácil y la progresión es mágica. Mi perro es otro, mil gracias.", init: "CM" },
            { name: "Ana Rodríguez", location: "España", text: "Había probado collares, gotas y adiestradores tradicionales sin éxito. Nada funcionaba hasta que entendí la neurociencia detrás de este método. ¡Gracias infinitas!", init: "AR" }
          ].map((review, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[320px] lg:w-[350px] bg-white p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-border-light hover:-translate-y-1 transition-transform duration-300">
               <div className="flex items-center gap-5 mb-6">
                 <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center font-bold text-xl text-primary font-montserrat">{review.init}</div>
                 <div>
                    <h4 className="font-bold text-neutral-text font-montserrat text-lg">{review.name}</h4>
                    <p className="text-sm text-neutral-light">{review.location}</p>
                 </div>
               </div>
               <div className="flex gap-1 mb-6">
                 {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 text-accent fill-accent shadow-sm" />)}
               </div>
               <p className="italic text-neutral-text font-open-sans leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Garantía */}
      <div className="bg-primary text-white p-6 md:p-8 rounded-xl shadow-[0_4px_12px_rgba(40,167,69,0.2)] mb-6 flex flex-col sm:flex-row items-center gap-6">
         <div className="text-[40px] drop-shadow-sm">🛡️</div>
         <div>
            <h3 className="text-xl font-bold font-montserrat mb-2 uppercase tracking-wide">Garantía Total de Satisfacción</h3>
            <p className="text-blue-50 text-sm md:text-[15px] leading-relaxed">
              Si en 14 días no ves un cambio en el nivel de ansiedad basal de tu perro, te devolvemos el <strong className="text-white">100% de tu inversión</strong> sin preguntas incómodas.
            </p>
         </div>
      </div>

       <Section>
         <div className="max-w-3xl mx-auto bg-warning-bg rounded-2xl border-2 border-accent p-6 md:p-10 relative overflow-hidden shadow-sm">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
             <h3 className="text-2xl md:text-3xl font-bold text-neutral-text font-montserrat mb-8 text-center">Atención: A quién <span className="text-red-600">NO</span> va dirigido</h3>
             <ul className="space-y-6 mb-8 pl-0">
                {[
                  "Dueños que buscan una 'solución mágica' sin dedicar 15-20 minutos diarios",
                  "Personas que prefieren usar castigos, collares eléctricos o métodos aversivos",
                  "Quienes creen que su perro 'se porta mal por vengativo' cuando salen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle className="w-7 h-7 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-text font-medium text-lg leading-snug">{item}</span>
                  </li>
                ))}
             </ul>
             <div className="bg-white/80 p-6 rounded-xl border border-yellow-200 text-center shadow-sm">
               <p className="text-neutral-text font-semibold text-lg">Este método científico requiere <strong className="text-guarantee">empatía, consistencia y mucho amor</strong> por tu mascota.</p>
             </div>
         </div>
       </Section>
    </>
  );
}
