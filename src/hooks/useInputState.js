import { useState } from 'react'
export default valueBeginning => {
  const [value, setValue] = useState(valueBeginning)
  const handleChange = e => {
    setValue(e.target.value)
  }
  const reset = () => {
    setValue('')
  }
  return [value, handleChange, reset]
}
