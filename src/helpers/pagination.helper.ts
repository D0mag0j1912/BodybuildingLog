import { Paginator, PaginatorParams } from '../models/common/paginator.model';
import { PastTrainingsResponse } from '../models/training/past-trainings/past-trainings.model';
// U => PastTrainingsResponse
export const paginate = async <T extends Paginator<U>, U extends PastTrainingsResponse, K>(
    query: PaginatorParams,
    totalCount: number,
    model: K,
): Paginator<T> => {
    const page = +query.Page;
    const size = +query.Size;

    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    const results: Partial<Paginator<U>> = {};

    if (endIndex < totalCount) {
        results.Next = {
            Page: page + 1,
            Size: size,
        };
    }

    if (startIndex > 0) {
        results.Previous = {
            Page: page - 1,
            Size: size,
        };
    }

    results.Results.Trainings = await model
        .find()
        .limit(size)
        .skip(startIndex)
        .sort({ createdAt: 'asc' });

    return results;
};