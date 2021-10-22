import { ContactOnState } from '../../../@types'

export type ViewContactData = Pick<
    ContactOnState,
    | 'firstName'
    | 'lastName'
    | 'emails'
    | 'phones'
    | 'isFavorite'
    | 'id'
    | 'avatarUrl'
  >
