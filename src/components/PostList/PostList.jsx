import { useEffect, useState } from 'react'
import Post from '../Post/Post'
import style from './PostList.module.css'
import axios from 'axios'

function PostList(){
    // useState, useEffect

    const [allPosts, setAllPosts] = useState([]) //храним все посты загружен с сервера
    const [currentPosts, setCurrentPosts] = useState([]) //состояние для хранения текущих постов, которые отображаются на странице
    const [loading, setLoading] = useState(true) //состояние для отслеживания состояния загрузки данных // useState(true) загрузка идет только в момент оьправки сетевого запроса
    const [error, setError] = useState(null) // состояние для отслеживания ошибок при загрузке данных
    const [page, setPage] = useState(1) // состояние для отслеживания текущей страницы (пагинация)


    const fetchPosts = async () => {
        try{
            const response = await axios.get('https://693931fcc8d59937aa06d257.mockapi.io/posts')
            const posts = response.data //data берет из get
            console.log(response.data)
            setAllPosts(posts)
            setCurrentPosts(posts.slice(0,3)) // нарежет от 0 до 2 posts включительно
            setLoading(false) // загрузилось
        }
        catch(error){
            setError(error.message)
            //setError('There is some error') // same same
            setLoading(false) // не загрузилось
        }
    }

    useEffect( () =>  {fetchPosts()}, [])

    const loadMorePosts = () => {
        const nextPage = page +1
        const startIndex = (nextPage - 1) * 3 
        const endIndex = startIndex + 3 
        //берем посты с startIndex по endIndex
        const nextPosts = allPosts.slice(startIndex, endIndex)
        setCurrentPosts(nextPosts)
        setPage(nextPage)
    }

    return(
        <div>
            <Post/>
        </div>
    )
}
export default PostList;



// 13.Определите функцию handleDelete, которая:
// ○Принимает идентификатор удаляемого поста.
// ○Удаляет пост из состояния allPosts.
// ○Обновляет состояние currentPosts, чтобы корректно отображать посты на текущей странице после удаления.
// 14.Добавьте условное отображение для различных состояний компонента:
// ○Если данные загружаются, отображайте сообщение "Загрузка постов...".
// ○Если произошла ошибка, отображайте сообщение об ошибке.
// ○Если данные успешно загружены, отображайте список постов, перебирая currentPosts.
// 15.Добавьте кнопку "Далее", если есть еще посты для загрузки.
// 16.Передайте функцию handleDelete в компонент Post, чтобы кнопка "Удалить" могла корректно взаимодействовать с состоянием PostList.
// 17.Обновите файл PostList.module.css для стилизации компонента PostList, включая стили для сообщения о загрузке, сообщения об ошибке и кнопки "Далее".
// 18.Экспортируйте компонент PostList, чтобы его можно было импортировать и использовать в других частях вашего приложения.