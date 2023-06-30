import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      h={14}
      w={80}
      bg="black.5"
      borderRadius={6}
      _pressed={{
        bg: "black.5",
      }}
      {...rest}
    >
      <Text color="black" fontFamily="regular" fontSize="xl">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
