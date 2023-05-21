import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? T[K] extends (infer U)[]
      ? ArrayOf<U>
      : GroupOf<T[K]>
    : FormControl<T[K]>;
};

type ArrayOf<T> = T extends Record<any, any>
  ? FormArray<FormGroup<ControlsOf<T>>>
  : FormArray<FormControl<T>>;

type GroupOf<T> = FormGroup<ControlsOf<any>>;
// type GroupOf<T> = FormGroup<ControlsOf<T>>;
