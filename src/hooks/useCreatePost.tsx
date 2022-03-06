import React, { useState, useContext } from 'react'
import { createPost } from 'services/posts'
import { PostInterface } from 'helpers/types'
import { PostsContext } from 'contexts'

const LIMIT_CHAR = 777

export const useCreatePost = (handleClose?: () => void, post?: PostInterface) => {
  const { fetchPosts } = useContext(PostsContext)

  const [message, setMessage] = useState<string>('')
  const leftCharacters = LIMIT_CHAR - message.length

  const handleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = target
    if (value.length > LIMIT_CHAR) return
    setMessage(target.value)
  }

  const handleSubmit = () => {
    createPost(message, post)
    fetchPosts()
    setMessage('')

    if (handleClose) handleClose()
  }

  return { message, handleChange, handleSubmit, leftCharacters }
}
