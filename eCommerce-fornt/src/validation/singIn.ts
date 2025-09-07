import {z} from 'zod'

type singInType = z.infer<typeof singIn>

const singIn = z.object({
  email: z.string().min(4, {message: 'email address is required'}).email(),
  password: z.string().min(8, {message: 'password must be at 8 character'})
  .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
  message: "Password should contain at least 1 special character"}),
})

export { singIn, type singInType }