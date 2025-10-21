import { Card } from './Card';

// Testimonials section
export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Tamungan Alam',
      role: 'Marketing Director',
      company: 'TechCorp',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tamungan',
      text: "Working with Vonile Communications was an absolute pleasure. They delivered exceptional results that exceeded our expectations. Their creative approach and attention to detail truly set them apart. The entire team was professional, responsive, and dedicated to delivering quality work."
    },
    {
      name: 'Michael Tesfaye',
      role: 'Creative Director',
      company: 'DesignHub',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      text: "The team perfectly captured our brand's vision and transformed it into something remarkable. They delivered beyond expectations, and the final output speaks for itself. I'm a strong supporter for what they do."
    },
    {
      name: 'Halle Mbuwaisen',
      role: 'CEO',
      company: 'StartupXYZ',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Halle',
      text: "Vonile Communications helped us cut through the clutter with their strategic and creative thinking. Their team was easy to work with, delivering results that made a significant impact on our brand's presence."
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Testimonials
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover={false}>
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-secondary"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
