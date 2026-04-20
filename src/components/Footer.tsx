import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../theme';
import { useWW } from '../hooks';
import { PAGE_PATHS, PageKey } from '../paths';

type FLinkProps = { label: string; page: PageKey };

const FLink = ({ label, page }: FLinkProps) => {
  const navigate = useNavigate();
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={() => navigate(PAGE_PATHS[page])}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'block',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: F.body,
        fontSize: '14px',
        fontWeight: 400,
        color: hov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.48)',
        transition: 'color 0.2s',
      }}
    >
      {label}
    </button>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const w = useWW();
  const isMob = w < 768;

  const colLinks: { title: string; links: FLinkProps[] }[] = [
    {
      title: 'Offering',
      links: [
        { label: 'Services', page: 'services' },
        { label: 'Sectors', page: 'sectors' },
        { label: 'Markets', page: 'markets' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', page: 'about' },
        { label: 'Contact', page: 'contact' },
      ],
    },
  ];

  return (
    <footer style={{ background: C.navy, padding: `${isMob ? 64 : 88}px 0 40px` }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: `0 ${isMob ? 24 : 48}px`,
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMob ? '1fr' : '1fr auto auto auto',
            gap: isMob ? '48px' : '64px',
            marginBottom: '64px',
            alignItems: 'start',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '320px' }}>
            <button
              onClick={() => navigate(PAGE_PATHS.home)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                marginBottom: '22px',
              }}
            >
              <img
                src="/gorilla-icon-white.svg"
                style={{ height: '26px', width: 'auto' }}
                alt=""
              />
              <img
                src="/wordmark-white.svg"
                style={{ height: '13px', width: 'auto' }}
                alt="Blue Gorilla"
              />
            </button>
            <p
              style={{
                fontFamily: F.body,
                fontSize: '14px',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.8,
                marginBottom: '28px',
              }}
            >
              Execution-oriented Africa business development. From opportunity framing to close
              support.
            </p>

          </div>

          {/* Nav columns */}
          {colLinks.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: F.body,
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.17em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)',
                  marginBottom: '20px',
                }}
              >
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {col.links.map((l) => (
                  <FLink key={l.page} {...l} />
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div>
            <div
              style={{
                fontFamily: F.body,
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.17em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.28)',
                marginBottom: '20px',
              }}
            >
              Get in Touch
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'flex-start',
              }}
            >
              <button
                onClick={() => navigate(PAGE_PATHS.contact)}
                style={{
                  fontFamily: F.body,
                  fontSize: '13px',
                  fontWeight: 500,
                  color: C.navy,
                  background: '#FFFFFF',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Book an Introductory Call →
              </button>
              <a
                href="mailto:hello@bluegorillatech.com"
                style={{
                  fontFamily: F.body,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.38)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
              >
                hello@bluegorillatech.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '28px',
            display: 'flex',
            flexDirection: isMob ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMob ? 'flex-start' : 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              fontFamily: F.body,
              fontSize: '12px',
              color: 'rgba(255,255,255,0.18)',
            }}
          >
            © {new Date().getFullYear()} Blue Gorilla. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: F.body,
              fontSize: '12px',
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.04em',
            }}
          >
            Africa business development, beyond introductions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
