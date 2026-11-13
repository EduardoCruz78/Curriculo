import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { contact, content, lines, type Lang } from "@/data/resume";
import { NetworkMap } from "./network-map";

function Roundel({ id, size = "md" }: { id: keyof typeof lines; size?: "sm" | "md" | "lg" }) {
  const l = lines[id];
  return (
    <span className={`roundel roundel-${size}`} style={{ background: l.color, color: l.ink }} aria-hidden="true">
      {l.number}
    </span>
  );
}

export function ResumePage({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <a href="#main" className="skip-link">
        {lang === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href={lang === "pt" ? "/" : "/en"} className="brand" aria-label={contact.name}>
            <span className="brand-mark" aria-hidden="true">
              EP
            </span>
            <span className="brand-name">{contact.name}</span>
          </a>
          <nav aria-label={lang === "pt" ? "Seções" : "Sections"} className="topnav">
            <a href="#projetos">{t.nav.projects}</a>
            <a href="#experiencia">{t.nav.experience}</a>
            <a href="#stack">{t.nav.stack}</a>
            <a href="#contato">{t.nav.contact}</a>
          </nav>
          <a href={t.nav.switchHref} className="lang-switch" hrefLang={lang === "pt" ? "en" : "pt-BR"} lang={lang === "pt" ? "en" : "pt-BR"}>
            <span aria-hidden="true">{t.nav.switchTo}</span>
            <span className="sr-only">{t.nav.switchLabel}</span>
          </a>
        </div>
      </header>

      <main id="main">
        {/* First viewport: who, what, how to reach, and the network */}
        <section className="hero wrap" aria-labelledby="hero-name">
          <div className="hero-copy">
            <h1 id="hero-name" className="hero-name">
              {contact.name}
            </h1>
            <p className="hero-role">{t.hero.role}</p>
            <p className="hero-pitch">{t.hero.pitch}</p>
            <p className="hero-status">
              <span className="status-dot" aria-hidden="true" />
              {t.hero.availability}
            </p>
            <div className="hero-actions">
              <a href={contact.linkedin} className="btn btn-primary" target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" />
                {t.hero.linkedin}
              </a>
              <a href={`mailto:${contact.email}`} className="btn">
                <Mail aria-hidden="true" size={18} />
                {t.hero.email}
              </a>
              <a href={contact.github} className="btn" target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" />
                {t.hero.github}
              </a>
            </div>
            <p className="hero-location">{t.hero.location}</p>
          </div>
          <div className="hero-map">
            <NetworkMap lang={lang} title={t.map.title} hint={t.map.hint} />
          </div>
        </section>

        <section id="projetos" className="section" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="projects-title" className="section-title">
                {t.projects.title}
              </h2>
              <p className="section-intro">{t.projects.intro}</p>
            </div>

            <ol className="routes">
              {t.projects.items.map((p) => (
                <li key={p.id} id={p.id} className="route-block" style={{ ["--line" as string]: lines[p.id].color, ["--line-ink" as string]: lines[p.id].ink }}>
                  <div className="route-rail" aria-hidden="true">
                    <Roundel id={p.id} size="lg" />
                  </div>
                  <div className="route-head">
                    <h3 className="route-name">{p.name}</h3>
                    <p className="route-tagline">{p.tagline}</p>
                    {p.tests !== undefined && (
                      <p className="route-tests">
                        <strong>{p.tests}</strong> {t.projects.tests}
                      </p>
                    )}
                    <div className="route-actions">
                      {p.demoUrl && (
                        <a href={p.demoUrl} className="btn btn-line" target="_blank" rel="noreferrer">
                          {t.projects.demo}
                          <ArrowUpRight aria-hidden="true" size={18} />
                        </a>
                      )}
                      <a href={p.codeUrl} className="btn" target="_blank" rel="noreferrer">
                        <FaGithub aria-hidden="true" />
                        {t.projects.code}
                      </a>
                    </div>
                  </div>
                  <div className="route-body">
                    <ul className="stops">
                      {p.stations.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    <p className="route-stack">
                      {p.stack.map((s, i) => (
                        <span key={s}>
                          {s}
                          {i < p.stack.length - 1 && <span aria-hidden="true"> · </span>}
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="note">{t.projects.sleepNote}</p>
          </div>
        </section>

        <section id="experiencia" className="section section-alt" aria-labelledby="experience-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="experience-title" className="section-title">
                {t.experience.title}
              </h2>
            </div>
            <ol className="journey">
              {t.experience.items.map((e) => (
                <li key={e.org + e.period} className="journey-stop">
                  <p className="journey-period">{e.period}</p>
                  <div>
                    <h3 className="journey-role">{e.role}</h3>
                    <p className="journey-org">{e.org}</p>
                    <ul className="journey-points">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stack" className="section" aria-labelledby="stack-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="stack-title" className="section-title">
                {t.stack.title}
              </h2>
            </div>
            <div className="stack-grid">
              {t.stack.groups.map((g) => (
                <div key={g.title} className="stack-group">
                  <h3 className="stack-title">{g.title}</h3>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="edu">
              <h3 className="stack-title">{t.education.title}</h3>
              <div className="edu-grid">
                <p>
                  <strong>{t.education.course}</strong>
                  <br />
                  {t.education.school}
                  <br />
                  <span className="muted">{t.education.period}</span>
                </p>
                <ul>
                  {t.education.languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact" aria-labelledby="contact-title">
          <div className="wrap contact-inner">
            <h2 id="contact-title" className="contact-title">
              {t.contactSection.title}
            </h2>
            <p className="contact-text">{t.contactSection.text}</p>
            <ul className="contact-list">
              <li>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin aria-hidden="true" />
                  linkedin.com/in/eduardo-proenca-dev
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>
                  <Mail aria-hidden="true" size={20} />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref}>
                  <Phone aria-hidden="true" size={20} />
                  <span className="sr-only">{t.contactSection.phone}: </span>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <FaGithub aria-hidden="true" />
                  github.com/EduardoCruz78
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <a href="https://github.com/EduardoCruz78/Curriculo" target="_blank" rel="noreferrer">
            {t.footer}
          </a>
        </div>
      </footer>
    </>
  );
}
