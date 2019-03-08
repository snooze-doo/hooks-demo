import React, { useState, useEffect } from 'react'
import Row from '../Row/Row'
import '../Form/Form.scss'

const useCursorPosition = () => {
  const [ cursorPosition, setCursorPosition ] = useState({ x: 0, y: 0 })
  
  const updateCursorPosition = e => setCursorPosition({ x: e.x, y: e.y })
  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition)
    return () => document.removeEventListener('mousemove', updateCursorPosition)
  })

  return cursorPosition
}

const useFormInput = (defaultValue) => {
  const [ value, setValue ] = useState(defaultValue)

  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}

const useTitle = (value) => {
  useEffect(() => {
    document.title = value
  }, [value])
}

const Form = () => {
  const name = useFormInput('')
  const favoriteMovie = useFormInput('')
  const cursorPosition = useCursorPosition()
  useTitle(name.value + ' likes ' + favoriteMovie.value)

  return (
    <section className='form'>
      <Row title='Name'>
        <input {...name} />
      </Row>
      <Row title='Favorite Movie'>
        <input {...favoriteMovie} />
      </Row>
      <Row title='Cursor Position'>
        <span className='coord'>{`X: ${cursorPosition.x}`}</span>
        <span className='coord'>{`Y: ${cursorPosition.y}`}</span>
      </Row>
    </section>
  )
}

export default Form