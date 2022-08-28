
export type ModelWithoutIdType<T> = {
    readonly [P in keyof Omit<T, '_id'>]?: T[P];
};
