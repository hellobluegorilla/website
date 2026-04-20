import { CSSProperties, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../theme';
import { useFade, useWW } from '../hooks';
import { PAGE_PATHS, PageKey } from '../paths';

// ── Overline ────────────────────────────────────────────────────────────────
export const Overline = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <div
    style={{
      fontFamily: F.body,
      fontSize: '10.5px',
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.42)' : C.blue,
      marginBottom: '16px',
      lineHeight: 1,
    }}
  >
    {children}
  </div>
);

// ── Buttons ─────────────────────────────────────────────────────────────────
type BtnProps = {
  children: ReactNode;
  onClick?: () => void;
  light?: boolean;
  small?: boolean;
};

export const BtnPrimary = ({ children, onClick, light, small }: BtnProps) => {
  const [hov, setHov] = useState(false);
  const bg = light
    ? hov
      ? 'rgba(255,255,255,0.88)'
      : '#FFFFFF'
    : hov
      ? '#0A3BC0'
      : C.blue;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: small ? '10px 22px' : '14px 30px',
        background: bg,
        color: light ? C.blue : '#FFFFFF',
        fontFamily: F.body,
        fontSize: small ? '13px' : '14px',
        fontWeight: 500,
        letterSpacing: '0.01em',
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.22s',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {children}
      <span style={{ fontSize: '15px' }}>→</span>
    </button>
  );
};

export const BtnSecondary = ({ children, onClick, light }: BtnProps) => {
  const [hov, setHov] = useState(false);
  const col = light
    ? hov
      ? '#FFFFFF'
      : 'rgba(255,255,255,0.65)'
    : hov
      ? C.charcoal
      : 'rgba(31,36,48,0.6)';
  const bdr = light
    ? hov
      ? 'rgba(255,255,255,0.48)'
      : 'rgba(255,255,255,0.22)'
    : hov
      ? 'rgba(31,36,48,0.42)'
      : 'rgba(31,36,48,0.2)';
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '13px 28px',
        background: 'transparent',
        color: col,
        fontFamily: F.body,
        fontSize: '14px',
        fontWeight: 400,
        border: `1px solid ${bdr}`,
        cursor: 'pointer',
        transition: 'all 0.22s',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  );
};

