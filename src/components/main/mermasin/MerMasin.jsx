import { useState } from 'react';
import CommentList from './components/commentList/CommentList';
import FormInputText from './components/FormInputText';
import m from './merMasin.module.css'

function MerMasin(){

    const [text, setText] = useState([])
    return(
        <div className={m.mermasin_container}>
            
            <CommentList text={text}/>
            
            <FormInputText onAdd={(value)=>{
                setText([
                    ...text,
                    {
                        id: Math.random(),
                        text:value,
                        active:false
                    }
                ])
            }}/>

        </div>
    )
}

export default MerMasin;