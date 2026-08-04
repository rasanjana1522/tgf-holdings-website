import Link from "next/link";
import { Shell } from "./site-shell";

const markets = ["Sri Lanka", "Bangladesh", "Maldives", "Dubai"];
const services = [
  ["Commercial kitchens", "End-to-end kitchen design, engineering and installation."],
  ["Equipment supply", "World-class brands and reliable solutions for every need."],
  ["Foodservice solutions", "Optimised workflows and intelligent foodservice systems."],
  ["Kitchen engineering", "Precision engineering for performance, safety and efficiency."],
  ["Refrigeration solutions", "Advanced cooling systems for complete temperature control."],
  ["Service & maintenance", "Planned maintenance and expert support you can depend on."],
];
const partners = ["UNOX", "williams", "PRECISION", "HOBART", "sammic", "ROLLER GRILL"];
const clients = ["SHANGRI-LA", "MARRIOTT", "SHERATON", "Cinnamon", "BURGER KING", "DOMINO'S"];

export default function Home() {
  return <Shell active="/">
    <section className="proto-hero">
      <div className="proto-hero-copy">
        <h1>Commercial<br/>kitchens.<br/><em>Engineered<br/>to perform.</em></h1>
        <Link className="gold-btn" href="/contact-support#project-enquiry">Discuss Your Project <span>&rarr;</span></Link>
      </div>
    </section>

    <section className="proto-markets proto-wrap">
      <div className="proto-rule-title"><span>Four countries. One standard of excellence.</span></div>
      <div className="proto-market-grid">
        {markets.map((name, i) => <Link href="/contact-support" className={`proto-market market-${i+1}`} key={name}>
          <div className="market-symbol">{["LK","BD","MV","AE"][i]}</div><b>{name}</b><span>&rarr;</span>
        </Link>)}
      </div>
    </section>

    <section className="proto-services proto-wrap">
      <div className="proto-rule-title"><span>Our solutions</span></div>
      <div className="proto-service-grid">{services.map(([title,copy],i)=><Link href="/solutions" className="proto-service" key={title}>
        <div className={`service-photo service-photo-${i+1}`}/><div className="service-body"><i>{String(i+1).padStart(2,"0")}</i><h2>{title}</h2><p>{copy}</p><span>&rarr;</span></div>
      </Link>)}</div>
    </section>

    <section className="proto-projects proto-wrap">
      <div className="proto-section-line"><h2>Premium projects</h2><Link href="/projects-brands">View All Projects &nbsp; &rarr;</Link></div>
      <div className="proto-project-strip">{[1,2,3,4,5].map(n=><div className={`project-shot project-shot-${n}`} key={n}/>)}</div>
    </section>

    <section className="proto-logos proto-wrap">
      <div className="proto-rule-title"><span>Our partner brands</span></div>
      <div className="proto-logo-row">{partners.map(x=><div key={x}>{x}</div>)}</div>
      <div className="proto-rule-title proto-client-title"><span>Trusted by leading brands</span></div>
      <div className="proto-logo-row proto-client-row">{clients.map(x=><div key={x}>{x}</div>)}</div>
    </section>

    <section className="proto-support proto-wrap">
      <div className="proto-support-image"/><div><h2>Built to perform.<br/>Backed to last.</h2><p>Technical expertise and after-sales support<br/>to keep your kitchen running at its best.</p></div>
      <Link className="gold-btn" href="/contact-support#project-enquiry">Discuss Your Project <span>&rarr;</span></Link>
    </section>
  </Shell>;
}
