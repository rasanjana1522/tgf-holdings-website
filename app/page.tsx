import Link from "next/link";
import { CtaBand, Shell } from "./site-shell";

const markets=[
  ["LK","Sri Lanka","Local expertise. Regional standard.","sri-lanka"],
  ["BD","Bangladesh","Growing hospitality solutions.","bangladesh"],
  ["MV","Maldives","Island hospitality, engineered.","maldives"],
  ["AE","Dubai","Regional access and support.","dubai"],
];
const solutions=[
  ["01","Kitchen planning & design","Efficient workflows engineered around your operation."],
  ["02","Equipment solutions","Trusted global equipment selected for performance."],
  ["03","Foodservice consultancy","Practical guidance from concept to opening."],
  ["04","Project execution","Installation, commissioning and accountable delivery."],
  ["05","Refrigeration solutions","Dependable cold-chain systems for critical operations."],
  ["06","Service & maintenance","Technical care designed to protect uptime."],
];
const partners=["UNOX","WILLIAMS","PRECISION","HOBART","SAMMIC","ROLLER GRILL"];
const clients=["SHANGRI-LA","MARRIOTT","SHERATON","CINNAMON","BURGER KING","DOMINO'S"];

export default function Home(){return <Shell active="/">
  <section className="home-hero">
    <div className="home-hero-image"/><div className="home-hero-overlay"/>
    <div className="home-hero-copy"><span className="kicker">Commercial kitchen & foodservice solutions</span><h1>Commercial kitchens.<br/><em>Engineered to perform.</em></h1><p>From first plan to opening day—and long after—TGF brings design, equipment, project delivery and technical care together.</p><div className="hero-actions"><Link className="gold-btn" href="/contact-support#project-enquiry">Discuss your project <span>→</span></Link><Link className="line-link" href="/projects-brands">View our work <span>↗</span></Link></div></div>
    <div className="hero-metrics"><div><b>End-to-end</b><span>Design · Supply · Install · Support</span></div><div><b>4 markets</b><span>Connected regional experience</span></div></div>
  </section>

  <section className="market-section"><div className="section-title centered"><span className="kicker">Four countries. One standard of excellence.</span><h2>Choose your market.</h2></div><div className="market-grid">{markets.map(([code,name,copy,id])=><a id={id} href={`#${id}`} key={code} className="market-card"><span>{code}</span><div><b>{name}</b><small>{copy}</small></div><i>↗</i></a>)}</div></section>

  <section className="home-solutions"><div className="section-title"><span className="kicker">Our solutions</span><h2>Every critical stage.<br/>One accountable partner.</h2><p>Solutions shaped around real hospitality workflows, service demands and commercial goals.</p><Link className="line-link" href="/solutions">Explore all solutions <span>→</span></Link></div><div className="solution-grid">{solutions.map(([n,title,copy])=><Link href="/solutions" key={n} className="solution-card"><span>{n}</span><div className="icon-glyph">✦</div><h3>{title}</h3><p>{copy}</p><i>→</i></Link>)}</div></section>

  <section className="projects-feature"><div className="projects-copy"><span className="kicker">Selected capability</span><h2>Spaces built<br/>for performance.</h2><p>Commercial kitchens and foodservice environments delivered for hotels, resorts, restaurants and institutional operations.</p><Link className="gold-btn" href="/projects-brands">View project experience <span>→</span></Link></div><div className="projects-mosaic"><div className="mosaic-a"/><div className="mosaic-b"/><div className="mosaic-c"><span>Luxury hospitality</span></div></div></section>

  <section className="logo-section"><div className="logo-heading"><span className="kicker">Our partner brands</span><h2>Global equipment.<br/>Local responsibility.</h2></div><div className="logo-grid dark-logos">{partners.map(x=><span key={x}>{x}</span>)}</div><div className="logo-heading client-heading"><span className="kicker">Trusted by leading companies</span><h2>Built on trust. Backed by results.</h2></div><div className="logo-grid client-logos">{clients.map(x=><span key={x}>{x}</span>)}</div></section>

  <section className="support-band"><div className="support-photo"/><div><span className="kicker">Beyond installation</span><h2>Built to perform.<br/>Backed to last.</h2><p>Preventive maintenance, trained technical personnel and responsive after-sales care help keep your operation moving.</p></div><Link className="outline-btn" href="/contact-support#technical-support">Request technical support <span>→</span></Link></section>
  <CtaBand/>
</Shell>}
