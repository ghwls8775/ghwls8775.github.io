import { GraphField } from '@/components/graph-field';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { focusAreas } from '@/lib/content';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <section className="hero" id="top">
          <GraphField />
          <div className="hero-card page-shell">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Research Fellow · KIAS</p>
              <h1>Hojin Chu <em>추호진</em></h1>
              <p className="hero-lede">Hello, thank you for visiting my website !</p>
              <p className="hero-body">I&apos;m <strong>Hojin Chu (추호진)</strong>, a research fellow in the School of Computational Sciences at the <a href="https://www.kias.re.kr/kias/main/main.do" target="_blank" rel="noreferrer">Korea Institute for Advanced Study (KIAS)</a>. (Mentor : Prof. Jeong Han Kim)</p>
              <p className="hero-body">My research interests are Combinatorics, Graph Theory, and Combinatorial Matrix Theory, with a particular interest in <strong>Extremal and Structural Graph Theory</strong>. My research has been focused on advancing the theoretical foundations of graph theory and exploring graph structures and their properties.</p>
              <p className="hero-body">I enjoy connecting with people 😁 Feel free to <a href="mailto:hojinchu@kias.re.kr">e-mail me</a> if you&apos;d like to discuss research topics.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="/research/">Explore my research <span>↘</span></a>
                <a className="button" href="https://drive.google.com/file/d/1B_hkg5rX56hav1dFVP-390paRex50XrZ/view?usp=sharing" target="_blank" rel="noreferrer">CV · revised May 2026 <span>↗</span></a>
              </div>
            </div>
            <figure className="portrait-wrap">
              <div className="portrait-frame">
                <img src="/hojin-chu.jpg" alt="Portrait of Hojin Chu" width="1280" height="1689" decoding="async" fetchPriority="high" />
              </div>
              <figcaption><span>Seoul, Korea</span><span>Combinatorics · Graph Theory</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="section page-shell home-research" id="research">
          <div className="section-heading">
            <div><p className="kicker">Research / 연구</p><h2>Structure through<br/><em>connection.</em></h2></div>
            <p>I work on structural questions in graph theory and discrete mathematics, often looking for the precise conditions that force a graph to contain—or avoid—a particular configuration.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.mark}>
                <div className="card-top"><span>{area.mark}</span><i aria-hidden="true" /></div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <ul>{area.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <p>Publications, preprints, collaborators, and open-problem resources.</p>
            <a className="text-link" href="/research/">View all research <span>↗</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
