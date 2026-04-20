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

type TeamMember = {
  name: string;
  role: string;
  summary: string;
  markets: string;
  track: string[];
};

const teamData: TeamMember[] = [
  {
    name: 'Serge Nawej',
    role: 'Co-Founder & Strategic Lead',
    summary:
      '20+ years advising on complex cross-border projects in the DRC and wider African markets. Deep access to decision-makers across mining, energy, infrastructure, banking, and telecoms.',
    markets: 'DRC, Central Africa, broader pan-African markets',
    track: [
      "Partner, ADNA — leads the firm's DRC presence as part of its pan-African expansion",
      'Founded Proxima International, a leading DRC law firm focused on major commercial matters',
      'Former lawyer at DLA Piper, London — board director, Rome Resources',
    ],
  },
  {
    name: 'John Nicolau',
    role: 'Co-Founder & Strategic Partner',
    summary:
      'Technology-sector business development operator with a long track record in sales, channel partnerships, and growth. Contributed to scaling a Microsoft Gold Certified Partner to acquisition.',
    markets: 'North America, international commercial development',
    track: [
      'Co-Founded ZLan Partners — Microsoft Gold Certified Partner',
      'ZLan Partners acquired by Sharp Business Systems, 2018',
      'Chapter leadership roles in IAMCP — Microsoft partner community',
    ],
  },
  {
    name: 'Hugo Pacheco',
    role: 'Co-Founder & Growth Lead',
    summary:
      '16+ years building and scaling financial inclusion and digital platforms across African markets. Operates at the intersection of business development, product, and go-to-market.',
    markets: 'Nigeria, Mozambique, DRC, Angola, Uganda, Ethiopia, Ivory Coast, Cameroon',
    track: [
      'BVN 2.0 expansion in Nigeria — 29M to 60M+ registered identities, costs reduced by 80%+',
      'Agent network platforms across multiple African markets',
      'Multi-market GTM strategies for fintechs and banks',
    ],
  },
  {
    name: 'Iago Silva',
    role: 'Co-Founder & Operations Lead',
    summary:
      '14+ years delivering complex digital and financial infrastructure projects across African markets. Led multi-country deployments for Vodacom, M-PESA, Equity Bank, and Standard Bank.',
    markets: 'DRC, Mozambique, Angola, Nigeria, South Africa',
    track: [
      'Vodacom DRC national KYC rollout — 80,000+ daily activations (Vodafone Group CEO Award)',
      'Biometric onboarding for Standard Bank Mozambique',
      'AI-driven operational systems improving document processing by up to 80%',
    ],
  },
];

