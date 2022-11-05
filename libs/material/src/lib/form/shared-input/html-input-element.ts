export type HtmlInputOptions = Partial<
  Partial<HTMLInputElement> &
    Partial<{
      hint: string;
      label: string;
      inputType: string;
      options: { [key: string]: any }[];
      selectionLimit: number;
      optionLabel: string;
    }>
>;
