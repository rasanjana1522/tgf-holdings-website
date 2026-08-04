"use client";

import { useState } from "react";

const concepts = [
  { id: "forge", no: "01", name: "The Golden Forge", note: "Cinematic industrial" },
  { id: "precision", no: "02", name: "Precision in Motion", note: "Technical editorial" },
  { id: "proof", no: "03", name: "Built to Perform", note: "Project-led portfolio" },
  { id: "atelier", no: "04", name: "Hospitality Atelier", note: "Premium hospitality" },
  { id: "gateway", no: "05", name: "Regional Gateway", note: "Multi-market corporate" },
];

const markets = [
  { code: "LK", name: "Sri Lanka", label: "You are here", active: true },
  { code: "BD", name: "Bangladesh", label: "Visit market site" },
  { code: "MV", name: "Maldives", label: "Visit market site" },
  { code: "AE", name: "Dubai", label: "Visit market site" },
];

const solutions = [
  ["01", "Kitchen planning & design", "Workflows engineered around your operation."],
  ["02", "Equipment & fabrication", "Global brands, local capability, one accountable team."],
  ["03", "Project execution", "From coordinated installation to confident handover."],
  ["04", "Technical support", "Trained service teams protecting uptime after launch."],
];

const clients = ["UNOX", "WILLIAMS", "HOBART", "SAMMIC", "SHANGRI-LA", "MARRIOTT"];

function Mark() {
  return <span className="mark" aria-label="TGF Holding">TG</span>;
}

export default function Home() {
  const [concept, setConcept] = useState("forge");
  const current = concepts.find((item) => item.id === concept)!;

  return (
    <main className={`site theme-${concept}`}>
      <aside className="concept-bar" aria-label="Select a design concept">
        <div className="concept-intro"><span>Design study</span><strong>5 homepage directions</strong></div>
        <div className="concept-tabs">
          {concepts.map((item) => (
            <button key={item.id} className={item.id === concept ? "active" : ""} onClick={() => setConcept(item.id)}>
              <span>{item.no}</span><span><b>{item.name}</b><small>{item.note}</small></span>
            </button>
          ))}
        </div>
      </aside>

      <header className="nav">
        <a className="brand" href="#top"><Mark/><span><b>The Global Food</b><small>Holding</small></span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#solutions">Solutions</a><a href="#projects">Projects & Brands</a><a href="#support">Support</a>
        </nav>
        <a className="nav-cta" href="#contact">Discuss a project <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> Sri Lanka’s commercial kitchen specialists</div>
          <h1>{concept === "atelier" ? <>Hospitality begins <em>behind the scenes.</em></> : concept === "proof" ? <>Proven in the places <em>that perform.</em></> : concept === "gateway" ? <>One standard. <em>Four markets.</em></> : concept === "precision" ? <>Engineered for <em>flow.</em> Built for service.</> : <>We build kitchens <em>made to perform.</em></>}</h1>
          <p>End-to-end commercial kitchen, hospitality and foodservice solutions—from first plan to after-sales support.</p>
          <div className="hero-actions"><a className="primary" href="#contact">Start your project <span>↗</span></a><a className="text-link" href="#projects">Explore our work <span>→</span></a></div>
        </div>
        <div className="hero-proof"><strong>End-to-end</strong><span>Design · Supply · Install · Support</span></div>
        <div className="scroll-note">Scroll to explore <span>↓</span></div>
      </section>

      <section className="market-gateway" aria-labelledby="market-title">
        <div className="section-kicker">TGF across the region</div>
        <div className="market-head"><h2 id="market-title">Choose your market.</h2><p>Local expertise, connected by one regional standard.</p></div>
        <div className="market-list">
          {markets.map((market) => <a key={market.code} className={market.active ? "active" : ""} href={market.active ? "#top" : `#${market.code.toLowerCase()}-website`}><span className="market-code">{market.code}</span><span><b>{market.name}</b><small>{market.label}</small></span><i>↗</i></a>)}
        </div>
      </section>

      <section className="intro" id="about">
        <div><span className="section-kicker">Built around your operation</span><h2>From empty space to a kitchen that works beautifully.</h2></div>
        <div><p>TGF brings planning, equipment, fabrication, project delivery and dependable technical care together. The result is a more efficient kitchen and one clear point of responsibility.</p><a className="text-link dark" href="#about-page">Read our story <span>→</span></a></div>
        <div className="stat"><strong>45+</strong><span>Client relationships</span></div><div className="stat"><strong>4</strong><span>Regional markets</span></div>
      </section>

      <section className="solutions" id="solutions">
        <div className="solution-head"><span className="section-kicker">What we solve</span><h2>One partner.<br/>Every critical stage.</h2><a className="primary outline" href="#solutions-page">Explore all solutions <span>↗</span></a></div>
        <div className="solution-list">{solutions.map(([n,title,copy]) => <a href="#contact" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><i>↗</i></a>)}</div>
      </section>

      <section className="project" id="projects">
        <div className="project-copy"><span className="section-kicker light">Selected capability</span><h2>Designed for service.<br/>Delivered for scale.</h2><p>Commercial kitchen delivery for hospitality leaders across Sri Lanka and international markets.</p><a className="primary" href="#projects-page">View project experience <span>↗</span></a></div>
        <div className="project-card"><span>Featured sector</span><strong>Luxury hospitality</strong><small>Planning · Equipment · Installation</small></div>
      </section>

      <section className="brand-strip"><span className="section-kicker">Trusted equipment. Trusted company.</span><div>{clients.map(client => <span key={client}>{client}</span>)}</div></section>

      <section className="support" id="support"><div><span className="section-kicker">After-sales & technical care</span><h2>Your opening day is only the beginning.</h2></div><p>Internationally trained technical personnel help keep equipment operating long after project handover.</p><a className="primary dark-button" href="#support-page">Request technical support <span>↗</span></a></section>

      <section className="contact" id="contact"><span className="section-kicker light">Let’s build what’s next</span><h2>Planning a kitchen<br/>that has to perform?</h2><a href="mailto:info@tgfholding.com">Discuss your project <span>↗</span></a></section>

      <footer><a className="brand" href="#top"><Mark/><span><b>The Global Food</b><small>Holding</small></span></a><div><b>Sri Lanka</b><span>Commercial kitchen & hospitality solutions</span></div><div><b>Navigate</b><a href="#about">About</a><a href="#solutions">Solutions</a><a href="#projects">Projects & brands</a></div><div><b>Regional sites</b><a href="#bd-website">Bangladesh</a><a href="#mv-website">Maldives</a><a href="#ae-website">Dubai</a></div><p>Prototype concept: <strong>{current.name}</strong><br/>Corporate facts and market URLs subject to client confirmation.</p></footer>
    </main>
  );
}
