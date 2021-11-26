import React, { Fragment } from 'react';
import Link from '../../domain/Link';
import BaseDialog from '../BaseDialog/BaseDialog';

interface EditLinkDialogProps {
  link: Link;
  showDialog: boolean;
  closeDialog: () => void;
}

export default function EditLinkDialog({
  link,
  showDialog,
  closeDialog,
}: EditLinkDialogProps) {
  return (
    <Fragment>
      {showDialog && (
        <BaseDialog>
          <div className="edit-link">
            <div className="edit-link-input-group">
              <label htmlFor="url">URL:</label>
              <input
                name="url"
                type="text"
                defaultValue={link.url}
                onChange={({ target: { value } }) => (link.url = value)}
              />
            </div>
            <section className="edit-link-tags">
              <p>Tags:</p>
              {link.tags.map((tag, i) => (
                <input
                  key={i}
                  type="text"
                  defaultValue={tag}
                  onChange={({ target: { value } }) => (link.tags[i] = value)}
                />
              ))}
            </section>
          </div>
        </BaseDialog>
      )}
    </Fragment>
  );
}
