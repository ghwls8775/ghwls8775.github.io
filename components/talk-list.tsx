import { ExternalLink } from './external-link';

type Talk = {
  readonly type: string;
  readonly event: string;
  readonly eventUrl: string;
  readonly date: string;
  readonly place: string;
  readonly title: string;
  readonly deck: string;
};

export function TalkList({ items }: { items: readonly Talk[] }) {
  return (
    <div className="talk-list">
      {items.map((talk) => (
        <article className="talk-row" key={`${talk.date}-${talk.title}`}>
          <div className="talk-meta"><span>{talk.type}</span><time>{talk.date}</time><small>{talk.place}</small></div>
          <div className="talk-main"><h3>{talk.eventUrl ? <ExternalLink href={talk.eventUrl}>{talk.event}</ExternalLink> : talk.event}</h3><p>{talk.title}</p></div>
          <div className="talk-link">{talk.deck && <ExternalLink href={talk.deck}>Deck ↗</ExternalLink>}</div>
        </article>
      ))}
    </div>
  );
}
