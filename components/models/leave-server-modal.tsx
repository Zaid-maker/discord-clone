"use client";

import { useModal } from "@/hooks/use-modal-store";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export const LeaveServerModal = () => {
  const { onClose, isOpen, type } = useModal();

  const isModalOpen = isOpen && type === "leaveServer";

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Leave Server
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
