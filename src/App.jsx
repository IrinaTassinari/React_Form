
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
        <ProviderPosts>
          <PostList/>
          <PostForm/>
        </ProviderPosts>
       
      </div>
    </>
  )
}

export default App
