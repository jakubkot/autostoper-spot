import { ControlsOf } from '@utils/types/controls-of';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
// import { Destroyable } from '@shared/app-destroyer/destroyable.component';

// export abstract class AbstractForm<FormModel> extends Destroyable {
export abstract class AbstractForm<FormModel> {
  private _form!: FormGroup<ControlsOf<FormModel>>;

  public get isValid(): boolean {
    return this.form.valid;
  }

  public get isValid$(): Observable<boolean> {
    return this.form.valueChanges.pipe(
      map(() => this.form.valid),
      // takeUntil(this.unsubscribe$),
    );
  }

  public get formValueChanges$(): Observable<FormModel> {
    return this.form.valueChanges.pipe(
      map(() => this.formData),
      // takeUntil(this.unsubscribe$),
    );
  }

  public get formData(): FormModel {
    return this.form.value as FormModel;
  }

  public get formControls(): ControlsOf<FormModel> {
    return this.form.controls as ControlsOf<FormModel>;
  }

  public get form(): FormGroup<ControlsOf<FormModel>> {
    return this._form;
  }

  public resetForm(): void {
    this.form.reset();
  }

  protected patchFormValue(
    values: FormModel,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    },
  ): void {
    this.form.patchValue(values, options);
  }

  protected initForm(
    form: FormGroup<ControlsOf<FormModel>>,
    values?: FormModel,
  ): void {
    this._form = form;

    if (values) {
      this.nonEmissionPatchFormValue(values);
    }
  }

  private nonEmissionPatchFormValue(values: FormModel): void {
    this.patchFormValue(values, { emitEvent: false });
  }
}
