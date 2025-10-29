import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <FeaturedProducts />
            <Services />
            <Testimonials />
            <CTA />
        </>
    )
}
