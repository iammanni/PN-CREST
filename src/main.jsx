import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Menu,
  X,
  ShieldCheck,
  Clock3,
  Users,
  Mail,
  Phone,
  Building2,
  Calculator,
  Landmark,
  BadgeCheck,
  BriefcaseBusiness,
  Utensils,
  Rocket,
  Award,
  ClipboardCheck,
  SearchCheck,
} from "lucide-react";
import "./styles.css";

const email = "pncrest2026services@gmail.com";
const services = [
  {
    title: "GST Services",
    icon: Calculator,
    items: [
      "GST Registration",
      "GST Return Filing",
      "GST Amendment",
      "GST Cancellation",
      "GST-related compliance assistance",
    ],
  },
  {
    title: "Income Tax Services",
    icon: Landmark,
    items: [
      "Income Tax Return Filing",
      "Tax-related assistance",
      "Tax Compliance Support",
      "Basic Tax Planning Assistance",
    ],
  },
  {
    title: "ROC & MCA Services",
    icon: Building2,
    items: [
      "Company Incorporation",
      "Annual ROC Compliance",
      "MCA Form Filing",
      "Director-related compliance",
      "Company-related statutory filings",
    ],
  },
  {
    title: "Business Registration",
    icon: BriefcaseBusiness,
    items: [
      "Private Limited Company",
      "LLP Registration",
      "Partnership Firm Registration",
      "OPC Registration",
      "Startup-related registrations",
    ],
  },
  {
    title: "MSME Services",
    icon: BadgeCheck,
    items: [
      "MSME/Udyam Registration",
      "MSME Certificate Updation",
      "Related documentation assistance",
    ],
  },
  {
    title: "FSSAI Services",
    icon: Utensils,
    items: [
      "FSSAI Basic Registration",
      "FSSAI State License",
      "FSSAI Central License",
      "FSSAI-related compliance assistance",
    ],
  },
  {
    title: "Startup India",
    icon: Rocket,
    items: [
      "Startup India Registration",
      "Documentation Assistance",
      "Registration-related support",
    ],
  },
  {
    title: "Trademark Services",
    icon: Award,
    items: [
      "Trademark Registration",
      "Trademark Application Assistance",
      "Trademark-related documentation",
    ],
  },
];
const audiences = [
  "Entrepreneurs",
  "Startups",
  "Small & Medium Businesses",
  "Companies",
  "LLPs",
  "Partnership Firms",
  "Professionals",
  "Individual Business Owners",
  "New Business Owners",
];
const benefits = [
  ["Professional & Reliable Support", ShieldCheck],
  ["Simple & Transparent Process", FileCheck2],
  ["Timely Compliance Assistance", Clock3],
  ["End-to-End Documentation Support", ClipboardCheck],
  ["Client-Focused Services", Users],
];
function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  React.useEffect(() => setOpen(false), [loc.pathname]);
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <span className="brandMark">PN</span>
          <span>
            <b>PN CREST</b>
            <small>PROFESSIONAL SERVICES</small>
          </span>
        </Link>
        <button
          className="menuBtn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "navLinks open" : "navLinks"}>
          {[
            ["/", "Home"],
            ["/about", "About Us"],
            ["/services", "Services"],
            ["/how-we-work", "How We Work"],
            ["/who-we-serve", "Who We Serve"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
          <Link className="navCta" to="/contact">
            Get Started <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container footerGrid">
        <div>
          <Link to="/" className="brand footerBrand">
            <span className="brandMark">PN</span>
            <span>
              <b>PN CREST</b>
              <small>PROFESSIONAL SERVICES</small>
            </span>
          </Link>
          <p>
            Professional support for your business, registration, taxation and
            compliance needs.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/how-we-work">How We Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Our Services</h4>
          <Link to="/services">GST Services</Link>
          <Link to="/services">Income Tax</Link>
          <Link to="/services">ROC & MCA</Link>
          <Link to="/services">Business Registration</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={"mailto:" + email}>
            <Mail size={15} /> {email}
          </a>
          <p className="footerNote">
            We aim to provide practical, reliable and timely assistance.
          </p>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          © {new Date().getFullYear()} PN Crest Professional Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
function PageHero({ eyebrow, title, text }) {
  return (
    <section className="pageHero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroGlow one" />
        <div className="heroGlow two" />
        <div className="container heroGrid">
          <div>
            <span className="eyebrow">BUSINESS • TAX • COMPLIANCE</span>
            <h1>
              Your Business,
              <br />
              <em>Our Expertise.</em>
            </h1>
            <p className="heroText">
              Professional support for your business, compliance and
              registration needs — simple, reliable and timely.
            </p>
            <div className="heroActions">
              <Link className="primaryBtn" to="/contact">
                Get Professional Assistance <ArrowRight size={18} />
              </Link>
              <Link className="secondaryBtn" to="/services">
                Explore Services <ChevronRight size={17} />
              </Link>
            </div>
            <div className="trustRow">
              <span>
                <CheckCircle2 /> Practical Support
              </span>
              <span>
                <CheckCircle2 /> Transparent Process
              </span>
              <span>
                <CheckCircle2 /> Timely Assistance
              </span>
            </div>
          </div>
          <div className="heroVisual">
            <div className="visualCard mainCard">
              <div className="cardTop">
                <span className="miniIcon">
                  <ShieldCheck />
                </span>
                <span className="status">● Trusted Support</span>
              </div>
              <h3>Business Compliance</h3>
              <p>
                From registration to ongoing compliance, get guided support at
                every step.
              </p>
              <div className="progress">
                <span />
              </div>
              <div className="checkLine">
                <CheckCircle2 /> Documentation guidance
              </div>
              <div className="checkLine">
                <CheckCircle2 /> Application & filing
              </div>
              <div className="checkLine">
                <CheckCircle2 /> Follow-up assistance
              </div>
            </div>
            <div className="floatCard">
              <span>
                <BadgeCheck />
              </span>
              <div>
                <b>End-to-End</b>
                <small>Documentation Support</small>
              </div>
            </div>
            <div className="floatCard bottom">
              <span>
                <Clock3 />
              </span>
              <div>
                <b>Timely</b>
                <small>Compliance Assistance</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section intro">
        <div className="container twoCol">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Professional support without the complexity.</h2>
          </div>
          <div>
            <p className="lead">
              PN Crest Professional Services helps individuals, entrepreneurs,
              startups and businesses navigate registrations, taxation and
              compliance with practical guidance from documentation to
              completion.
            </p>
            <Link className="textLink" to="/about">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2>Everything you need to stay compliant.</h2>
            </div>
            <Link className="textLink" to="/services">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="serviceGrid">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sectionHead centered">
            <div>
              <span className="eyebrow">WHY PN CREST</span>
              <h2>A simpler way to manage business compliance.</h2>
            </div>
          </div>
          <div className="benefitGrid">
            {benefits.map(([t, I]) => (
              <div className="benefit" key={t}>
                <I />
                <h3>{t}</h3>
                <p>
                  Clear guidance and dependable support tailored to your
                  requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
function ServiceCard({ service, index }) {
  const I = service.icon;
  return (
    <Link to="/services" className="serviceCard">
      <div className="serviceIcon">
        <I />
      </div>
      <span className="number">0{index + 1}</span>
      <h3>{service.title}</h3>
      <ul>
        {service.items.slice(0, 3).map((x) => (
          <li key={x}>
            <CheckCircle2 size={15} />
            {x}
          </li>
        ))}
      </ul>
      <span className="cardLink">
        Explore <ArrowRight size={15} />
      </span>
    </Link>
  );
}
function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT PN CREST"
        title="Professional support for every stage of your business."
        text="We simplify business registration, taxation and compliance processes through practical, reliable and timely assistance."
      />
      <section className="section">
        <div className="container twoCol aboutGrid">
          <div className="aboutPanel">
            <div className="quoteMark">“</div>
            <h2>Making complex processes feel simple.</h2>
            <p>
              PN Crest Professional Services provides professional business
              registration, taxation and compliance-related services to
              individuals, startups and businesses.
            </p>
            <p>
              We focus on understanding each client's requirements and providing
              suitable support from documentation to completion.
            </p>
          </div>
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>Reliable guidance, built around your requirements.</h2>
            <p className="lead">
              Our objective is to simplify complex registration and compliance
              processes so you can focus on running and growing your business.
            </p>
            <div className="mission">
              <div>
                <h3>Our Mission</h3>
                <p>
                  To make business registrations and compliance processes
                  simple, accessible and hassle-free for our clients.
                </p>
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  To become a trusted professional service partner for
                  businesses and entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Business, tax & compliance services."
        text="Practical assistance across registrations, filings, documentation and ongoing compliance requirements."
      />
      <section className="section light">
        <div className="container serviceFullGrid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container callout">
          <div>
            <span className="eyebrow">NOT SURE WHAT YOU NEED?</span>
            <h2>Tell us about your requirement.</h2>
            <p>
              We'll help you understand the relevant service, documents and next
              steps.
            </p>
          </div>
          <Link className="primaryBtn" to="/contact">
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
function HowWeWork() {
  const steps = [
    [
      "01",
      "Consultation",
      "Understand your business requirements.",
      "SearchCheck",
    ],
    [
      "02",
      "Documentation",
      "Guide you regarding the required documents.",
      "FileCheck2",
    ],
    [
      "03",
      "Application & Filing",
      "Prepare and submit the required applications/forms.",
      "ClipboardCheck",
    ],
    [
      "04",
      "Follow-up",
      "Assist with queries, objections and required follow-ups.",
      "Clock3",
    ],
    [
      "05",
      "Completion",
      "Provide the relevant certificate/document after successful completion.",
      "BadgeCheck",
    ],
  ];
  const icons = { SearchCheck, FileCheck2, ClipboardCheck, Clock3, BadgeCheck };
  return (
    <>
      <PageHero
        eyebrow="OUR PROCESS"
        title="A clear process from start to completion."
        text="We keep each engagement structured, transparent and easy to understand."
      />
      <section className="section">
        <div className="container timeline">
          {steps.map(([n, t, d, ic]) => {
            const I = icons[ic];
            return (
              <div className="step" key={n}>
                <div className="stepNo">{n}</div>
                <div className="stepIcon">
                  <I />
                </div>
                <div>
                  <span className="eyebrow">STEP {n}</span>
                  <h2>{t}</h2>
                  <p>{d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
function WhoServe() {
  return (
    <>
      <PageHero
        eyebrow="WHO WE SERVE"
        title="Support for businesses at every stage."
        text="Our services are designed for people and organisations that need dependable registration, tax and compliance assistance."
      />
      <section className="section">
        <div className="container">
          <div className="audienceGrid">
            {audiences.map((x, i) => (
              <div className="audience" key={x}>
                <span>0{i + 1}</span>
                <CheckCircle2 />
                <h3>{x}</h3>
                <p>Practical support tailored to your business needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
function Contact() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Need professional assistance?"
        text="Share your requirement with PN Crest Professional Services and take the next step with confidence."
      />
      <section className="section contactSection">
        <div className="container contactGrid">
          <div>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Start with a simple conversation.</h2>
            <p className="lead">
              Whether you need a new registration, a filing, compliance support
              or guidance on the right process, we're here to help.
            </p>
            <div className="contactInfo">
              <div>
                <span>
                  <Mail />
                </span>
                <div>
                  <small>Email</small>
                  <a href={"mailto:" + email}>{email}</a>
                </div>
              </div>
              <div>
                <span>
                  <Clock3 />
                </span>
                <div>
                  <small>Support</small>
                  <b>Professional & timely assistance</b>
                </div>
              </div>
            </div>
          </div>
          <div className="contactCard">
            <h3>Send your requirement</h3>
            <p>Click below to email us with your business requirement.</p>
            <a
              className="primaryBtn full"
              href={"mailto:" + email + "?subject=Business%20Service%20Enquiry"}
            >
              <Mail size={18} /> Email PN Crest
            </a>
            <div className="secure">
              <ShieldCheck size={16} /> Clear communication • Practical guidance
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function CTA() {
  return (
    <section className="cta">
      <div className="container ctaInner">
        <div>
          <span className="eyebrow">READY TO GET STARTED?</span>
          <h2>Let’s make your next compliance task simpler.</h2>
          <p>
            Professional support for registrations, taxation and business
            compliance.
          </p>
        </div>
        <Link className="lightBtn" to="/contact">
          Get in Touch <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/who-we-serve" element={<WhoServe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
