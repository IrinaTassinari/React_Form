
import './App.css'
import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList'

function App() {
 

  return (
    <>
      <Header/>
      <div className='postList_postForm'>
        <PostList/>
        <PostForm/>
      </div>
    </>
  )
}

export default App
