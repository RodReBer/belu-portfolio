"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const brands = [
  {
    id: 1,
    name: "Conaprole",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Logo_de_Conaprole.svg/2560px-Logo_de_Conaprole.svg.png",
    description: "Colaboración para campaña de productos lácteos",
  },
  {
    id: 2,
    name: "Peñarol",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Escudo_de_Peñarol.svg/1200px-Escudo_de_Peñarol.svg.png",
    description: "Promoción de camiseta oficial y eventos deportivos",
  },
  {
    id: 3,
    name: "Vans",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png",
    description: "Embajadora de marca para colección de verano",
  },
  {
    id: 4,
    name: "Adidas",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png",
    description: "Campaña deportiva y lanzamiento de productos",
  },
  {
    id: 5,
    name: "Coca-Cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1280px-Coca-Cola_logo.svg.png",
    description: "Promoción de campaña navideña",
  },
  {
    id: 6,
    name: "Disney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Disney_logo.png",
    description: "Promoción de series originales",
  },
  {
    id: 7,
    name: "McDonald's",
    logo: "https://1000marcas.net/wp-content/uploads/2019/11/McDonalds-logo.png",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 8,
    name: "Apple",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 9,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 10,
    name: "Puma",
    logo: "https://1000marcas.net/wp-content/uploads/2019/12/Puma-Logo-5.png",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 11,
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 12,
    name: "LG",
    logo: "https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 13,
    name: "Huawei",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-huawei-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-3-pack-logos-icons-2944938.png?f=webp&w=256",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 14,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  {
    id: 15,
    name: "Converse",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png",
    description: "Promoción de nuevos productos y campaña en redes sociales",
  },
  

]

export function BrandSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = brands.length - visibleItems + 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, totalSlides])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {brands.map((brand) => (
            <div key={brand.id} className="flex-none px-4" style={{ width: `${100 / visibleItems}%` }}>
              <Card className="h-full border-pink-200 hover:border-pink-300 transition-colors duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="relative h-20 w-full mb-4">
                    <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground">{brand.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Siguiente</span>
      </Button>
    </div>
  )
}

