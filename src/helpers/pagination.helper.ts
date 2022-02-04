import { InternalServerErrorException } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { Paginator, PaginatorParams } from '../models/common/paginator.model';
import { Training } from '../models/training/new-training/new-training.model';
import { PastTrainingsResponse } from '../models/training/past-trainings/past-trainings.model';
import { getIntervalDate } from './date.helper';

export const paginate = async <T extends Partial<PastTrainingsResponse>, U extends Model<K>, K extends Training>(
    query: PaginatorParams,
    model: U,
    condition: FilterQuery<K>,
): Promise<Paginator<T>> => {
    const page = +query.Page;
    const size = +query.Size;

    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    const results: Partial<Paginator<T>> = {};

    try {
        const total = await model.countDocuments(condition).exec() ?? 0;
        if (endIndex < total) {
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
        results.Results = Object.create({});
        results.Results.Trainings = await model
            .find(condition)
            .limit(size)
            .skip(startIndex)
            .sort({ createdAt: 'asc' })
            .exec();
        results.Results.Dates = getIntervalDate(results?.Results.Trainings);
        return results;
    }
    catch (error) {
        console.log(error)
        throw new InternalServerErrorException('training.past_trainings.filters.errors.search_error');
    }
};