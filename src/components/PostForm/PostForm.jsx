import axios from "axios";
import style from './PostForm.module.css'
import { useForm } from "react-hook-form";
import user from '../../assets/icons/icon-person.svg'

function PostForm(){

    const {register, handleSubmit, formState:{errors}, reset} = useForm()

    return(
        <section className={style.post_form}>
            <h2 className={style.post_form_header}>Написать пост</h2>
            <div className={style.block_form}>
                <img src={user} alt="user" />
                <form>
                    <div className={style.field_form}>
                        <label htmlFor="title">Заголовок</label>
                        <input type="text" id="title"  placeholder="Заголовок"/>
                    </div>
                     <div className={style.field_form}>
                        <label htmlFor="text">Текст поста</label>
                        <textarea id="text" placeholder="Введите текст..."> </textarea>
                    </div>
                    <button type="sybmit">Публикация</button>
                </form>

            </div>
        </section>
    )


}
export default PostForm