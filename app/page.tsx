import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { BrandSlider } from "@/components/brand-slider"
import { PortfolioGallery } from "@/components/portfolio-gallery"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-10 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Belén Gómez</span>
          </Link>
          <nav className="hidden md:flex gap-6  md:ml-32">
            <Link href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="#portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="#brands" className="text-sm font-medium transition-colors hover:text-primary">
              Marcas
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
            <Button asChild className="hidden md:flex">
              <Link href="#contact">
                Contacto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://wallpapers.com/images/hd/1600-x-900-black-1yb9521g5yljozk1.jpg"
              alt="Belén Gómez"
              fill
              className="object-cover opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background"></div>
          </div>
          <div className="px-10 relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Belén Gómez</h1>
            <p className="mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Influencer & Creadora de Contenido | Uruguay
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#portfolio">
                  Ver Portfolio
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">
                  Contacto
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24 bg-muted/50">
          <div className="px-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mi Portfolio</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Una selección de mis mejores trabajos y proyectos como influencer y creadora de contenido.
              </p>
            </div>
            <PortfolioGallery />
          </div>
        </section>

        <section id="brands" className="py-16 md:py-24">
          <div className="px-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Marcas</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                He tenido el privilegio de colaborar con estas increíbles marcas a lo largo de mi carrera.
              </p>
            </div>
            <BrandSlider />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="px-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
                <p className="mt-4 text-muted-foreground">
                  ¿Interesado en colaborar? Completa el formulario y me pondré en contacto contigo lo antes posible.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 h-5 w-5 text-primary" />
                    <span>Belugomez177@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-6">
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className=" px-10 border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Belén Gómez. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

