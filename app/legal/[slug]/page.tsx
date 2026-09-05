import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./legal.module.css";

type LegalDocument = {
  title: string;
  description: string;
  html: string;
};

const documents: Record<string, LegalDocument> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description: "How ToSpace Private Limited collects, uses and protects personal data across the Launch To Space platform.",
    html: `
      <p class="eyebrow">Privacy</p>
      <h1>Privacy Policy</h1>
      <p class="updated">Last updated 22 August 2026</p>
      <p class="lede">This policy explains what personal data ToSpace Pvt Ltd collects when you use the Launch To Space website or fly a mission with us, why we collect it, and what rights you have over it.</p>
      <h2>1 &nbsp; Who we are</h2>
      <p>Launch To Space is a platform operated by <strong>ToSpace Private Limited</strong>, a company registered in India at M114, Mullai Street, North Gandhigramam, Karur 639004, CIN U29291TN2021PTC146836. For the purposes of the Digital Personal Data Protection Act, 2023, and where it applies to visitors in the European Economic Area, the General Data Protection Regulation, ToSpace Private Limited is the data fiduciary and controller of the personal data described here.</p>
      <p>Questions about this policy, or about your data, go to <a href="mailto:adnaan.m@tospace.in">adnaan.m@tospace.in</a>.</p>
      <h2>2 &nbsp; What we collect</h2>
      <table>
        <tr><th>Category</th><th>What it includes</th></tr>
        <tr><td>Enquiry details</td><td>Name, organisation, email address and anything you write in a mission brief or contact form.</td></tr>
        <tr><td>Mission records</td><td>Payload descriptions, technical specifications, launch site preferences, correspondence and delivery addresses.</td></tr>
        <tr><td>Billing information</td><td>Invoicing details and transaction records. Card details are handled by our payment provider and never stored on our systems.</td></tr>
        <tr><td>Website usage</td><td>Standard server logs, including IP address and browser type. The site sets no cookies and runs no analytics; see our <a href="/legal/cookie-policy">Cookie Policy</a>.</td></tr>
        <tr><td>Imagery</td><td>Photographs and video from missions, which may include people present at a launch or recovery site.</td></tr>
      </table>
      <p>We do not knowingly collect data from children, and we do not collect special or sensitive categories of personal data unless you send it to us unprompted. Please do not.</p>
      <h2>3 &nbsp; Why we use it</h2>
      <ul>
        <li><strong>To answer enquiries and quote for missions.</strong> We cannot respond to a brief without processing what you send us.</li>
        <li><strong>To perform the contract.</strong> Planning, integrating, launching and recovering your payload, and delivering the resulting data and content.</li>
        <li><strong>To meet legal and regulatory obligations.</strong> Applications for launch permissions require details of the operator, the payload and, in some cases, the customer.</li>
        <li><strong>To send occasional updates</strong> about missions and services, where you have asked to receive them. Every message includes an unsubscribe link.</li>
      </ul>
      <h2>4 &nbsp; Who we share it with</h2>
      <p>We do not sell personal data. We share it only where necessary, with:</p>
      <ul>
        <li>Regulatory and government bodies, as part of obtaining launch clearances.</li>
        <li>Service providers who host our site, send our email, process our payments or ship recovered payloads, each bound to process data only on our instructions.</li>
        <li>Professional advisers, and authorities where the law requires disclosure.</li>
      </ul>
      <p>Some of these providers operate outside India. Where personal data is transferred internationally we rely on the safeguards permitted under applicable law, including standard contractual clauses where relevant.</p>
      <h2>5 &nbsp; Mission imagery</h2>
      <p>Missions generate photographs and video. Where imagery includes identifiable people and we intend to publish it, we ask for consent first. If you appear in mission imagery and want it removed from our channels, write to us and we will take it down from anything we control.</p>
      <h2>6 &nbsp; How long we keep it</h2>
      <p>Enquiries that do not become missions are deleted after 12 months. Mission records, contracts and invoices are kept for as long as required by Indian tax and company law, currently eight years from the end of the relevant financial year. Mission data and imagery are retained indefinitely as part of our flight archive unless you ask us to remove them.</p>
      <h2>7 &nbsp; Your rights</h2>
      <p>You may ask us to give you a copy of your personal data, correct it, erase it, or stop using it for a particular purpose. You may withdraw consent at any time, and you may nominate another person to exercise these rights on your behalf in the event of death or incapacity, as provided under the Digital Personal Data Protection Act, 2023.</p>
      <p>Write to <a href="mailto:adnaan.m@tospace.in">adnaan.m@tospace.in</a>. We will respond within 30 days. If you are not satisfied, you may complain to the Data Protection Board of India, or if you are in the EEA, to your local supervisory authority.</p>
      <h2>8 &nbsp; Security</h2>
      <p>We apply reasonable technical and organisational measures to protect personal data, including encrypted transport, access control and limiting access to staff who need it. No system is perfectly secure, and we cannot guarantee absolute security, but we will notify you and the relevant authority of a breach where the law requires it.</p>
      <h2>9 &nbsp; Changes</h2>
      <p>We update this policy when our practices or the law change. The date at the top always reflects the current version. Material changes will be notified by email to active customers.</p>
      <div class="box"><p><strong>Grievance Officer.</strong> Adnaan M, Managing Director, ToSpace Private Limited, M114, Mullai Street, North Gandhigramam, Karur 639004 &middot; <a href="mailto:adnaan.m@tospace.in">adnaan.m@tospace.in</a></p></div>
    `,
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description: "The Launch To Space website sets no cookies. What that means, and what still reaches a third party.",
    html: `
      <p class="eyebrow">Cookies</p>
      <h1>Cookie Policy</h1>
      <p class="updated">Last updated 22 August 2026</p>
      <p class="lede">The Launch To Space website does not set cookies. There is no tracking, no analytics and no advertising technology on this site, which is why you have not been asked to accept anything.</p>
      <h2>1 &nbsp; What a cookie is</h2>
      <p>A cookie is a small text file a website stores on your device, usually to remember you between visits or to record what you looked at. Most commercial websites set a great many of them. This one sets none.</p>
      <h2>2 &nbsp; What that means in practice</h2>
      <ul>
        <li>We do not know who you are when you visit, and we cannot recognise you if you come back.</li>
        <li>We do not count visits, measure page views or track how you move through the site.</li>
        <li>We do not share anything about your visit with advertisers or data brokers.</li>
        <li>You will not see a cookie consent banner, because there is nothing to consent to.</li>
      </ul>
      <h2>3 &nbsp; What still reaches a third party</h2>
      <p>Two things are worth stating plainly, because neither is a cookie but both involve someone other than us:</p>
      <ul>
        <li><strong>Fonts.</strong> Typefaces on this site are served by Google Fonts. Loading them sends your IP address and browser details to Google as part of that request. Google's handling of this is governed by its own privacy policy.</li>
        <li><strong>Server logs.</strong> Our hosting provider records standard access logs, including IP addresses, as every web server does. These are used for security and diagnostics, not for tracking.</li>
      </ul>
      <h2>4 &nbsp; If this changes</h2>
      <p>We may add analytics in future to understand which pages are useful. If we do, we will update this page before switching anything on, name the provider and what it collects, and ask for your consent through a banner you can decline. Non-essential cookies will never be set without that consent.</p>
      <h2>5 &nbsp; Controlling cookies anyway</h2>
      <p>Every major browser lets you block or delete cookies under Settings &gt; Privacy, and you are welcome to do so. Nothing on this site depends on them.</p>
      <h2>6 &nbsp; More information</h2>
      <p>What we do with the personal data you actively send us is covered in our <a href="/legal/privacy-policy">Privacy Policy</a>. Anything else, write to <a href="mailto:adnaan.m@tospace.in">adnaan.m@tospace.in</a>.</p>
    `,
  },
  "legal-notice": {
    title: "Legal Notice",
    description: "Company details, intellectual property and regulatory position for the Launch To Space platform.",
    html: `
      <p class="eyebrow">Legal</p>
      <h1>Legal Notice</h1>
      <p class="updated">Last updated 22 August 2026</p>
      <p class="lede">Details of the company behind this website, and the terms on which its content is published.</p>
      <h2>1 &nbsp; Site owner</h2>
      <table>
        <tr><td>Company</td><td>ToSpace Private Limited</td></tr>
        <tr><td>Platform</td><td>Launch To Space</td></tr>
        <tr><td>Registered office</td><td>M114, Mullai Street, North Gandhigramam, Karur 639004, Tamil Nadu, India</td></tr>
        <tr><td>Operating office</td><td>No. 23, 2nd Floor, Palandiamman Koil Street, Adambakkam, Chennai 600088, Tamil Nadu, India</td></tr>
        <tr><td>CIN</td><td>U29291TN2021PTC146836</td></tr>
        <tr><td>GSTIN</td><td>33AAICT9147N1ZP</td></tr>
        <tr><td>Managing Director</td><td>Adnaan M</td></tr>
        <tr><td>Email</td><td><a href="mailto:adnaan.m@tospace.in">adnaan.m@tospace.in</a></td></tr>
      </table>
      <h2>2 &nbsp; Intellectual property</h2>
      <p>The Launch To Space name, the balloon mark, the payload carrier design, and all text, drawings, photographs and video on this site are the property of ToSpace Private Limited or are used with permission. You may not reproduce, adapt or redistribute them commercially without written consent.</p>
      <p>Client and partner logos shown on this site remain the property of their respective owners and appear with permission. Press may request mission imagery and brand assets at <a href="mailto:adnaan.m@tospace.in">adnaan.m@tospace.in</a>.</p>
      <h2>3 &nbsp; Accuracy of content</h2>
      <p>We keep this site accurate and current, but specifications, altitudes, durations and timelines describe typical missions and are not guarantees. Carrier dimensions and capacities are preliminary and are confirmed for each flight. Nothing on this site is an offer capable of acceptance; missions are contracted individually.</p>
      <h2>4 &nbsp; Claims about near space</h2>
      <p>Launch To Space flies high-altitude balloons to roughly 30-35 km. This is the stratosphere, commonly described as <em>near space</em>. It is not outer space, which by international convention begins at the Karman line, 100 km. We describe our missions as near-space missions and ask that customers do the same in any material built on a flight with us.</p>
      <h2>5 &nbsp; Regulatory position</h2>
      <p>ToSpace Private Limited does not hold a standing launch licence, and none is claimed anywhere on this site. Permissions are obtained flight by flight: before every launch we apply for the necessary No Objection Certificates from the relevant authorities and arrange the issue of a NOTAM covering the launch window and airspace involved.</p>
      <p>This means no mission is confirmed until its clearances are in place. Where a proposed site or window cannot be cleared, we will say so and work with you on an alternative. Flights remain subject to airspace clearance, site approval and weather on the day.</p>
      <h2>6 &nbsp; External links</h2>
      <p>Where this site links to third-party websites, we do so for information only. We do not control their content and accept no responsibility for it.</p>
      <h2>7 &nbsp; Governing law</h2>
      <p>This notice and any dispute arising from the use of this website are governed by the laws of India, and the courts of Karur, Tamil Nadu have exclusive jurisdiction.</p>
    `,
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    description: "Terms governing high-altitude balloon missions carried out by ToSpace Private Limited.",
    html: `
      <p class="eyebrow">Terms</p>
      <h1>Terms &amp; Conditions</h1>
      <p class="updated">Last updated 22 August 2026</p>
      <p class="lede">These terms govern high-altitude balloon missions carried out by ToSpace Private Limited under the Launch To Space platform. They apply to every mission unless we agree something different in writing.</p>
      <h2>1 &nbsp; Definitions</h2>
      <p><strong>We, us, our</strong>: ToSpace Private Limited. <strong>You, the customer</strong>: the person or organisation booking a mission. <strong>Payload</strong>: the item you supply to be flown. <strong>Mission</strong>: the planning, integration, launch, flight, recovery and content delivery for one flight. <strong>Content</strong>: photographs, video, telemetry and mission documentation produced by a flight.</p>
      <h2>2 &nbsp; Booking and payment</h2>
      <ul>
        <li>A mission is confirmed when you accept our written quotation and pay the deposit stated in it.</li>
        <li>Prices are quoted in Indian Rupees (INR) and are exclusive of GST unless stated otherwise. We may quote in other currencies, including USD, by prior agreement; where we do, the quotation states the currency and the applicable rate.</li>
        <li>Payment terms are <strong>80% of the total invoice value on booking</strong> and the remaining <strong>20% on delivery of mission content</strong>.</li>
        <li>Late payment may delay a launch and attracts interest at 15% per annum, calculated daily from the due date until payment is received.</li>
      </ul>
      <h2>3 &nbsp; Your payload</h2>
      <p>You are responsible for the payload you supply. By sending it, you confirm that it is accurately described, that it is safe to fly, and that it does not breach any law or any third party's rights.</p>
      <p>Payloads must meet the published requirements, currently a baseline of up to 5 kg within the standard carrier. The following cannot fly: explosives, pyrotechnics, flammable liquids, pressurised vessels, radioactive material, toxic or corrosive substances, live animals, damaged or non-compliant battery packs, and anything liable to shed debris or separate in flight.</p>
      <p>Pharmaceutical, biological and other regulated materials may be flown only where the necessary separate clearances are in place; obtaining them is your responsibility unless we agree otherwise in writing.</p>
      <p>We inspect every payload on arrival and again at integration, and may refuse an item at either point on safety, regulatory or recovery grounds. Where we refuse, we will explain what would make it flyable.</p>
      <h2>4 &nbsp; Permissions, weather and abort</h2>
      <p>We obtain the permissions required for each flight, applying for the necessary No Objection Certificates and arranging the issue of a NOTAM for the launch window. We hold no standing launch licence, so no mission is confirmed until its clearances are in place. If a proposed site does not clear regulatory or feasibility checks, we will work with you to find an alternative.</p>
      <p>Every launch follows a Go / No-Go protocol on the day. We may abort or postpone at our sole discretion where wind, rain, visibility or any other condition threatens a safe flight, a safe landing or the recovery team. An aborted launch is rescheduled at no additional cost. Rescheduling does not entitle you to a refund, and we are not liable for travel, accommodation or campaign costs you incur around a launch date.</p>
      <h2>5 &nbsp; Recovery and loss</h2>
      <p>Payloads carry redundant tracking and telemetry is monitored throughout the flight. Recovery is nonetheless subject to terrain, weather, landing site access and factors beyond our control.</p>
      <div class="box"><p><strong>Reflight.</strong> If a payload cannot be recovered, we will fly the mission again at no additional cost as soon as it is feasible, using a replacement payload you supply. This reflight is your sole remedy for a failed recovery. We are not liable for the value of the payload itself, and you should insure anything you cannot afford to lose.</p></div>
      <p>Payloads may return damaged. Landing under canopy involves impact, and stratospheric conditions are severe. We are not responsible for damage arising from the flight environment or from landing.</p>
      <h2>6 &nbsp; Content and intellectual property</h2>
      <p>You keep all rights in your payload, your brand and your own materials. We keep all rights in our carrier design, our systems, and our operational know-how.</p>
      <p>On full payment, we grant you a perpetual, worldwide, non-exclusive licence to use the content produced by your mission for marketing, PR and internal purposes. Unless you tell us otherwise in writing, we may also use mission imagery in our own portfolio, website and marketing, and may name you as a customer.</p>
      <h2>7 &nbsp; Claims you make about the mission</h2>
      <p>Missions reach roughly 30-35 km. This is near space, not outer space. You agree to describe the flight accurately in any advertising or public statement, and not to claim that a payload reached orbit or outer space. You are responsible for the compliance of your own advertising, including under ASCI guidance where it applies.</p>
      <h2>8 &nbsp; Cancellation</h2>
      <h3>If you cancel more than 30 days before the scheduled launch</h3>
      <p>We refund the deposit less costs already incurred on your mission. Those costs typically include the balloon and gas, permission applications, and any integration or bracket work already carried out. We will itemise them.</p>
      <h3>If you cancel 30 days or less before the scheduled launch</h3>
      <p>The deposit is not refunded in cash. Instead, <strong>80% of the deposit is held as a credit</strong> towards a future launch, and the remaining 20% is retained to cover costs already committed at that stage.</p>
      <p>A credit may be applied to any mission booked at least one quarter in advance, and expires at the end of the financial year in which it was issued, 31 March. The last date on which it can be applied to a booking is 31 December of that financial year. Where a cancellation falls close to that deadline and the credit would otherwise be worth little, we may extend it at our discretion; ask us.</p>
      <h3>If we cancel</h3>
      <p>Where we cancel for any reason other than weather, regulatory refusal or your breach of these terms, we refund everything you have paid in full.</p>
      <h2>9 &nbsp; Liability</h2>
      <p>Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.</p>
      <p>Subject to that, our total liability arising from a mission is limited to the fees you paid for that mission. We are not liable for indirect or consequential loss, including lost profit, lost campaign value, lost data, or the cost of rebuilding a payload.</p>
      <h2>10 &nbsp; Force majeure</h2>
      <p>Neither party is liable for failure to perform caused by events beyond reasonable control, including weather, airspace restriction, regulatory action, civil unrest, strikes, natural disaster or failure of a public network.</p>
      <h2>11 &nbsp; Confidentiality</h2>
      <p>Each party will keep the other's non-public technical and commercial information confidential and use it only for the mission. Where your payload is commercially sensitive, tell us before delivery and we will restrict access and hold publication of imagery until you release it.</p>
      <h2>12 &nbsp; Governing law</h2>
      <p>These terms are governed by the laws of India. The courts of Karur, Tamil Nadu have exclusive jurisdiction, save that either party may seek injunctive relief in any competent court.</p>
      <h2>13 &nbsp; Contact</h2>
      <p>Questions about these terms: <a href="mailto:adnaan.m@tospace.in">adnaan.m@tospace.in</a>, or write to ToSpace Private Limited, No. 23, 2nd Floor, Palandiamman Koil Street, Adambakkam, Chennai 600088.</p>
    `,
  },
};

