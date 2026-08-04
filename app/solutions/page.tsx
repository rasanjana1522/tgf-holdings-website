import Link from "next/link";
import { CtaBand, PageHero, Shell } from "../site-shell";

const items=[
 ["planning","01","Kitchen planning & design","Workflow-led layouts, equipment coordination, utility planning and operational efficiency."],
 ["consulting","02","Hospitality & foodservice consultancy","Practical advice for hotels, restaurants, resorts, institutional kitchens and new concepts."],
 ["equipment","03","Equipment & fabrication","Commercial kitchen equipment, stainless-steel fabrication and application-led specification."],
 ["delivery","04","Installation & project execution","Coordinated installation, testing, commissioning, training and accountable handover."],
 ["refrigeration","05","Refrigeration & cold chain","Reliable cold-storage and refrigeration solutions engineered for food safety and uptime."],
 ["support","06","After-sales & technical support","Preventive maintenance, genuine parts, responsive service and equipment-care guidance."],
];
export default function Solutions(){return <Shell active="/solutions"><PageHero eyebrow="What we do" title={<>Solutions built around<br/><em>your operation.</em></>} copy="From first sketch to long-term technical care, TGF connects the critical stages of a successful commercial kitchen."/>
 <section className="solution-detail-intro"><span className="kicker">End-to-end capability</span><h2>One team. One standard.<br/>No gaps between stages.</h2><p>Every solution begins with the needs of the operation: menu, capacity, people, workflow, safety, service and commercial return.</p></section>
 <section className="solution-detail-grid">{items.map(([id,n,title,copy])=><article id={id} key={n}><span className="service-no">{n}</span><div className="service-icon">✦</div><h2>{title}</h2><p>{copy}</p><Link href="/contact-support#project-enquiry">Discuss this solution <span>↗</span></Link></article>)}</section>
 <section className="process"><div className="section-title"><span className="kicker">How we work</span><h2>A clear path from<br/>brief to performance.</h2></div><ol><li><span>01</span><b>Discover</b><p>Understand the operation, capacity and commercial priorities.</p></li><li><span>02</span><b>Engineer</b><p>Translate requirements into coordinated layouts and specifications.</p></li><li><span>03</span><b>Deliver</b><p>Manage supply, installation, testing and commissioning.</p></li><li><span>04</span><b>Support</b><p>Protect performance through training and technical care.</p></li></ol></section><CtaBand/></Shell>}
