import mainstyle from "./Home.module.css"


function Home(){
    return(
        <>
       <main class={mainstyle.mainParent}>   {/* parent */}
            <div>      {/* child1 */}
            <h2>Development that easy!</h2>
            <h5>Apply disruptive technologies to transform digital business growth with zealhub IT.</h5>

            </div>
            <div>      {/* child2 */}
            hellow2

            </div>
        </main>
        </>
    )
}
export default Home;