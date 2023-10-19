import { useSocket } from "@/components/providers/socket-provider";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import qs from "query-string";
import React from "react";

interface ChatQueryProps {
    queryKey: string;
    apiUrl: string;
    paramKey: "channelId" | "conversationId";
    paramValue: string;
}

export const useChatQuery = ({
    queryKey,
    apiUrl,
    paramKey,
    paramValue,
}: ChatQueryProps) => {
    const { isConnected } = useSocket();
    const params = useParams();

    const fetchMessages = async ({ pageParam = undefined }) => {
        const url = qs.stringifyUrl(
            {
                url: apiUrl,
                query: {
                    cursor: pageParam,
                    [paramKey]: paramValue,
                },
            },
            { skipNull: true }
        );

        const res = await fetch(url);

        return res.json()
    };
};