// ── Layout ──────────────────────────────────────────────────────────────────
export const Wrap = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  const w = useWW();
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `0 ${w < 768 ? 24 : 48}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Sect = ({
  children,
  bg,
  padY,
  style,
}: {
  children: ReactNode;
  bg?: string;
  padY?: number;
  style?: CSSProperties;
}) => {
  const w = useWW();
  const py = padY !== undefined ? padY : w < 768 ? 80 : 120;
  return (
    <section style={{ background: bg || C.white, padding: `${py}px 0`, ...style }}>
      {children}
    </section>
  );
};

// ── CTA Block ───────────────────────────────────────────────────────────────
type CTABlockProps = {
  headline?: string;
  sub?: string;
  ctaLabel?: string;
  secondary?: string;
};

export const CTABlock = ({ headline, sub, ctaLabel, secondary }: CTABlockProps) => {
  const navigate = useNavigate();
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const fd = {
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(18px)',
    transition: 'all 0.65s cubic-bezier(0.16,1,0.3,1)',
  };
  return (
    <section style={{ background: C.navy, padding: `${isMob ? 80 : 120}px 0` }}>
      <div
        ref={ref}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: `0 ${isMob ? 24 : 48}px`,
          display: 'flex',
          flexDirection: isMob ? 'column' : 'row',
          alignItems: isMob ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: '48px',
        }}
      >
        <div style={{ ...fd, flex: 1 }}>
          <Overline light>Next Step</Overline>
          <h2
            style={{
              fontFamily: F.display,
              fontSize: isMob ? '38px' : 'clamp(38px, 3.5vw, 54px)',
              fontWeight: 300,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              maxWidth: '540px',
              marginBottom: sub ? '16px' : 0,
            }}
          >
            {headline || 'Ready to explore African market entry?'}
          </h2>
          {sub && (
            <p
              style={{
                fontFamily: F.body,
                fontSize: '16px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75,
                maxWidth: '440px',
              }}
            >
              {sub}
            </p>
          )}
        </div>
        <div
          style={{
            ...fd,
            transitionDelay: '0.12s',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'flex-start',
            flexShrink: 0,
          }}
        >
          <BtnPrimary light onClick={() => navigate(PAGE_PATHS.contact)}>
            {ctaLabel || 'Book an Introductory Call'}
          </BtnPrimary>
          {secondary && (
            <BtnSecondary
              light
              onClick={() => {
                window.location.href = 'mailto:hello@bluegorillatech.com';
              }}
            >
              {secondary}
            </BtnSecondary>
          )}
        </div>
      </div>
    </section>
  );
};

// ── Page Hero (inner pages) ─────────────────────────────────────────────────
type PageHeroProps = {
  overline: string;
  headline: string;
  sub?: string;
};

export const PageHero = ({ overline, headline, sub }: PageHeroProps) => {
  const w = useWW();
  const isMob = w < 768;
  return (
    <section
      style={{
        background: C.navy,
        padding: `${isMob ? 80 : 110}px 0 ${isMob ? 64 : 90}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />
      <Wrap>
        <div className="bg-page">
          <Overline light>{overline}</Overline>
          <h1
            style={{
              fontFamily: F.display,
              fontSize: isMob ? '44px' : 'clamp(44px, 4.5vw, 68px)',
              fontWeight: 300,
              color: '#FFFFFF',
              lineHeight: 1.07,
              letterSpacing: '-0.02em',
              maxWidth: '720px',
              marginBottom: sub ? '24px' : 0,
            }}
          >
            {headline}
          </h1>
          {sub && (
            <p
              style={{
                fontFamily: F.body,
                fontSize: isMob ? '16px' : '18px',
                color: 'rgba(255,255,255,0.58)',
                lineHeight: 1.75,
                maxWidth: '560px',
                fontWeight: 300,
              }}
            >
              {sub}
            </p>
          )}
        </div>
      </Wrap>
    </section>
  );
};

// ── Cross-nav card used across inner pages ──────────────────────────────────
// Extracted to top-level component to avoid calling hooks inside `.map()`.
type CrossNavCardProps = {
  label: string;
  desc: string;
  page: PageKey;
  index: number;
  vis: boolean;
};

const CrossNavCard = ({ label, desc, page, index, vis }: CrossNavCardProps) => {
  const navigate = useNavigate();
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={() => navigate(PAGE_PATHS[page])}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? C.navy : C.white,
        border: 'none',
        padding: '24px 28px',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'background 0.22s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(10px)',
        transitionDelay: `${0.08 * index}s`,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: F.body,
            fontSize: '15px',
            fontWeight: 500,
            color: hov ? '#FFFFFF' : C.charcoal,
            marginBottom: '4px',
            transition: 'color 0.22s',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: F.body,
            fontSize: '13px',
            color: hov ? 'rgba(255,255,255,0.55)' : 'rgba(31,36,48,0.5)',
            transition: 'color 0.22s',
          }}
        >
          {desc}
        </div>
      </div>
      <span
        style={{
          fontSize: '18px',
          color: hov ? 'rgba(255,255,255,0.5)' : C.border,
          transition: 'color 0.22s',
        }}
      >
        →
      </span>
    </button>
  );
};

export const CrossNav = ({
  links,
}: {
  links: { label: string; desc: string; page: PageKey }[];
}) => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  return (
    <Sect bg={C.paper} padY={64}>
      <Wrap>
        <div ref={ref}>
          <div
            style={{
              fontFamily: F.body,
              fontSize: '10.5px',
              fontWeight: 500,
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: 'rgba(31,36,48,0.38)',
              marginBottom: '24px',
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          >
            Continue Exploring
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : 'repeat(3, 1fr)',
              gap: '1px',
              background: C.border,
            }}
          >
            {links.map((l, i) => (
              <CrossNavCard key={l.page} {...l} index={i} vis={vis} />
            ))}
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};
