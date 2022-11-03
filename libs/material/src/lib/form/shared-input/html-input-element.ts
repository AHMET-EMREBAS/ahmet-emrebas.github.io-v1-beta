export type HtmlInputOptions = Partial<
  Partial<HTMLInputElement> &
    Partial<{
      hint: string;
      label: string;
      inputType: string;
      options: { value: string; label: string }[];
    }>
>;
