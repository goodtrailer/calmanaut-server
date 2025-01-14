export type UserPublic = {
    username: string,
    createDate: Date,
    id: number,
};

export type User = UserPublic & {
    passhash: string,
};

export namespace UserPublic {
    export const Default: UserPublic = {
        username: "",
        createDate: new Date(0),
        id: 0,
    };
}

export namespace User {
    export const Default: User = {
        ...UserPublic.Default,
        passhash: "",
    };
}
