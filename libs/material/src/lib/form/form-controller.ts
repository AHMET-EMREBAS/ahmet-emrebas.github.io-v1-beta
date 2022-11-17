import { FormGroup } from '@angular/forms';

export function setFormGroupValue(
  formGroup: FormGroup,
  value: Record<string, any>
) {
  const entries = Object.entries(value);
  for (const [key, value] of entries) {
    formGroup.get(key)?.setValue(value);
  }
}
