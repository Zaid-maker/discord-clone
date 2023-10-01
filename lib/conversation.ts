import { db } from "@/lib/db";

export const findOrCreateConversation = async (memberOneId: string, memberTwoId: string) => {
    let conversation = await findConvesation(memberOneId, memberTwoId) || await findConvesation(memberTwoId, memberOneId)

    if (!conversation) {
        conversation = await createNewConversaton(memberOneId, memberTwoId)
    }

    return conversation
}

const findConvesation = async (memberOneId: string, memberTwoId: string) => {
    try {
        return await db.conversation.findFirst({
            where: {
                AND: [{ memberOneId: memberOneId }, { memberTwoId: memberTwoId }],
            },
            include: {
                memberOne: {
                    include: {
                        profile: true,
                    },
                },
                memberTwo: {
                    include: {
                        profile: true,
                    },
                },
            },
        });
    } catch (error) {
        return null;
    }
};

const createNewConversaton = async (
    memberOneId: string,
    memberTwoId: string
) => {
    try {
        return await db.conversation.create({
            data: {
                memberOneId,
                memberTwoId,
            },
            include: {
                memberOne: {
                    include: {
                        profile: true,
                    },
                },
                memberTwo: {
                    include: {
                        profile: true,
                    },
                },
            },
        });
    } catch (error) {
        return null
    }
};
