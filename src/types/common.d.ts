declare interface IInput {
  register?: (
    Ref: string,
    // eslint-disable-next-line
    RegisterOptions?: any
  ) => {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    name: string;
    // eslint-disable-next-line
    ref: React.Ref<any>;
  };
  // eslint-disable-next-line
  errors?: DeepMap<any, FieldError>;
}

declare interface IMovies {
  id: number;
  title: string;
  year: string;
  actors: [];
  format: string;
  createdAt: Date;
  updatedAt: Date;
}
