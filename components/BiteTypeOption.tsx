import React from 'react';

interface Props {
  name: string;
  onClick: () => void
}

export function BiteTypeOption ({ name, onClick }: Props): JSX.Element {
  return (
    <div className="option" onClick={onClick}>
      {name}
    </div>
  );
}
