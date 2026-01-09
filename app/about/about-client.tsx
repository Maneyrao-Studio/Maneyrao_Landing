"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Heart, Target, Users, Sparkles, ArrowRight, Check, X } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Entendemos a la persona antes que al sistema",
    color: "text-pink-accent",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Diseñamos soluciones personalizadas, no genéricas",
    color: "text-primary",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Ordenamos procesos y mejoramos la exposición",
    color: "text-purple-accent",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Trabajamos con cercanía, empatía y trato directo",
    color: "text-indigo-accent",
  },
]

const benefits = [
  "Más claridad",
  "Más orden",
  "Mejor exposición de su trabajo",
  "Procesos más cómodos y funcionales",
]

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 text-white/80">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-accent/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Sobre Nosotros
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-gradient">
              Nosotros
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creemos en tecnología pensada para personas reales. No en soluciones frías, 
              sino en sistemas que se adaptan a tu forma de trabajar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Seek Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Nuestra Visión
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Lo que buscamos en cada proyecto
              </h2>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100px" }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-purple-accent rounded-full mb-8"
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cuando alguien termina de trabajar con nosotros, queremos que sienta que lo entendieron, 
                que su idea tomó forma, y que ahora trabaja más cómodo. Que su día a día sea más claro, 
                más ordenado y, en definitiva, más llevadero.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
                <blockquote className="text-2xl font-medium leading-relaxed relative z-10">
                  "No imponemos sistemas. Los adaptamos a la persona que los va a usar."
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-accent rounded-full" />
                  <span className="text-sm text-muted-foreground">Maneyrao Studio</span>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-accent/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Nuestro Proceso
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Cómo trabajamos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Escuchamos", desc: "Nos tomamos el tiempo de entender cómo trabajás hoy, cómo es tu rutina y dónde se te complica." },
              { step: "02", title: "Analizamos", desc: "A partir de eso analizamos, sugerimos cambios y recién después proponemos soluciones." },
              { step: "03", title: "Implementamos", desc: "Creamos sistemas adaptados a tu forma de trabajar, no al revés." },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full group">
                  <span className="text-6xl font-bold text-gradient-blue opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-semibold mt-4 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do / Don't Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <GlassCard className="h-full border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Lo que no hacemos</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    No tratamos a nadie como un número
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    No usamos soluciones genéricas ni plantillas
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    No creemos en la falta de personalización
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <GlassCard className="h-full border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold">A quién ayudamos</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    Profesionales independientes y estudios chicos
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    Personas buenas en lo que hacen, pero desorganizadas
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    Quienes no tienen una landing que los represente bien
                  </li>
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Resultados
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Qué cambia después de trabajar con nosotros
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Después del proyecto, el profesional trabaja mejor, se siente mejor en el día a día 
              y, muchas veces, mejora sus ingresos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-accent/15 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Nuestros Valores
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Por qué Maneyrao Studio
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="flex items-start gap-4 group">
                  <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${value.color}`}>
                    {value.icon}
                  </div>
                  <p className="text-lg font-medium leading-relaxed">{value.title}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <GlassCard className="inline-block">
              <p className="text-xl font-semibold mb-4">
                Nuestro mayor valor está en entender profundamente el problema y 
                transformarlo en un sistema cómodo para quien lo usa.
              </p>
              <p className="text-muted-foreground">
                Trabajamos con empatía, cercanía y una fuerte humanización del proceso.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}