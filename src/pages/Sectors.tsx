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

type Sector = {
  id: string;
  img: string;
  label: string;
  headline: string;
  intro: string;
  detail: string;
  useCases: string[];
};

const sectorData: Sector[] = [
  {
    id: 'financial',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    label: 'Financial Services',
    headline: 'Financial Services',
    intro:
      'Where counterparties, regulatory relationships, and distribution channels determine whether commercial intent becomes operational reality.',
    detail:
      'Blue Gorilla supports companies in banking, fintech, payments, digital identity, and financial inclusion entering or expanding in African markets. The dynamics of this sector — regulatory environments, agent networks, partnership structures — require on-the-ground judgment and qualified access that generic advisory cannot provide.',
    useCases: [
      'Market entry for banks and fintechs',
      'Agent network and distribution channel development',
      'Banking and telco partnership structuring',
      'Regulatory counterparty navigation',
      'Digital identity and payments ecosystem access',
    ],
  },
  {
    id: 'construction',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    label: 'Construction',
    headline: 'Construction',
    intro:
      'Where local partnerships, procurement channels, and government relationships determine project access and commercial traction.',
    detail:
      'Infrastructure and construction investment in Africa requires precise partner mapping and sustained relationship management. Blue Gorilla helps companies identify the right local counterparties, structure supplier and contractor relationships, and navigate the commercial dynamics of project-driven markets.',
    useCases: [
      'Local partner and contractor identification',
      'Government and procurement relationship navigation',
      'Supply chain and distribution access',
      'Project pipeline access and opportunity framing',
      'Commercial execution support for infrastructure projects',
    ],
  },
  {
    id: 'mining',
    img: '/mining-sector.png',
    label: 'Mining',
    headline: 'Mining',
    intro:
      'Where high-value transactions, political dynamics, and local relationships define whether deals progress or stall.',
    detail:
      'Mining and resource extraction in African markets — particularly in the DRC — operates within a unique commercial and regulatory environment. Blue Gorilla brings access to the decision-makers, legal and regulatory counterparties, and commercial intermediaries who determine whether mining-related opportunities advance.',
    useCases: [
      'Mining licence and regulatory navigation',
      'Joint venture partner identification',
      'Government and investor counterparty access',
      'Negotiation support for resource transactions',
      'Local coordination for extraction operations',
    ],
  },
  {
    id: 'investment',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    label: 'Investment',
    headline: 'Investment',
    intro:
      'Where deal sourcing, qualified deal flow, and execution capability define the quality of the commercial outcome.',
    detail:
      'Blue Gorilla supports investment-oriented clients — private equity, family offices, strategic investors — seeking qualified deal flow and execution support in African markets. This includes opportunity identification, counterparty access, and commercial coordination through to investment execution.',
    useCases: [
      'Qualified deal flow origination',
      'Target identification and commercial mapping',
      'Counterparty access for investor due diligence',
      'Negotiation and term support',
      'Investment execution coordination',
    ],
  },
  {
    id: 'technology',
    img: '/tech-sector.png',
    label: 'Technology',
    headline: 'Technology',
    intro:
      'Where regulatory navigation, localization, and systemic adoption determine the difference between a launch and a real market presence.',
    detail:
      'Pan-African tech expansion requires more than software deployment. Blue Gorilla supports SaaS, infrastructure, and enterprise tech companies navigating local mandates, securing commercial contracts, and integrating with established distribution frameworks.',
    useCases: [
      'Market entry for enterprise SaaS providers',
      'Telecommunications and API partnership structuring',
      'Data residency and compliance navigation',
      'Government and public sector tech procurement',
      'Local distribution and operational framing',
    ],
  },
];

