import { FormType } from '../../../../common/form.type';
import { ModelWithoutIdType } from '../../../../common/raw.model';
import { SetConstituent } from './set.type';
import { Set } from './set.model';

export type SetFormType = Pick<FormType<Set>, SetConstituent>;

export type SetFormValue = Pick<ModelWithoutIdType<Set>, SetConstituent>;

export type FormConstructionType = 'newExercise' | 'sameExercise';
