import { FormType } from '../../../../common/form.type';
import { RawType } from '../../../../common/raw.type';
import { SetConstituent } from './set.type';
import { Set } from './set.model';

export type SetFormType = Pick<FormType<Set>, SetConstituent>;

export type SetFormValue = Pick<RawType<Set>, SetConstituent>;

export type FormConstructionType = 'newExercise' | 'sameExercise';
