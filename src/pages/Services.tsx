import { useState } from 'react';
import { C, F } from '../theme';
import { useFade, useWW } from '../hooks';
import {
  CTABlock,
  CrossNav,
  Overline,
  PageHero,
  Sect,
  Wrap,
} from '../components/primitives';

const stages = [
  {
    n: '01',
    title: 'Opportunity Framing',
    body: 'Blue Gorilla begins by working with the client to define the commercial objective clearly. What does success look like? Which type of counterparty is relevant? What is the realistic timeline? This framing stage prevents wasted effort downstream.',
  },
  {
    n: '02',
    title: 'Market Mapping',
    body: "A structured review of the target market landscape — identifying the actors, channels, and commercial dynamics that are most relevant to the client's objective. Practical and specific, not encyclopaedic.",
  },
  {
    n: '03',
    title: 'Partner Identification',
    body: 'Using founder-led relationships and on-the-ground knowledge, Blue Gorilla identifies the counterparties most likely to generate real commercial movement. Quality over quantity. Relevance over volume.',
  },
  {
    n: '04',
    title: 'Qualified Introductions',
    body: 'Introductions are made once alignment is confirmed on both sides. Blue Gorilla does not open doors randomly. Introductions are framed, timed, and positioned to create the right context for a productive first conversation.',
  },
  {
    n: '05',
    title: 'Negotiation Support',
    body: 'Blue Gorilla stays close as conversations progress. This includes helping frame commercial proposals, navigating counterparty dynamics, supporting term discussions, and maintaining momentum where it matters most.',
  },
  {
    n: '06',
    title: 'Local Coordination Support',
    body: 'On-the-ground realities shape how deals move. Blue Gorilla provides coordination support that reflects the practical operating environment — including regulatory, logistical, and relationship dynamics specific to the market.',
  },
  {
    n: '07',
    title: 'Close Support',
    body: 'Blue Gorilla supports the final stages of deal progression — helping ensure that commercial intent translates into structured outcomes. This is where many market-entry partnerships fail, and where Blue Gorilla is built to add value.',
  },
];

