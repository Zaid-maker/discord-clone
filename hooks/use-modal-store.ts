import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer"
  | "deleteChannel";

interface ModalDataProps {
  server?: Server;
  channel?: Channel;
  channelType?: ChannelType;
}

interface ModalStoreProps {
  type: ModalType | null;
  data: ModalDataProps;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalDataProps) => void;
  onClose: () => void;
}

export const useModal = create<ModalStoreProps>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
