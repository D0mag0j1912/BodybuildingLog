import { InternalServerErrorException } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { Paginator, PaginatorParams } from '../models/common/paginator.model';
import { Training } from '../models/training/new-training/new-training.model';

export const paginate = async <T extends Training, U extends Model<T>>(
    query: PaginatorParams,
    model: U,
    condition: FilterQuery<T>,
): Promise<Paginator<T>> => {
    const page = +query.Page;
    const size = +query.Size;

    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    const results: Partial<Paginator<T>> = {};
    results.TotalCount = await model.countDocuments(condition).exec();
    
    if (endIndex < results.TotalCount) {
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
    
    try {
        results.Results = await model
            .find(condition)
            .limit(size)
            .skip(startIndex)
            .sort({ createdAt: 'asc' })
            .exec();
    }
    catch (error) {
        throw new InternalServerErrorException('training.past_trainings.filters.errors.search_error');
    }

    return results;
};