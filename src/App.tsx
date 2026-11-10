import React, { useState, useEffect } from 'react';
import { Leaf, QrCode, Smartphone, Sparkles, Gift, Scan, ArrowRight, PlayCircle } from './assets/Iconos';

const globalStyles = `
  @keyframes fall {
    0% { transform: translate(0, -10vh) rotate(0deg); opacity: 0; }
    10% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translate(var(--x-end), 100vh) rotate(var(--rot-end)); opacity: 0; }
  }
  .leaf-anim {
    position: absolute;
    top: -10%;
    animation: fall linear infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<any[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${10 + Math.random() * 12}s`,
      size: `${16 + Math.random() * 20}px`,
      xEnd: `${(Math.random() - 0.5) * 200}px`,
      rotEnd: `${(Math.random() - 0.5) * 720}deg`,
      opacity: 0.2 + Math.random() * 0.5
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf-anim text-emerald-800/40"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            '--x-end': leaf.xEnd,
            '--rot-end': leaf.rotEnd,
            opacity: leaf.opacity
          } as any}
        >
          <Leaf style={{ width: leaf.size, height: leaf.size }} />
        </div>
      ))}
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed w-full z-50 px-6 py-4 transition-all bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3 text-emerald-900">
        <Leaf className="w-6 h-6 fill-emerald-900" />
        <span className="text-2xl font-bold font-serif tracking-tight">
          Detalles con Alma
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-emerald-800/80 tracking-widest uppercase items-center">
        <a href="#inicio" className="hover:text-emerald-900 transition-colors">Inicio</a>
        <a href="#coleccion" className="hover:text-emerald-900 transition-colors">Diseños</a>
        <a href="#experiencia" className="bg-emerald-900 text-stone-50 px-5 py-2 rounded-full hover:bg-emerald-800 transition-colors flex items-center gap-2">
          <Smartphone className="w-4 h-4" /> Simulador
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="inicio" className="relative min-h-screen bg-stone-50 flex items-center justify-center pt-24 pb-12 overflow-hidden">
    <FallingLeaves />
    <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-8">
        <Sparkles className="w-4 h-4" /> Regalos Ecológicos & Phygitales
      </div>
      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-emerald-950 leading-tight">
        Conectando emociones, <br />
        <span className="italic text-emerald-800">cuidando el planeta.</span>
      </h1>
      <p className="text-lg md:text-xl text-stone-600 mb-10 font-light max-w-2xl leading-relaxed">
        Descubre nuestros empaques 100% compostables y diseños grabados en láser que ocultan recuerdos digitales mediante códigos QR interactivos.
      </p>
      <a href="#coleccion" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-900 text-stone-50 rounded-full text-lg font-semibold hover:bg-emerald-800 hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl">
        Ver Colección Enigma <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </section>
);

