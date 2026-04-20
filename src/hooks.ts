import { useEffect, useRef, useState } from 'react';

// Tracks window width so layouts can swap between desktop and mobile rules.
export const useWW = (): number => {
  const [w, setW] = useState<number>(typeof window === 'undefined' ? 1200 : window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h, { passive: true });
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
};

// IntersectionObserver-based reveal. Returns [ref, isVisible].
export const useFade = (threshold = 0.1): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
};
