import headerstyle from "./Header.module.css"

function Header(){
    return(
        <>
        <h1 class={headerstyle.headerAlign} ><a href="">ZealHubIt</a></h1>
        <hr class={headerstyle.hrColor}/>
        </>
    )
}
export default Header;