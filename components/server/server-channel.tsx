"use client";

import { Channel, MemberRole, Server } from "@prisma/client";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}

export const ServerChannel = ({
  channel,
  server,
  role,
}: ServerChannelProps) => {
  return <div>ServerChannel</div>;
};
