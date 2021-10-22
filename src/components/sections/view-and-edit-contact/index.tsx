import { useParams } from 'react-router'

import { useContactsManager } from '../../../hooks'
import { RenderContentPage } from './render-content-page'
import { ContactSkeleton, ContactSkeletonWrapper } from './styles'

type Params = {
  id: string;
};

export const ViewContactAndEdit = () => {
  const { id: paramId } = useParams<Params>()

  const { findAContactOnState } = useContactsManager()

  const contact = findAContactOnState(paramId)

  if (contact) {
    const { firstName, lastName, avatarUrl, isFavorite, emails, phones, id } =
      contact

    return (
      <RenderContentPage
        {...{
          id,
          firstName,
          lastName,
          avatarUrl,
          isFavorite,
          emails,
          phones
        }}
      />
    )
  }

  return (
    <ContactSkeletonWrapper>
      <ContactSkeleton />
      <ContactSkeleton />
    </ContactSkeletonWrapper>
  )
}
