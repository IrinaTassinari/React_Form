
import style from './PostForm.module.css'
import { useForm } from "react-hook-form";
import user from '../../assets/icons/icon-person.svg'
import { useContext } from "react";  // Импортируем useContext для доступа к PostContext
import PostContext from "../../context/PostContext"; // Импортируем сам контекст, где находятся функции createPost, deletePost и данные постов

function PostForm(){
    const {createPost} = useContext(PostContext)  // Получаем функцию createPost из контекста

    // Инициализируем react-hook-form
    // register - регистрирует поля формы
    // handleSubmit - обрабатывает отправку
    // errors - объект ошибок валидации
    // reset - сбрасывает значения формы
    const {register, handleSubmit, formState:{errors}, reset} = useForm()

     // Функция, которая вызовется при отправке формы
    const onSubmit = async (data) =>{
        // Создаем объект поста, который отправим в контекст
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
            // Отправляем запрос на создание поста через контекст
            await createPost(post)
            // const result = await axios.post('https://693931fcc8d59937aa06d257.mockapi.io/posts', post)
            // console.log('Пост успешно создан', result.data)
            reset()  // Очищаем форму после успешного создания поста
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
                <form onSubmit={handleSubmit(onSubmit)} className={style.form_and_btn}>  {/* Обрабатываем отправку формы через handleSubmit от react-hook-form */}
                <div className={style.form_form}>
                    <div className={style.field_form}>
                        <label htmlFor="title">Заголовок</label>
                         {/* Регистрируем поле title с обязательной валидацией */}
                        <input type="text" id="title"  placeholder="Заголовок" {...register('title', {required: 'Заголовок обязателен к заполнению'})}/>
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>
                     <div className={style.field_form}>
                        <label htmlFor="text">Текст поста</label>
                         {/* Регистрируем textarea с обязательной валидацией */}
                        <textarea id="text" placeholder="Введите текст..."{...register('text', {required: 'Текст поста обязателен к заполнению'})}></textarea>
                        {errors.text && <p>{errors.text.message}</p>} {/* Вывод ошибки, если текст поста не заполнен */}
                    </div>
                </div>

                   
                    <button className={style.publish_btn} type="sybmit">Публикация</button>
                </form>

            </div>
        </section>
    )


}
export default PostForm