import { Card } from './Card';

// Services/Offerings section
export const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Branding & Strategy',
      description: 'We create a brand from the earliest planning stages to launch.'
    },
    {
      icon: '💻',
      title: 'Website Design',
      description: 'Turn ideas in digital experiences that captivate.'
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Engage and captivate your audience effortlessly with us.'
    },
    {
      icon: '🎬',
      title: 'Media Production',
      description: 'High quality content that makes an impression.'
    },
    {
      icon: '📢',
      title: 'Advertising',
      description: 'Strategic placements that maximize reach and impact.'
    },
    {
      icon: '✨',
      title: 'Experiential Marketing',
      description: 'Unforgettable brand experiences that resonate.'
    }
  ];
  
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Helping to bring out their story without getting lost in one message 
            across through strategy, design, and media.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
