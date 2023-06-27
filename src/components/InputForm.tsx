import { Controller } from "react-hook-form";

import { Input } from "@/components/Input";

export function InputForm({ control, name, ...rest }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          value={value}
          onChangeText={onChange}
          {...rest}
        />
      )}
    />
  );
}
