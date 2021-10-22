import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdAddAPhoto } from 'react-icons/md'

import { useUpdateEffect } from '../../../../util'
import { Container } from './styles'

interface AvatarUploadInputProps {
  onLoadFile?: (file: File) => void;
  size?: string | number;
  defaultPhotoUrl?: string | null;
  isEditMode?: boolean;
  shouldResetState?: boolean;
}

export const AvatarUploadInput = ({
  onLoadFile,
  size,
  defaultPhotoUrl = null,
  isEditMode = true,
  shouldResetState = false
}: AvatarUploadInputProps) => {
  const [file, setFile] = useState<File | null>(null)
  const [localUrl, setLocalUrl] = useState<string | null>(defaultPhotoUrl)

  const onDrop = useCallback(
    (acceptFile) => {
      const accept = acceptFile[0]
      if (accept) {
        setFile(accept)
        onLoadFile?.(accept)

        setLocalUrl(URL.createObjectURL(accept))
      }
    },
    [onLoadFile]
  )

  useUpdateEffect(() => {
    if (shouldResetState) {
      setFile(null)
      setLocalUrl(null)
    }
  }, [shouldResetState])

  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragReject,
    isDragActive
  } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop
  })

  return (
    <Container
      {...getRootProps()}
      size={size}
      isRejected={isDragReject}
      isAccept={isDragAccept}
      isEditMode={isEditMode}
    >
      <input {...getInputProps()} />
      {localUrl && !isDragActive
        ? (
        <img src={localUrl} alt={file?.name ?? 'user avatar'} />
          )
        : (
        <MdAddAPhoto />
          )}
    </Container>
  )
}
