import { TrainingSplitDto as TrainingSplit } from '../../api/models/training-split-dto';
import { ExerciseDto as Exercise } from '../../api/models/exercise-dto';

export const EXERCISE_MOCK: Exercise[] = [
    {
        name: 'exercises.pullup',
        imageUrl: '',
        primaryMuscleGroup: 'Back',
        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
        selectedSetCategories: ['dynamicBodyweight'],
        numberOfSets: 3,
        _id: '63c3fb0d6dcd0843ee9cabce',
    },
    {
        name: 'exercises.chinup',
        imageUrl: '',
        primaryMuscleGroup: 'Back',
        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
        selectedSetCategories: ['dynamicBodyweight'],
        numberOfSets: 2,
        _id: '63c3fb0d6dcd0843ee9cabcd',
    },
];

export const TRAINING_SPLIT_LIST: TrainingSplit[] = [
    {
        name: 'Fullbody',
        userId: '63b5ac2e16f3601334a66bb0',
        trainings: [
            {
                dayOfWeek: 'Monday',
                exercises: [
                    {
                        name: 'exercises.pullup',
                        imageUrl: '',
                        primaryMuscleGroup: 'Back',
                        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
                        selectedSetCategories: ['dynamicBodyweight'],
                        numberOfSets: 3,
                        _id: '63c3fb0d6dcd0843ee9cabce',
                    },
                    {
                        name: 'exercises.chinup',
                        imageUrl: '',
                        primaryMuscleGroup: 'Back',
                        availableSetCategories: ['dynamicBodyweight', 'dynamicWeighted'],
                        selectedSetCategories: ['dynamicBodyweight'],
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabcd',
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
                        numberOfSets: 4,
                        _id: '63c3fb0d6dcd0843ee9cabe0',
                    },
                    {
                        name: 'exercises.romanian_barbell_deadlift',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted', 'freeWeighted', 'freeWeighted'],
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabcc',
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
                        numberOfSets: 5,
                        _id: '63c3fb0d6dcd0843ee9cabd8',
                    },
                    {
                        name: 'exercises.deadbug_stability_ball',
                        imageUrl: '',
                        primaryMuscleGroup: 'Core',
                        availableSetCategories: ['dynamicBodyweight'],
                        selectedSetCategories: ['dynamicBodyweight', 'dynamicBodyweight'],
                        numberOfSets: 5,
                        _id: '63c3fb0d6dcd0843ee9cabe4',
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
                        numberOfSets: 1,
                        _id: '63c3fb0d6dcd0843ee9cabe3',
                    },
                    {
                        name: 'exercises.leg_curl',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted'],
                        numberOfSets: 3,
                        _id: '63c3fb0d6dcd0843ee9cabd6',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 1,
                        _id: '63c3fb0d6dcd0843ee9cabe3',
                    },
                    {
                        name: 'exercises.leg_curl',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted'],
                        numberOfSets: 3,
                        _id: '63c3fb0d6dcd0843ee9cabd6',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 1,
                        _id: '63c3fb0d6dcd0843ee9cabe3',
                    },
                    {
                        name: 'exercises.leg_curl',
                        imageUrl: '',
                        primaryMuscleGroup: 'Legs',
                        availableSetCategories: ['freeWeighted'],
                        selectedSetCategories: ['freeWeighted'],
                        numberOfSets: 3,
                        _id: '63c3fb0d6dcd0843ee9cabd6',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
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
                        numberOfSets: 6,
                        _id: '63c3fb0d6dcd0843ee9cabd4',
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
                        numberOfSets: 2,
                        _id: '63c3fb0d6dcd0843ee9cabdd',
                    },
                ],
            },
        ],
    },
];
