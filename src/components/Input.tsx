import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({...rest}: IInputProps){
  return(
    <NativeBaseInput 
      h={14}
      w={80}
      px={4}
      borderWidth={1}
      borderRadius={6}
      fontSize="md"
      fontFamily="regular"
      color="black.5"
      mb={8}
      placeholderTextColor="black.5"
      _focus={{
        bg: "transparent",
        borderColor: "black.5"
      }}
      {...rest}
    />
  )
}