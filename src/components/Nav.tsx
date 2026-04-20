import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { C, F } from '../theme';
import { useWW } from '../hooks';
import { PAGE_PATHS, PageKey, pathToPageKey } from '../paths';

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const page = pathToPageKey(pathname);

  const w = useWW();
  const isMob = w < 768;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h, { passive: true });
    h();
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Close the mobile menu on route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [page]);

  const isHome = page === 'home';
  const light = isHome && !scrolled && !menuOpen;

  const links: { label: string; page: PageKey }[] = [
    { label: 'Services', page: 'services' },
    { label: 'Sectors', page: 'sectors' },
    { label: 'Markets', page: 'markets' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const go = (p: PageKey) => {
    navigate(PAGE_PATHS[p]);
    setMenuOpen(false);
  };

  const navBg = menuOpen ? C.navy : light ? 'transparent' : 'rgba(255,255,255,0.97)';
  const navBorder = light || menuOpen ? 'none' : `1px solid ${C.border}`;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: navBg,
          borderBottom: navBorder,
          backdropFilter: light ? 'none' : 'blur(12px)',
          transition: 'background 0.35s ease, border-color 0.35s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: `0 ${isMob ? 24 : 48}px`,
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => go('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: 0,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src={light || menuOpen ? '/gorilla-icon-white.svg' : '/gorilla-icon.svg'}
              style={{ height: '27px', width: 'auto' }}
              alt=""
            />
            <img
              src={light || menuOpen ? '/wordmark-white.svg' : '/wordmark.svg'}
              style={{ height: '13.5px', width: 'auto' }}
              alt="Blue Gorilla"
            />
          </button>

          {/* Desktop links */}
          {!isMob && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
              {links.map((l) => {
                const active = page === l.page;
                return (
                  <button
                    key={l.page}
                    onClick={() => go(l.page)}
                    style={{
                      fontFamily: F.body,
                      fontSize: '13.5px',
                      fontWeight: active ? 500 : 400,
                      color: light
                        ? active
                          ? '#FFFFFF'
                          : 'rgba(255,255,255,0.6)'
                        : active
                          ? C.blue
                          : 'rgba(31,36,48,0.72)',
                      background: 'none',
                      border: 'none',
                      borderBottom: active
                        ? `1px solid ${light ? 'rgba(255,255,255,0.5)' : C.blue}`
                        : '1px solid transparent',
                      padding: '3px 0',
                      cursor: 'pointer',
                      transition: 'color 0.2s, border-color 0.2s',
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.color = light ? '#FFFFFF' : C.blue;
                    }}
                    onMouseLeave={(e) => {
                      if (!active)
                        e.currentTarget.style.color = light
                          ? 'rgba(255,255,255,0.6)'
                          : 'rgba(31,36,48,0.72)';
                    }}
                  >
                    {l.label}
                  </button>
                );
              })}
              <button
                onClick={() => go('contact')}
                style={{
                  fontFamily: F.body,
                  fontSize: '13px',
                  fontWeight: 500,
                  color: light ? C.navy : '#FFFFFF',
                  background: light ? '#FFFFFF' : C.blue,
                  border: 'none',
                  padding: '9px 20px',
                  cursor: 'pointer',
                  letterSpacing: '0.01em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Book a Call
              </button>
            </div>
          )}

          {/* Hamburger */}
          {isMob && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '22px',
                    height: '1.5px',
                    background: light || menuOpen ? '#FFFFFF' : C.charcoal,
                    transition: 'all 0.28s ease',
                    transform: menuOpen
                      ? i === 0
                        ? 'rotate(45deg) translate(4.5px, 4.5px)'
                        : i === 2
                          ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                          : 'none'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>

        {/* Mobile menu overlay */}
        {isMob && menuOpen && (
          <div
            style={{
              background: C.navy,
              padding: '8px 24px 32px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {links.map((l) => (
              <button
                key={l.page}
                onClick={() => go(l.page)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  fontFamily: F.body,
                  fontSize: '20px',
                  fontWeight: page === l.page ? 500 : 300,
                  color: page === l.page ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
                  background: 'none',
                  border: 'none',
                  padding: '13px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              style={{
                marginTop: '20px',
                display: 'block',
                width: '100%',
                fontFamily: F.body,
                fontSize: '14px',
                fontWeight: 500,
                color: C.navy,
                background: '#FFFFFF',
                border: 'none',
                padding: '14px 20px',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              Book an Introductory Call →
            </button>
          </div>
        )}
      </nav>

      {/* Spacer for non-home pages so fixed nav doesn't cover content. */}
      {!isHome && <div style={{ height: '68px' }} />}
    </>
  );
};

export default Nav;
