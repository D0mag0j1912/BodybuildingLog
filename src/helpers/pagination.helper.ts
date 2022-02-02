import { Model } from 'mongoose';
import { Paginator, PaginatorParams } from '../models/common/paginator.model';
// U => PastTrainingsResponse
export const paginate = async <T extends Paginator<U>, U, K extends Model<K>>(
    query: PaginatorParams,
    model: K,
): Promise<Paginator<T>> => {
    const page = +query.Page;
    const size = +query.Size;

    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    const results: Partial<Paginator<U>> = {};

    if (endIndex < await model.countDocuments().exec()) {
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
        .sort({ createdAt: 'asc' })
        .exec();

    return results;
};