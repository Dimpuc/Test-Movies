import { yupResolver } from "@hookform/resolvers/yup";
import { Chip } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Select from "react-select";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { createMovie } from "../../redux/slices/moviesSlice";
import { FormatOptions } from "./data";
import {
  CreateForm,
  ButtonWrapper,
  AddActorButton,
  ActorWrapper,
  ActorAddWrapper,
  ChipsWrapper,
} from "./styled";
import { formSchema } from "./validation";

interface createFilmProps {
  handleShowModal(): void;
}

export const CreateFilm: FC<createFilmProps> = ({ handleShowModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const [actorList, setActorList] = useState<string[]>([]);
  const [controls, setControl] = useState(0);

  const dispatch = useDispatch();

  const actor = watch("actors");

  const handleAddActor = () => {
    setActorList([...actorList, actor]);
  };

  const onSubmit = (data: any) => {
    if (data.format === undefined) {
      alert("Choose a format");
    } else {
      dispatch(
        createMovie({
          ...data,
          year: +data.year,
          format: data.format.value,
          actors: !actorList.length ? [data.actors] : actorList,
        })
      );
      reset();
      handleShowModal();
    }
  };

  const handleDelete = (actor: string) => {
    setActorList(actorList.filter((item) => item !== actor));
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 2) {
      setControl(e.target.value.length);
    } else {
      setControl(0);
    }
  };

  return (
    <CreateForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Name of film"
        register={register}
        name="title"
        errors={errors}
      />
      <Input
        type="number"
        label="Year"
        register={register}
        errors={errors}
        name="year"
      />
      <Controller
        name="format"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            defaultValue={FormatOptions[0]}
            options={FormatOptions}
          />
        )}
      />

      <ActorWrapper>
        <ActorAddWrapper>
          <Input
            type="text"
            label="Actors"
            onChange={handleOnChange}
            register={register}
            name="actors"
            required={actorList.length > 0 ? false : true}
            errors={errors}
          />
          <AddActorButton
            type="button"
            disabled={!controls}
            onClick={handleAddActor}
          >
            Add to list
          </AddActorButton>
        </ActorAddWrapper>
        <ChipsWrapper>
          {actorList.length ? (
            <>
              <span>Actor list:</span>
              {actorList.map((item: string, index) => {
                return (
                  <Chip
                    label={item}
                    onDelete={() => handleDelete(item)}
                    key={index}
                  />
                );
              })}
            </>
          ) : (
            <div>Actor List is empty</div>
          )}
        </ChipsWrapper>
      </ActorWrapper>
      <ButtonWrapper>
        <Button minWidth="250px" type="submit">
          Create
        </Button>
      </ButtonWrapper>
    </CreateForm>
  );
};
