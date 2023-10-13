import Form from './components/Form'
import { FormContextProvider } from './components/context/FormContext'
import './components/styles/global.css'
import { FormType } from './components/types/types'

const formData: FormType = [
  { inputtype: 'inputtext', required: true, label: 'name', errorMessage: 'The field name is required' },
  { inputtype: 'inputtext', required: true, label: 'role', errorMessage: 'The field role is required' },
  { inputtype: 'inputtext', required: true, label: 'password', errorMessage: 'The field password is required' },
  { inputtype: 'select', required: true, label: 'languages', options: ['JavaScript', 'Python'] },
  { inputtype: 'select', required: true, label: 'years of experience', options: ['one', 'two', 'three'] },
]

function App() {
  
  return (
    <FormContextProvider value={formData}>
      <Form />
    </FormContextProvider>
  )
}

export default App
