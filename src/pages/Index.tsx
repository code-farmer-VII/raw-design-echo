import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustedBy } from '@/components/TrustedBy';
import { Services } from '@/components/Services';
import { WhyChoose } from '@/components/WhyChoose';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

/**
 * Main landing page for Vonile - Creative Agency
 * Fully responsive, custom components, no UI libraries
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed header with navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
