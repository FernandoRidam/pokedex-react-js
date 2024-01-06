import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";

import loginSchema from '../../schema/loginSchema';
import { Spacing } from "../../components/Spacing";
import { Logo } from "../../components/Logo";
import { Actions, Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { Button } from "../../components/Button";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: {
      isValid,
    }
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Main>
      <Logo src={logo} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Spacing $bottom={16}>
          <Input
            control={control}
            name="username"
            label="Username"
          />
        </Spacing>

        <Spacing $bottom={36}>
          <Input
            control={control}
            name="password"
            label="Password"
          />
        </Spacing>

        <Actions>
          <Spacing $bottom={24}>
            <Button disabled={!isValid} $color="secondary" type="submit">SIGN IN</Button>
          </Spacing>

          <Spacing>
            <Button type="button" $color="primaryDark">SIGN UP</Button>
          </Spacing>
        </Actions>
      </Form>
    </Main>
  );
};
