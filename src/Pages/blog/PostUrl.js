import React from 'react'
import {useParams} from 'react-router-dom'

export default function PostUrl() {

  const params = useParams()

  console.log(params)

  return (
    <div>Post Page</div>
  )
}
