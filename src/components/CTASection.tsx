import { Button } from './Button';

// Call-to-Action section
export const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="card-gradient rounded-2xl p-8 md:p-12 lg:p-16 border border-border relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-primary blur-3xl" />
          </div>
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Interested in <br />
                <span className="gradient-text">collaboration with us?</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Why we reach your project - pitch Business good
              </p>
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl w-full h-auto shadow-2xl"
              />
              {/* Floating element */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold shadow-lg">
                Let's Work Together!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
