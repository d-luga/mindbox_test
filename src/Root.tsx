import React, { FC, useState, useCallback } from "react";
import { Modal } from "./Modal";
import { Invites } from "./Invites";

const Root: FC = () => {
  const [invites, setInvites] = useState<string[]>([]);
  const [opened, setOpened] = useState<boolean>(false);

  const toggle = useCallback((opened: boolean) => {
    setOpened(opened);
  }, []);

  const invite = useCallback((name: string) => {
    setInvites((prevInvites) => [...prevInvites, name]);
    return true;
  }, []);

  return (
    <>
      <button onClick={() => toggle(true)}>Open invites list</button>
      <Modal opened={opened} onClose={() => toggle(false)}>
        <Invites invites={invites} onAdd={invite} />
      </Modal>
    </>
  );
};

export default Root;