const SectorDetail = ({ sector, vis }: { sector: Sector; vis: boolean }) => {
  const w = useWW();
  const isMob = w < 768;
  const fd = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(16px)',
    transition: `all 0.65s ease ${d}s`,
  });
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
        gap: isMob ? '32px' : '72px',
        alignItems: 'start',
      }}
    >
      <div style={fd(0)}>
        <div
          style={{
            height: isMob ? '200px' : '240px',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('${sector.img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(7,47,146,0.60)' }}
          />
          <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
            <span
              style={{
                fontFamily: F.body,
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              {sector.headline}
            </span>
          </div>
        </div>
        <p
          style={{
            fontFamily: F.display,
            fontStyle: 'italic',
            fontSize: isMob ? '22px' : '26px',
            fontWeight: 300,
            color: C.charcoal,
            lineHeight: 1.4,
            marginBottom: '24px',
          }}
        >
          &ldquo;{sector.intro}&rdquo;
        </p>
        <p
          style={{
            fontFamily: F.body,
            fontSize: '15px',
            color: 'rgba(31,36,48,0.65)',
            lineHeight: 1.82,
          }}
        >
          {sector.detail}
        </p>
      </div>
      <div style={fd(0.12)}>
        <div
          style={{
            fontFamily: F.body,
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.17em',
            textTransform: 'uppercase',
            color: C.blue,
            marginBottom: '20px',
          }}
        >
          Where Blue Gorilla adds value
        </div>
        {sector.useCases.map((u, i) => (
          <div
            key={u}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              padding: '12px 0',
              borderBottom:
                i < sector.useCases.length - 1 ? `1px solid ${C.border}` : 'none',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '4px',
                background: C.blue,
                flexShrink: 0,
                marginTop: '7px',
              }}
            />
            <span
              style={{
                fontFamily: F.body,
                fontSize: '14px',
                color: 'rgba(31,36,48,0.75)',
                lineHeight: 1.6,
              }}
            >
              {u}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectorsMain = () => {
  const w = useWW();
  const isMob = w < 768;
  const [activeSector, setActiveSector] = useState('financial');
  const [ref, vis] = useFade();

  const sector = sectorData.find((s) => s.id === activeSector) ?? sectorData[0];

  return (
    <Sect bg={C.white}>
      <Wrap>
        <div ref={ref}>
          {/* Sector tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: isMob ? 'wrap' : 'nowrap',
              gap: isMob ? '8px' : '0',
              borderBottom: isMob ? 'none' : `1px solid ${C.border}`,
              marginBottom: isMob ? '32px' : '56px',
              opacity: vis ? 1 : 0,
              transition: 'all 0.65s ease',
            }}
          >
            {sectorData.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSector(s.id)}
                style={{
                  fontFamily: F.body,
                  fontSize: isMob ? '13px' : '14px',
                  fontWeight: activeSector === s.id ? 500 : 400,
                  color: activeSector === s.id 
                    ? (isMob ? '#FFFFFF' : C.blue) 
                    : (isMob ? C.charcoal : 'rgba(31,36,48,0.55)'),
                  background: isMob 
                    ? (activeSector === s.id ? C.blue : C.paper) 
                    : 'none',
                  border: isMob ? '1px solid transparent' : 'none',
                  borderColor: isMob && activeSector !== s.id ? C.border : 'transparent',
                  borderBottom: !isMob
                    ? (activeSector === s.id ? `2px solid ${C.blue}` : '2px solid transparent')
                    : undefined,
                  borderRadius: isMob ? '100px' : '0',
                  padding: isMob ? '10px 18px' : '16px 28px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  marginBottom: isMob ? '0' : '-1px',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <SectorDetail sector={sector} vis={vis} key={activeSector} />
        </div>
      </Wrap>
    </Sect>
  );
};

const SectorsFit = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const fd = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(16px)',
    transition: `all 0.65s ease ${d}s`,
  });

  const fits = [
    'International companies with a live or near-live commercial objective in African markets',
    'Businesses that have already decided to enter a market and need qualified route-to-market support',
    'Companies where the counterparty and channel relationship are the determining variable',
    'Opportunities where deal progression matters more than desk research',
  ];
  const notFits = [
    'Early-stage market research with no defined commercial objective',
    'Companies looking for guaranteed outcomes or unrealistic timelines',
    'Opportunities where Blue Gorilla has no relevant market or sector access',
    'Mass lead-generation or high-volume referral requirements',
  ];

  return (
    <Sect bg={C.paper}>
      <Wrap>
        <div ref={ref}>
          <div style={{ ...fd(0), marginBottom: '52px' }}>
            <Overline>Fit Assessment</Overline>
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
              When Blue Gorilla is the right partner.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
              gap: isMob ? '40px' : '64px',
            }}
          >
            <div style={fd(0)}>
              <div
                style={{
                  fontFamily: F.body,
                  fontSize: '10.5px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: C.blue,
                  marginBottom: '20px',
                }}
              >
                Strong fit
              </div>
              {fits.map((f, i) => (
                <div
                  key={f}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '13px 0',
                    borderBottom: i < fits.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'rgba(7,47,146,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: C.blue,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: F.body,
                      fontSize: '14px',
                      color: 'rgba(31,36,48,0.75)',
                      lineHeight: 1.7,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <div style={fd(0.12)}>
              <div
                style={{
                  fontFamily: F.body,
                  fontSize: '10.5px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(31,36,48,0.4)',
                  marginBottom: '20px',
                }}
              >
                Not a strong fit
              </div>
              {notFits.map((f, i) => (
                <div
                  key={f}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '13px 0',
                    borderBottom:
                      i < notFits.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'rgba(31,36,48,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '1px',
                        background: 'rgba(31,36,48,0.3)',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: F.body,
                      fontSize: '14px',
                      color: 'rgba(31,36,48,0.5)',
                      lineHeight: 1.7,
                    }}
                  >
                    {f}
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

const Sectors = () => (
  <div className="bg-page">
    <PageHero
      overline="Sectors"
      headline="Where Blue Gorilla can create commercial value."
      sub="Blue Gorilla launches with focused sector engines — where counterparties, channels, and local execution determine whether commercial intent becomes real traction."
    />
    <SectorsMain />
    <SectorsFit />
    <CrossNav
      links={[
        { label: 'Markets', desc: 'Pan-African scope and DRC anchor', page: 'markets' },
        { label: 'Services', desc: 'The full commercial workstream', page: 'services' },
        { label: 'About', desc: 'Why the team can credibly do this', page: 'about' },
      ]}
    />
    <CTABlock headline="Explore a commercial fit." ctaLabel="Explore a Commercial Fit" />
  </div>
);

export default Sectors;
