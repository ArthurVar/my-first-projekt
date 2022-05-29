import { useState } from 'react';
import f from './FormInputText.module.css'

function FormInputText({onAdd}){

    const [value, setValue] = useState('')
    return(
        <div className={f.form_container}>
            <form
                className={f.form} 
                onSubmit={(e)=>{
                     e.preventDefault()
                     onAdd(value)
                     setValue('')
                    }
                }>
              <input 
                  type='text'
                  className={f.inputList} 
                  value={value} 
                  onChange={(e)=>{
                      setValue(e.target.value)
                    }
              }/>
              <button className={f.btn}>add</button>
            </form>
        </div>
    )
}

export default FormInputText;