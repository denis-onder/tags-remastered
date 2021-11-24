import React from 'react';
import Link from '../../domain/Link';

export default function LinkCard(props: { link: Link }) {
  const { url, tags }: Link = props.link;
  return (
    <div className="link-card">
      <h3 className="link-card-title">{{ url }}</h3>
      <section className="link-card-tags">
        {tags.map((tag) => (
          <span className="link-card-tags-chip">{{ tag }}</span>
        ))}
      </section>
    </div>
  );
}
