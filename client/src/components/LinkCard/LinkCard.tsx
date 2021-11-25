import React from 'react';
import Link from '../../domain/Link';
import './LinkCard.scss';

export default function LinkCard(props: { link: Link }) {
  const { link } = props;
  return (
    <div className="link-card">
      <h3 className="link-card-title">{link.url}</h3>
      <section className="link-card-tags">
        {link.tags.map((tag, i) => (
          <span key={i} className="link-card-tags-chip">
            {tag}
          </span>
        ))}
      </section>
      <section className="link-card-actions">
        <button className="link-card-actions-button link-card-actions-button--delete">
          Delete
        </button>
        <button className="link-card-actions-button link-card-actions-button--edit">
          Edit
        </button>
      </section>
    </div>
  );
}
