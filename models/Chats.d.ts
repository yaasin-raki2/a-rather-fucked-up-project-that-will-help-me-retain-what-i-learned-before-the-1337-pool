export default interface ChatsModel {
    id: string;
    users: {
        id: string;
        name: string;
        imageUri: string;
    }[];
    messages: {
        id: string;
        content: string;
        createdAt: string;
        user: {
            id: string;
            name: string;
        };
    }[];
}