const ServicesWorkstream = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const [active, setActive] = useState(0);

  return (
    <Sect bg={C.white}>
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
            <Overline>The Workstream</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontSize: isMob ? '34px' : 'clamp(34px, 3vw, 50px)',
                fontWeight: 400,
                color: C.charcoal,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                maxWidth: '600px',
              }}
            >
              From opportunity framing to close support.
            </h2>
          </div>

          {isMob ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {stages.map((s, i) => (
                <div
                  key={s.n}
                  style={{
                    opacity: vis ? 1 : 0,
                    transition: `all 0.65s ease ${0.06 * i}s`,
                    borderTop: `1px solid ${C.border}`,
                  }}
                >
                  <button
                    onClick={() => setActive(active === i ? -1 : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '20px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: F.display,
                        fontSize: '22px',
                        fontWeight: 300,
                        color: 'rgba(7,47,146,0.4)',
                        flexShrink: 0,
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      style={{
                        fontFamily: F.body,
                        fontSize: '15px',
                        fontWeight: 500,
                        color: C.charcoal,
                        flex: 1,
                      }}
                    >
                      {s.title}
                    </span>
                    <span
                      style={{
                        fontFamily: F.body,
                        color: 'rgba(31,36,48,0.35)',
                        fontSize: '18px',
                        transform: active === i ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.2s',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {active === i && (
                    <p
                      style={{
                        fontFamily: F.body,
                        fontSize: '14px',
                        color: 'rgba(31,36,48,0.65)',
                        lineHeight: 1.8,
                        paddingBottom: '20px',
                        paddingLeft: '38px',
                      }}
                    >
                      {s.body}
                    </p>
                  )}
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${C.border}` }} />
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '240px 1fr',
                gap: '0',
                minHeight: '420px',
                border: `1px solid ${C.border}`,
                opacity: vis ? 1 : 0,
                transition: 'all 0.65s ease 0.1s',
              }}
            >
              {/* Stage list */}
              <div style={{ borderRight: `1px solid ${C.border}` }}>
                {stages.map((s, i) => (
                  <button
                    key={s.n}
                    onClick={() => setActive(i)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      width: '100%',
                      padding: '18px 24px',
                      background: active === i ? C.navy : 'transparent',
                      border: 'none',
                      borderBottom:
                        i < stages.length - 1 ? `1px solid ${C.border}` : 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.22s',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: F.display,
                        fontSize: '18px',
                        fontWeight: 300,
                        color:
                          active === i ? 'rgba(255,255,255,0.45)' : 'rgba(7,47,146,0.4)',
                        flexShrink: 0,
                        width: '28px',
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      style={{
                        fontFamily: F.body,
                        fontSize: '13.5px',
                        fontWeight: active === i ? 500 : 400,
                        color: active === i ? '#FFFFFF' : 'rgba(31,36,48,0.75)',
                        lineHeight: 1.35,
                      }}
                    >
                      {s.title}
                    </span>
                  </button>
                ))}
              </div>
              {/* Stage detail */}
              <div
                style={{
                  padding: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontSize: '60px',
                    fontWeight: 300,
                    color: 'rgba(7,47,146,0.2)',
                    lineHeight: 1,
                    marginBottom: '24px',
                  }}
                >
                  {stages[active].n}
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    fontSize: '28px',
                    fontWeight: 400,
                    color: C.charcoal,
                    marginBottom: '16px',
                  }}
                >
                  {stages[active].title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: '16px',
                    color: 'rgba(31,36,48,0.68)',
                    lineHeight: 1.82,
                  }}
                >
                  {stages[active].body}
                </p>
              </div>
            </div>
          )}
        </div>
      </Wrap>
    </Sect>
  );
};

const ServicesEngagement = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();

  const steps = [
    {
      title: 'Introductory Call',
      detail:
        'A focused conversation about your expansion objective. No sales pitch. Blue Gorilla needs to understand the opportunity clearly before committing.',
    },
    {
      title: 'Scoped Conversation',
      detail:
        'Blue Gorilla frames the specific workstream — counterparties, market dynamics, realistic scope, and timeline.',
    },
    {
      title: 'Formal Proposal',
      detail:
        'A written proposal covering scope, commercial model (setup fee, retainer, and success component), and engagement structure.',
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
              marginBottom: '52px',
            }}
          >
            <Overline>First Engagement</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontSize: isMob ? '32px' : '46px',
                fontWeight: 400,
                color: C.charcoal,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              What a first engagement looks like.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : 'repeat(3, 1fr)',
              gap: '0',
              borderTop: `1px solid ${C.border}`,
            }}
          >
            {steps.map((s, i) => (
              <div
                key={s.title}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(16px)',
                  transition: `all 0.65s ease ${0.1 * i}s`,
                  padding: isMob ? '28px 0' : '36px 36px 36px 0',
                  borderRight:
                    !isMob && i < steps.length - 1 ? `1px solid ${C.border}` : 'none',
                  paddingLeft: !isMob && i > 0 ? '36px' : undefined,
                  borderBottom:
                    isMob && i < steps.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontSize: '44px',
                    fontWeight: 300,
                    color: 'rgba(7,47,146,0.3)',
                    lineHeight: 1,
                    marginBottom: '18px',
                  }}
                >
                  {`0${i + 1}`}
                </div>
                <h3
                  style={{
                    fontFamily: F.body,
                    fontSize: '15px',
                    fontWeight: 500,
                    color: C.charcoal,
                    marginBottom: '10px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: '14px',
                    color: 'rgba(31,36,48,0.6)',
                    lineHeight: 1.8,
                  }}
                >
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const ServicesModel = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();

  const items = [
    {
      label: 'Setup Fee',
      body: 'A one-time engagement setup fee that covers initial framing, market mapping, and counterparty identification. Reflects the structured work involved in preparing the workstream.',
    },
    {
      label: 'Retainer',
      body: 'A monthly retainer covering sustained business development activity — introductions, follow-through, negotiation support, and local coordination. Paid for real work, not advisory reports.',
    },
    {
      label: 'Success Component',
      body: 'A performance-aligned component tied to defined commercial milestones. Blue Gorilla is commercially invested in progression, not only in activity.',
    },
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
              marginBottom: '52px',
            }}
          >
            <Overline>Commercial Model</Overline>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
                gap: '40px',
                alignItems: 'start',
              }}
            >
              <h2
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '32px' : '44px',
                  fontWeight: 400,
                  color: C.charcoal,
                  lineHeight: 1.12,
                  letterSpacing: '-0.01em',
                }}
              >
                A commercial model aligned to work and outcomes.
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '15px',
                  color: 'rgba(31,36,48,0.65)',
                  lineHeight: 1.82,
                  marginTop: isMob ? 0 : '8px',
                }}
              >
                Blue Gorilla does not charge for strategy documents or generic market entry
                advice. The commercial model reflects structured execution activity and outcome
                alignment.
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : 'repeat(3, 1fr)',
              gap: '1px',
              background: C.border,
            }}
          >
            {items.map((item, i) => (
              <div
                key={item.label}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(16px)',
                  transition: `all 0.65s ease ${0.1 * i}s`,
                  background: C.white,
                  padding: isMob ? '28px' : '36px',
                }}
              >
                <div
                  style={{
                    fontFamily: F.body,
                    fontSize: '10.5px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: C.blue,
                    marginBottom: '16px',
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: '14px',
                    color: 'rgba(31,36,48,0.65)',
                    lineHeight: 1.82,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.65s ease 0.3s',
              marginTop: '32px',
              padding: '20px 24px',
              background: C.paper,
              borderLeft: `3px solid ${C.blue}`,
            }}
          >
            <p
              style={{
                fontFamily: F.body,
                fontSize: '14px',
                color: 'rgba(31,36,48,0.65)',
                lineHeight: 1.75,
              }}
            >
              <strong style={{ color: C.charcoal, fontWeight: 500 }}>
                A note on outcomes:
              </strong>{' '}
              Blue Gorilla commits to qualified execution — structured workstreams, relevant
              counterparties, and sustained commercial progression. It does not guarantee
              specific sales volumes or deal timelines. Commercial outcomes depend on multiple
              parties.
            </p>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const ServicesImageStrip = () => {
  const w = useWW();
  const isMob = w < 768;
  return (
    <div
      style={{
        height: isMob ? '280px' : '380px',
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
            "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,47,146,0.80)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
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
            display: 'grid',
            gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: F.body,
                fontSize: '10.5px',
                fontWeight: 500,
                letterSpacing: '0.17em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.38)',
                marginBottom: '16px',
              }}
            >
              What sets us apart
            </div>
            <p
              style={{
                fontFamily: F.display,
                fontStyle: 'italic',
                fontSize: isMob ? '22px' : 'clamp(22px, 2.4vw, 32px)',
                fontWeight: 300,
                color: '#FFFFFF',
                lineHeight: 1.35,
                letterSpacing: '-0.01em',
              }}
            >
              &ldquo;Introductions are not enough. Blue Gorilla stays close through negotiation,
              coordination, and close support.&rdquo;
            </p>
          </div>
          {!isMob && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Structured commercial workstream',
                'Qualified introductions, not volume',
                'Negotiation and close support included',
                'Commercially aligned fee model',
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: 'flex', gap: '14px', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      background: 'rgba(255,255,255,0.5)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: F.body,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.72)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Services = () => (
  <div className="bg-page">
    <PageHero
      overline="Services"
      headline="How Blue Gorilla works."
      sub="A practical commercial workstream — from opportunity framing to close support. Structured, not improvised."
    />
    <ServicesWorkstream />
    <ServicesImageStrip />
    <ServicesEngagement />
    <ServicesModel />
    <CrossNav
      links={[
        { label: 'Sectors', desc: 'Where Blue Gorilla adds value', page: 'sectors' },
        { label: 'Markets', desc: 'Geographic focus and DRC anchor', page: 'markets' },
        { label: 'About', desc: 'Why the team can credibly do this', page: 'about' },
      ]}
    />
    <CTABlock
      headline="Discuss your market entry plan."
      ctaLabel="Discuss Your Market Entry Plan"
    />
  </div>
);

export default Services;
