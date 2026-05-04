/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronUp, 
} from 'lucide-react';

// Shared components/styles
const SectionTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-4xl md:text-6xl font-serif text-center uppercase tracking-[0.2em] mb-12 glow-gold ${className}`}>
    {children}
  </h2>
);

const CarvedButton = ({ children, onClick, className = "", isLink = false, href = "", variant = "gold" }: any) => {
  const Component = isLink ? motion.a : motion.button;
  
  return (
    <Component
      {...(isLink ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick })}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        scale: [1, 1.08, 1],
        boxShadow: [
          "0 0 15px rgba(212, 175, 55, 0.4)",
          "0 0 40px rgba(212, 175, 55, 0.8)",
          "0 0 15px rgba(212, 175, 55, 0.4)"
        ]
      }}
      transition={{ 
        duration: 2.2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`relative px-4 py-3 md:px-8 md:py-3.5 font-accent font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm flex items-center justify-center min-w-[220px] md:min-w-[260px] cursor-pointer transition-all duration-300 bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] ${className}`}
    >
       {/* Ornaments */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-4 h-4 bg-black border border-gold" />
       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-4 h-4 bg-black border border-gold" />
       
       <span className="relative z-10">{children}</span>
    </Component>
  )
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const slides = [
    {
      id: 0,
      image: "https://s10.iimage.su/s/04/gxvs81PxGo4zzeumgMISQUDHui2BazUoGtevjtQWZ.png",
      layout: 'center',
      content: {
        overline: "ПСИХОЛОГИЧЕСКИЙ КВЕСТ",
        title: "ЛЕС ТЕНЕЙ",
        subtitle: "ПУТЕШЕСТВИЕ К СЕБЕ НАСТОЯЩЕМУ"
      },
      contentPos: 'top'
    },
    {
      id: 1,
      image: "https://s10.iimage.su/s/04/gMFFQftxfzBb5azrtmsQ3SN2tg3aXnKKNF8u52K9O.png",
      layout: 'split',
      content: {
        left: "Это путешествие в глубины вашего бессознательного. Вы встретитесь со своими тенями, посмотрите в лицо страхам и откроете то, что было скрыто.",
        right: "Лес теней — это путь героя к целостности, силе и свободе."
      }
    },
    {
      id: 2,
      image: "https://s10.iimage.su/s/04/gdO4H3sx72zW280KnAcYfzbuVie8UdT537mENDCld.png",
      layout: 'left',
      content: {
        left: "Лес — символ глубин вашего бессознательного, с которыми вы сможете соприкоснуться"
      }
    },
    {
      id: 3,
      image: "https://s10.iimage.su/s/04/gEnBfEExSoOpASeZ9VbLhmJfWUdaZj7z84d3pqsD0.png",
      layout: 'split',
      content: {
        left: "Каждый человек живёт в своей сказке.",
        right: "Но эту сказку можно переписать."
      }
    },
    {
      id: 4,
      image: "https://s10.iimage.su/s/04/gZAXUjaxj2h0jXczmV599hYhVtquJgHwdLHOlBVgw.png",
      layout: 'split',
      contentPos: 'top',
      content: {
        left: (
          <div className="space-y-4">
             <h3 className="text-gold font-serif text-3xl md:text-5xl tracking-widest uppercase mb-4 md:mb-6 font-bold not-italic">СТРУКТУРА КВЕСТА</h3>
             <ul className="space-y-1 md:space-y-2 text-lg md:text-3xl text-[#fdfaf3] font-serif italic list-none">
               {["1. Страх", "2. Проводник", "3. Лес и Хижина", "4. Другой мир и страшная сказка", "5. Королевство и любимая сказка"].map((it, idx) => (
                <li key={idx} className="flex gap-4 items-center group"><span className="text-gold/50 text-xl font-serif group-hover:rotate-90 transition-all">◇</span> {it}</li>
              ))}
            </ul>
          </div>
        ),
        right: (
          <div className="space-y-4 pt-1 md:-mt-12 lg:-mt-24 md:pl-48 text-left">
             <ul className="space-y-1 md:space-y-2 text-lg md:text-2xl text-[#fdfaf3] font-serif italic list-none">
               {["6. Родовой дом", "7. Подводное царство", "8. Мир из огня", "9. Пещера и Древо", "10. Воздушный замок и путь к целостности"].map((it, idx) => (
                 <li key={idx} className="flex gap-4 items-center group"><span className="text-gold/50 text-xl font-serif group-hover:rotate-90 transition-all">◇</span> {it}</li>
               ))}
             </ul>
          </div>
        )
      }
    },
    {
      id: 5,
      image: "https://s10.iimage.su/s/04/g4DNGTSx8KafEUr0c79PdTKmGmeKdGI4YLyEaaqJO.png",
      layout: 'right',
      mobilePosition: 'left',
      contentPos: 'top',
      content: {
        right: (
          <div className="space-y-4 text-left max-w-xl md:ml-auto md:text-right">
            <h3 className="text-gold font-serif text-3xl md:text-5xl tracking-widest uppercase mb-4 md:mb-6 font-bold not-italic leading-none">
              <span className="text-6xl md:text-9xl block md:inline-block mr-2 md:mb-0 mb-4 align-middle">20</span> ПРАКТИЧЕСКИХ УПРАЖНЕНИЙ
            </h3>
            <ul className="space-y-1 md:space-y-2 inline-block text-left md:text-right">
              {[
                "Работа с архетипами",
                "Глубинные образы",
                "Активное воображение",
                "Погружение в историю",
                "Влияние на все сферы жизни",
                "Контакт с бессознательным"
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-center justify-start md:justify-end text-lg md:text-xl tracking-wide text-[#fdfaf3] font-serif italic">
                  <span className="w-2.5 h-2.5 bg-gold/50 rotate-45 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      }
    },
    {
      id: 6,
      image: "https://s10.iimage.su/s/04/gCVqTr2xh0J7D0KnQgRErJNyVBsbGP4W1mNFqLjkw.png",
      layout: 'right',
      mobilePosition: 'left-custom',
      content: {
        right: (
          <div className="space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#fdfaf3] font-serif italic leading-relaxed tracking-wide">
              В тени скрывается <br className="hidden md:block"/> огромный потенциал.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-gold-light font-serif italic leading-relaxed tracking-wide">
              Прими его — и он <br className="hidden md:block"/> станет твоей силой.
            </p>
          </div>
        )
      }
    },
    {
      id: 7,
      image: "https://s10.iimage.su/s/04/gzt3fwVx9VN508vBGeOnpwynjDBdyutS9JRXw17r9.png",
      layout: 'split',
      content: {
        left: (
          <div className="text-left space-y-4">
            <p className="text-[#fdfaf3]/60 text-[10px] tracking-[0.5em] uppercase font-bold font-serif">ПСИХОЛОГИЧЕСКИЙ КВЕСТ</p>
            <h2 className="text-4xl md:text-7xl font-serif text-[#fdfaf3] tracking-widest glow-gold leading-tight drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] font-bold not-italic">ЛЕС ТЕНЕЙ</h2>
            <p className="text-gold text-2xl md:text-4xl font-serif mt-4 font-bold uppercase">5.000 <span className="text-[0.35em] align-middle ml-1">РУБ.</span></p>
          </div>
        ),
        right: (
          <div className="space-y-4">
            <p className="text-xl md:text-3xl text-[#fdfaf3] font-serif italic leading-snug">Исследуй свой внутренний мир.</p>
            <p className="text-xl md:text-3xl text-[#fdfaf3] font-serif italic leading-snug">Познакомься с теневой стороной.</p>
            <p className="text-xl md:text-3xl text-gold-light font-serif italic leading-snug font-bold">Обрети целостность.</p>
          </div>
        )
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const resetSlides = () => {
    setCurrentSlide(0);
  };

  const current = slides[currentSlide];

  return (
    <div className="min-h-screen selection:bg-gold/30 selection:text-gold-light bg-[#050505]">
      {/* Hero Banner Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center px-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`absolute inset-0 z-0 bg-cover bg-center contrast-[1.05] ${current.mobilePosition === 'left' ? 'max-md:bg-left' : current.mobilePosition === 'left-custom' ? 'max-md:bg-[15%_center]' : ''}`}
            style={{
              backgroundImage: `url('${current.image}')`,
            }}
          >
            {/* Base darkening overlay for cross-browser consistency (Telegram fix) */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15" />
          </motion.div>
        </AnimatePresence>
        
        {/* Content Wrapper */}
        <div className={`relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center h-full ${current.contentPos === 'top' ? 'justify-start pt-4' : 'justify-center'} px-4 pb-60 md:pb-40`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full text-shadow-deep"
            >
              {current.layout === 'center' && (
                <div className="text-center space-y-4 md:space-y-6">
                  <p className="text-[#fdfaf3] tracking-[0.6em] uppercase text-[10px] md:text-xs font-serif font-bold glow-gold drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">{current.content.overline}</p>
                  <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-[#fdfaf3] uppercase tracking-[0.05em] glow-gold leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,1)] font-bold">
                    {current.content.title}
                  </h1>
                  <p className="text-gold font-serif font-bold text-lg md:text-2xl lg:text-3xl tracking-[0.2em] uppercase border-y border-gold/10 py-4 inline-block drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
                    {current.content.subtitle}
                  </p>
                </div>
              )}

              {current.layout === 'split' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
                  <div className="text-left text-shadow-deep">
                    <div className="text-xl md:text-2xl lg:text-3xl text-[#fdfaf3] leading-relaxed font-serif italic tracking-wide drop-shadow-2xl">
                      {current.content.left}
                    </div>
                  </div>
                  <div className="text-left md:text-right self-end md:mt-24 text-shadow-deep">
                    <div className="text-xl md:text-2xl lg:text-3xl text-gold-light leading-relaxed font-serif italic tracking-wide drop-shadow-2xl">
                      {current.content.right}
                    </div>
                  </div>
                </div>
              )}

              {current.layout === 'left' && (
                <div className="max-w-xs md:max-w-md lg:max-w-lg text-left text-shadow-deep">
                  <p className="text-xl md:text-2xl lg:text-3xl text-[#fdfaf3] font-serif italic tracking-[0.05em] leading-relaxed drop-shadow-2xl">
                    {current.content.left}
                  </p>
                </div>
              )}

              {current.layout === 'right' && (
                <div className="max-w-3xl ml-auto text-right text-shadow-deep">
                   <div className="text-xl md:text-2xl lg:text-3xl text-[#fdfaf3] font-serif italic leading-relaxed">
                     {current.content.right}
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 md:bottom-16 z-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full px-8">
           <CarvedButton isLink href="https://t.me/sofi_arih">
             ЗАПИСАТЬСЯ НА КВЕСТ
           </CarvedButton>

           {currentSlide === slides.length - 1 ? (
             <CarvedButton onClick={resetSlides}>
               ВЕРНУТЬСЯ В НАЧАЛО
             </CarvedButton>
           ) : (
             <CarvedButton onClick={nextSlide}>
               ЛИСТАТЬ ДАЛЬШЕ
             </CarvedButton>
           )}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="pt-32 pb-12 px-4 bg-[#050505] relative overflow-visible">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        
        <div className="max-w-6xl mx-auto">
          <SectionTitle>ОБО МНЕ</SectionTitle>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative mt-20 items-stretch">
            
            {/* Left Photo Column - Fixed container */}
            <div className="w-full lg:w-1/2 relative lg:min-h-full">
              <div className="lg:sticky lg:top-24 h-fit z-30 mb-8 lg:mb-0">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative drop-shadow-[0_40px_80px_rgba(0,0,0,1)] aspect-[3/4] md:aspect-[4/5] lg:aspect-auto"
                >
                  <div className="absolute -inset-4 border border-gold/30 rounded-sm" />
                  <img 
                      src="https://s10.iimage.su/s/30/gBpe9tYxEgKUOAGrmev82aS7aB3sqJtBjIezvAtuC.png" 
                      alt="Софья Арих" 
                      className="relative z-10 w-full h-full object-cover rounded-sm filter brightness-95 contrast-[1.1] shadow-2xl"
                      referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/40 to-transparent p-6 md:p-10">
                      <p className="text-gold font-serif italic text-4xl md:text-6xl drop-shadow-[0_2px_15px_rgba(0,0,0,1)]">Софья Арих</p>
                      <p className="text-[#fdfaf3]/90 uppercase tracking-[0.2em] font-serif text-[10px] md:text-xs mt-2 font-bold select-none drop-shadow-lg">Практикующий психолог</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Right Text */}
            <div className="w-full lg:w-1/2 space-y-10 pb-0">
               <div className="space-y-4 text-[#fdfaf3] font-light text-lg md:text-xl leading-tight">
                  <p className="text-4xl md:text-6xl font-serif text-[#fdfaf3] leading-none">
                     Всех приветствую! <br className="hidden md:block"/> Меня зовут Софья Арих. 
                  </p>
                  <div className="w-24 h-[1px] bg-gold shadow-[0_0_15px_rgba(212,175,55,0.7)]" />
                  <p className="text-[#fdfaf3] leading-tight">
                    Я практикующий психолог, в своей работе во многом опираюсь на методы юнгианского анализа, КПТ, эмоционально-образной и телесной терапии.
                  </p>
                  <p className="text-[#fdfaf3] leading-tight">
                    Этот квест — квинтэссенция моего опыта, упакованная в увлекательное путешествие, где психология встречается с искусством самопознания.
                  </p>
               </div>

               <div className="space-y-4 pt-12 border-t border-gold/15">
                  <h4 className="text-gold uppercase tracking-[0.3em] font-serif text-lg md:text-xl font-bold">Направления работы:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Работа через ключевые архетипы (тень, герой, мудрец);",
                      "Разбор жизненных сценариев и построение новых треков;",
                      "Поиск ресурса в теневых качествах;",
                      "Работа с Анимусом и Анимой;",
                      "Анализ сновидений и мифологии для самопознания;",
                      "Психологические квесты на активное воображение;"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start text-lg md:text-xl group border-b border-gold/5 pb-1">
                        <div className="w-2.5 h-2.5 bg-gold mt-2 shrink-0 group-hover:rotate-90 transition-all rotate-45" />
                        <span className="font-light text-[#fdfaf3]">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="p-10 border-l-[3px] border-gold bg-black/50 italic text-gold-light font-serif text-xl md:text-3xl leading-relaxed shadow-xl">
                 "Цель — прийти к своему истинному пути, внутренней опоре, самоценности и предназначению."
               </div>
               
               <div className="pt-6">
                 <CarvedButton isLink href="https://t.me/sofi_arih" className="w-full py-8 text-xl">
                   ЗАПИСАТЬСЯ В TELEGRAM
                 </CarvedButton>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 md:py-24 px-4 bg-black relative flex flex-col items-center border-t border-gold/10 overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://s10.iimage.su/s/04/gdO4H3sx72zW280KnAcYfzbuVie8UdT537mENDCld.png')] bg-fixed bg-center bg-cover" />
         <div className="max-w-5xl text-center space-y-12 relative z-10">
           <h2 className="text-4xl md:text-7xl font-serif text-[#fdfaf3] tracking-[0.1em] glow-gold uppercase leading-tight">ГОТОВЫ ВОЙТИ <br/> В ЛЕС ТЕНЕЙ?</h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 pt-12 md:pt-20">
              <div className="text-center md:text-left space-y-2">
                <p className="text-[#fdfaf3]/40 uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold font-serif">СТОИМОСТЬ УЧАСТИЯ</p>
                <p className="text-5xl md:text-7xl font-serif text-gold glow-gold uppercase">5.000 <span className="text-[0.35em] align-middle ml-2">РУБ.</span></p>
              </div>
              <div className="h-px w-24 bg-gold/30 md:w-[1px] md:h-24 md:block" />
              <CarvedButton isLink href="https://t.me/sofi_arih" className="py-6 min-w-[320px] text-lg">
                ЗАПИСАТЬСЯ НА КВЕСТ
              </CarvedButton>
           </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#050505] flex flex-col items-center border-t border-gold/5">
        <div className="flex flex-col items-center space-y-12 max-w-4xl px-4 text-center">
          <p className="text-[#fdfaf3]/40 text-[10px] tracking-[0.6em] uppercase font-serif">ЛЕС ТЕНЕЙ | ПСИХОЛОГИЧЕСКИЙ КВЕСТ</p>
          <div className="flex gap-16">
            <a href="https://t.me/sofi_arih" target="_blank" rel="noopener noreferrer" className="text-gold/50 hover:text-gold transition-all tracking-[0.4em] text-[11px] uppercase font-bold border-b border-gold/10 hover:border-gold pb-2 font-serif">Telegram</a>
            <a href="mailto:s.a.16@yandex.ru" className="text-gold/50 hover:text-gold transition-all tracking-[0.4em] text-[11px] uppercase font-bold border-b border-gold/10 hover:border-gold pb-2 font-serif">Email</a>
          </div>
          <p className="text-[#fdfaf3]/20 text-[9px] tracking-[0.4em] uppercase">© 2026 SOFYA ARIH | ТУТ НАЧИНАЕТСЯ ТВОЙ ПУТЬ</p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.05, 1] 
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              opacity: { duration: 0.3 }
            }}
            onClick={scrollToTop}
            className="fixed bottom-12 right-12 z-50 w-12 h-12 md:w-16 md:h-16 bg-black/90 backdrop-blur-2xl border border-gold/30 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all shadow-2xl cursor-pointer"
          >
            <ChevronUp className="w-6 h-6 md:w-8 md:h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .text-shadow-deep {
          text-shadow: 6px 6px 40px rgba(0,0,0,1), -3px -3px 25px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,1);
        }
        .glow-white {
          text-shadow: 0 0 25px rgba(255,255,255,0.6);
        }
      `}</style>
    </div>
  );
}
