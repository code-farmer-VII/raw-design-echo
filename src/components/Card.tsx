// Custom Card component - no UI libraries
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverStyles = hover ? "hover:scale-105 hover:shadow-glow" : "";
  
  return (
    <div 
      className={`card-gradient rounded-xl border border-border p-6 transition-all duration-300 ${hoverStyles} ${className}`}
      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
    >
      {children}
    </div>
  );
};
