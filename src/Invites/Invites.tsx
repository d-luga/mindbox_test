import React, { FC, useState, useCallback } from "react";

import "./style.css";

interface Props {
  invites: string[];
  onAdd: (name: string) => boolean;
}

export const Invites: FC<Props> = ({ invites, onAdd }) => {
  const [name, setName] = useState("");

  const handleChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );
  
  const handleSubmit = useCallback(() => {
    const success = onAdd(name);
    if (success) {
      setName("");
    }
  }, [name, onAdd]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className="invites">
      <div className="invites--form">
        <input
          className="invites--form-input"
          onChange={handleChangeName}
          onKeyDown={handleKeyDown}
          type="text"
          value={name}
        />
        <button className="invites--form-submit" onClick={handleSubmit}>
          Invite
        </button>
      </div>
      <div className="invites--delimiter" />
      <ul className="invites--items">
        {invites.map((name, index) => (
          <li key={`${name}-${index}`} className="invites--item">{name}</li>
        ))}
      </ul>
    </div>
  );
};
