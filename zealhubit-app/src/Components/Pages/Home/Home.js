import mainstyle from "./Home.module.css"


function Home(){
    return(
        <>
       <main class={mainstyle.mainParent} id="Home">   {/* parent */}
            <div>      {/* child1 */}
            <img src="./Assetz/mainfour.webp" alt="bannerimage"/>
                <div class={mainstyle.mainParentChild}>
                <h2 className="text-warning">Development that easy!</h2>
                <h5>Apply disruptive technologies to transform digital business growth with zealhub IT,</h5>
                <h5>Pitch us your idea and we will bring it to reality</h5>

                </div>
            </div>

        </main>
        </>
    )
}
export default Home;