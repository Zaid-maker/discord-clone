"use client";

import { Member, Profile, Server } from "@prisma/client";
import React from "react";
import { UserAvatar } from "../user-avatar";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

export const ServerMember = ({ member, server }: ServerMemberProps) => {
  return (
    <UserAvatar
      src={member.profile.imageUrl}
      className="h-8 w-8 md:h-8 md:w-8"
    />
  );
};
