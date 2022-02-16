export interface FormatOption {
  readonly value: string;
  readonly label: string;
}

export const FormatOptions: readonly FormatOption[] = [
  { value: "DVD", label: "DVD" },
  { value: "VHS", label: "VHS" },
  { value: "Blu-Ray ", label: "Blu-Ray " },
];
