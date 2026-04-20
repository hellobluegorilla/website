import { useNavigate } from 'react-router-dom';
import { C, F } from '../theme';
import { useFade, useWW } from '../hooks';
import {
  BtnPrimary,
  BtnSecondary,
  CTABlock,
  Overline,
  Sect,
  Wrap,
} from '../components/primitives';
import { PAGE_PATHS } from '../paths';

// ── Hero ────────────────────────────────────────────────────────────────────
const HomeHero = () => {
  const navigate = useNavigate();
  const w = useWW();
  const isMob = w < 768;

  return (
    <section
      style={{
        minHeight: '100vh',
        background: C.navy,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: `${isMob ? 100 : 80}px 0`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.13,
          mixBlendMode: 'luminosity',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <Wrap style={{ position: 'relative', zIndex: 1 }}>
        <div className="bg-a">
          <Overline light>Africa Business Development · Est. 2024</Overline>
        </div>
        <h1
          className="bg-a bg-d1"
          style={{
            fontFamily: F.display,
            fontSize: isMob ? '46px' : 'clamp(54px, 5.8vw, 86px)',
            fontWeight: 300,
            color: '#FFFFFF',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            maxWidth: '860px',
            marginBottom: '36px',
          }}
        >
          Africa business development,
          <br />
          beyond introductions.
        </h1>

        <div
          className="bg-a bg-d2"
          style={{
            width: '60px',
            height: '1px',
            background: 'rgba(255,255,255,0.25)',
            marginBottom: '32px',
          }}
        />

        <p
          className="bg-a bg-d2"
          style={{
            fontFamily: F.body,
            fontSize: isMob ? '16px' : '18px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.78,
            maxWidth: '520px',
            marginBottom: '48px',
          }}
        >
          Blue Gorilla helps companies enter and expand in African markets through
          execution-oriented business development — from opportunity framing to close support.
        </p>

        <div
          className="bg-a bg-d3"
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
        >
          <BtnPrimary light onClick={() => navigate(PAGE_PATHS.contact)}>
            Book an Introductory Call
          </BtnPrimary>
          <BtnSecondary
            light
            onClick={() => {
              window.location.href = 'mailto:hello@bluegorillatech.com';
            }}
          >
            Request the Deck
          </BtnSecondary>
        </div>


      </Wrap>
    </section>
  );
};

// ── The gap / challenge ─────────────────────────────────────────────────────
const HomeGap = () => {
  const navigate = useNavigate();
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const fd = (delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(20px)',
    transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  const gaps = [
    {
      n: '01',
      title: 'Access without progression',
      body: 'Introductions are made, but no one owns what happens after. Opportunities stall without qualified follow-through.',
    },
    {
      n: '02',
      title: 'Strategy without traction',
      body: "Reports and recommendations accumulate. Execution remains someone else's problem. Commercial movement doesn't follow analysis.",
    },
    {
      n: '03',
      title: 'Time lost to weak mapping',
      body: 'The wrong counterparties surface early. Months are spent on contacts who cannot actually advance a deal.',
    },
  ];

  return (
    <Sect bg={C.paper}>
      <Wrap>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
            gap: isMob ? '48px' : '80px',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div style={fd(0)}>
            <Overline>The Challenge</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontStyle: 'italic',
                fontSize: isMob ? '32px' : 'clamp(32px, 3vw, 46px)',
                fontWeight: 300,
                color: C.charcoal,
                lineHeight: 1.18,
                letterSpacing: '-0.01em',
              }}
            >
              &ldquo;Most Africa expansion efforts don&rsquo;t fail from lack of ambition. They
              stall in the gap between access and execution.&rdquo;
            </h2>
            <div
              style={{
                width: '40px',
                height: '1px',
                background: C.border,
                marginTop: '32px',
                marginBottom: '28px',
              }}
            />
            <p
              style={{
                fontFamily: F.body,
                fontSize: '16px',
                color: 'rgba(31,36,48,0.68)',
                lineHeight: 1.78,
              }}
            >
              Blue Gorilla is built to close that gap. Not through strategy documents, and not
              through a single introduction. Through sustained, execution-oriented business
              development.
            </p>
            <button
              onClick={() => navigate(PAGE_PATHS.services)}
              style={{
                marginTop: '32px',
                fontFamily: F.body,
                fontSize: '13.5px',
                fontWeight: 500,
                color: C.blue,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              How We Work →
            </button>
          </div>

          {/* Right */}
          <div style={fd(0.12)}>
            {gaps.map((g, i) => (
              <div
                key={g.n}
                style={{
                  paddingBottom: '28px',
                  marginBottom: '28px',
                  borderBottom: i < gaps.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      fontFamily: F.display,
                      fontSize: '28px',
                      fontWeight: 300,
                      color: 'rgba(7,47,146,0.2)',
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: '4px',
                    }}
                  >
                    {g.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: F.body,
                        fontSize: '15px',
                        fontWeight: 500,
                        color: C.charcoal,
                        marginBottom: '8px',
                      }}
                    >
                      {g.title}
                    </div>
                    <p
                      style={{
                        fontFamily: F.body,
                        fontSize: '14px',
                        color: 'rgba(31,36,48,0.62)',
                        lineHeight: 1.75,
                      }}
                    >
                      {g.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

// ── The service workstream overview ─────────────────────────────────────────
const HomeService = () => {
  const navigate = useNavigate();
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();

  const stages = [
    { n: '01', label: 'Opportunity Framing' },
    { n: '02', label: 'Market Mapping' },
    { n: '03', label: 'Partner Identification' },
    { n: '04', label: 'Qualified Introductions' },
    { n: '05', label: 'Negotiation Support' },
    { n: '06', label: 'Local Coordination' },
    { n: '07', label: 'Close Support' },
  ];

  return (
    <Sect bg={C.white}>
      <Wrap>
        <div ref={ref}>
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(16px)',
              transition: 'all 0.65s ease',
              display: 'flex',
              flexDirection: isMob ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMob ? 'flex-start' : 'center',
              marginBottom: '56px',
              gap: '24px',
            }}
          >
            <div>
              <Overline>The Service</Overline>
              <h2
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '36px' : 'clamp(34px, 3.2vw, 50px)',
                  fontWeight: 400,
                  color: C.charcoal,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                One commercial workstream,
                <br />
                end to end.
              </h2>
            </div>
            <button
              onClick={() => navigate(PAGE_PATHS.services)}
              style={{
                fontFamily: F.body,
                fontSize: '13.5px',
                fontWeight: 500,
                color: C.blue,
                background: 'none',
                border: `1px solid ${C.border}`,
                padding: '10px 20px',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.blue)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
            >
              Full Service Detail →
            </button>
          </div>

          {/* Stages */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr 1fr' : 'repeat(7, 1fr)',
              gap: isMob ? '1px' : '0',
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(16px)',
              transition: 'all 0.65s ease 0.12s',
            }}
          >
            {stages.map((s, i) => (
              <div
                key={s.n}
                style={{
                  padding: isMob ? '20px 16px' : '28px 20px',
                  borderLeft: i > 0 && !isMob ? `1px solid ${C.border}` : 'none',
                  borderTop: isMob ? `1px solid ${C.border}` : 'none',
                  borderBottom: `1px solid ${C.border}`,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontSize: '32px',
                    fontWeight: 300,
                    color: 'rgba(7,47,146,0.35)',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: F.body,
                    fontSize: '12.5px',
                    fontWeight: 500,
                    color: C.charcoal,
                    lineHeight: 1.4,
                    letterSpacing: '0.01em',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

// ── Focus: Markets + Sectors ────────────────────────────────────────────────
const HomeFocus = () => {
  const navigate = useNavigate();
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const fd = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(16px)',
    transition: `all 0.65s ease ${d}s`,
  });

  const sectors = ['Financial Services', 'Technology', 'Construction', 'Mining', 'Investment'];
  const markets = [
    'DRC (Initial Anchor)',
    'Pan-African Scope',
    'Central Africa',
    'West Africa',
    'Southern Africa',
  ];

  return (
    <Sect bg={C.mist}>
      <Wrap>
        <div ref={ref}>
          <Overline>Focus</Overline>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
              gap: isMob ? '48px' : '80px',
            }}
          >
            {/* Markets */}
            <div style={fd(0)}>
              <h3
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '28px' : '36px',
                  fontWeight: 400,
                  color: C.charcoal,
                  lineHeight: 1.15,
                  marginBottom: '20px',
                }}
              >
                Markets
              </h3>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '15px',
                  color: 'rgba(31,36,48,0.68)',
                  lineHeight: 1.78,
                  marginBottom: '28px',
                }}
              >
                Pan-African commercial posture with the Democratic Republic of Congo as our
                initial anchor market. We operate where practical commercial progression can be
                supported.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {markets.map((m, i) => (
                  <div
                    key={m}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                  >
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        background: C.blue,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: F.body,
                        fontSize: '14px',
                        color: C.charcoal,
                        fontWeight: i === 0 ? 500 : 400,
                      }}
                    >
                      {m}
                    </span>
                    {i === 0 && (
                      <span
                        style={{
                          fontFamily: F.body,
                          fontSize: '10.5px',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: C.blue,
                          background: 'rgba(7,47,146,0.08)',
                          padding: '2px 8px',
                        }}
                      >
                        Anchor
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate(PAGE_PATHS.markets)}
                style={{
                  marginTop: '28px',
                  fontFamily: F.body,
                  fontSize: '13px',
                  fontWeight: 500,
                  color: C.blue,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Africa Focus →
              </button>
            </div>

            {/* Sectors */}
            <div style={fd(0.12)}>
              <h3
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '28px' : '36px',
                  fontWeight: 400,
                  color: C.charcoal,
                  lineHeight: 1.15,
                  marginBottom: '20px',
                }}
              >
                Sectors
              </h3>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '15px',
                  color: 'rgba(31,36,48,0.68)',
                  lineHeight: 1.78,
                  marginBottom: '28px',
                }}
              >
                Blue Gorilla launches with focused sector engines. Where counterparties,
                channels, negotiation, and local coordination are the variables that determine
                commercial success.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {sectors.map((s, i) => (
                  <div
                    key={s}
                    style={{
                      padding: '14px 0',
                      borderBottom:
                        i < sectors.length - 1
                          ? '1px solid rgba(7,47,146,0.12)'
                          : 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: F.body,
                        fontSize: '15px',
                        color: C.charcoal,
                        fontWeight: 400,
                      }}
                    >
                      {s}
                    </span>
                    <span
                      style={{
                        fontFamily: F.body,
                        fontSize: '12px',
                        color: 'rgba(7,47,146,0.4)',
                      }}
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate(PAGE_PATHS.sectors)}
                style={{
                  marginTop: '28px',
                  fontFamily: F.body,
                  fontSize: '13px',
                  fontWeight: 500,
                  color: C.blue,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Sector Focus →
              </button>
            </div>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

// ── Credibility pillars ─────────────────────────────────────────────────────
const HomeCredibility = () => {
  const navigate = useNavigate();
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();

  const pillars = [
    {
      n: '01',
      title: 'Beyond introductions',
      body: "Blue Gorilla's value is not access alone. It stays close as the opportunity progresses — through negotiation, local coordination, and close support.",
    },
    {
      n: '02',
      title: 'End-to-end workstream',
      body: 'One commercial workstream from opportunity framing to close support. No handoff risk. No gap between access and execution.',
    },
    {
      n: '03',
      title: 'Founder-led credibility',
      body: 'The brand is new. The relationships, market knowledge, and operating experience in African commercial execution are not.',
    },
  ];

  return (
    <Sect bg={C.paper}>
      <Wrap>
        <div ref={ref}>
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(16px)',
              transition: 'all 0.65s ease',
              marginBottom: '56px',
            }}
          >
            <Overline>Why Blue Gorilla</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontSize: isMob ? '34px' : 'clamp(34px, 3vw, 48px)',
                fontWeight: 400,
                color: C.charcoal,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                maxWidth: '640px',
              }}
            >
              Built for commercial progression, not advisory theatre.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : 'repeat(3, 1fr)',
              gap: isMob ? '40px' : '1px',
              borderTop: `1px solid ${C.border}`,
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={p.n}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(16px)',
                  transition: `all 0.65s ease ${0.1 * i}s`,
                  padding: isMob ? '32px 0' : '40px 40px 40px 0',
                  borderRight:
                    !isMob && i < pillars.length - 1 ? `1px solid ${C.border}` : 'none',
                  paddingLeft: !isMob && i > 0 ? '40px' : undefined,
                  borderBottom:
                    isMob && i < pillars.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontSize: '48px',
                    fontWeight: 300,
                    color: 'rgba(7,47,146,0.35)',
                    lineHeight: 1,
                    marginBottom: '20px',
                  }}
                >
                  {p.n}
                </div>
                <h3
                  style={{
                    fontFamily: F.body,
                    fontSize: '16px',
                    fontWeight: 500,
                    color: C.charcoal,
                    marginBottom: '12px',
                    lineHeight: 1.35,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: '14px',
                    color: 'rgba(31,36,48,0.62)',
                    lineHeight: 1.8,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '48px',
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.65s ease 0.35s',
            }}
          >
            <button
              onClick={() => navigate(PAGE_PATHS.about)}
              style={{
                fontFamily: F.body,
                fontSize: '13.5px',
                fontWeight: 500,
                color: C.blue,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              About Blue Gorilla →
            </button>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

// ── Engagement steps (navy block) ───────────────────────────────────────────
const HomeEngagement = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();

  const steps = [
    {
      n: '01',
      title: 'Introductory Call',
      body: 'A serious conversation about your expansion goals, target geography, and commercial intent. No sales pitch.',
    },
    {
      n: '02',
      title: 'Scoped Conversation',
      body: 'Blue Gorilla frames the opportunity, identifies the relevant counterparties, and outlines how the workstream would be structured.',
    },
    {
      n: '03',
      title: 'Proposal',
      body: 'A formal proposal covering scope, timeline, and commercial model — structured around your specific expansion objective.',
    },
  ];

  return (
    <section style={{ background: C.navy, padding: `${isMob ? 80 : 120}px 0` }}>
      <Wrap>
        <div ref={ref}>
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(16px)',
              transition: 'all 0.65s ease',
              marginBottom: '56px',
            }}
          >
            <Overline light>Getting Started</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontSize: isMob ? '34px' : 'clamp(34px, 3vw, 50px)',
                fontWeight: 300,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                maxWidth: '560px',
              }}
            >
              A serious first engagement in three steps.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : 'repeat(3, 1fr)',
              gap: isMob ? '32px' : '0',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {steps.map((s, i) => (
              <div
                key={s.n}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(16px)',
                  transition: `all 0.65s ease ${0.1 * i}s`,
                  padding: isMob ? '28px 0' : '36px 36px 36px 0',
                  borderRight:
                    !isMob && i < steps.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  paddingLeft: !isMob && i > 0 ? '36px' : undefined,
                  borderBottom:
                    isMob && i < steps.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontSize: '52px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.1)',
                    lineHeight: 1,
                    marginBottom: '20px',
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: F.body,
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    marginBottom: '10px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.78,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

// ── Image quote strip ───────────────────────────────────────────────────────
const HomeImageStrip = () => {
  const w = useWW();
  const isMob = w < 768;
  return (
    <div
      style={{
        height: isMob ? '300px' : '400px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,27,74,0.78)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: `0 ${isMob ? 24 : 48}px`,
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div
          style={{
            borderLeft: '2px solid rgba(255,255,255,0.22)',
            paddingLeft: isMob ? '20px' : '32px',
          }}
        >
          <p
            style={{
              fontFamily: F.display,
              fontStyle: 'italic',
              fontSize: isMob ? '22px' : 'clamp(22px, 2.6vw, 36px)',
              fontWeight: 300,
              color: '#FFFFFF',
              lineHeight: 1.38,
              maxWidth: '760px',
              marginBottom: '18px',
              letterSpacing: '-0.01em',
            }}
          >
            &ldquo;The gap between interest in African expansion and real commercial execution is
            where most opportunities are lost.&rdquo;
          </p>
          <div
            style={{
              fontFamily: F.body,
              fontSize: '10.5px',
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
            }}
          >
            Blue Gorilla is built to close that gap.
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => (
  <div className="bg-page">
    <HomeHero />
    <HomeGap />
    <HomeService />
    <HomeImageStrip />
    <HomeFocus />
    <HomeCredibility />
    <HomeEngagement />
    <CTABlock secondary="Request the Deck" />
  </div>
);

export default Home;
