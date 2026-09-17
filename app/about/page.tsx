import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { ProfilePhotoToggle } from '@/components/profile-photo-toggle';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { pageMetadata } from '@/lib/metadata';
import { ArrowUpRight, BookOpenText, FileUser, GraduationCap, Network } from 'lucide-react';

export const metadata = pageMetadata('About | Hojin Chu', 'Academic background, current position, research profiles, and activities of graph theorist Hojin Chu.', '/about/');

const profileLinks = [
  { href: 'https://arxiv.org/a/0000-0002-0484-9496.html', label: 'arXiv', Icon: BookOpenText },
  { href: 'https://scholar.google.com/citations?user=14-ziHgAAAAJ', label: 'Google Scholar', Icon: GraduationCap },
  { href: 'https://www.researchgate.net/profile/Hojin-Chu', label: 'ResearchGate', Icon: Network },
  { href: 'https://drive.google.com/file/d/1B_hkg5rX56hav1dFVP-390paRex50XrZ/view?usp=sharing', label: 'Curriculum vitae', Icon: FileUser },
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main>
        <PageIntro eyebrow="About" title="Mathematics through" accent="structure & people.">
          <p>I am a research fellow at the Korea Institute for Advanced Study. My work sits at the intersection of combinatorics, graph theory, and combinatorial matrix theory.</p>
        </PageIntro>

        <section className="content-section page-shell about-overview">
          <figure className="about-photo">
            <ProfilePhotoToggle />
            <figcaption>
              <span>Hojin Chu · 추호진</span>
              <span>Hover or tap to view the previous portrait</span>
            </figcaption>
          </figure>
          <div className="about-details">
            <p className="kicker">Current position</p>
            <h2>Research Fellow</h2>
            <p className="large-copy">School of Computational Sciences<br/><ExternalLink href="https://www.kias.re.kr/kias/main/main.do">Korea Institute for Advanced Study (KIAS)</ExternalLink></p>
            <p className="address-copy">85 Hoegi-ro, Dongdaemun-gu, Seoul<br/>Bldg. 1 · Room 1534</p>

            <div className="education-block">
              <h3 className="about-section-title">Education</h3>
              <article><time>2020—2025</time><p><strong>Ph.D. in Mathematics</strong><ExternalLink href="https://en.snu.ac.kr/">Seoul National University</ExternalLink></p></article>
              <article><time>2016—2020</time><p><strong>B.S. in Mathematics Education</strong><ExternalLink href="https://en.snu.ac.kr/">Seoul National University</ExternalLink></p></article>
              <ExternalLink className="inline-feature-link" href="https://drive.google.com/file/d/1jADoKiArPaAjDPCu2aVpSZJRHVgfXWFv/view?usp=drive_link">
                <span className="thesis-copy"><small>Ph.D. dissertation</small><strong>A study of digraph structure in terms of common neighbors</strong><em>Advisor: Prof. Suh-Ryung Kim</em></span>
                <ArrowUpRight aria-hidden="true" />
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="content-band">
          <div className="page-shell profile-panel">
            <div><p className="kicker light">Research profiles</p><h2>Follow the work.</h2></div>
            <div className="profile-link-list">
              {profileLinks.map(({ href, label, Icon }) => (
                <ExternalLink href={href} key={label}>
                  <span className="profile-link-label"><Icon aria-hidden="true" /><span>{label}</span></span>
                  <ArrowUpRight className="profile-link-arrow" aria-hidden="true" />
                </ExternalLink>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section page-shell beyond-grid">
          <div className="beyond-copy">
            <p className="kicker">Beyond papers</p>
            <h2>Graphs connect more than <em>vertices.</em></h2>
            <p>I enjoy connecting with people and sharing mathematics outside the usual seminar room. I am also an avid climber, always looking for another route—and another way to think about structure.</p>
            <div className="review-note"><h3>Review Activities</h3><p>SIDMA · Discrete Mathematics · Discrete Applied Mathematics · Discussiones Mathematicae Graph Theory · FOCS 2026 · Ars Combinatoria</p></div>
          </div>
          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/UaN_ketewPs" title="Hojin Chu — self-introduction and research overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div><strong>Self-introduction & research overview</strong><span>Watch on YouTube</span></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
