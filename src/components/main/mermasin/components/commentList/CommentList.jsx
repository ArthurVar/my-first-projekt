import comm from './CommentList.module.css'

function CommentList({text}){
    return(
        <div className={comm.listDiv}>
            {text.map((t)=>{
                return(
                    <div
                        key={t.id}
                        className={comm.listItem} >

                        {t.text}
                    </div>
                )
            })}
        </div>
    )
}

export default CommentList;