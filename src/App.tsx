import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Droplet, 
  Gift, 
  EyeOff,
  Diamond
} from 'lucide-react';

const WA_LINK = "https://wa.me/543516414867";

export default function App() {
  const [logoError, setLogoError] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-bg-base text-white font-sans selection:bg-gold-500 selection:text-black flex flex-col">
      
      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* FLOATING IG BUTTON */}
        <a 
          href="https://www.instagram.com/senti.aura/" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-[14px] md:p-4 rounded-full shadow-[0_4px_15px_rgba(220,39,67,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Seguir en Instagram"
        >
          <Instagram size={26} className="md:w-[28px] md:h-[28px]" />
        </a>

        {/* FLOATING WA BUTTON */}
        <a 
          href={WA_LINK} 
          target="_blank" 
          rel="noreferrer" 
          className="bg-[#25D366] text-white p-[14px] md:p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={26} className="md:w-[28px] md:h-[28px]" />
        </a>
      </div>

      {/* DELIVERY BAR (Mapped from original delivery section to theme layout) */}
      <div className="text-[11px] text-text-dim uppercase tracking-[1px] py-[10px] px-4 md:px-[60px] bg-[#0a0a0a] border-b border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-4 text-center">
        <span>Córdoba Capital • Entregas en el día</span>
        <span>Envíos en toda Córdoba</span>
        <span>Entregas en punto público</span>
      </div>

      {/* HEADER / HERO */}
      <header className="px-4 py-[40px] md:px-[60px] text-center border-b border-gold-500/20">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="w-[60px] h-[60px] border-2 border-gold-500 mx-auto mb-[15px] flex items-center justify-center rounded-full font-serif font-bold text-gold-500 text-xl overflow-hidden bg-bg-base">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Sentí Aura" 
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                "SA"
              )}
          </div>
          <h1 className="font-serif text-[32px] md:text-[42px] tracking-[6px] uppercase text-gold-400 mb-[5px]">
              Sentí Aura
          </h1>
          <div className="italic font-serif text-text-dim text-[16px] md:text-[18px]">
              Perfumes que hablan por vos 🖤
          </div>
        </motion.div>
      </header>

      {/* MAIN CONTENT GRID (Theme layout mapping) */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-[40px] md:px-[60px] grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-[30px]">
        
        {/* SIDEBAR (About, Trust, Quote) */}
        <motion.div 
          className="flex flex-col gap-[30px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* ABOUT SECTION */}
          <motion.section variants={fadeIn} className="brand-story">
            <h2 className="font-serif text-[20px] text-gold-500 mb-[10px]">Hola! Bienvenido a Sentí Aura</h2>
            <div className="text-[14px] leading-[1.6] text-text-dim space-y-4">
              <p>Te ayudo a encontrar tu perfume ideal <strong>sin comprar a ciegas ✨</strong></p>
              <p>Podés empezar con nuestro <strong className="text-white">kit 3x5ml</strong>, probarlos y elegir con seguridad.</p>
            </div>
          </motion.section>

          {/* TRUST SECTION */}
          <motion.section variants={fadeIn} className="trust-badges mt-[10px]">
            <div className="flex flex-col gap-[12px]">
              {[
                { title: "No compres a ciegas", desc: "Asesoramiento para tu estilo.", icon: EyeOff },
                { title: "Probá antes de elegir", desc: "Sentí la fragancia y decidí.", icon: Droplet },
                { title: "Elegí con seguridad", desc: "Exclusividad garantizada.", icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[10px] group">
                    <div className="w-[6px] h-[6px] bg-gold-500 rounded-full shrink-0 mt-[6px] transition-transform group-hover:scale-150"></div>
                    <div>
                      <div className="text-[13px] uppercase tracking-[1px] text-gold-400">{item.title}</div>
                      <div className="text-[12px] text-text-dim mt-[2px]">{item.desc}</div>
                    </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FOOTER QUOTE */}
          <motion.div variants={fadeIn} className="mt-8 lg:mt-auto px-6 py-8 border border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-transparent text-center relative shadow-[0_0_15px_rgba(197,160,40,0.1)]">
              <Sparkles className="absolute top-3 left-3 text-gold-500/30" size={16} />
              <Sparkles className="absolute bottom-3 right-3 text-gold-500/30" size={16} />
              <p className="text-[18px] md:text-[20px] italic text-gold-400 font-serif tracking-[1px] leading-relaxed">
                "Sentí tu esencia.<br/>Sentí Aura."
              </p>
          </motion.div>
        </motion.div>

        {/* PRODUCTS SECTION */}
        <motion.section 
          className="products-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="font-serif text-[14px] uppercase tracking-[2px] text-text-dim mb-[20px]">
            Nuestra Colección
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            
            {/* Product 1 */}
            <motion.div variants={fadeIn} className="bg-bg-card border border-white/5 p-[25px] relative transition-colors duration-300 hover:border-gold-500 flex flex-col justify-between group">
              <div>
                <Sparkles className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <div className="font-serif text-[18px] mb-[8px] text-white">Fragancias árabes premium</div>
                <div className="text-[12px] text-text-dim leading-[1.4]">Notas exóticas y duraderas de alta calidad.</div>
              </div>
              <a href={`${WA_LINK}?text=Hola!%20Me%20gustar%C3%ADa%20ver%20el%20cat%C3%A1logo%20de%20fragancias.`} target="_blank" rel="noreferrer" className="mt-[15px] text-[11px] uppercase tracking-[1px] text-gold-500 hover:text-gold-400 flex items-center gap-2 w-fit">
                Ver Catálogo <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </a>
            </motion.div>

            {/* Product 2 */}
            <motion.div variants={fadeIn} className="bg-bg-card border border-white/5 p-[25px] relative transition-colors duration-300 hover:border-gold-500 flex flex-col justify-between group">
              <div>
                <Droplet className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <div className="font-serif text-[18px] mb-[8px] text-white">Decants exclusivos</div>
                <div className="text-[12px] text-text-dim leading-[1.4]">Muestras fraccionadas para que experimentes el lujo.</div>
              </div>
              <a href={`${WA_LINK}?text=Hola!%20Me%20interesa%20explorar%20las%20muestras%20y%20decants.`} target="_blank" rel="noreferrer" className="mt-[15px] text-[11px] uppercase tracking-[1px] text-gold-500 hover:text-gold-400 flex items-center gap-2 w-fit">
                Explorar Muestras <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </a>
            </motion.div>

            {/* Product 3 (Featured) */}
            <motion.div variants={fadeIn} className="bg-bg-card border border-gold-500 p-[25px] relative transition-colors duration-300 flex flex-col justify-between group">
              <div>
                <Gift className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <div className="font-serif text-[18px] mb-[8px] text-white">Kit Aura 3x5ml</div>
                <div className="text-[12px] text-text-dim leading-[1.4]">Nuestra recomendación. Ideal para descubrir tu esencia favorita.</div>
              </div>
              <a href={`${WA_LINK}?text=Hola!%20Quiero%20pedir%20el%20Kit%20Aura%203x5ml.`} target="_blank" rel="noreferrer" className="mt-[15px] text-[11px] uppercase tracking-[1px] text-gold-500 font-bold hover:text-gold-400 flex items-center gap-2 w-fit">
                ⭐ Destacado &amp; El más pedido <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </a>
            </motion.div>

            {/* Product 4 */}
            <motion.div variants={fadeIn} className="bg-bg-card border border-white/5 p-[25px] relative transition-colors duration-300 hover:border-gold-500 flex flex-col justify-between group">
              <div>
                <Diamond className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <div className="font-serif text-[18px] mb-[8px] text-white">Perfumes personalizados</div>
                <div className="text-[12px] text-text-dim leading-[1.4]">Asesoría directa para encontrar el aroma que mejor se adapta a vos.</div>
              </div>
              <a href={`${WA_LINK}?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20asesor%C3%ADa%20para%20un%20perfume%20personalizado.`} target="_blank" rel="noreferrer" className="mt-[15px] text-[11px] uppercase tracking-[1px] text-gold-500 hover:text-gold-400 flex items-center gap-2 w-fit">
                Solicitar Asesoría <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </a>
            </motion.div>

          </div>
        </motion.section>
      </main>

      {/* FOOTER & CONTACT */}
      <footer className="bg-black py-[30px] px-6 md:px-[60px] border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-[30px] mt-auto">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-[40px] text-[13px] text-text-dim w-full lg:w-auto text-center sm:text-left justify-center lg:justify-start">
          <div className="contact-item">
              <span className="text-gold-500 block text-[10px] uppercase mb-[4px]">Instagram</span>
              <a href="https://www.instagram.com/senti.aura/" target="_blank" rel="noreferrer" className="hover:text-white flex items-center justify-center sm:justify-start gap-2 transition-colors">
                  <Instagram size={14}/> @senti.aura
              </a>
          </div>
          <div className="contact-item">
              <span className="text-gold-500 block text-[10px] uppercase mb-[4px]">Email</span>
              <a href="mailto:sentiaura.store@gmail.com" className="hover:text-white flex items-center justify-center sm:justify-start gap-2 transition-colors">
                  <Mail size={14}/> sentiaura.store@gmail.com
              </a>
          </div>
          <div className="contact-item">
              <span className="text-gold-500 block text-[10px] uppercase mb-[4px]">Ubicación</span>
              <span className="flex items-center justify-center sm:justify-start gap-2"><MapPin size={14}/> Córdoba, Argentina</span>
          </div>
        </div>
        
        <a 
          href={WA_LINK} 
          target="_blank" 
          rel="noreferrer" 
          className="bg-gold-500 text-black px-[24px] py-[12px] rounded-[2px] font-bold text-[13px] uppercase tracking-[1px] hover:bg-gold-400 transition-colors w-full lg:w-auto text-center flex justify-center items-center shrink-0"
        >
            Pedí tu perfume ahora
        </a>
      </footer>
    </div>
  );
}
