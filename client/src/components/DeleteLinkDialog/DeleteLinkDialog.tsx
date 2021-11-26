import React, { Fragment } from 'react';
import { deleteLink } from '../../api/links';
import BaseDialog from '../BaseDialog/BaseDialog';
import './DeleteLinkDialog.scss';

interface DeleteLinkDialogProps {
  linkId: string;
  showDialog: boolean;
  closeDialog: () => void;
}

export default function DeleteLinkDialog({
  linkId,
  showDialog,
  closeDialog,
}: DeleteLinkDialogProps) {
  const onConfirm = () => {
    deleteLink(linkId).finally(() => {
      closeDialog();
    });
  };

  const onCancel = () => {
    console.log('Cancel');
    closeDialog();
  };

  return (
    <Fragment>
      {showDialog && (
        <BaseDialog>
          <div className="delete-link">
            <h1>Are you sure you want to delete this link?</h1>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>
          </div>
        </BaseDialog>
      )}
    </Fragment>
  );
}
