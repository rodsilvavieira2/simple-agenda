import { useFormState } from 'react-hook-form'
import { MdRemoveCircleOutline } from 'react-icons/md'

import { Input, IconButton } from '../../components'
import { formControlVariants } from './framer-motion.config'
import { FromControlContainer } from './styles'

interface FormControlProps {
  onRequestRemove: () => void;
  inputRegister: () => void;
  id: number;
  type: string;
}

export const FormControl = ({
  inputRegister,
  onRequestRemove,
  type,
  id
}: FormControlProps) => {
  const { errors } = useFormState()
  return (
    <FromControlContainer
      variants={formControlVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        <Input
          {...inputRegister()}
          aria-label={`${type} - ${id}`}
          type={type}
          error={errors?.[`input_${type}`]?.[id]?.value}
        />
      </div>

      <IconButton
        aria-label="remove an input"
        size="2.5rem"
        type="button"
        onClick={onRequestRemove}
      >
        <MdRemoveCircleOutline />
      </IconButton>
    </FromControlContainer>
  )
}
