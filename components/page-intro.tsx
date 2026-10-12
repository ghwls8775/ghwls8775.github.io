import { GraphField } from './graph-field';
import type { ReactNode } from 'react';

export function PageIntro({ eyebrow, title, accent, children }: { eyebrow: string; title: string; accent?: string; children: ReactNode }) {
  return (
    <section className="page-intro" id="top">
      <GraphField compact />
      <div className="page-shell page-intro-inner">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}{accent && <> <em>{accent}</em></>}</h1>
        <div className="page-intro-copy">{children}</div>
      </div>
    </section>
  );
}
