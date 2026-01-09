import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  numero: z.string().trim().min(8, "Número inválido").max(20, "Máximo 20 caracteres"),
  asunto: z.string().trim().min(1, "El asunto es requerido").max(500, "Máximo 500 caracteres"),
})

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  whatsappNumber?: string
}

export const ContactModal = ({ isOpen, onClose, whatsappNumber = "5491169004497" }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    numero: "",
    asunto: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = contactSchema.safeParse(formData)
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    const message = `*Nuevo contacto desde el sitio web*%0A%0A*Nombre:* ${encodeURIComponent(formData.nombre)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Teléfono:* ${encodeURIComponent(formData.numero)}%0A*Asunto:* ${encodeURIComponent(formData.asunto)}`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
    
    setFormData({ nombre: "", email: "", numero: "", asunto: "" })
    setErrors({})
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="glass rounded-2xl p-6 border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient">Contáctanos</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nombre
                  </label>
                  <Input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                  />
                  {errors.nombre && (
                    <p className="text-xs text-red-400">{errors.nombre}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Número */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Teléfono
                  </label>
                  <Input
                    name="numero"
                    type="tel"
                    value={formData.numero}
                    onChange={handleChange}
                    placeholder="+54 11 1234-5678"
                    className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                  />
                  {errors.numero && (
                    <p className="text-xs text-red-400">{errors.numero}</p>
                  )}
                </div>

                {/* Asunto */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Asunto
                  </label>
                  <Textarea
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={3}
                    className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors resize-none"
                  />
                  {errors.asunto && (
                    <p className="text-xs text-red-400">{errors.asunto}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
