import { TrainingSplitDto as TrainingSplit } from '../../api/models/training-split-dto';

export const TRAINING_SPLIT_LIST: TrainingSplit[] = [
    /* {
        name: 'Fullbody',
        userId: '63b5ac2e16f3601334a66bb0',
        trainings: [
            {
                dayOfWeek: 'Monday',
                exercises: [
                    {
                        name: 'exercises.pullups',
                        imageUrl: '',
                        primaryMuscleGroup: 'Back',
                        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
                        selectedSetCategories: ['dynamicBodyweight'],
                    },
                    {
                        name: 'exercises.chinups',
                        imageUrl: '',
                        primaryMuscleGroup: 'Back',
                        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
                        selectedSetCategories: ['dynamicBodyweight'],
                    },
                ],
            },
            {
                dayOfWeek: 'Wednesday',
                exercises: [
                    {
                        name: 'exercises.trap_bar_deadlift',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.romanian_barbell_deadlift',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                ],
            },
            {
                dayOfWeek: 'Friday',
                exercises: [
                    {
                        name: 'exercises.facepull',
                        imageUrl: '',
                        primaryMuscleGroup: 'Shoulders',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted'],
                    },
                    {
                        name: 'exercises.deadbug_stability_ball',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['dynamicBodyweight'],
                        selectedSetCategories: ['dynamicBodyweight', 'dynamicBodyweight'],
                    },
                ],
            },
        ],
    },
    {
        name: 'Upper - Lower',
        userId: '63b5ac2e16f3601334a66bb0',
        trainings: [
            {
                dayOfWeek: 'Tuesday',
                exercises: [
                    {
                        name: 'exercises.deadbug',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
                        selectedSetCategories: ['dynamicBodyweight'],
                    },
                    {
                        name: 'exercises.leg_curl',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted'],
                    },
                ],
            },
            {
                dayOfWeek: 'Thursday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Push pull legs',
        userId: '63b5ac2e16f3601334a66bb0',
        trainings: [
            {
                dayOfWeek: 'Tuesday',
                exercises: [
                    {
                        name: 'exercises.deadbug',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
                        selectedSetCategories: ['dynamicBodyweight'],
                    },
                    {
                        name: 'exercises.leg_curl',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted'],
                    },
                ],
            },
            {
                dayOfWeek: 'Wednesday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
            {
                dayOfWeek: 'Thursday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
            {
                dayOfWeek: 'Saturday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
            {
                dayOfWeek: 'Sunday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'BRO',
        userId: '63b5ac2e16f3601334a66bb0',
        trainings: [
            {
                dayOfWeek: 'Monday',
                exercises: [
                    {
                        name: 'exercises.deadbug',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
                        selectedSetCategories: ['dynamicBodyweight'],
                    },
                    {
                        name: 'exercises.leg_curl',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted'],
                    },
                ],
            },
            {
                dayOfWeek: 'Tuesday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
            {
                dayOfWeek: 'Wednesday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
            {
                dayOfWeek: 'Thursday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
            {
                dayOfWeek: 'Friday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
            {
                dayOfWeek: 'Saturday',
                exercises: [
                    {
                        name: 'exercises.squat',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted', 'dynamicBodyweight'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                    },
                    {
                        name: 'exercises.plank',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['staticBodyweight', 'staticWeighted'],
                        selectedSetCategories: [
                            'staticBodyweight',
                            'staticBodyweight',
                            'staticBodyweight',
                        ],
                    },
                ],
            },
        ],
    }, */
];
