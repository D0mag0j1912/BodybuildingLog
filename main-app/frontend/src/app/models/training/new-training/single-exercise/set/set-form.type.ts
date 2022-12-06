import { FormType } from '../../../../common/form.type';
import { RawType } from '../../../../common/raw.type';
import { SetConstituent } from './set.type';
import { Set, SetPreferences } from './set.model';

export type SetFormType = FormType<
    Pick<RawType<Set>, SetConstituent | 'setPreferences'>,
    SetPreferences
>;

export type SetFormValueType = Pick<RawType<Set>, SetConstituent | 'setPreferences'>;

export type FormConstructionType = 'newExercise' | 'sameExercise';
