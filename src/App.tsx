import { ReactNode, useState, FormEvent } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Target, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight,
  Info,
  Layers,
  Search,
  Zap,
  BookOpen,
  Instagram,
  Linkedin,
  Phone,
  Video,
  PlayCircle,
  FileText,
  Download,
  Heart
} from "lucide-react";

const Section = ({ 
  children, 
  className = "",
  animate = true,
  sidebarContent
}: { 
  children: ReactNode; 
  className?: string;
  animate?: boolean;
  sidebarContent?: ReactNode;
}) => (
  <div className={`relative group border-b border-slate-200/50 last:border-0 ${className}`}>
    <div className="max-w-[1200px] mx-auto w-[92%] lg:w-full px-4 md:px-6 py-12 md:py-24">
      {sidebarContent ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div 
            className="lg:col-span-8"
            initial={animate ? { opacity: 0, y: 40 } : false}
            whileInView={animate ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {children}
          </motion.div>
          <motion.div 
            className="lg:col-span-4 lg:border-l border-slate-200 lg:pl-8"
            initial={animate ? { opacity: 0, x: 20 } : false}
            whileInView={animate ? { opacity: 1, x: 0 } : false}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {sidebarContent}
          </motion.div>
        </div>
      ) : (
        <motion.div 
          className="max-w-4xl mx-auto lg:mx-0"
          initial={animate ? { opacity: 0, y: 40 } : false}
          whileInView={animate ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  </div>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // URL de implementación de Google Apps Script
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydLs7F1ASuWh5U91iwzOxt7uK8_T9hx8STVLX2njqmrPEISA-2A9bmSdINQfzaKt0h/exec';

    try {
      // Usamos mode: 'no-cors' si el script no maneja CORS, 
      // pero para recibir respuesta JSON es mejor que el script maneje el preflight o usar un proxy.
      // Aquí asumimos una petición estándar.
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script a menudo requiere no-cors para envíos simples
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Con no-cors no podemos leer la respuesta, pero si no hay error asumimos éxito
      setFormStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('postulacion-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-sunao-orange/30">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.link/kcko1v" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="0" 
          fill="currentColor" 
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-sunao-blue px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          ¿Tienes dudas? ¡Escríbenos!
        </span>
      </a>

      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/d/1rXEOzrsiwTpiYm3x4DfJWc-DhF_ia7TQ" 
              alt="Sunao Logo" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display text-2xl font-bold text-sunao-blue tracking-tight">Sunao Consultora</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <Section 
          className="pt-32 bg-gradient-to-b from-white/80 to-sunao-light/80 relative z-10 border-0"
          animate={false}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sunao-orange/10 text-sunao-orange text-sm font-semibold mb-6">
              Formación Marzo 2026 • Cupos Limitados
            </span>
            <h1 
              onClick={scrollToForm}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-sunao-blue leading-[1.1] mb-6 md:mb-8 cursor-pointer hover:opacity-90 transition-opacity"
            >
              Deja de improvisar y empieza a facilitar con <span className="italic text-sunao-orange">criterio profesional.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:text-10 max-w-2xl leading-relaxed">
              Especialización en Facilitación de Aprendizaje. Diseña y facilita experiencias con seguridad, sentido y resultados reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-sunao-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-sunao-orange/20 flex items-center justify-center gap-2"
              >
                Inscribirme a la formación Marzo 2026
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* Empathy Section (The Problem) */}
      <Section 
        className="bg-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sunao-blue mb-8">
          ¿Sientes que te faltan herramientas prácticas para intervenir en grupos?
        </h2>
        <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
          <p>
            Muchos coaches y facilitadores se encuentran "atrapados" en bancos de dinámicas, repitiendo recetas sin entender realmente el <span className="font-bold text-sunao-blue">porqué</span> de cada intervención.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
            {[
              "¿Te genera inseguridad no saber qué hacer cuando el grupo no responde?",
              "¿Sientes que tus dinámicas son 'juegos' sin un propósito claro?",
              "¿Te cuesta ajustar tu diseño sobre la marcha ante lo inesperado?",
              "¿Buscas dejar de improvisar y ganar seguridad real en tu rol?"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Zap className="w-5 h-5 text-sunao-orange shrink-0 mt-1" />
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Value Proposition (The Solution) */}
      <Section 
        className="bg-sunao-blue text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
          La confianza no se estudia, <span className="italic text-sunao-orange">se entrena.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
          No es un curso de juegos ni un banco de dinámicas. Es un proceso formativo que combina experiencia, práctica real y supervisión constante.
        </p>
        <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20">
          <p className="text-base md:text-lg italic leading-relaxed">
            "En Sunao creemos que la confianza se construye haciendo, revisando y volviendo a intentar. No te damos recetas; te ayudamos a desarrollar el criterio para intervenir con seguridad en cualquier contexto."
          </p>
        </div>
        <div className="mt-10">
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-sunao-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-sunao-orange/20 flex items-center justify-center gap-2"
          >
            Quiero entrenar mi confianza
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Section>

      {/* Results Expected (6 Benefits) */}
      <Section 
        className="bg-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sunao-blue mb-10 md:mb-12">
          ¿Qué te llevas al final del proceso?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {[
            { title: "Diseño con Criterio", desc: "Capacidad de diseñar dinámicas de aprendizaje con fundamentos sólidos." },
            { title: "Procesos Completos", desc: "Diseñar sesiones y procesos experienciales de punta a punta, alineados a objetivos." },
            { title: "Kit de Herramientas", desc: "Herramientas profesionales, probadas y reutilizables para tu práctica diaria." },
            { title: "Calma y Seguridad", desc: "Intervenir con mayor aplomo, incluso cuando las cosas no salen según el plan." },
            { title: "Alineación Estratégica", desc: "Facilitar procesos que impacten directamente en los objetivos del negocio." },
            { title: "Ajuste en Tiempo Real", desc: "Leer lo que sucede en el grupo y tener la flexibilidad para ajustar la intervención." }
          ].map((benefit, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sunao-orange/10 flex items-center justify-center text-sunao-orange font-bold text-lg md:text-xl shrink-0 group-hover:bg-sunao-orange group-hover:text-white transition-colors">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-sunao-blue mb-1 md:mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-sunao-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-sunao-blue/20 flex items-center justify-center gap-2"
          >
            Obtener estos resultados
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Section>

      {/* Methodology (4 Pillars) */}
      <Section 
        className="bg-slate-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sunao-blue mb-10 md:mb-12">
          Metodología: Los 4 pilares de cada encuentro
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Search, title: "Experiencia Vivida", desc: "Atravesamos el aprendizaje en primera persona." },
            { icon: Lightbulb, title: "Reflexión Guiada", desc: "Analizamos lo sucedido para extraer aprendizajes." },
            { icon: BookOpen, title: "Marco Conceptual", desc: "Le damos sentido teórico a la experiencia." },
            { icon: Target, title: "Práctica Directa", desc: "Aplicamos lo aprendido a casos reales." }
          ].map((pillar, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <pillar.icon className="w-10 h-10 text-sunao-orange mb-4" />
              <h3 className="text-lg font-bold text-sunao-blue mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules */}
      <Section 
        className="bg-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sunao-blue mb-10 md:mb-12">
          Contenidos Módulo a Módulo
        </h2>
        <div className="space-y-4">
          {[
            { m: "Módulo 1", t: "Fundamentos del Aprendizaje Experiencial", d: "Bases teóricas aplicadas a diversos contextos de aprendizaje." },
            { m: "Módulo 2", t: "Diseño Consciente de Dinámicas", d: "Cómo elegir y adaptar herramientas según el objetivo y el contexto." },
            { m: "Módulo 3", t: "El Rol del Facilitador y Lectura Grupal", d: "Presencia, escucha y manejo de la dinámica de grupo." },
            { m: "Módulo 4", t: "Supervisión de Experiencias Reales", d: "El corazón del programa: feedback cuidado y profesional sobre tu práctica." }
          ].map((mod, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl border border-slate-100 hover:border-sunao-orange/30 transition-colors">
              <div className="text-sunao-blue/30 font-bold text-2xl shrink-0">0{i+1}</div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sunao-orange">{mod.m}</span>
                <h3 className="text-lg md:text-xl font-bold text-sunao-blue">{mod.t}</h3>
                <p className="text-sm md:text-base text-slate-600 mt-1">{mod.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included Section */}
      <Section 
        className="bg-slate-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sunao-blue mb-10 md:mb-12">
          ¿Qué incluye la propuesta?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-y-10 gap-x-8 md:gap-x-12">
          {[
            { icon: Video, title: "16 encuentros semanales en vivo", desc: "Clases sincrónicas para interactuar en tiempo real." },
            { icon: PlayCircle, title: "Grabaciones de todos los encuentros", desc: "Para que puedas repasar el contenido a tu ritmo." },
            { icon: FileText, title: "Guías de diseño y facilitación", desc: "Herramientas listas para aplicar en tus propios talleres." },
            { icon: Zap, title: "Prácticas acompañadas", desc: "Espacios de experimentación real con soporte profesional." },
            { icon: CheckCircle2, title: "Supervisiones grupales", desc: "Feedback directo sobre tu desempeño para ajustar tu práctica." },
            { icon: Download, title: "Material descargable y reutilizable", desc: "Recursos que te quedan para siempre." },
            { icon: Heart, title: "Acompañamiento docente", desc: "Apoyo continuo del equipo facilitador durante los 4 meses." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 md:gap-5 items-start">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-sunao-orange/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-sunao-orange" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-sunao-blue mb-1">{item.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Facilitators */}
      <Section 
        className="bg-sunao-light"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sunao-blue mb-10 md:mb-12">Equipo Facilitador</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              name: "Carolina Guzmán", 
              role: "Lic. en RRHH & Coach", 
              desc: "Especialista en coaching organizacional y ejecutivo con certificación en aprendizaje experiencial.",
              img: "https://lh3.googleusercontent.com/d/1dbH_F2-qW2dzDkZtCg-gXm3Cn2EhrMBc"
            },
            { 
              name: "Mario Danieli", 
              role: "Senior Coach & Agile", 
              desc: "Técnico en RRHH. Especialista en coaching organizacional e inmobiliario. Aplicación de Metodologías Ágiles.",
              img: "https://lh3.googleusercontent.com/d/1sVbBmZmqXFgrNfb3V41becPnJCPCW8JK"
            },
            { 
              name: "Belén Breglia", 
              role: "Senior Coach Ontológico", 
              desc: "Coach organizacional y ejecutivo con amplia trayectoria en formación de facilitadores.",
              img: "https://lh3.googleusercontent.com/d/1GRw7SwcGUaFvFT2z4q821YpCu9KFe_G8"
            }
          ].map((fac, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="aspect-square overflow-hidden">
                <img src={fac.img} alt={fac.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-sunao-blue">{fac.name}</h3>
                <p className="text-sunao-orange text-xs md:text-sm font-semibold mb-3">{fac.role}</p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Logistics */}
      <Section 
        className="bg-white"
      >
        <div className="bg-sunao-blue rounded-[2rem] p-6 md:p-10 text-white flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Logística del Programa</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Calendar className="w-5 h-5 text-sunao-orange" /></div>
                <p className="text-base md:text-lg">Duración: <span className="font-bold">4 meses</span> (16 encuentros)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-sunao-orange" /></div>
                <p className="text-base md:text-lg">Modalidad: <span className="font-bold">Virtual, en vivo</span></p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-sunao-orange" /></div>
                <p className="text-base md:text-lg">Día y Horario: <span className="font-bold">Miércoles de 19 a 21hs</span></p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <div className="bg-white text-sunao-blue p-6 md:p-8 rounded-3xl shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-widest mb-2">Inversión</p>
              <p className="text-3xl md:text-4xl font-bold mb-4">$1.100.000</p>
              <p className="text-xs md:text-sm text-slate-500 mb-6">3 o 6 cuotas sin interés</p>
              <div className="p-4 bg-sunao-light rounded-xl border border-sunao-blue/10">
                <p className="text-[10px] md:text-xs font-bold text-sunao-orange uppercase">Bonificación Pago Único</p>
                <p className="text-xl md:text-2xl font-bold">$800.000</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 flex justify-center lg:justify-start">
            <button 
              onClick={scrollToForm}
              className="w-full lg:w-auto bg-sunao-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-sunao-orange/20 flex items-center justify-center gap-2"
            >
              Asegurar mi lugar ahora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Section>

      {/* Application Form Section */}
      <Section 
        className="bg-white"
      >
        <div className="max-w-2xl mx-auto lg:mx-0" id="postulacion-form">
          <h2 className="text-3xl md:text-4xl font-bold text-sunao-blue mb-6">
            Iniciemos una conversación
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed">
            Queremos conocerte y entender si esta especialización es el paso correcto para tu desarrollo profesional. Completa este formulario y el equipo facilitador de Sunao se pondrá en contacto contigo para conversar sobre tus desafíos y expectativas.
          </p>
          
          {formStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-100 p-8 md:p-12 rounded-3xl text-center space-y-6"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-200">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-sunao-blue">¡Postulación recibida!</h3>
                <p className="text-slate-600 text-base md:text-lg">
                  Tu postulación ha sido enviada con éxito. El equipo de Sunao se contactará pronto contigo.
                </p>
              </div>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-sunao-blue font-bold hover:underline"
              >
                Enviar otra respuesta
              </button>
            </motion.div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 bg-sunao-light/30 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden"
            >
              {formStatus === 'loading' && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 border-4 border-sunao-orange border-t-transparent rounded-full animate-spin"></div>
                  <p className="font-bold text-sunao-blue">Enviando postulación...</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-sunao-blue uppercase tracking-wider">Nombre Completo</label>
                  <input name="fullname" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunao-orange focus:ring-2 focus:ring-sunao-orange/20 outline-none transition-all bg-white" placeholder="Ej: Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-sunao-blue uppercase tracking-wider">Email</label>
                  <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunao-orange focus:ring-2 focus:ring-sunao-orange/20 outline-none transition-all bg-white" placeholder="juan@ejemplo.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-sunao-blue uppercase tracking-wider">Teléfono / WhatsApp</label>
                <input name="phone" required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunao-orange focus:ring-2 focus:ring-sunao-orange/20 outline-none transition-all bg-white" placeholder="Ej: +54 9 11 ..." />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-sunao-blue uppercase tracking-wider">¿Cuál es tu formación o rol actual?</label>
                <select name="role" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunao-orange focus:ring-2 focus:ring-sunao-orange/20 outline-none transition-all bg-white appearance-none">
                  <option value="">Selecciona una opción</option>
                  <option>Coach Ontológico</option>
                  <option>Facilitador</option>
                  <option>Líder de RRHH</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-sunao-blue uppercase tracking-wider">¿Cuál es tu nivel de experiencia con grupos?</label>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {['Principiante', 'Intermedio', 'Avanzado'].map((level) => (
                    <label key={level} className="relative cursor-pointer">
                      <input type="radio" name="experience" value={level} required className="peer sr-only" />
                      <div className="px-2 md:px-3 py-2 text-center text-[10px] md:text-sm rounded-lg border border-slate-200 peer-checked:border-sunao-orange peer-checked:bg-sunao-orange/5 peer-checked:text-sunao-orange transition-all">
                        {level}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-sunao-blue uppercase tracking-wider">¿Cuál es tu mayor desafío hoy al facilitar?</label>
                <textarea name="challenge" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sunao-orange focus:ring-2 focus:ring-sunao-orange/20 outline-none transition-all bg-white h-32 resize-none" placeholder="Cuéntanos brevemente..."></textarea>
              </div>

              <div className="space-y-4 p-4 bg-white rounded-2xl border border-slate-100">
                <label className="text-xs font-bold text-sunao-blue uppercase tracking-wider block">¿Contás con disponibilidad para asistir a los 16 encuentros en vivo?</label>
                <p className="text-[10px] text-slate-500 mb-2">(Miércoles de 19 a 21hs)</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="availability" value="Sí" required className="w-4 h-4 accent-sunao-orange" />
                    <span className="text-xs md:text-sm font-medium group-hover:text-sunao-orange transition-colors">Sí, cuento con disponibilidad</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="availability" value="No estoy seguro/a" required className="w-4 h-4 accent-sunao-orange" />
                    <span className="text-xs md:text-sm font-medium group-hover:text-sunao-orange transition-colors">No estoy seguro/a</span>
                  </label>
                </div>
              </div>

              {formStatus === 'error' && (
                <p className="text-red-500 text-xs font-medium text-center">
                  Hubo un error al enviar. Por favor, intenta de nuevo o contáctanos por WhatsApp.
                </p>
              )}

              <button 
                type="submit" 
                disabled={formStatus === 'loading'}
                className="w-full bg-sunao-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-sunao-blue/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? 'Enviando...' : 'Enviar mi postulación'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* Closing Section */}
      <Section 
        className="bg-gradient-to-t from-sunao-light to-white text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-sunao-blue mb-6 md:mb-8">
            ¿Estás listo para llevar tu facilitación al siguiente nivel?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12">
            Este es un proceso de alta dedicación con cupos cuidados para garantizar la calidad del acompañamiento. No es para todos, es para quienes buscan excelencia.
          </p>
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-sunao-blue text-white px-12 py-5 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl shadow-sunao-blue/20 flex items-center justify-center gap-3 mx-auto"
          >
            Postularme ahora
            <ChevronRight className="w-6 h-6" />
          </button>
          <p className="mt-8 text-xs text-slate-400">
            Sunao Consultora • Especialización 2026
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/d/1rXEOzrsiwTpiYm3x4DfJWc-DhF_ia7TQ" 
              alt="Sunao Logo" 
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display text-xl font-bold text-sunao-blue tracking-tight">Sunao Consultora</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <a href="https://wa.link/kcko1v" target="_blank" rel="noopener noreferrer" className="hover:text-sunao-orange transition-colors" aria-label="WhatsApp">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/sunaoconsultora" target="_blank" rel="noopener noreferrer" className="hover:text-sunao-orange transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/sunao-consultora/" target="_blank" rel="noopener noreferrer" className="hover:text-sunao-orange transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <button 
              onClick={scrollToForm}
              className="text-sm hover:text-sunao-orange transition-colors font-medium cursor-pointer"
            >
              Contacto
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
