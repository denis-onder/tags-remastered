import React from 'react';
import './BaseDialog.scss';

export default function BaseDialog({ children }: any) {
  return (
    <div className="dialog">
      <div className="dialog-card">{children}</div>
    </div>
  );
}
