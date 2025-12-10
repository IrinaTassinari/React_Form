import style from "./Header.module.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className={style.header_container}>
      <img src={logo} alt="logo" />
      <nav className={style.navbar}>
        <a href="#">Главная </a>
        <span className={style.stick}></span>
        <a href="#">Музыка</a>
        <span className={style.stick}></span>
        <a href="#">Сообщества</a>
        <span className={style.stick}></span>
        <a href="#">Друзья</a>
      </nav>
     
    </header>
  );
}
export default Header;
