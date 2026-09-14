import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('About | Hojin Chu', 'Academic background, current position, research profiles, and activities of graph theorist Hojin Chu.', '/about/');

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main>
        <PageIntro eyebrow="About / 소개" title="Mathematics through" accent="structure & people.">
          <p>I am a research fellow at the Korea Institute for Advanced Study. My work sits at the intersection of combinatorics, graph theory, and combinatorial matrix theory.</p>
        </PageIntro>

        <section className="content-section page-shell about-overview">
          <figure className="about-photo">
            <img src="/hojin-chu.jpg" alt="Hojin Chu" width="1280" height="1689" loading="lazy" />
            <figcaption>Hojin Chu · 추호진</figcaption>
          </figure>
          <div className="about-details">
            <p className="kicker">Current position</p>
            <h2>Research Fellow</h2>
            <p className="large-copy">School of Computational Sciences<br/><ExternalLink href="https://www.kias.re.kr/kias/main/main.do">Korea Institute for Advanced Study (KIAS)</ExternalLink></p>
            <p className="address-copy">85 Hoegi-ro, Dongdaemun-gu, Seoul<br/>Bldg. 1 · Room 1534</p>

            <div className="education-block">
              <p className="kicker">Education</p>
              <article><time>2020—2025</time><p><strong>Ph.D. in Mathematics</strong><br/><ExternalLink href="https://en.snu.ac.kr/">Seoul National University</ExternalLink></p></article>
              <article><time>2016—2020</time><p><strong>B.S. in Mathematics Education</strong><br/><ExternalLink href="https://en.snu.ac.kr/">Seoul National University</ExternalLink></p></article>
              <ExternalLink className="inline-feature-link" href="https://drive.google.com/file/d/1jADoKiArPaAjDPCu2aVpSZJRHVgfXWFv/view?usp=drive_link">Ph.D. thesis · A study of digraph structure in terms of common neighbors <span>↗</span></ExternalLink>
            </div>
          </div>
        </section>

        <section className="content-band">
          <div className="page-shell profile-panel">
            <div><p className="kicker light">Research profiles</p><h2>Follow the work.</h2></div>
            <div className="profile-link-list">
              <ExternalLink href="https://arxiv.org/a/0000-0002-0484-9496.html">arXiv <span>↗</span></ExternalLink>
              <ExternalLink href="https://scholar.google.com/citations?user=14-ziHgAAAAJ">Google Scholar <span>↗</span></ExternalLink>
              <ExternalLink href="https://www.researchgate.net/profile/Hojin-Chu">ResearchGate <span>↗</span></ExternalLink>
              <ExternalLink href="https://drive.google.com/file/d/1B_hkg5rX56hav1dFVP-390paRex50XrZ/view?usp=sharing">Curriculum vitae <span>↗</span></ExternalLink>
            </div>
          </div>
        </section>

        <section className="content-section page-shell beyond-grid">
          <div className="beyond-copy">
            <p className="kicker">Beyond papers / 그 밖의 이야기</p>
            <h2>Graphs connect<br/>more than <em>vertices.</em></h2>
            <p>I enjoy connecting with people and sharing mathematics outside the usual seminar room. I am also an avid climber, always looking for another route—and another way to think about structure.</p>
            <div className="review-note"><strong>Review activities</strong><p>SIDMA · Discrete Mathematics · Discrete Applied Mathematics · Discussiones Mathematicae Graph Theory · FOCS 2026</p></div>
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