const AboutStory = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const fd = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(16px)',
    transition: `all 0.65s ease ${d}s`,
  });

  const reasons = [
    'Most Africa market-entry failures are not failures of intent. They are failures of execution — in the space between initial access and qualified commercial progression.',
    'Consulting firms provide analysis. Local introducers provide access. Neither is reliably invested in what happens in the middle.',
    'Blue Gorilla is built for that middle — where relationships, judgment, and sustained execution determine whether a commercial opportunity advances or stalls.',
  ];

  return (
    <Sect bg={C.white}>
      <Wrap>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
            gap: isMob ? '40px' : '80px',
            alignItems: 'start',
          }}
        >
          <div style={fd(0)}>
            <Overline>About Blue Gorilla</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontSize: isMob ? '34px' : 'clamp(34px, 3vw, 50px)',
                fontWeight: 400,
                color: C.charcoal,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                marginBottom: '28px',
              }}
            >
              The company is new. The relevant experience is not.
            </h2>
            <p
              style={{
                fontFamily: F.body,
                fontSize: '16px',
                color: 'rgba(31,36,48,0.65)',
                lineHeight: 1.82,
                marginBottom: '20px',
              }}
            >
              Blue Gorilla was built to close the gap between access and execution in African
              market entry. Not through strategy documents or loose introductions — through
              sustained, structured business development that keeps commercial opportunities
              moving.
            </p>
            <p
              style={{
                fontFamily: F.body,
                fontSize: '16px',
                color: 'rgba(31,36,48,0.65)',
                lineHeight: 1.82,
              }}
            >
              The founding team combines deep African market operating experience, senior legal
              and transactional expertise, and commercial discipline developed across
              international business development and technology. Blue Gorilla is built around
              that combination — and measured by commercial progression, not advisory activity.
            </p>
          </div>
          <div style={fd(0.12)}>
            <div style={{ background: C.paper, padding: isMob ? '28px' : '40px' }}>
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
                Why Blue Gorilla Exists
              </div>
              {reasons.map((t, i) => (
                <div
                  key={i}
                  style={{
                    paddingBottom: i < 2 ? '20px' : 0,
                    marginBottom: i < 2 ? '20px' : 0,
                    borderBottom: i < 2 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  <p
                    style={{
                      fontFamily: F.body,
                      fontSize: '14px',
                      color: 'rgba(31,36,48,0.68)',
                      lineHeight: 1.8,
                    }}
                  >
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const AboutTeam = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const [active, setActive] = useState(0);

  const member = teamData[active];

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
            <Overline>The Team</Overline>
            <h2
              style={{
                fontFamily: F.display,
                fontSize: isMob ? '34px' : 'clamp(34px, 3vw, 50px)',
                fontWeight: 400,
                color: C.charcoal,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Founder-led credibility.
            </h2>
          </div>

          {/* Team selector */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: '1px',
              background: C.border,
              marginBottom: '1px',
              opacity: vis ? 1 : 0,
              transition: 'all 0.65s ease 0.1s',
            }}
          >
            {teamData.map((t, i) => {
              const parts = t.name.split(' ');
              const shortName = `${parts[0]} ${parts[1] ?? ''}`.trim();
              return (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  style={{
                    background: active === i ? C.navy : C.paper,
                    border: 'none',
                    padding: isMob ? '16px 14px' : '20px 24px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.25s',
                  }}
                >
                  <div
                    style={{
                      fontFamily: F.body,
                      fontSize: isMob ? '12px' : '13.5px',
                      fontWeight: 500,
                      color: active === i ? '#FFFFFF' : C.charcoal,
                      lineHeight: 1.35,
                      marginBottom: '4px',
                    }}
                  >
                    {shortName}
                  </div>
                  <div
                    style={{
                      fontFamily: F.body,
                      fontSize: isMob ? '10.5px' : '11.5px',
                      color:
                        active === i ? 'rgba(255,255,255,0.5)' : 'rgba(31,36,48,0.48)',
                      lineHeight: 1.4,
                    }}
                  >
                    {t.role.replace('Co-Founder & ', '')}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Team detail */}
          <div
            key={active}
            style={{
              background: C.white,
              padding: isMob ? '28px 24px' : '48px',
              opacity: vis ? 1 : 0,
              transition: 'all 0.5s ease 0.15s',
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : '1fr 1fr 1fr',
              gap: isMob ? '28px' : '48px',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: F.body,
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: C.blue,
                  marginBottom: '10px',
                }}
              >
                {member.role}
              </div>
              <div
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '22px' : '26px',
                  fontWeight: 400,
                  color: C.charcoal,
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                {member.name}
              </div>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '14px',
                  color: 'rgba(31,36,48,0.65)',
                  lineHeight: 1.8,
                }}
              >
                {member.summary}
              </p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: F.body,
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(31,36,48,0.38)',
                  marginBottom: '16px',
                }}
              >
                Market Exposure
              </div>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '14px',
                  color: 'rgba(31,36,48,0.65)',
                  lineHeight: 1.75,
                }}
              >
                {member.markets}
              </p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: F.body,
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(31,36,48,0.38)',
                  marginBottom: '16px',
                }}
              >
                Track Record
              </div>
              {member.track.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: i < 2 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      background: C.blue,
                      flexShrink: 0,
                      marginTop: '6px',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: F.body,
                      fontSize: '13px',
                      color: 'rgba(31,36,48,0.65)',
                      lineHeight: 1.7,
                    }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const AboutPhilosophy = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();

  const principles = [
    {
      title: 'Commercial progression over advisory activity',
      body: 'Blue Gorilla is measured by movement in real commercial opportunities, not by volume of meetings, reports, or recommendations.',
    },
    {
      title: 'Qualified access over broad introductions',
      body: 'Every introduction is framed, timed, and contextually positioned. The value is not the contact — it is the context and judgment around it.',
    },
    {
      title: 'Discretion and seriousness as operating standards',
      body: 'Blue Gorilla works with clients on commercially sensitive expansion decisions. Discretion, structured communication, and professional seriousness are non-negotiable.',
    },
    {
      title: 'Honest framing of outcomes',
      body: 'Blue Gorilla commits to qualified execution — not to guaranteed sales volumes or unrealistic timelines. Commercial outcomes depend on multiple parties and factors beyond any single intermediary.',
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
            <Overline>Commercial Philosophy</Overline>
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
              How Blue Gorilla thinks about the work.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
              gap: '1px',
              background: C.border,
            }}
          >
            {principles.map((p, i) => (
              <div
                key={p.title}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(16px)',
                  transition: `all 0.65s ease ${0.08 * i}s`,
                  background: C.white,
                  padding: isMob ? '28px' : '36px',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '2px',
                    background: C.blue,
                    marginBottom: '20px',
                  }}
                />
                <h3
                  style={{
                    fontFamily: F.body,
                    fontSize: '15px',
                    fontWeight: 500,
                    color: C.charcoal,
                    marginBottom: '10px',
                    lineHeight: 1.4,
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

const AboutImageStrip = () => {
  const w = useWW();
  const isMob = w < 768;
  return (
    <div
      style={{
        height: isMob ? '260px' : '360px',
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
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,27,74,0.80)' }} />
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
            borderLeft: '2px solid rgba(255,255,255,0.2)',
            paddingLeft: isMob ? '20px' : '32px',
            maxWidth: '680px',
          }}
        >
          <p
            style={{
              fontFamily: F.display,
              fontStyle: 'italic',
              fontSize: isMob ? '20px' : 'clamp(20px, 2.4vw, 32px)',
              fontWeight: 300,
              color: '#FFFFFF',
              lineHeight: 1.38,
              marginBottom: '16px',
              letterSpacing: '-0.01em',
            }}
          >
            &ldquo;The company is new. The relationships, market knowledge, and operating
            experience in African commercial execution are not.&rdquo;
          </p>
          <div
            style={{
              fontFamily: F.body,
              fontSize: '10.5px',
              letterSpacing: '0.17em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            Blue Gorilla — Founded on relevant experience
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => (
  <div className="bg-page">
    <PageHero
      overline="About"
      headline="Why Blue Gorilla can credibly do this."
      sub="A new company built on relationships, market knowledge, and operating experience that are not new."
    />
    <AboutStory />
    <AboutImageStrip />
    <AboutTeam />
    <AboutPhilosophy />
    <CrossNav
      links={[
        { label: 'Services', desc: 'How the commercial workstream works', page: 'services' },
        { label: 'Sectors', desc: 'Where Blue Gorilla adds value', page: 'sectors' },
        { label: 'Markets', desc: 'Geographic focus and DRC anchor', page: 'markets' },
      ]}
    />
    <CTABlock headline="Ready to start a serious conversation?" secondary="Request the Deck" />
  </div>
);

export default About;
