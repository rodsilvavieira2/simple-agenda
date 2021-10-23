import { SubmitHandler, useForm } from 'react-hook-form'
import { MdPerson, MdEmail, MdLock } from 'react-icons/md'

import { yupResolver } from '@hookform/resolvers/yup'

import { RoundedInput, VerifyYourEmailModal } from '../../../..'
import {
  useAuthContext,
  useMacroUserActionsContext
} from '../../../../../hooks'
import { formVariants } from '../../framer-motion.config'
import { DefaultFormProps } from '../default-form-props'
import { Form, FormButton, ToggleMode } from '../default-style'
import { SignUpFormData, SignUpSchema } from './react-hook-form.config'

type SignUpFormProps = DefaultFormProps

export const SignUpForm = ({ onRequestToggle }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpSchema)
  })

  const { createUserWithEmailAndPassword } = useAuthContext()

  const {
    state: { isVerifyEmailModalOpen },
    dispatch
  } = useMacroUserActionsContext()

  const onSubmit: SubmitHandler<SignUpFormData> = async ({
    email,
    name,
    password
  }) => {
    await createUserWithEmailAndPassword(email, password, name)
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        variants={formVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <RoundedInput
          {...register('name')}
          error={errors.name}
          placeholder="Enter your name"
          type="text"
          label="Name"
          icon={<MdPerson />}
          autoComplete="off"
        />

        <RoundedInput
          {...register('email')}
          error={errors.email}
          placeholder="Enter your email"
          type="email"
          label="Email"
          icon={<MdEmail />}
          autoComplete="off"
        />

        <RoundedInput
          {...register('password')}
          error={errors.password}
          placeholder="Enter your password"
          type="password"
          label="password"
          icon={<MdLock />}
          autoComplete="off"
        />

        <FormButton isLoading={isSubmitting} type="submit">
          Sign Up
        </FormButton>

        <ToggleMode onClick={onRequestToggle}>
          You already have an account ?
        </ToggleMode>
      </Form>

      <VerifyYourEmailModal
        isOpen={isVerifyEmailModalOpen}
        onRequestClose={() =>
          dispatch({
            type: 'toggle-verify-your-email-modal'
          })
        }
      />
    </>
  )
}
