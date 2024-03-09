'use client';
import { ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type TopButtonProps = {
  background: boolean;
};

export default function TopButton({ background }: TopButtonProps) {
  const [sizeButton, setSizeButton] = useState(0);

  useEffect(() => {
    setSizeButton(innerWidth >= 768 ? 50 : 30);

    const changeSize = () => {
      setSizeButton(innerWidth >= 768 ? 50 : 30);
    };

    if (typeof window != 'undefined') {
      window.matchMedia('(max-width: 768px)').addEventListener('change', changeSize);
    }

    return () => {
      window.removeEventListener('change', changeSize);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10">
      <Link href={'/#'} aria-description="navigate on top">
        <ArrowUpCircle size={sizeButton} color={background ? 'white' : 'black'} />
      </Link>
    </div>
  );
}
