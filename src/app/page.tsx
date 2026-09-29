import LandingEffects from "./landing-effects";
import {
  IconArrowDown,
  IconArrowRight,
  IconArrowsClockwise,
  IconBrain,
  IconCalendarBlank,
  IconCaretDown,
  IconCheck,
  IconCompass,
  IconLightning,
  IconLockSimple,
  IconScissors,
  IconSealCheck,
  IconShieldCheck,
  IconSmileySad,
  IconTrendDown,
  IconX,
} from "@/components/icons";
import {
  HERO,
  PAIN,
  COST,
  APP,
  METHOD,
  SHIFT,
  NATALIA,
  AUDIENCE,
  RECEIVE,
  OFFER,
  TESTIMONIALS,
  GUARANTEE,
  ACCESS,
  FAQ,
  CLOSING,
  FOOTER,
  STICKY,
} from "@/content";
import {
  CHECKOUT_URL,
  PRICE,
  STRIKE_PRICE,
  SHOW_STRIKE_PRICE,
  SHOW_SOCIAL_PROOF,
  SHOW_CRN,
  CRN_NUMERO,
  SHOW_LESSON_LIST,
  RAZAO_SOCIAL,
  CNPJ,
  SUPORTE_EMAIL,
} from "@/comercial";

const PAIN_ICONS = {
  "trend-down": IconTrendDown,
  brain: IconBrain,
  "smiley-sad": IconSmileySad,
  compass: IconCompass,
  scissors: IconScissors,
  "calendar-blank": IconCalendarBlank,
} as const;

