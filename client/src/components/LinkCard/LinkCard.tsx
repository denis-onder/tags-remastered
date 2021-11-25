import React, { Fragment, useState } from 'react';
import Link from '../../domain/Link';
import DeleteLinkDialog from '../DeleteLinkDialog/DeleteLinkDialog';
import './LinkCard.scss';

export default function LinkCard(props: { link: Link }) {
  const { link } = props;
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <Fragment>
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
          <button
            className="link-card-actions-button link-card-actions-button--delete"
            onClick={() => setShowDeleteDialog(true)}
          >
            Delete
          </button>
          <button className="link-card-actions-button link-card-actions-button--edit">
            Edit
          </button>
        </section>
      </div>
      <DeleteLinkDialog
        linkId={link._id}
        showDialog={showDeleteDialog}
        closeDialog={() => setShowDeleteDialog(false)}
      />
    </Fragment>
  );
}
