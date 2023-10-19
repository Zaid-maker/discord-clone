"use client";

import { CreateChannelModal } from "@/components/models/create-channel-modal";
import { CreateServerModel } from "@/components/models/create-server-model";
import { DeleteChannelModal } from "@/components/models/delete-channel-modal";
import { DeleteServerModal } from "@/components/models/delete-server-modal";
import { EditChannelModal } from "@/components/models/edit-channel-modal";
import { EditServerModal } from "@/components/models/edit-server-modal";
import { InviteModal } from "@/components/models/invite-modal";
import { LeaveServerModal } from "@/components/models/leave-server-modal";
import { MembersModal } from "@/components/models/members-modal";
import { MessageFileModal } from "@/components/models/message-file-modal";

import { useEffect, useState } from "react";

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
      <CreateChannelModal />
      <CreateServerModel />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
    </>
  );
};
