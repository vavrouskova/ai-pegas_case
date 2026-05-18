import { cn } from '@/lib/cn';

interface SectionLabelProps {
  number?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ number, children, className }: SectionLabelProps) => {
  return (
    <p
      className={cn(
        'text-xs uppercase tracking-[0.18em] text-primary font-medium',
        className,
      )}
    >
      {number ? <span className="mr-2">{number} ·</span> : null}
      {children}
    </p>
  );
};
