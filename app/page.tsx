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
const partners = [
  ["Mareno", "/logos/partner-29.jpg"], ["Tru-Tec", "/logos/partner-30.jpg"],
  ["Rational", "/logos/partner-31.jpg"], ["UNOX", "/logos/partner-32.jpg"],
  ["Williams", "/logos/partner-33.jpg"], ["Precision", "/logos/partner-34.jpg"],
  ["Hobart", "/logos/partner-35.jpg"], ["Sammic", "/logos/partner-36.jpg"],
  ["Roller Grill", "/logos/partner-37.jpg"], ["Bartscher", "/logos/partner-38.jpg"],
  ["Winterhalter", "/logos/partner-39.jpg"], ["ITV Ice Makers", "/logos/partner-40.jpg"],
  ["Fiorini", "/logos/partner-41.jpg"], ["Chanmag", "/logos/partner-42.jpg"],
  ["Sinmag", "/logos/partner-43.jpg"], ["Kolb", "/logos/partner-44.jpg"],
  ["Fagor", "/logos/partner-27.jpg"], ["Moffat", "/logos/partner-28.jpg"],
];
const internationalProjects = [
  ["Oliaji Trading Co.", "/logos/international-22.jpg"], ["Manta Sea View", "/logos/international-24.jpg"],
  ["Marriott", "/logos/international-25.jpg"], ["Three Elephants & Co.", "/logos/international-26.jpg"],
];
const localClients = [
  ["Waters Edge", "/logos/client-special-37.png"], ["Cinnamon Hotels", "/logos/client-2.png"],
  ["Shangri-La", "/logos/client-3.png"], ["Ravana Pool Club", "/logos/client-special-38.png"],
  ["Laugfs Leisure", "/logos/client-5.png"], ["Sheraton", "/logos/client-special-39.png"],
  ["SriLankan Catering", "/logos/client-7.png"], ["SPAR", "/logos/client-9-1.png"],
  ["Burger King", "/logos/client-11.png"], ["Domino's Pizza", "/logos/client-12.png"],
  ["Popeyes", "/logos/client-13.png"], ["Diego's", "/logos/client-14.png"],
  ["IGA Foods", "/logos/client-special-40.png"], ["Delifrance", "/logos/client-16.png"],
  ["Pearl Bay", "/logos/client-17.png"], ["Soul Beach", "/logos/client-18.png"],
  ["Warehouse", "/logos/client-19.png"], ["Kings Hospital Colombo", "/logos/client-20.png"],
  ["Asiri Central Hospital", "/logos/client-21.png"],
];

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
      <div className="proto-logo-row">{partners.map(([name,src])=><div key={name}><img src={src} alt={name}/></div>)}</div>
      <div className="proto-rule-title proto-client-title"><span>International projects</span></div>
      <div className="proto-logo-row proto-client-row international-row">{internationalProjects.map(([name,src])=><div key={name}><img src={src} alt={name}/></div>)}</div>
      <div className="proto-rule-title proto-client-title"><span>Local clients</span></div>
      <div className="proto-logo-row proto-client-row local-client-row">{localClients.map(([name,src])=><div key={name}><img src={src} alt={name}/></div>)}</div>
    </section>

    <section className="proto-support proto-wrap">
      <div className="proto-support-image"/><div><h2>Built to perform.<br/>Backed to last.</h2><p>Technical expertise and after-sales support<br/>to keep your kitchen running at its best.</p></div>
      <Link className="gold-btn" href="/contact-support#project-enquiry">Discuss Your Project <span>&rarr;</span></Link>
    </section>
  </Shell>;
}
