"use client";

import { CreateServerModel } from "@/components/models/create-server-model";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/models/invite-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModel />
      <InviteModal />
    </>
  );
};
