import { InternalServerErrorException } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { PaginatorParamsDto } from '../models/common/paginator-params.model';
import { PaginatorDto } from '../models/common/paginator.model';
import { NewTrainingDto } from '../models/training/new-training/new-training.model';
import { PastTrainingsDto } from '../models/training/past-trainings/past-trainings.model';

export const paginate = async <
    T extends Partial<PastTrainingsDto>,
    U extends Model<K>,
    K extends NewTrainingDto,
>(
    model: U,
    condition: FilterQuery<K>,
    query?: PaginatorParamsDto,
): Promise<PaginatorDto<T>> => {
    const results: Partial<PaginatorDto<T>> = {};
    let page: number;
    let size: number;
    let startIndex: number;
    let endIndex: number;

    const total = (await model.countDocuments(condition).exec()) ?? 0;
    results.TotalCount = total;

    if (query) {
        page = +query.Page;
        size = +query.Size;

        if (results.TotalCount > 0) {
            while (page > Math.ceil(results.TotalCount / size)) {
                page--;
            }
        }

        results.CurrentPage = page;
        results.PerPage = size;
        startIndex = (results.CurrentPage - 1) * size;
        endIndex = results.CurrentPage * size;

        if (endIndex < total) {
            results.Next = {
                Page: results.CurrentPage + 1,
                Size: size,
            };
        }

        if (startIndex > 0) {
            results.Previous = {
                Page: results.CurrentPage - 1,
                Size: size,
            };
        }
        results.TotalPages = Math.ceil(results.TotalCount / size);
    }
    results.Results = Object.create({});
    try {
        if (query) {
            results.Results.Trainings = await model
                .find(condition)
                .limit(size)
                .skip(startIndex)
                .sort({ trainingDate: 'desc' })
                .exec();
        } else {
            results.Results.Trainings = await model
                .find(condition)
                .sort({ trainingDate: 'desc' })
                .exec();
        }
        return results;
    } catch (error) {
        throw new InternalServerErrorException(
            'training.past_trainings.filters.errors.search_error',
        );
    }
};
