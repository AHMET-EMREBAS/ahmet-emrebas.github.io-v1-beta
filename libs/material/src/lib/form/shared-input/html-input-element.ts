import { Observable } from 'rxjs';

export type HtmlInputOptions = Partial<
  Partial<HTMLInputElement> &
    Partial<{
      hint: string;
      label: string;
      inputType: string;
      options: Observable<{ [key: string]: any }[]>;
      selectionLimit: number;
      optionLabel: string;
      locale: string;
      currency: string;
      tabindex: number;
    }>
>;
