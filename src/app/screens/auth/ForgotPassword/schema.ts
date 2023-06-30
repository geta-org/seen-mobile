import { z, ZodType } from "zod";

export type ForgotPasswordData = {
  email: string;
};

export const forgotPasswordSchema: ZodType<ForgotPasswordData> = z.object({
  email: z.string({ required_error: "Digite o email" }).email("Email inválido"),
});
