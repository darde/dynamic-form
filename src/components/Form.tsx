import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from './context/FormContext'
import { FormType } from './types/types'

type ErrorType = {
  [key: string]: string,
}

const Form = () => {
  const formData = useContext<FormType>(FormContext)
  const [output, setOutput] = useState('');
  const [errors, setErrors] = useState<ErrorType[]>([])

  const { register, handleSubmit } = useForm()

  const InputText = ({ label, errorMessage = '' }: { label: string, errorMessage: string | undefined }) => (
    <div className='flex flex-col'>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="text"
        className='h-8 rounded border-zinc-500 text-white px-3 border'
        id={label.toLowerCase()}
        {...register(label.toLowerCase())}
      />
      {
        errorMessage && errors.find(error => Object.keys(error).includes(label.toLowerCase())) && (<label className='text-red-500'>{errorMessage}</label>)
      }
      
    </div>
  )
  
  const Select = ({ label, options, errorMessage = '' }: { label: string, options: string[], errorMessage: string | undefined }) => (
    <div className='flex flex-col'>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <select
        className='h-8 rounded border-zinc-500 text-white px-3 border'
        id={label.toLowerCase()}
        {...register(label.toLowerCase())}
      >
        <option>Select</option>
        {
          options.map(option => <option key={option} value={option.toLowerCase()}>{option}</option>)
        }
      </select>
      {
        errorMessage && (<label className='text-red-500'>{errorMessage}</label>)
      }
    </div>
  )

  function createUser(data: any) {
    setErrors([])
    setOutput('')
    let hasErrors = false
    const updatedErrors: ErrorType[] = []
    Object.values(formData).forEach(entry => {
      if (entry.errorMessage && data[entry.label.toLowerCase()] === '') {
        hasErrors = true
        updatedErrors.push({ [entry.label.toLowerCase()]: entry.errorMessage })
      }
      
    })
    if (hasErrors) {
      setErrors(updatedErrors.slice())
      return;
    }
  
    setOutput(data)
  }
  
  return (
    <div className='h-screen items-center justify-center flex flex-col w-screen w-max-sm'>
      <form onSubmit={handleSubmit(createUser)} className='flex flex-col gap-4 w-screen max-w-sm'>
        {
          formData.map(item => {
            switch(item.inputtype) {
              case 'select':
                return <Select key={item.label} label={item.label} options={item.options!} errorMessage={item.errorMessage} />
              default:
                return <InputText key={item.label} label={item.label} errorMessage={item.errorMessage} />
              
            } 
          })
        }
        <div className='flex flex-col'>
          <button
            type="submit"
            className='bg-emerald-600 hover:bg-emerald-400'
          >
            Save
          </button>
        </div>
      </form>
      {
        output && (
          <div>
            <h1 className='text-xl pt-10 mb-4'>Data submitted successfully!</h1>
            {Object.entries(output).map(entry =>
              <h2 key={entry[0]}><strong>{entry[0]}</strong>: {entry[1]}</h2>)}
          </div>
        )
      }
    </div>
  )
}

export default Form