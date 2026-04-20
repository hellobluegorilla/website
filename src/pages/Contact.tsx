import { CSSProperties, useState } from 'react';
import { C, F } from '../theme';
import { useFade, useWW } from '../hooks';
import { Overline, PageHero, Sect, Wrap } from '../components/primitives';

type FormState = {
  name: string;
  company: string;
  email: string;
  market: string;
  sector: string;
  message: string;
};

const emptyForm: FormState = {
  name: '',
  company: '',
  email: '',
  market: '',
  sector: '',
  message: '',
};

const inputStyle: CSSProperties = {
  width: '100%',
  fontFamily: F.body,
  fontSize: '15px',
  fontWeight: 400,
  color: C.charcoal,
  background: C.paper,
  border: `1px solid ${C.border}`,
  padding: '13px 16px',
  outline: 'none',
  transition: 'border-color 0.2s',
  appearance: 'none',
};

const labelStyle: CSSProperties = {
  fontFamily: F.body,
  fontSize: '10.5px',
  fontWeight: 500,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
  color: 'rgba(31,36,48,0.5)',
  display: 'block',
  marginBottom: '8px',
};

const ContactForm = () => {
  const w = useWW();
  const isMob = w < 768;
  const [ref, vis] = useFade();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fd = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(16px)',
    transition: `all 0.65s ease ${d}s`,
  });

  const handleChange = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const portalId = '148316604';
    const formGuid = '1bac21af-8d90-4c4d-9109-63a380a35ef8';
    const nameParts = form.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '.';

    const data = {
      fields: [
        { name: 'email', value: form.email },
        { name: 'firstname', value: firstName },
        { name: 'lastname', value: lastName },
        { name: 'company', value: form.company },
        { name: 'message', value: form.message },
        { name: 'target_marketgeography', value: form.market },
        { name: 'sector', value: form.sector }
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'Blue Gorilla Contact Form'
      }
    };

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      
      if (response.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <Sect bg={C.white} padY={80}>
        <Wrap>
          <div
            style={{
              maxWidth: '560px',
              padding: isMob ? '40px 24px' : '60px 48px',
              background: C.paper,
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                fontFamily: F.display,
                fontSize: '48px',
                fontWeight: 300,
                color: C.blue,
                marginBottom: '16px',
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontFamily: F.display,
                fontSize: '28px',
                fontWeight: 400,
                color: C.charcoal,
                marginBottom: '12px',
              }}
            >
              Inquiry submitted.
            </h3>
            <p
              style={{
                fontFamily: F.body,
                fontSize: '15px',
                color: 'rgba(31,36,48,0.6)',
                lineHeight: 1.75,
                marginBottom: '28px',
              }}
            >
              Your inquiry has been successfully received. Blue Gorilla will respond within two business days.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setForm(emptyForm);
              }}
              style={{
                fontFamily: F.body,
                fontSize: '13px',
                color: C.blue,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Submit another inquiry →
            </button>
          </div>
        </Wrap>
      </Sect>
    );
  }

  return (
    <Sect bg={C.white}>
      <Wrap>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: isMob ? '1fr' : '5fr 7fr',
            gap: isMob ? '48px' : '80px',
            alignItems: 'start',
          }}
        >
          {/* Left: Info */}
          <div>
            <div style={fd(0)}>
              <Overline>Get in Touch</Overline>
              <h2
                style={{
                  fontFamily: F.display,
                  fontSize: isMob ? '32px' : 'clamp(30px, 3vw, 44px)',
                  fontWeight: 400,
                  color: C.charcoal,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  marginBottom: '24px',
                }}
              >
                Start a serious commercial conversation.
              </h2>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: '15px',
                  color: 'rgba(31,36,48,0.62)',
                  lineHeight: 1.82,
                  marginBottom: '36px',
                }}
              >
                Blue Gorilla is open to conversations around African market entry, expansion
                strategy, partner development, and commercial workstreams.
              </p>
            </div>

            <div
              style={{
                ...fd(0.1),
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                borderTop: `1px solid ${C.border}`,
              }}
            >
              {[
                {
                  label: 'Best fit',
                  text: 'International companies with a live or near-live commercial objective in African markets.',
                },
                {
                  label: 'What to share',
                  text: 'Your target market, sector context, and the commercial objective you are exploring.',
                },
                {
                  label: 'What to expect',
                  text: 'A response within two business days. A focused conversation, not a sales process.',
                },
                {
                  label: 'Direct contact',
                  text: 'hello@bluegorillatech.com',
                  isEmail: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ padding: '18px 0', borderBottom: `1px solid ${C.border}` }}
                >
                  <div
                    style={{
                      fontFamily: F.body,
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(31,36,48,0.38)',
                      marginBottom: '6px',
                    }}
                  >
                    {item.label}
                  </div>
                  {item.isEmail ? (
                    <a
                      href="mailto:hello@bluegorillatech.com"
                      style={{
                        fontFamily: F.body,
                        fontSize: '14px',
                        color: C.blue,
                        fontWeight: 500,
                      }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: F.body,
                        fontSize: '14px',
                        color: 'rgba(31,36,48,0.68)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={fd(0.12)}>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.blue)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company *</label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Your company"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.blue)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Work Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your@company.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = C.blue)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMob ? '1fr' : '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div>
                  <label style={labelStyle}>Target Market / Geography *</label>
                  <input
                    required
                    value={form.market}
                    onChange={(e) => handleChange('market', e.target.value)}
                    placeholder="e.g. DRC, West Africa"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = C.blue)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Sector</label>
                  <select
                    value={form.sector}
                    onChange={(e) => handleChange('sector', e.target.value)}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => (e.target.style.borderColor = C.blue)}
                    onBlur={(e) => (e.target.style.borderColor = C.border)}
                  >
                    <option value="">Select a sector</option>
                    <option>Financial Services</option>
                    <option>Construction</option>
                    <option>Mining</option>
                    <option>Investment</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>What are you exploring? *</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Briefly describe your commercial objective and what you are exploring in African markets."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                  onFocus={(e) => (e.target.style.borderColor = C.blue)}
                  onBlur={(e) => (e.target.style.borderColor = C.border)}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 30px',
                    background: loading ? 'rgba(7,47,146,0.6)' : C.blue,
                    color: '#FFFFFF',
                    fontFamily: F.body,
                    fontSize: '14px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.currentTarget.style.opacity = '0.82';
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) e.currentTarget.style.opacity = '1';
                  }}
                >
                  {loading ? 'Submitting...' : 'Submit Inquiry'}{' '}
                  {!loading && <span style={{ fontSize: '15px' }}>→</span>}
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p
                    style={{
                      fontFamily: F.body,
                      fontSize: '12px',
                      color: 'rgba(31,36,48,0.4)',
                      lineHeight: 1.6,
                    }}
                  >
                    Your inquiry will be sent securely to our team.
                  </p>
                  {error && (
                    <p
                      style={{
                        fontFamily: F.body,
                        fontSize: '12px',
                        color: '#d32f2f',
                        lineHeight: 1.6,
                      }}
                    >
                      There was an error submitting your form. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </Wrap>
    </Sect>
  );
};

const Contact = () => (
  <div className="bg-page">
    <PageHero
      overline="Contact"
      headline="Begin a commercial conversation."
      sub="Blue Gorilla works with serious companies exploring African market entry and expansion. Tell us what you are exploring."
    />
    <ContactForm />
    <section style={{ background: C.navy, padding: '56px 0' }}>
      <Wrap>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
          }}
        >
          <img
            src="/gorilla-icon-white.svg"
            style={{ height: '36px', width: 'auto', opacity: 0.35 }}
            alt=""
          />

          <a
            href="mailto:hello@bluegorillatech.com"
            style={{
              fontFamily: F.body,
              fontSize: '16px',
              color: 'rgba(255,255,255,0.55)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
          >
            hello@bluegorillatech.com
          </a>
        </div>
      </Wrap>
    </section>
  </div>
);

export default Contact;
