// Trusted By section - company logos
export const TrustedBy = () => {
  // Sample company names (in a real app, these would be logo images)
  const companies = [
    'JENBORO REAL ESTATE',
    'Mexicana',
    'Khilir',
    'CANAL+',
    'Safordeam',
    'BEN',
  ];
  
  return (
    <section className="py-16 px-4 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by <span className="gradient-text">200+ companies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in every project we do. From branding to web production and PR 
            activities from running our startups to years production and PR media campaigns.
          </p>
        </div>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors w-full h-20"
            >
              <span className="text-sm font-semibold text-muted-foreground">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
