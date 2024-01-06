import * as yup from "yup"

const message = 'Campo Obrigatório';

const loginSchema = yup.object({
  username: yup.string().required(message),
  password: yup.string().required(message),
});

export default loginSchema;
