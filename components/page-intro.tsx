import { GraphField } from './graph-field';
import type { ReactNode } from 'react';

export function PageIntro({ title, graph = false, children }: { title: string; graph?: boolean; children: ReactNode }) {
  return (
    <header className={`page-intro${graph ? ' page-intro--graph' : ''}`} id="top">
      {graph && <GraphField compact />}
      <div className="page-shell posts-header page-intro-inner">
        <h1>{title}<span aria-hidden="true">.</span></h1>
        {children}
      </div>
    </header>
  );
}
