import { Card } from './Card';

// Why Choose Us section
export const WhyChoose = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Creative meets strategy',
      description: 'We fuse results with excellence.'
    },
    {
      icon: '🔧',
      title: 'Tailored, not templated',
      description: 'Hyper-individual, custom-built solutions.'
    },
    {
      icon: '🤝',
      title: 'Transparent collaboration',
      description: 'You know where is every project in real-time.'
    },
    {
      icon: '❤️',
      title: 'Passionate, local team',
      description: 'Dedicated local experts rooted in excellence.'
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Vonile</span>
          </h2>
          <p className="text-muted-foreground">
            Tribe of risk-takers than a 'agency', where great things start to.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover={false} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
