import { DefaultModal } from '../default-modal'
import { DefaultModalProps } from '../default-modal/default-modal-props'
import { ModalBody } from './modal-body'
import { Container, Title } from './styles'

type ExportModalProps = DefaultModalProps

export const ExportModal = (props: ExportModalProps) => {
  return (
    <DefaultModal {...props}>
      <Container>
        <Title tabIndex={0}>
          <h2>Export contacts </h2>
        </Title>
        <ModalBody onRequestClose={props.onRequestClose} />
      </Container>
    </DefaultModal>
  )
}
