import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { userRegister } from "../../redux/slices/authSlice";
import { ButtonWrapper, FormWrapper, SLogin, SLoginPage } from "./styled";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log("test");
    dispatch(userRegister(data));
  };

  return (
    <SLoginPage>
      <SLogin>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input type="email" label="Email" register={register} name="email" />
          <Input type="text" label="Name" register={register} name="name" />
          <Input
            type="password"
            label="Password"
            register={register}
            name="password"
          />
          <Input
            type="password"
            label="Confirm Password"
            register={register}
            name="confirmPassword"
          />
          <ButtonWrapper>
            <Button type="submit">Create user</Button>
          </ButtonWrapper>
        </FormWrapper>
      </SLogin>
    </SLoginPage>
  );
};
