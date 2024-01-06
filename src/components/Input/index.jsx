import { Controller } from "react-hook-form";
import { ErrorMessage, InputView, Label } from "./styles";

export const Input = ({
  label,
  control,
  name,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: {error}}) => (
        <InputView error={!!error}>
          <Label>{label}</Label>

          <input
            placeholder={label}
            {...field}
          />

          {
            error && (
              <ErrorMessage>{error.message}</ErrorMessage>
            )
          }
        </InputView>
      )}
    />
  );
};
