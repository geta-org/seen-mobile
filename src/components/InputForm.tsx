import { Control, Controller } from "react-hook-form";

import { Input, InputProps} from "@/components/Input"; 

type InputFormProps = InputProps & {
    control: Control<any, any>;
    name: string;
}

export function InputForm({ control, name, ...rest}){
    return(
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
    )
}