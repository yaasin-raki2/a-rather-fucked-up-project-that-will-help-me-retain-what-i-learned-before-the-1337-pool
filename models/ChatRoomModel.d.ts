export default interface ChatRoomModel {
    id: string;
    users: {
        id: string;
        name: string;
        imageUri: string;
    }[];
    lastMessage: {
        id: string;
        content: string;
        createdAt: string;
    };
    newMessages: number;
}
