import React, { FC, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Close } from "../Close";
import "./style.css";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ opened, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(opened);

  useEffect(() => {
    setIsOpen(opened);
  }, [opened]);

  return (
    <CSSTransition
      classNames={{
        enter: "modal_enter",
        enterActive: "modal_enter-active",
        enterDone: "modal_enter-done",
        exit: "modal_exit",
        exitActive: "modal_exit-active",
        exitDone: "modal_exit-done"
      }}
      in={isOpen}
      timeout={300}
    >
      <div className="modal">
        <div className="modal--content">
          <Close onClick={onClose} />
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
