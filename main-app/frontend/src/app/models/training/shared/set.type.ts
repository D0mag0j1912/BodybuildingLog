
export type SetFormValidationErrors =
    'setNotFilled' |
    'setNotEntered' |
    'setNotValid' |
    'repsRequired' |
    'weightLiftedRequired' |
    'min' |
    'max' |
    'pattern' |
    'onlyNumbers';

export type FormSetData = {
    setNumber?: number;
    weightLifted?: number;
    reps?: number;
};

export type SetConstituent = 'weightLifted' | 'reps';