export default function Home() {
  const faqVisible = FAQ.filter((item) => item.show);

  return (
    <>
      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero dark" aria-labelledby="hero-title">
          <div className="container">
            <div className="brand-row">
              <div className="brand" aria-label="Método Quebrando o Ciclo">
                <span className="brand-mark" aria-hidden="true">
                  <IconArrowsClockwise />
                </span>
                <span className="brand-name">
                  {HERO.brand}
                  <br />
                  O CICLO
                  <small>{HERO.brandBy}</small>
                </span>
              </div>
            </div>
            <div className="hero-grid">
              <div className="hero-copy reveal">
                <h1 id="hero-title">
                  {HERO.title} <em>{HERO.titleAccent}</em>
                </h1>
                <p className="hero-lead">{HERO.lead}</p>
                <div className="hero-actions">
                  <a className="btn" href="#previas">
                    {HERO.cta}
                    <IconArrowDown className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- DOR ---------- */}
        <section className="section pain" aria-labelledby="pain-title">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">{PAIN.eyebrow}</span>
              <h2 id="pain-title">
                {PAIN.title} <span className="highlight">{PAIN.titleAccent}</span>
              </h2>
              <p>{PAIN.intro}</p>
            </div>
            <ul className="pain-list">
              {PAIN.chips.map((chip) => {
                const ChipIcon = PAIN_ICONS[chip.icon as keyof typeof PAIN_ICONS];
                return (
                  <li className="pain-chip" key={chip.label}>
                    <ChipIcon className="pain-chip-icon" />
                    <span>{chip.label}</span>
                  </li>
                );
              })}
            </ul>
            <figure className="pain-quote reveal">
              <blockquote>&ldquo;{PAIN.quote}&rdquo;</blockquote>
              <figcaption>{PAIN.quoteAuthor}</figcaption>
            </figure>
            <p className="pain-bottom">
              <strong>{PAIN.bridge}</strong>
            </p>
          </div>
        </section>

        {/* ---------- CUSTO — consulta tradicional × método ---------- */}
        <section className="section cost dark" aria-labelledby="cost-title">
          <div className="container cost-layout">
            <div className="cost-copy reveal">
              <span className="eyebrow">{COST.eyebrow}</span>
              <h2 id="cost-title">{COST.title}</h2>
              <p className="cost-p">{COST.problem1}</p>
              <p className="cost-p">{COST.problem2}</p>
              <p className="cost-impact">{COST.impact}</p>
              <p className="cost-solution">{COST.solution}</p>
            </div>
            <div className="cost-card reveal">
              <img
                src={COST.image}
                alt={COST.imageAlt}
                width={1122}
                height={1402}
                loading="lazy"
              />
              <div className="cost-price-block">
                <span className="cost-offer-lead">{COST.offerLead}</span>
                <strong className="cost-price">{PRICE}</strong>
                <span className="cost-offer-pay">{COST.offerPay}</span>
              </div>
              <p className="cost-offer-rest">{COST.offerRest}</p>
              <a className="btn" href="#oferta">
                {COST.cta}
              </a>
            </div>
          </div>
        </section>

        {/* ---------- APP (PRÉVIAS) — vitrine em marquee infinito ---------- */}
        <section className="section app-section" id="previas" aria-labelledby="app-title">
          <div className="container">
            <div className="section-head center reveal">
              <h2 id="app-title">
                {APP.title} <span className="highlight">{APP.titleAccent}</span>
              </h2>
              <p>{APP.intro}</p>
            </div>
          </div>
          <div className="app-marquee">
            <div className="app-marquee-track">
              {APP.slides.map((slide) => (
                <article className="app-slide" key={slide.image}>
                  <figure>
                    <div className="app-card">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        width={1122}
                        height={1402}
                        loading="lazy"
                      />
                    </div>
                    <figcaption>
                      <strong>{slide.caption}</strong>
                      <span>{slide.note}</span>
                    </figcaption>
                  </figure>
                </article>
              ))}
              {APP.slides.map((slide) => (
                <article className="app-slide" key={`${slide.image}-copy`} aria-hidden="true">
                  <figure>
                    <div className="app-card">
                      <img
                        src={slide.image}
                        alt=""
                        width={1122}
                        height={1402}
                        loading="lazy"
                      />
                    </div>
                    <figcaption>
                      <strong>{slide.caption}</strong>
                      <span>{slide.note}</span>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MÉTODO ---------- */}
        <section className="section mechanism dark" aria-labelledby="mechanism-title">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">{METHOD.eyebrow}</span>
              <h2 id="mechanism-title">{METHOD.title}</h2>
              <p>{METHOD.intro}</p>
            </div>
            <div className="cycle">
              <ol className="cycle-grid">
                {METHOD.steps.map((step) => (
                  <li key={step.n} style={{ gridArea: `s${step.n}` }}>
                    <article className="cycle-step reveal">
                      <span className="cycle-n">{step.n}</span>
                      <div className="cycle-body">
                        <span className="cycle-ciclo">{step.ciclo}</span>
                        <strong className="cycle-metodo">{step.metodo}</strong>
                        <p>{step.texto}</p>
                      </div>
                    </article>
                  </li>
                ))}
                <li className="cycle-arrow cycle-arrow--a1 reveal" style={{ gridArea: "a1" }} aria-hidden="true">
                  <IconArrowDown />
                </li>
                <li className="cycle-arrow cycle-arrow--a2 reveal" style={{ gridArea: "a2" }} aria-hidden="true">
                  <IconArrowDown />
                </li>
                <li className="cycle-arrow cycle-arrow--a3 reveal" style={{ gridArea: "a3" }} aria-hidden="true">
                  <IconArrowDown />
                </li>
                <li className="cycle-return reveal" style={{ gridArea: "ret" }}>
                  <svg className="cycle-return-arc" viewBox="0 0 72 96" fill="none" aria-hidden="true">
                    <path
                      d="M42 94 C 14 80, 14 64, 33 57"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeDasharray="1 7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M38 13 L46 4 L54 13"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M43 41 C 62 33, 62 16, 46 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeDasharray="1 7"
                      strokeLinecap="round"
                    />
                    <line x1="32" y1="42" x2="44" y2="54" className="cycle-break" />
                    <line x1="44" y1="42" x2="32" y2="54" className="cycle-break" />
                  </svg>
                  <span className="cycle-return-label">{METHOD.loopLegend}</span>
                </li>
              </ol>
            </div>
            <a className="btn" href="#oferta">
              {METHOD.cta}
            </a>
          </div>
        </section>

        {/* ---------- ANTES × DEPOIS ---------- */}
        <section className="section shift" aria-labelledby="shift-title">
          <div className="container">
            <div className="section-head center">
              <h2 id="shift-title">
                {SHIFT.title} <span className="highlight">{SHIFT.titleAccent}</span>
              </h2>
              <p>{SHIFT.intro}</p>
            </div>
            <div className="shift-table reveal">
              <div className="shift-row shift-head" role="presentation">
                <span>{SHIFT.colBefore}</span>
                <span>{SHIFT.colAfter}</span>
              </div>
              {SHIFT.rows.map((row) => (
                <div className="shift-row" key={row.antes}>
                  <div className="shift-cell shift-cell--before">
                    <IconX className="shift-icon shift-icon--x" />
                    <span>{row.antes}</span>
                  </div>
                  <div className="shift-cell shift-cell--after">
                    <IconCheck className="shift-icon shift-icon--check" />
                    <span>{row.depois}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- NATÁLIA ---------- */}
        <section className="section routine" aria-labelledby="routine-title">
          <div className="container routine-layout">
            <div className="routine-photo">
              <img
                src={NATALIA.photo}
                alt={NATALIA.photoAlt}
                width={1200}
                height={1200}
                loading="lazy"
              />
            </div>
            <div className="routine-copy">
              <h2 id="routine-title">
                {NATALIA.title} <span className="highlight">{NATALIA.titleAccent}</span>
              </h2>
              <p>{NATALIA.intro}</p>
              <ul className="routine-points">
                {NATALIA.points.map((point) => (
                  <li key={point}>
                    <IconCheck className="check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {SHOW_CRN && CRN_NUMERO ? <p className="routine-crn">CRN {CRN_NUMERO}</p> : null}
              <a className="btn" href="#oferta">
                {NATALIA.cta}
              </a>
            </div>
          </div>
        </section>

        {/* ---------- PARA QUEM ---------- */}
        <section className="section audience" aria-labelledby="audience-title">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">{AUDIENCE.eyebrow}</span>
              <h2 id="audience-title">
                {AUDIENCE.title} <span className="highlight">{AUDIENCE.titleAccent}</span>
              </h2>
            </div>
            <ul className="audience-list">
              {AUDIENCE.items.map((item) => (
                <li key={item.title}>
                  <IconCheck className="check-icon" />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="audience-note">{AUDIENCE.note}</p>
          </div>
        </section>

        {/* ---------- O QUE VOCÊ RECEBE ---------- */}
        <section className="section receive dark" id="conteudo" aria-labelledby="receive-title">
          <div className="container">
            <div className="section-head">
              <span className="receive-badge">{RECEIVE.badge}</span>
              <h2 id="receive-title">{RECEIVE.title}</h2>
            </div>
            <div className="receive-grid">
              {RECEIVE.cards.map((card) => (
                <article className="receive-card" key={card.label}>
                  <span className="receive-label">{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  {card.foot ? <span className="receive-foot">{card.foot}</span> : null}
                </article>
              ))}
            </div>
            <ul className="receive-list">
              {RECEIVE.materials.map((item) => (
                <li key={item}>
                  <IconCheck className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {SHOW_LESSON_LIST && RECEIVE.lessons.length > 0 ? (
              <ul className="receive-lessons">
                {RECEIVE.lessons.map((lesson) => (
                  <li key={lesson.title}>
                    Módulo {lesson.module} · {lesson.title}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        {/* ---------- OFERTA ---------- */}
        <section className="section offer dark" id="oferta" aria-labelledby="offer-title">
          <div className="container">
            <div className="section-head center reveal">
              <h2 id="offer-title">{OFFER.title}</h2>
            </div>
            <div className="price-card reveal">
              <div className="price-mockup">
                <img
                  src={OFFER.mockup}
                  alt={OFFER.mockupAlt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
              </div>
              <h3 className="price-name">{OFFER.productName}</h3>
              <ul className="price-list">
                {OFFER.items.map((item) => (
                  <li key={item}>
                    <IconCheck className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="price-block">
                {SHOW_STRIKE_PRICE ? (
                  <span className="price-strike">
                    {OFFER.strikeLabel} <s>{STRIKE_PRICE}</s>
                  </span>
                ) : null}
                <strong className="price-now">{PRICE}</strong>
                <span className="price-pay">{OFFER.payLabel}</span>
              </div>
              <a
                className="btn btn-checkout"
                href={CHECKOUT_URL}
                data-checkout
                target="_blank"
                rel="noopener noreferrer"
              >
                {OFFER.cta}
                <IconArrowRight className="arrow" />
              </a>
              <ul className="price-trust">
                <li>
                  <IconLightning />
                  <span>{OFFER.trust[0]}</span>
                </li>
                <li>
                  <IconShieldCheck />
                  <span>{OFFER.trust[1]}</span>
                </li>
                <li>
                  <IconLockSimple />
                  <span>{OFFER.trust[2]}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- PROVA SOCIAL (flag) ---------- */}
        {SHOW_SOCIAL_PROOF ? (
          <section className="section testimonials" aria-labelledby="testimonials-title">
            <div className="container">
              <div className="section-head center">
                <h2 id="testimonials-title">{TESTIMONIALS.title}</h2>
              </div>
              <div
                className="testi-grid rail"
                id="testi-rail"
                role="region"
                tabIndex={0}
                aria-label="Carrossel de depoimentos de alunas"
              >
                {TESTIMONIALS.items.map((item) => (
                  <article className="testi-card" key={item.author}>
                    <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                    <footer className="testi-meta">
                      <strong>{item.author}</strong>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ---------- GARANTIA ---------- */}
        <section className="section security" aria-labelledby="security-title">
          <div className="container">
            <div className="guarantee reveal">
              <span className="guarantee-icon" aria-hidden="true">
                <IconSealCheck />
              </span>
              <h2 id="security-title">{GUARANTEE.title}</h2>
              <p>{GUARANTEE.body}</p>
            </div>
          </div>
        </section>

        {/* ---------- DEPOIS DA COMPRA ---------- */}
        <section className="section access" aria-labelledby="access-title">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">{ACCESS.eyebrow}</span>
              <h2 id="access-title">
                {ACCESS.title} <span className="highlight">{ACCESS.titleAccent}</span>
              </h2>
            </div>
            <div className="access-grid">
              {ACCESS.steps.map((step, index) => (
                <article className="access-card" key={step.title}>
                  <span className="number">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="section faq" aria-labelledby="faq-title">
          <div className="narrow">
            <div className="section-head center">
              <h2 id="faq-title">O que você precisa saber.</h2>
            </div>
            <div className="faq-list">
              {faqVisible.map((item, index) => {
                const qId = `faq-q-${index}`;
                const aId = `faq-a-${index}`;
                return (
                  <div className="faq-item" key={item.q}>
                    <h3 className="faq-question">
                      <button
                        type="button"
                        className="faq-q"
                        id={qId}
                        aria-expanded="false"
                        aria-controls={aId}
                      >
                        <span>{item.q}</span>
                        <IconCaretDown className="faq-caret" />
                      </button>
                    </h3>
                    <div className="faq-a" id={aId} role="region" aria-labelledby={qId} hidden>
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- FECHO ---------- */}
        <section className="closing dark" aria-labelledby="closing-title">
          <div className="narrow">
            <h2 id="closing-title">
              {CLOSING.title} <em>{CLOSING.titleAccent}</em>
            </h2>
            <a className="btn" href="#oferta">
              {CLOSING.cta}
            </a>
            <p>{CLOSING.fine}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="narrow">
          <ul className="footer-legal">
            {FOOTER.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
          <p>
            © <span id="year">2026</span> {FOOTER.copyright}
          </p>
          <p>{FOOTER.disclaimer}</p>
          <p>{FOOTER.meta}</p>
          {RAZAO_SOCIAL ? <p>{RAZAO_SOCIAL}</p> : null}
          {CNPJ ? <p>CNPJ {CNPJ}</p> : null}
          {SUPORTE_EMAIL ? <p>Suporte: {SUPORTE_EMAIL}</p> : null}
        </div>
      </footer>

      <aside className="sticky-cta" id="sticky-cta" aria-label="Acesso rápido à oferta">
        <div className="sticky-info">
          <strong className="sticky-price">
            {STICKY.label}
            <small>{STICKY.note}</small>
          </strong>
        </div>
        <a className="btn" href="#oferta">
          {STICKY.cta}
        </a>
      </aside>
      <LandingEffects />
    </>
  );
}
