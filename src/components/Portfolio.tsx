import { Button } from './Button';

// Portfolio/Work showcase section
export const Portfolio = () => {
  const categories = [
    {
      title: 'Branding & Strategy',
      projects: 2,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop'
    },
    {
      title: 'Social Media Management',
      projects: 8,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop'
    },
    {
      title: 'Media Production',
      projects: 12,
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop'
    },
    {
      title: 'Website Design',
      projects: 6,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop'
    },
    {
      title: 'Experiential Marketing',
      projects: 4,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    },
    {
      title: 'Advertising',
      projects: 10,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
    }
  ];
  
  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Some pieces of our <br className="hidden md:block" />
            <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            We've collaborated across diverse industries on an extensive range of projects - 
            from advertising and social media campaigns to visual identity and campaign 
            experience or art. Here's a fresh, unbiased vision, and a no-hassle approach to 
            production that we are passionate about.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm mb-3">
                  {category.projects} Projects
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <button className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View More Work
          </Button>
        </div>
      </div>
    </section>
  );
};
