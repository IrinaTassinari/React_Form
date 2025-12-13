import { useContext, useState } from 'react'
import Post from '../Post/Post'
import style from './PostList.module.css'
import PostContext from '../../context/PostContext'

function PostList(){

    // Достаём массив всех постов, состояние загрузки и функцию удаления поста
    const {allPosts,loading,deletePost} = useContext(PostContext) 

    //const [currentPosts, setCurrentPosts] = useState([]) //состояние для хранения текущих постов, которые отображаются на странице  - убрали из этого компонента

    //const [loading, setLoading] = useState(true) //состояние для отслеживания состояния загрузки данных // useState(true) загрузка идет только в момент оьправки сетевого запроса - убрали из этого компонента

    //const [error, setError] = useState(null) // состояние для отслеживания ошибок при загрузке данных - убрали из этого компонента

    const [page, setPage] = useState(1) // состояние для отслеживания текущей страницы (пагинация)

    // Константа - количество постов на одной странице
    const POSTS_PER_PAGE = 3;
    // Рассчитываем индекс начала текущей страницы
    const start = (page - 1) * POSTS_PER_PAGE;
    // Рассчитываем индекс конца текущей страницы
    const end = start + POSTS_PER_PAGE;
    // Получаем посты, которые должны отображаться на текущей странице
    const currentPosts = allPosts.slice(start, end);

    // const fetchPosts = async () => {
    //     try{
    //         const response = await axios.get('https://693931fcc8d59937aa06d257.mockapi.io/posts')
    //         const posts = response.data //data берет из get
    //         console.log(response.data)
    //         setAllPosts(posts)
    //         setCurrentPosts(posts.slice(0,3)) // нарежет от 0 до 2 posts включительно
    //         setLoading(false) // загрузилось
    //     }
    //     catch(error){
    //         setError(error.message)
    //         //setError('There is some error') // same same
    //         setLoading(false) // не загрузилось
    //     }
    // }

    // useEffect( () =>  {fetchPosts()}, [])

    //!!!!стандартная логика пагинации!!!!
    // const loadMorePosts = () => {
    //     const nextPage = page +1
    //     const startIndex = (nextPage - 1) * 3 //??
    //     const endIndex = startIndex + 3 //??
    //     //берем посты с startIndex по endIndex
    //     const nextPosts = allPosts.slice(startIndex, endIndex)
    //     setCurrentPosts(nextPosts)
    //     setPage(nextPage)
    // }

    // const handleDelete = async(idPost) => {
    //     try{
    //         await axios.delete(`https://693931fcc8d59937aa06d257.mockapi.io/posts/${idPost}`)
    //         const updateAllPosts = allPosts.filter((post) => post.id !== idPost)//deleted
    //         //post - object from [] array.allPosts
    //         setAllPosts(updateAllPosts)

    //         //!!!!стандартная логика пагинации!!!!
    //         const startIndex = (page - 1) * 3 // just math
    //         const endIndex = page * 3 // math
    //         setCurrentPosts(updateAllPosts.slice(startIndex, endIndex)) // same same  = slice(0,3)
    //     }
    //     catch(error){
    //         setError(error.message)
    //        console.error('There is some error')
    //     }
    // }

    // Функция для перехода на следующую страницу
    const goNext = () => {
        // Следующая страница доступна только если end меньше количества всех постов
        if (end < allPosts.length) setPage(page + 1);
    };

    // Функция для перехода на предыдущую страницу
    const goBack = () => {
        // Назад можно идти только если текущая страница больше 1
        if (page > 1) setPage(page - 1);
    };

    if(loading)  { 
        return <p className={style.p_loading}>Loading posts...</p>
    }
    // if(error) {
    //     return <p className={style.p_error_loading}>{error.message}</p>
    // }
    

    return(
        <div className={style.container_post_list}>
            <div className={style.posts_box}>
                <h2>Список постов</h2>
                {currentPosts.map((post) => (  //map.post - один из трех объектов
                 <Post key = {post.id}  
                 handleDelete = {() => deletePost(post.id)} // передаём обработчик удаления
                 post = {post}/> // передаём данные поста
            ))}
            </div>
            <div className={style.btns_container}>
            {/* Кнопка назад, отключается на первой странице */}
            <button className={style.btn_back} onClick={goBack} disabled={page === 1}>
                Назад
            </button>
            {/* Кнопка далее, отключается если постов больше нет */}
            <button className={style.btn_next} onClick={goNext} disabled = {end >= allPosts.length}>Далее</button> 
            </div>
           
           
           
        </div>
    )
}
export default PostList;

