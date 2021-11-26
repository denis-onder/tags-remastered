import React from 'react';
import './BaseDialog.scss';

interface BaseDialogProps {
  children: JSX.Element | Array<JSX.Element>;
}

export default function BaseDialog({ children }: BaseDialogProps) {
  return (
    <div className="dialog">
      <div className="dialog-card">{children}</div>
    </div>
  );
}
