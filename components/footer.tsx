import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              Maneyro<span className="text-blue-400">.</span>
            </Link>
            <p className="text-white/50 leading-relaxed">
              Creamos tu web y sistemas mejorando tu día a día profesional
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Secciones</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/#work" className="hover:text-white transition-colors">Trabajo</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Acerca de</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Redes</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">¡Hablemos!</h4>
            <p className="text-white/60 mb-4">¿qué tenes en mente?</p>
            <a 
              href="mailto:maneyrao.studio@gmail.com" 
              className="text-xl font-medium hover:text-blue-400 transition-colors"
            >
              maneyrao.studio@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2026 Maneyro Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
