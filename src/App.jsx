
import './App.css'
import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList'
import ProviderPosts from './provider/ProviderPosts'

function App() {
 

  return (
    <>
      <Header/>
      <div className='postList_postForm'>
         {/* Оборачиваем компоненты в ProviderPosts,
          чтобы PostList и PostForm имели доступ к глобальному состоянию постов */}
        <ProviderPosts> 
          
          {/* Компонент списка постов.
            Он читает глобальные посты из контекста и отображает их */}
          <PostList/>
          {/* Компонент формы создания поста.
            Он вызывает createPost() из контекста и автоматически обновляет список */}
          <PostForm/>

        </ProviderPosts>
       
      </div>
    </>
  )
}

export default App