const legalLinks = [
  ["privacy-policy", "Privacy Policy"],
  ["cookie-policy", "Cookie Policy"],
  ["legal-notice", "Legal Notice"],
  ["terms-and-conditions", "Terms & Conditions"],
] as const;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(documents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = documents[slug];

  if (!document) {
    return {};
  }

  return {
    title: document.title,
    description: document.description,
    alternates: {
      canonical: `/legal/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `/legal/${slug}`,
      siteName: "ToSpace Launch To Space",
      title: `${document.title} | Launch To Space`,
      description: document.description,
      locale: "en_IN",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Launch To Space high-altitude balloon mission platform by ToSpace",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${document.title} | Launch To Space`,
      description: document.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const document = documents[slug];

  if (!document) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.shell} ${styles.bar}`}>
          <Link className={styles.brand} href="/">
            Launch To Space
          </Link>
          <Link className={styles.back} href="/">
            Back to site
          </Link>
        </div>
      </header>

      <main className={`${styles.article} ${styles.content}`} dangerouslySetInnerHTML={{ __html: document.html }} />

      <footer className={styles.footer}>
        <div className={`${styles.shell} ${styles.footerRow}`}>
          <span>&copy; 2026 ToSpace Private Limited</span>
          <nav className={styles.footerNav} aria-label="Legal pages">
            {legalLinks.map(([href, label]) => (
              <Link key={href} href={`/legal/${href}`}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
