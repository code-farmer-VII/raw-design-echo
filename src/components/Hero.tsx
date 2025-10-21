import { Button } from './Button';

// Hero section - main banner
export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
          <span className="text-sm text-muted-foreground">CREATIVE AGENCY</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Crafting Experiences <br className="hidden md:block" />
          <span className="gradient-text">That Connect</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          We're providing a diverse range of design, branding and production services using creative, 
          memorable, and engaging media to foster long-lasting relationships with our partners.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};
