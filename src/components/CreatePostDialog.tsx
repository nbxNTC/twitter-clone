import React, { useContext } from 'react'
import { PostInterface } from 'helpers/types'
import { SessionContext } from 'contexts'
import { useCreatePost } from 'hooks'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,
  Divider,
  Button,
  InputBase,
  IconButton,
  Box,
  Typography,
  FormHelperText,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { QuotedPost } from 'components'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  post?: PostInterface
}

export const CreatePostDialog = (props: Props) => {
  const { open, setOpen, post } = props

  const { session } = useContext(SessionContext)

  const handleClose = () => {
    setOpen(false)
  }

  const { message, error, handleChange, handleSubmit, leftCharacters } = useCreatePost(handleClose, post)

  const styles: MuiStyles = {
    content: {
      width: '36rem',
      padding: '0 2rem 1.5rem',
      display: 'flex',
    },
    avatar: {
      marginRight: '1rem',
    },
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    helperText: {
      color: 'red',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
    },
    characters: {
      marginRight: '1rem',
    },
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={styles.content}>
        <Avatar sx={styles.avatar} alt={`Avatar`} src={session?.user.photoUrl} />

        <Box sx={styles.form}>
          <InputBase
            placeholder='What you thinking?'
            fullWidth
            multiline
            rows={4}
            name='message'
            value={message}
            onChange={handleChange}
            autoFocus
          />

          <FormHelperText sx={styles.helperText}>{error}</FormHelperText>

          {post && <QuotedPost data={post} />}

          <Divider />

          <Box sx={styles.actions}>
            <Typography sx={styles.characters}>
              {leftCharacters > 0 ? `${leftCharacters} characters left` : 'Max characters reached'}
            </Typography>

            <Button variant='contained' onClick={handleSubmit}>
              Post
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
