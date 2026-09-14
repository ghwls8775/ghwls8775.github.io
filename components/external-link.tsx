import type { AnchorHTMLAttributes } from 'react';

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function ExternalLink({ href, children, className = '', ...props }: ExternalLinkProps) {
  return <a className={className} href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>;
}
