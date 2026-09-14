import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Contact | Hojin Chu', 'Contact Hojin Chu at the Korea Institute for Advanced Study to discuss graph theory and combinatorics.', '/contact/');

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main>
        <PageIntro eyebrow="Contact / 연락" title="Let’s find the next" accent="connection.">
          <p>Feel free to email me if you would like to discuss a research topic, a problem, or a possible collaboration.</p>
        </PageIntro>

        <section className="content-section page-shell contact-grid">
          <div className="contact-main">
            <p className="kicker">Email</p>
            <a className="email-link" href="mailto:hojinchu@kias.re.kr">hojinchu@kias.re.kr <span>↗</span></a>
          </div>
          <div className="contact-details">
            <article><p className="kicker">Office</p><p>85 Hoegi-ro, Dongdaemun-gu, Seoul<br/>Bldg. 1 · Room 1534</p></article>
            <article><p className="kicker">Affiliation</p><p>School of Computational Sciences<br/><ExternalLink href="https://www.kias.re.kr/kias/main/main.do">Korea Institute for Advanced Study (KIAS)</ExternalLink></p></article>
            <article><p className="kicker">Profiles</p><p><ExternalLink href="https://arxiv.org/a/0000-0002-0484-9496.html">arXiv</ExternalLink> · <ExternalLink href="https://scholar.google.com/citations?user=14-ziHgAAAAJ">Google Scholar</ExternalLink> · <ExternalLink href="https://www.researchgate.net/profile/Hojin-Chu">ResearchGate</ExternalLink></p></article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
