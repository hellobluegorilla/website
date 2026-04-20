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

const MarketsPosture = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const fd = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(16px)',
    transition: `all 0.65s ease ${d}s`,
  });

  const markets = [
    {
      label: 'Pan-African',
      type: 'Scope',
      note: 'Commercial relationships and counterparty access across the continent',
    },
    {
      label: 'Democratic Republic of Congo',
      type: 'Anchor',
      note: 'Deepest relationships, strongest on-the-ground capability, initial launch priority',
    },
    {
      label: 'Central Africa',
      type: 'Active',
      note: 'Strong positioning from DRC foundation and regional networks',
    },
    {
      label: 'West Africa',
      type: 'Active',
      note: 'Selectively engaged where founder relationships and sector fit align',
    },
    {
      label: 'Southern Africa',
      type: 'Active',
      note: 'Accessible through network and sector expertise',
    },
  ];

  return (
    <Sect bg={C.white}>
      <Wrap>
        <div ref={ref}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
              gap: isMob ? '40px' : '80px',
              alignItems: 'start',
            }}
          >
            <div style={fd(0)}>
              <Overline>Geographic Posture</Overline>
              <h2
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '32px' : 'clamp(32px, 3vw, 46px)',
                  fontWeight: 400,
                  color: C.charcoal,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  marginBottom: '24px',
                }}
              >
                Pan-African scope. Disciplined launch focus.
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '16px',
                  color: 'rgba(31,36,48,0.65)',
                  lineHeight: 1.82,
                  marginBottom: '24px',
                }}
              >
                Blue Gorilla has a pan-African commercial posture. It is not a single-country
                firm, and it is not a firm that pretends to cover every African market equally
                from day one.
              </p>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '16px',
                  color: 'rgba(31,36,48,0.65)',
                  lineHeight: 1.82,
                }}
              >
                The launch focus is disciplined: the Democratic Republic of Congo as the initial
                anchor market, with a broader pan-African reach applied where founder
                relationships and commercial judgment justify it.
              </p>
            </div>
            <div style={fd(0.12)}>
              <div
                style={{
                  background: C.paper,
                  padding: isMob ? '28px' : '40px',
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
                    marginBottom: '24px',
                  }}
                >
                  Market Posture
                </div>
                {markets.map((m, i) => (
                  <div
                    key={m.label}
                    style={{
                      padding: '14px 0',
                      borderBottom: i < 4 ? `1px solid ${C.border}` : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: F.body,
                          fontSize: '14px',
                          fontWeight: 500,
                          color: C.charcoal,
                        }}
                      >
                        {m.label}
                      </span>
                      <span
                        style={{
                          fontFamily: F.body,
                          fontSize: '10px',
                          fontWeight: 500,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color:
                            m.type === 'Anchor'
                              ? C.white
                              : m.type === 'Scope'
                                ? C.blue
                                : 'rgba(31,36,48,0.5)',
                          background:
                            m.type === 'Anchor'
                              ? C.blue
                              : m.type === 'Scope'
                                ? 'rgba(7,47,146,0.08)'
                                : 'transparent',
                          padding: '3px 8px',
                          flexShrink: 0,
                        }}
                      >
                        {m.type}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: F.body,
                        fontSize: '12.5px',
                        color: 'rgba(31,36,48,0.5)',
                        lineHeight: 1.5,
                      }}
                    >
                      {m.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const MarketsDRC = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const fd = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(16px)',
    transition: `all 0.65s ease ${d}s`,
  });

  const drcPoints = [
    {
      title: 'Decision-maker access',
      body: 'Direct relationships with senior figures across government, business, and the financial and legal ecosystem in Kinshasa and beyond.',
    },
    {
      title: 'Sector depth',
      body: 'Strongest positioning in mining, financial services, infrastructure, and telecoms — the sectors that define commercial activity in the DRC.',
    },
    {
      title: 'Regulatory and legal navigation',
      body: 'On-the-ground understanding of the legal, regulatory, and political dynamics that determine whether a deal moves or stalls.',
    },
    {
      title: 'Execution experience',
      body: 'Proven track record of delivering complex, large-scale projects in the DRC across financial services, digital infrastructure, and commercial development.',
    },
  ];

  return (
    <Sect bg={C.navy}>
      <Wrap>
        <div ref={ref}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : '5fr 7fr',
              gap: isMob ? '40px' : '80px',
              alignItems: 'start',
            }}
          >
            <div style={fd(0)}>
              <Overline light>Initial Anchor</Overline>
              <h2
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '34px' : 'clamp(34px, 3vw, 50px)',
                  fontWeight: 300,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  marginBottom: '24px',
                }}
              >
                Democratic Republic of Congo
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.58)',
                  lineHeight: 1.82,
                  marginBottom: '20px',
                }}
              >
                The DRC is Blue Gorilla&rsquo;s initial anchor market — where the company&rsquo;s
                deepest relationships, strongest on-the-ground capability, and most relevant
                sectoral experience converge.
              </p>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.58)',
                  lineHeight: 1.82,
                }}
              >
                This is not a broad claim. It reflects the specific experience of the founding
                team in Kinshasa — across mining, financial services, infrastructure, and
                regulatory navigation.
              </p>
            </div>
            <div style={fd(0.12)}>
              <div
                style={{
                  height: isMob ? '200px' : '220px',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '1px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1200&q=85')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 55%',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(11,27,74,0.62)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px 24px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: F.body,
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.17em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                    }}
                  >
                    Democratic Republic of Congo
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
                  gap: '1px',
                  background: 'rgba(255,255,255,0.08)',
                }}
              >
                {drcPoints.map((p) => (
                  <div
                    key={p.title}
                    style={{ background: C.navy, padding: '28px 28px 28px 28px' }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '1px',
                        background: 'rgba(255,255,255,0.2)',
                        marginBottom: '16px',
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: F.body,
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        marginBottom: '10px',
                        lineHeight: 1.35,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: F.body,
                        fontSize: '13.5px',
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: 1.75,
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const MarketsApproach = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();

  const principles = [
    {
      n: '01',
      title: 'Relevance over breadth',
      body: 'Blue Gorilla does not claim presence in markets where it cannot credibly add value. It will expand geographic scope as relationships and evidence support it.',
    },
    {
      n: '02',
      title: 'Sector and market interplay',
      body: "Geography is not independent of sector context. Blue Gorilla's market selection is shaped by where its sector expertise and relationship networks create the strongest commercial overlap.",
    },
    {
      n: '03',
      title: 'Practical execution awareness',
      body: 'African market entry is not uniform. Regulatory, logistical, and relationship dynamics vary significantly across geographies. Blue Gorilla engages only where it understands that reality.',
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
            <Overline>How We Approach Markets</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontSize: isMob ? '32px' : '44px',
                fontWeight: 400,
                color: C.charcoal,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                maxWidth: '560px',
              }}
            >
              Geographic seriousness over broad claims.
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
            {principles.map((p, i) => (
              <div
                key={p.n}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(16px)',
                  transition: `all 0.65s ease ${0.1 * i}s`,
                  padding: isMob ? '28px 0' : '36px 36px 36px 0',
                  borderRight: !isMob && i < 2 ? `1px solid ${C.border}` : 'none',
                  paddingLeft: !isMob && i > 0 ? '36px' : undefined,
                  borderBottom: isMob && i < 2 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontSize: '44px',
                    fontWeight: 300,
                    color: 'rgba(7,47,146,0.1)',
                    lineHeight: 1,
                    marginBottom: '18px',
                  }}
                >
                  {p.n}
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
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: '14px',
                    color: 'rgba(31,36,48,0.6)',
                    lineHeight: 1.8,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const MarketsImageStrip = () => {
  const w = useWW();
  const isMob = w < 768;
  return (
    <div
      style={{
        height: isMob ? '260px' : '340px',
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
            "url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1920&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,27,74,0.76)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
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
          <div
            style={{
              borderLeft: '2px solid rgba(255,255,255,0.2)',
              paddingLeft: '28px',
            }}
          >
            <p
              style={{
                fontFamily: F.display,
                fontStyle: 'italic',
                fontSize: isMob ? '20px' : 'clamp(20px, 2.2vw, 30px)',
                fontWeight: 300,
                color: '#FFFFFF',
                lineHeight: 1.38,
                marginBottom: '14px',
              }}
            >
              &ldquo;Geography is not independent of sector context. We engage only where we
              understand the operating reality.&rdquo;
            </p>
            <div
              style={{
                fontFamily: F.body,
                fontSize: '10.5px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Pan-African posture · DRC Anchor
            </div>
          </div>
          {!isMob && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'DRC — deepest relationships and on-ground capability',
                'Central Africa — strong positioning from DRC foundation',
                'West & Southern Africa — selectively engaged',
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      background: 'rgba(255,255,255,0.45)',
                      flexShrink: 0,
                      marginTop: '7px',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: F.body,
                      fontSize: '13.5px',
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.55,
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

const Markets = () => (
  <div className="bg-page">
    <PageHero
      overline="Markets"
      headline="Pan-African scope. DRC anchor."
      sub="Blue Gorilla operates where practical commercial progression can be supported — not where it can merely claim presence."
    />
    <MarketsPosture />
    <MarketsImageStrip />
    <MarketsDRC />
    <MarketsApproach />
    <CrossNav
      links={[
        { label: 'Sectors', desc: 'Where Blue Gorilla adds commercial value', page: 'sectors' },
        { label: 'Services', desc: 'The full commercial workstream', page: 'services' },
        { label: 'About', desc: 'The team behind Blue Gorilla', page: 'about' },
      ]}
    />
    <CTABlock headline="Start a market conversation." ctaLabel="Start a Market Conversation" />
  </div>
);

export default Markets;
