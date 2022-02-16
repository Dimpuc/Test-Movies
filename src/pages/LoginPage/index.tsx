import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { userRegister } from "../../redux/slices/authSlice";
import { ButtonWrapper, FormWrapper, SLogin, SLoginPage } from "./styled";
import { formSchema } from "./validation";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: any) => {
    dispatch(userRegister(data));
  };

  return (
    <SLoginPage>
      <SLogin>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={errors}
            type="email"
            label="Email"
            register={register}
            name="email"
          />

          <Input
            type="text"
            errors={errors}
            label="Name"
            register={register}
            name="name"
          />

          <Input
            type="password"
            label="Password"
            register={register}
            name="password"
            errors={errors}
          />
          <Input
            type="password"
            label="Confirm Password"
            register={register}
            name="confirmPassword"
            errors={errors}
          />
          <ButtonWrapper>
            <Button type="submit">Create user</Button>
          </ButtonWrapper>
        </FormWrapper>
      </SLogin>
    </SLoginPage>
  );
};
