import axios from "axios";
import style from './PostForm.module.css'
import { useForm } from "react-hook-form";
import user from '../../assets/icons/icon-person.svg'

function PostForm(){

    const {register, handleSubmit, formState:{errors}, reset} = useForm()

    const onSubmit = async (data) =>{
        const post = {
            title: data.title,
            text: data.text
        }
        
        //первым аргументом мы пишем маршрут, вторым аргументом объект поста
        // axios.post('https://693931fcc8d59937aa06d257.mockapi.io/posts', {
        //     title: data.title,
        //     text: data.text
        // }
        // ) same same

        try{
            const result = await axios.post('https://693931fcc8d59937aa06d257.mockapi.io/posts', post)
            console.log('Пост успешно создан', result.data)
            reset()
            //метод который очищает форму
        }
        catch(error){
            console.error('Ошибка при создании поста', error.message)
        }
    }

    return(
        <section className={style.post_form}>
            <h2 className={style.post_form_header}>Написать пост</h2>
            <div className={style.block_form}>
                <img src={user} alt="user" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.field_form}>
                        <label htmlFor="title">Заголовок</label>
                        <input type="text" id="title"  placeholder="Заголовок" {...register('title', {required: 'Заголовок обязателен к заполнению'})}/>
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>
                     <div className={style.field_form}>
                        <label htmlFor="text">Текст поста</label>
                        <textarea id="text" placeholder="Введите текст..."{...register('text', {required: 'Текст поста обязателен к заполнению'})} > </textarea>
                        {errors.text && <p>{errors.text.message}</p>}
                    </div>
                    <button type="sybmit">Публикация</button>
                </form>

            </div>
        </section>
    )


}
export default PostForm