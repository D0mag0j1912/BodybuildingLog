import { FormType } from '../../../../common/form.type';
import { RawType } from '../../../../common/raw.type';
import { SetConstituent } from './set.type';
import { Set } from './set.model';

export type SetFormType = FormType<Pick<RawType<Set>, SetConstituent>>;

export type SetFormValueType = Pick<RawType<Set>, SetConstituent>;

export type FormConstructionType = 'newExercise' | 'sameExercise';
