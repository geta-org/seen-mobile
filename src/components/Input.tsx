import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string 
};

export function Input({ errorMessage, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl alignItems="center" isInvalid={!!errorMessage} mb={8}>
      <NativeBaseInput
        h={14}
        w={80}
        px={4}
        borderWidth={1}
        borderRadius={6}
        fontSize="md"
        fontFamily="regular"
        color="black.5"
        isInvalid={invalid}
        placeholderTextColor="black.5"
        _focus={{
          bg: "transparent",
          borderColor: "black.5",
        }}
        {...rest}
      />

      {errorMessage && (<FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>)}
    </FormControl>
  );
}
