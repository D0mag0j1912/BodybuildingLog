export type RawType<T> = {
    [P in keyof Omit<T, '_id'>]?: T[P];
};
