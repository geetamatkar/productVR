import React from 'react'
import CustomButton from './CustomButton'


const AIpicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
         placeholder='Ask AI..'
         rows={5}
         value={prompt}
         onChange={(e)=>setPrompt(e.target.value)}
         className='aipicker-textarea'

      />

    </div>
  )
}

export default AIpicker