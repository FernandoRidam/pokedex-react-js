import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from '../../assets/logo.svg';
import { Input } from "../../components/Input";

import registerSchema from '../../schema/registerSchema';
import { Spacing } from "../../components/Spacing";
import { Logo } from "../../components/Logo";
import { Actions, Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: {
      isValid,
    }
  } = useForm({
    resolver: yupResolver(registerSchema),
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
            name="name"
            label="Name"
          />
        </Spacing>

        <Spacing $bottom={16}>
          <Input
            control={control}
            name="username"
            label="Username"
          />
        </Spacing>

        <Spacing $bottom={16}>
          <Input
            control={control}
            name="password"
            label="Password"
            type="password"
          />
        </Spacing>

        <Spacing $bottom={16}>
          <Input
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
          />
        </Spacing>

        <Actions>
          <Spacing $bottom={24}>
            <Button disabled={!isValid} $color="secondary" type="submit">SAVE</Button>
          </Spacing>

          <Spacing>
            <Button onClick={() => navigate(-1)} type="button" $color="primaryDark">BACK</Button>
          </Spacing>
        </Actions>
      </Form>
    </Main>
  );
};
