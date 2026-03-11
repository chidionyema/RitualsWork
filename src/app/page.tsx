"use client";

import { useState } from "react";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const sansFont = "'Helvetica Neue', Helvetica, Arial, sans-serif";

  return (
    <div style={{ background: "var(--cream)" }}>
      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1.5rem 4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(248,246,241,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: sansFont,
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.4em",
            color: "var(--gold-dark)",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Rituals Work
        </a>
        <a
          href="#apply"
          style={{
            fontFamily: sansFont,
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Apply
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8rem 4rem 6rem",
          background: "var(--white)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
        }}
      >
        {/* Subtle warm gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(184,150,76,0.06) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            fontFamily: sansFont,
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.45em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
            position: "relative",
          }}
        >
          ARCH — A Private Programme
        </p>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: "780px",
            marginBottom: "2.5rem",
            color: "var(--navy)",
            position: "relative",
          }}
        >
          You are not an addict.<br />
          You are being played<br />
          <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>
            like a video game character.
          </em>
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            lineHeight: 1.9,
            marginBottom: "4rem",
            position: "relative",
          }}
        >
          <strong style={{ color: "var(--text-primary)", fontWeight: 400 }}>
            Every other programme manages the behaviour.
          </strong>
          <br />
          We remove the cause. For those who have exhausted every other option.
        </p>
        <a
          href="#apply"
          style={{
            display: "inline-block",
            fontFamily: sansFont,
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--white)",
            background: "var(--navy)",
            padding: "1.1rem 3rem",
            textDecoration: "none",
            border: "none",
            cursor: "pointer",
            position: "relative",
          }}
        >
          Apply for a Consultation
        </a>
      </section>

      {/* Problem Section */}
      <div
        style={{
          padding: "7rem 4rem",
          borderBottom: "1px solid var(--border)",
          background: "var(--cream)",
        }}
      >
        <p
          style={{
            fontFamily: sansFont,
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.45em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          The Problem With Every Other Programme
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                color: "var(--navy)",
              }}
            >
              They work at the
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>
                wrong layer.
              </em>
            </h2>
            <div
              style={{
                width: "50px",
                height: "2px",
                background: "var(--gold)",
                marginBottom: "3rem",
              }}
            />
            <div>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                Meetings. Steps. Sponsors. Verbal commitment. Group
                accountability. These are all{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  surface layer interventions.
                </strong>{" "}
                They manage behaviour by building social structure around the
                problem.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                The underlying mechanism stays untouched. The trauma stays
                unprocessed. Which is why relapse rates are catastrophic — and
                lifelong attendance becomes the only maintenance strategy.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.9,
                }}
              >
                You swap one dependency for another. The programme replaces the
                substance.{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  The controller changes. The control remains.
                </strong>
              </p>
              <div
                style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "2rem",
                  marginTop: "2.5rem",
                  background: "var(--white)",
                  padding: "1.5rem 2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: "var(--navy)",
                    lineHeight: 1.6,
                  }}
                >
                  "I am an addict" — a label engineered to make you permanently
                  dependent on a system that requires your ongoing attendance.
                </p>
              </div>
            </div>
          </div>

          {/* Contrast Table */}
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--white)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  padding: "1.2rem 1.5rem",
                  fontFamily: sansFont,
                  fontSize: "0.58rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  borderRight: "1px solid var(--border)",
                  background: "var(--warm-gray)",
                }}
              >
                Conventional Recovery
              </div>
              <div
                style={{
                  padding: "1.2rem 1.5rem",
                  fontFamily: sansFont,
                  fontSize: "0.58rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "var(--gold-dark)",
                  background: "var(--warm-gray)",
                }}
              >
                ARCH
              </div>
            </div>
            {[
              {
                them: "Surrender your will to a higher power",
                us: "Supercharge your will to override every impulse",
              },
              {
                them: "You are an addict. Manage it forever.",
                us: "You are being played. Take back the controls.",
              },
              {
                them: "Address the behaviour. Leave the cause untouched.",
                us: "Remove the cause. Process the underlying trauma.",
              },
              {
                them: "Attend meetings indefinitely.",
                us: "Complete the programme. Leave with a practice you own.",
              },
              {
                them: "You are permanently broken.",
                us: "You are sovereign. Act like it.",
              },
            ].map((row, i, arr) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom:
                    i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                    borderRight: "1px solid var(--border)",
                  }}
                >
                  {row.them}
                </div>
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "var(--navy)",
                    fontWeight: 450,
                  }}
                >
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Method Section */}
      <div
        style={{
          padding: "7rem 4rem",
          borderBottom: "1px solid var(--border)",
          background: "var(--white)",
        }}
      >
        <p
          style={{
            fontFamily: sansFont,
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.45em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          The Method
        </p>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            color: "var(--navy)",
          }}
        >
          Direct subconscious
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>
            programming.
          </em>
        </h2>
        <div
          style={{
            width: "50px",
            height: "2px",
            background: "var(--gold)",
            marginBottom: "3rem",
          }}
        />
        <div style={{ maxWidth: "640px" }}>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              lineHeight: 1.9,
            }}
          >
            ARCH operates on two fronts simultaneously.{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              Direct rewiring of the subconscious architecture
            </strong>{" "}
            through 30 minutes of daily ritual practice — and{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              parallel trauma processing
            </strong>{" "}
            to address what the substance was always masking.
          </p>
        </div>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
            margin: "4rem 0",
          }}
        >
          {[
            {
              num: "01",
              title: "Subconscious Rewiring",
              body: "Three ancient ritual practices — 30 minutes daily. They bypass conscious resistance and restructure the architecture underneath. This is not willpower. This is rewiring at the level where the impulse originates.",
            },
            {
              num: "02",
              title: "Will Training",
              body: "30 minutes of daily practice is will training at its most fundamental. Show up, perform, complete — regardless of how you feel. When the impulse fires it meets a trained will. The contest is not close.",
            },
            {
              num: "03",
              title: "Trauma Integration",
              body: "The substance was always masking something. Once the architecture stabilises, the suppressed material becomes workable. We address what was driving the behaviour — not just the symptom that made it visible.",
            },
          ].map((pillar) => (
            <div
              key={pillar.num}
              style={{
                borderTop: "2px solid var(--border)",
                paddingTop: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: sansFont,
                  fontSize: "0.58rem",
                  letterSpacing: "0.35em",
                  color: "var(--gold)",
                  marginBottom: "1.2rem",
                }}
              >
                {pillar.num}
              </p>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--navy)",
                  marginBottom: "1rem",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Statement Box */}
        <div
          style={{
            background: "var(--navy)",
            padding: "2.5rem 3rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontStyle: "italic",
              color: "var(--cream)",
              lineHeight: 1.7,
            }}
          >
            Every other programme manages the behaviour. ARCH removes the cause.
            The client does not attend indefinitely. They complete the programme
            and leave with a 30-minute daily practice they own.
          </p>
        </div>
      </div>

      {/* Guide Section */}
      <div
        style={{
          padding: "7rem 4rem",
          borderBottom: "1px solid var(--border)",
          background: "var(--cream)",
        }}
      >
        <p
          style={{
            fontFamily: sansFont,
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.45em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          The Guide
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              border: "1px solid var(--border)",
              padding: "2rem",
              background: "var(--white)",
            }}
          >
            <p
              style={{
                fontFamily: sansFont,
                fontSize: "0.58rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold-dark)",
                marginBottom: "1.5rem",
                fontWeight: 600,
              }}
            >
              Background
            </p>
            {[
              "15 years programming computers and minds",
              "Western Esoteric Tradition",
            ].map((cred, i, arr) => (
              <div
                key={i}
                style={{
                  fontFamily: sansFont,
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  padding: "0.6rem 0",
                  borderBottom:
                    i < arr.length - 1 ? "1px solid var(--border-light)" : "none",
                  lineHeight: 1.5,
                }}
              >
                {cred}
              </div>
            ))}
          </div>

          {/* Content */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                color: "var(--navy)",
              }}
            >
              No qualification
              <br />
              replaces{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>
                this.
              </em>
            </h2>
            <div
              style={{
                width: "50px",
                height: "2px",
                background: "var(--gold)",
                marginBottom: "3rem",
              }}
            />
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                lineHeight: 1.9,
              }}
            >
              The credential that matters is not academic. It is experiential. I
              have lived the full spectrum — the open states, the uncontained
              experiences, the grief, the substances as self-medication for a
              nervous system that processes reality at a different density to
              most.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                lineHeight: 1.9,
              }}
            >
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                I understand addiction from the inside
              </strong>{" "}
              at a level most therapists with clean lives and textbook knowledge
              never reach. I have also built and sustained the practice that
              resolves it — not as theory, but as daily lived discipline for
              years.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
              }}
            >
              I am not the source of your reconstruction.{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                The practice is.
              </strong>{" "}
              I am the guide who shows you the door — and walks through it with
              you until you no longer need me.
            </p>
          </div>
        </div>
      </div>

      {/* Apply Section */}
      <div
        id="apply"
        style={{
          padding: "7rem 4rem",
          borderBottom: "1px solid var(--border)",
          background: "var(--white)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: sansFont,
              fontSize: "0.58rem",
              fontWeight: 600,
              letterSpacing: "0.45em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Apply
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              color: "var(--navy)",
            }}
          >
            This programme is
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>
              not for everyone.
            </em>
          </h2>
          <div
            style={{
              width: "50px",
              height: "2px",
              background: "var(--gold)",
              marginBottom: "3rem",
            }}
          />
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              marginBottom: "3rem",
              lineHeight: 1.9,
            }}
          >
            ARCH is a{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              private, high-commitment programme
            </strong>{" "}
            for those who have exhausted conventional options and are ready to
            address the cause rather than manage the symptom. Places are
            limited. Acceptance is by consultation only.
          </p>

          {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  background: "var(--gold)",
                  margin: "0 auto 1.5rem",
                }}
              />
              <p
                style={{
                  fontFamily: sansFont,
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--gold-dark)",
                  marginBottom: "0.5rem",
                }}
              >
                Application Received
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                We will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: sansFont,
                    fontSize: "0.58rem",
                    letterSpacing: "0.35em",
                    color: "var(--gold-dark)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "Georgia, serif",
                    fontSize: "1.05rem",
                    padding: "0.75rem 0",
                    WebkitAppearance: "none",
                    borderRadius: 0,
                  }}
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: sansFont,
                    fontSize: "0.58rem",
                    letterSpacing: "0.35em",
                    color: "var(--gold-dark)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "Georgia, serif",
                    fontSize: "1.05rem",
                    padding: "0.75rem 0",
                    WebkitAppearance: "none",
                    borderRadius: 0,
                  }}
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: sansFont,
                    fontSize: "0.58rem",
                    letterSpacing: "0.35em",
                    color: "var(--gold-dark)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  What have you already tried?
                </label>
                <textarea
                  placeholder="Be direct. This is where the conversation begins."
                  required
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "Georgia, serif",
                    fontSize: "1.05rem",
                    padding: "0.75rem 0",
                    resize: "none",
                    height: "110px",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  marginTop: "2.5rem",
                  background: "var(--navy)",
                  border: "none",
                  color: "var(--cream)",
                  fontFamily: sansFont,
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  padding: "1.2rem",
                  cursor: "pointer",
                }}
              >
                Submit Application
              </button>
              <p
                style={{
                  marginTop: "1.2rem",
                  fontFamily: sansFont,
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                  textAlign: "center",
                }}
              >
                All enquiries are treated with complete confidentiality.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: "2.5rem 4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--navy)",
        }}
      >
        <span
          style={{
            fontFamily: sansFont,
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            color: "var(--gold)",
            textTransform: "uppercase",
          }}
        >
          Rituals Work
        </span>
        <span
          style={{
            fontFamily: sansFont,
            fontSize: "0.55rem",
            letterSpacing: "0.15em",
            color: "rgba(248,246,241,0.5)",
          }}
        >
          ritualswork.com — Private Programme
        </span>
      </footer>
    </div>
  );
}
