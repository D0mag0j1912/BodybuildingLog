import {
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
    NotEquals} from 'class-validator';
import { Schema } from 'mongoose';

export const SET_SCHEMA = new Schema({
    setNumber: {
        type: Number,
        required: true,
    },
    weightLifted: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
});

export class Set {
    
    @IsOptional()
    @IsString()
    _id: string;

    @Min(1,
        { message: '@training.new_training.errors.error_save_training' },
    )
    @Max(50,
        { message: '@training.new_training.errors.set_number_max' },
    )
    @IsNumber({},
        { message: '@training.new_training.errors.error_save_training' },
    )
    @NotEquals(0,
        { message: '@training.new_training.errors.error_save_training' },
    )
    setNumber: number;

    @Min(1, {
        message: '@training.new_training.errors.weight_lifted_min',
    })
    @Max(1000,
        { message: '@training.new_training.errors.weight_lifted_max',
    })
    @IsNumber({},
        { message: '@training.new_training.errors.weight_lifted_number',
    })
    @NotEquals(0,
        { message: '@training.new_training.errors.weight_lifted_required',
    })
    weightLifted: number;

    @Min(1, {
        message: '@training.new_training.errors.reps_min',
    })
    @Max(1000, {
        message: '@training.new_training.errors.reps_max',
    })
    @IsNumber({},{
        message: '@training.new_training.errors.reps_number',
    })
    @NotEquals(0, {
        message: '@training.new_training.errors.reps_required',
    })
    reps: number;
}