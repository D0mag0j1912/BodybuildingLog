import { InternalServerErrorException } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { Paginator, PaginatorParams } from '../models/common/paginator.model';
import { Training } from '../models/training/new-training/new-training.model';
import { PastTrainings } from '../models/training/past-trainings/past-trainings.model';
import { getIntervalDate } from './date.helper';

export const paginate = async <T extends Partial<PastTrainings>, U extends Model<K>, K extends Training>(
    model: U,
    condition: FilterQuery<K>,
    query?: PaginatorParams,
): Promise<Paginator<T>> => {
    const results: Partial<Paginator<T>> = {};
    let page: number;
    let size: number;
    let startIndex: number;
    let endIndex: number;

    const total = await model.countDocuments(condition).exec() ?? 0;
    results.TotalCount = total;

    if (query) {
        page = +query.Page;
        size = +query.Size;

        startIndex = (page - 1) * size;
        endIndex = page * size;

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
    }
    results.Results = Object.create({});
    try {
        if (query) {
            results.Results.Trainings = await model
                .find(condition)
                .limit(size)
                .skip(startIndex)
                .sort({ createdAt: 'asc' })
                .exec();
        }
        else {
            results.Results.Trainings = await model
                .find(condition)
                .sort({ createdAt: 'asc' })
                .exec();
        }
        results.Results.Dates = getIntervalDate(results?.Results.Trainings);
        return results;
    }
    catch (error) {
        throw new InternalServerErrorException('training.past_trainings.filters.errors.search_error');
    }
};