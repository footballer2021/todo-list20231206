type Data = {
    id: string,
    content: string,
    editing: boolean
};

type ActionType = {
    type: string,
    todo: Data,
    todos: Data[]
};

export type { Data, ActionType };