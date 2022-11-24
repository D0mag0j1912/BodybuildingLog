export type ModelWithoutIdType<T> = {
    [P in keyof Omit<T, '_id'>]?: T[P];
};
