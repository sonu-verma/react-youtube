import { useSelector } from "react-redux"
import Menu from "./Menu"

const SidebarLink = () => {

    const isSidebarActive = useSelector(store => store.app.isSidebarOpen)
    
    console.log("isSidebarActive", isSidebarActive)

    return <>

        {
            isSidebarActive &&
            <div className="sidebar-link decoration-none">
                <ul className="p-2 m-2">
                    <Menu menuName="" src="home.svg" />    
                    <Menu menuName="" src="subscriptions.svg" />
                    <Menu menuName="" src="trending.svg" /> 
                    <Menu menuName="" src="shop.svg" />   
                </ul>
            </div>
        }

        {
            !isSidebarActive && 
            <div className="sidebar-link decoration-none">
                <ul className="p-2 m-2">
                    <Menu menuName="Home" src="home.svg" />    
                    <Menu menuName="Subscriptions" src="subscriptions.svg" />    
                </ul>
                <hr className="text-gray-400"/>
                <ul className="p-2 m-2">
                    <h1 className="text-xl font-bold">Explore</h1>
                    <Menu menuName="Trending" src="trending.svg" />    
                    <Menu menuName="Shopping" src="shop.svg" />      
                    <Menu menuName="Live" src="home.svg" />    
                </ul>
                <hr className="text-gray-400"/>
                <ul className="p-2 m-2">
                    <h1 className="text-xl font-bold">Subscriptions</h1>
                    <Menu menuName="Trending" src="trending.svg" />    
                    <Menu menuName="Shopping" src="shop.svg" />    
                    <Menu menuName="Setting" src="setting.svg" />    
                    <Menu menuName="Watch" src="watch-later.svg" />    
                    <Menu menuName="News" src="news.svg" />    
                </ul>
            </div>
        }


        
    </>
}

export default SidebarLink