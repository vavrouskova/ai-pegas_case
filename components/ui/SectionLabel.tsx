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
        'text-sm uppercase tracking-[0.2em] text-muted',
        className,
      )}
    >
      {number ? <span>{number} · </span> : null}
      {children}
    </p>
  );
};
