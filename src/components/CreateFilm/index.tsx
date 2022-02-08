import { Chip } from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { createMovie } from "../../redux/slices/moviesSlice";
import {
  CreateForm,
  ButtonWrapper,
  AddActorButton,
  ActorWrapper,
  ActorAddWrapper,
  ChipsWrapper,
} from "./styled";

interface createFilmProps {
  handleShowModal(): void;
}

export const CreateFilm: FC<createFilmProps> = ({ handleShowModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [actorList, setActorList] = useState<string[]>([]);
  const [newMovies, setNewMovies] = useState<IMovies[]>([]);
  const { reset } = useForm();

  const actor = watch("actors");

  const handleAddActor = () => {
    setActorList([...actorList, actor]);
  };

  const onSubmit = (data: any) => {
    console.log(data);

    if (
      data.title.length > 0 &&
      data.year.length > 0 &&
      data.format.length > 0 &&
      data.actors.length > 0
    ) {
      !actorList.length
        ? dispatch(
            createMovie({
              ...data,
              year: +data.year,
              actors: [data.actors],
            })
          )
        : dispatch(
            createMovie({
              ...data,
              year: +data.year,
              actors: actorList,
            })
          );

      reset();

      handleShowModal();
    } else {
      alert("Please fill in the fields!");
    }
    setNewMovies(data);
  };

  const handleDelete = (actor: string) => {
    setActorList(actorList.filter((item) => item !== actor));
  };

  return (
    <CreateForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Name of film"
        register={register}
        name="title"
      />
      <Input type="number" label="Year" register={register} name="year" />
      <Input type="text" label="Format" register={register} name="format" />
      <ActorWrapper>
        <ActorAddWrapper>
          <Input type="text" label="Actors" register={register} name="actors" />
          <AddActorButton onClick={handleAddActor}>Add to list</AddActorButton>
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
