import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p>© 2026 Hojin Chu · Korea Institute for Advanced Study</p>
        <div><Link href="/">Home</Link><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
