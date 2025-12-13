import style from "./Post.module.css";
import icon_user from '../../assets/icons/icon-person.svg'

// Компонент Post принимает два пропса:
// post - объект поста (title, text, id)
// onDelete - функция удаления, переданная родителем (PostList)
function Post({handleDelete,post}) {
  return (
    <div className={style.single_post_container}>
      <div className={style.icon_div}>
        <img src={icon_user} alt="icon_user" />
        <p>User logo</p>
      </div>
      <div className={style.div_txt_middle}>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
      </div>
      <div className={style.div_right}>
        <p>{post.id}</p> {/* Отображаем ID поста */}
        {/* post.id это как primary key  из mok api, т.е это значит что при удалении какого-то из постов нумерация  id других постов не меняется*/}

         {/* Кнопка удаления. При клике вызываем функцию onDelete и передаём id поста */}
        <button  className={style.btn_delete} onClick={()=> handleDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
}
export default Post;  // Экспортируем компонент, чтобы он мог использоваться в PostList
