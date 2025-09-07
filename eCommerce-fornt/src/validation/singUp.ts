import {z} from 'zod'

type singUpType = z.infer<typeof singUp>

const singUp = z.object({
  FirstName: z.string().min(4, {message: 'first name is required'}),
  LastName: z.string().min(4, {message: 'last name is required'}),
  email: z.string().min(4, {message: 'email address is required'}).email(),
  password: z.string().min(8, {message: 'password must be at 8 character'})
  .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
  message: "Password should contain at least 1 special character"}),
  confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
})

export { singUp, type singUpType }