import { useEffect, useState } from "react"
import PostContext from "../context/PostContext"
import axios from "axios"

function ProviderPosts({children}){
    const [allPosts, setAllPosts] = useState([]) //храним все посты загружен с сервера
    const [loading, setLoading] = useState(true) //состояние для отслеживания состояния загрузки данных // useState(true) загрузка идет только в момент оьправки сетевого запроса

    const API = 'https://693931fcc8d59937aa06d257.mockapi.io/posts'
    
    const fetchPosts = async () => {
        try{
            const response = await axios.get(API)
            const posts = response.data //data берется из  результата метода get
            console.log(response.data)
            setAllPosts(posts)
        }
        catch(error){
            //setError('There is some error') // same same
            console.error(error.message)
        }
        finally{
            setLoading(false) // не загрузилось
        }
    }

    const createPost = async(postData) => {
         try{
            const result = await axios.post(API, postData)
            console.log('Пост успешно создан', result.data) //data берется из  результата метода post
            await fetchPosts()
        }
        catch(error){
            console.error('Ошибка при создании поста', error.message)
        }
    }

    const deletePost = async (id) => {
        try{
            await axios.delete(`https://693931fcc8d59937aa06d257.mockapi.io/posts/${id}`)
            await fetchPosts()
        }
        catch(error){
            setError(error.message)
           console.error('There is some error')
        }
    }

    useEffect( () =>  {
        fetchPosts()
    }, [])



    return(
       <PostContext.Provider value={{allPosts,loading,createPost,deletePost}}>
        {children}
       </PostContext.Provider>
    )
}

export default ProviderPosts