const Coleccion = () => {
  const [disenos] = useState([
    {
      id: "A",
      title: "Búsqueda del Tesoro",
      subtitle: "Propuesta A",
      desc: "Resuelve los acertijos náuticos y sigue el mapa grabado para desbloquear tu regalo oculto.",
      image: "https://i.postimg.cc/QdYXkstq/Gemini-Generated-Image-n25k9pn25k9pn25k.jpg"
    },
    {
      id: "B",
      title: "Bóveda Galáctica",
      subtitle: "Propuesta B",
      desc: "Alinea las constelaciones escaneando los códigos para revelar el misterio estelar.",
      image: "https://i.postimg.cc/4x2JbZdW/Gemini-Generated-Image-n25k9pn25k9pn25k-(1).jpg"
    },
    {
      id: "C",
      title: "Flor del Templo",
      subtitle: "Propuesta C",
      desc: "Completa el mandala digital paso a paso descubriendo los códigos en el bambú.",
      image: "https://i.postimg.cc/K8pZrFzs/Gemini-Generated-Image-n25k9pn25k9pn25k-(2).jpg"
    }
  ]);

  return (
    <section id="coleccion" className="py-24 bg-stone-100 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-4">Las Cajas Enigma</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Tres propuestas únicas de nuestro catálogo. Cada caja incluye un recorrido digital inmersivo y materiales sostenibles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {disenos.map((item) => (
            <div key={item.id} className="group relative h-96 rounded-[2rem] overflow-hidden shadow-lg border border-stone-200/50 bg-stone-200 cursor-pointer">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-emerald-950/20 transition-colors duration-500 group-hover:bg-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-[55%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20">
                <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md rounded-t-3xl border-t border-white/10"></div>
                <div className="relative z-10 pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-2">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-3">
                    <p className="text-stone-200 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <button className="flex items-center gap-2 text-emerald-300 font-semibold text-sm hover:text-emerald-200 transition-colors uppercase tracking-wider">
                      Descubrir <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Simulador = () => {
  const [paso, setPaso] = useState(0);
  const [loading, setLoading] = useState(false);

  const avanzar = (siguiente: number) => {
    setLoading(true);
    setTimeout(() => {
      setPaso(siguiente);
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="experiencia" className="py-24 bg-emerald-950 relative overflow-hidden text-stone-50">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">
            <QrCode className="w-5 h-5" /> Simulador Phygital
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-stone-50">
            Escanea, descubre <br className="hidden md:block"/> y emociónate.
          </h2>
          <p className="text-lg text-emerald-100/70 mb-8 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Prueba cómo interactúan nuestros clientes con las cajas enigma. Cada código QR revelado desbloquea una nueva capa de la experiencia.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${paso >= i ? 'w-12 bg-emerald-400' : 'w-4 bg-emerald-800'}`} />
            ))}
          </div>
        </div>
        <div className="w-[320px] h-[640px] bg-stone-950 rounded-[3rem] border-[8px] border-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden shrink-0 flex flex-col">
          <div className="absolute top-0 inset-x-0 h-6 bg-stone-800 rounded-b-2xl w-32 mx-auto z-20"></div>
          <div className="flex-1 flex flex-col relative bg-gradient-to-b from-stone-900 to-stone-950 p-6 pt-16">
            {loading && (
              <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center">
                <Scan className="w-12 h-12 text-emerald-400 animate-pulse mb-4" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">Escaneando...</span>
              </div>
            )}
            <div className="flex-1 flex flex-col transition-opacity duration-300">
              {paso === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <Gift className="w-16 h-16 text-emerald-500 mb-6" />
                  <h3 className="text-2xl font-serif font-bold mb-3">Inicia la aventura</h3>
                  <p className="text-stone-400 text-sm mb-10">Tienes un regalo en tus manos. Busca el primer código en el exterior de la caja.</p>
                  <button onClick={() => avanzar(1)} className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                    <Scan className="w-5 h-5" /> Escanear QR 1
                  </button>
                </div>
              )}
              {paso === 1 && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="bg-emerald-900/40 border border-emerald-500/30 p-6 rounded-2xl mb-8">
                    <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                    <p className="font-serif italic text-emerald-100 text-lg leading-snug mb-2">
                      "Para abrir el compartimento oculto, alinea las constelaciones hacia el norte."
                    </p>
                    <span className="text-emerald-500 text-xs font-bold uppercase">Pista Desbloqueada</span>
                  </div>
                  <button onClick={() => avanzar(2)} className="w-full py-4 border-2 border-emerald-600 hover:bg-emerald-900/50 text-emerald-400 rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                    <Scan className="w-5 h-5" /> Escanear QR 2
                  </button>
                </div>
              )}
              {paso === 2 && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-full bg-emerald-900/50 rounded-3xl p-1 mb-6 shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                    <div className="w-full h-40 bg-stone-900 rounded-[1.3rem] overflow-hidden relative group cursor-pointer border border-emerald-500/20">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522262590532-a991489a0253?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2 font-serif">¡Misterio Resuelto!</h3>
                  <p className="text-stone-300 text-sm italic mb-8">"Eres mi universo entero. Feliz aniversario."</p>
                  <button onClick={() => setPaso(0)} className="text-stone-500 hover:text-stone-300 text-xs font-bold uppercase tracking-widest transition-colors">
                    Reiniciar Demo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-emerald-950 pt-16 pb-8 border-t border-emerald-900/50 text-emerald-100">
    <div className="container mx-auto px-6 max-w-7xl text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Leaf className="w-6 h-6 text-emerald-500" />
        <span className="text-2xl font-serif font-bold text-stone-50 tracking-tight">Detalles con Alma</span>
      </div>
      <p className="max-w-xl mx-auto text-emerald-200/60 text-sm mb-12">
        Comprometidos con el ODS 12 (Consumo Responsable). Todos nuestros empaques son 100% biodegradables y compostables, alineados estrictamente a la Ley N° 30884 (Regulación del plástico de un solo uso).
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-emerald-900/50 pt-8 text-xs uppercase tracking-widest text-emerald-500 font-semibold">
        <p>© 2026 Detalles con Alma. Grupo 1.</p>
        <p className="mt-4 md:mt-0 flex items-center gap-2">
          Hecho con el alma en Perú
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen bg-stone-50 font-sans selection:bg-emerald-900 selection:text-stone-50 text-stone-800">
        <Navbar />
        <main>
          <Hero />
          <Coleccion />
          <Simulador />
        </main>
        <Footer />
      </div>
    </>
  );
}