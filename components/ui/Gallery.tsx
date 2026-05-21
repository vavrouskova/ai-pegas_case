import Image from 'next/image';

import { cn } from '@/lib/cn';

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  aspect?: 'square' | 'portrait' | 'landscape';
  className?: string;
  grayscale?: boolean;
}

const columnsClass = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
};

const aspectClass = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
};

export const Gallery = ({
  items,
  columns = 3,
  aspect = 'square',
  className,
  grayscale = false,
}: GalleryProps) => {
  return (
    <div className={cn('grid gap-4 md:gap-5', columnsClass[columns], className)}>
      {items.map((item, index) => (
        <figure key={`${item.src}-${index}`} className="space-y-2">
          <div
            className={cn(
              'relative overflow-hidden border border-line bg-cream',
              aspectClass[aspect],
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={cn('object-cover', grayscale && 'grayscale opacity-80')}
            />
          </div>
          {item.caption ? (
            <figcaption className="text-sm text-muted">{item.caption}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
};
