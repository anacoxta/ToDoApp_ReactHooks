import { useState } from 'react'

function useToggle(valueBeginning = false) {
  const [state, setState ] = useState(valueBeginning)
  const toggle = () => {
    setState(!state)
  }
  return [state, toggle]
}

export default useToggle