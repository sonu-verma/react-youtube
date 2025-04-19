import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSiderbar } from "../utils/appSlice";
import { SUGGESTION_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {

    const [searchVal, setSearchVal] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        dispatch(toggleSiderbar())
    }


    const searchCache = useSelector( store=> store.search);

    useEffect(() => {
        const searchSuggestion = async () => {
            console.log("Call API - ", searchVal)
            const data = await fetch(`${SUGGESTION_SEARCH_API}+${searchVal}`);
            const json = await data.json();
            // console.log("suggestions", json[1]);
            setSearchResult(json[1]);

            dispatch(cacheResult({ [searchVal]: json[1] }));
        }


        const timer = setTimeout(
            () => {
                if(searchCache[searchVal]) {
                    setSearchResult(searchCache[searchVal]);
                }else{
                    searchSuggestion() 
                }
            }
        , 200)

        return () => {
            clearTimeout(timer);
        }
        
    }, [searchVal]);


    return <>
        <div className="grid grid-flow-col shadow-lg p-2 mx-2 fixed top-0 z-10 bg-white w-full">
            <div className="header-logo flex gap-5 items-center">

                <img 

                    onClick = { () => handleToggleSidebar() }
                    className="h-[25px] w-[27px] md:block hidden cursor-pointer" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" 
                    alt="hamburger-menu" 
                />
                
                <img 
                    className="h-[20px] w-[90px] cursor-pointer" 
                    src="data:image/png;base64,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" alt="logo" 
                />
            </div>
            <div className="header-search justify-center hidden md:flex ">
                <div className="flex">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-[550px] border-1 border-gray-400 p-1.5 rounded-l-full  pl-4 py-2 focus:outline-none" 
                        value={searchVal} 
                        onChange={ (e) => setSearchVal(e.target.value)} />
                        { searchVal && <span className="fixed left-[1000px] top-4 p-0 text-1xl" onClick={ () => setSearchVal("")}>X</span> }
                    <button 
                        className="border-1 border-gray-400 p-2 rounded-r-full bg-gray-50">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAj1JREFUSEvl1kmozmEUx/HPLRtjSYZIEkIpbESIBZFEslIWknlOpihDVoQi04ZYYCORISlTSiQhZYodCyuFBUU8R89V93qH//ve3Js89fYu/s95vs85zznndxq00WpoI65/CjwAPfER7/ChnqgV8bgdZmMlxpaAvMAhnMSnopeoBu6BqxiJ2/l3F/fRN30bjTGYie+Yi2tF4JXAg3ED37AMlysc2A17MA87sbUavBy4Ex7jHhbgS7WD8vfxOULxLMcr2ZQDX8IgDK8B2siZn57hGEbgSTl4KfA0XMQoPCzoafNtV/A1gWfVAr6ADphcJzTMJuAWhuBlqXNKeRzvuQvbWgBuj8+pxlfjYBFwn5RMbzGlaFlUuNyDVGaPsKgIeGIK0010qaUZlIEfSI2lewr1nFrAA/GmBaEO01M53IuLgKNTvc8t8lwLwc9SSZ3H5iLg2PMap4t0nwoX65i9nYTrRcFbktdLcylEZtaz1ifwOvRK1fGjKLh3zuwjWF4HtR9e5VI6WksDib1rsTerTyhRLesOvwaMcZWMKqnT9nzrhThbgBwKFcIwI3W+3dhYLzjsQg4bRX5FTphS503FiTyNnEke70jisil3wJL8aoNAGIXUbcB0PM/1Hf/hYShY6HZnHM4JFTZL0ngUObIG+4smV7kI9U+NPzrb0BT6Ycmb6MdPs/6GGjVfqzI0ohaXaLKKeFzgectuCY/35WGiyWDwt8Fxo+gLMYtFpH6v1gAHrGvzMbi1wH+8xf8H/gkAv2Afkp5oSAAAAABJRU5ErkJggg==" alt="search" className="h-[20px] w-[20px] mx-3 cursor-pointer" />    
                    </button>
                </div>
                {
                    searchResult.length > 0 && 
                    <div className="fixed top-[43px] left-[458px] border-t-0 bg-white w-[545px] h-[200px] border-1 border-gray-400 rounded-lg p-2 mt-2 ml-4">
                        <ul className="overflow-y-auto h-[190px]">
                            {
                                searchResult?.map((item, index) => {
                                    return <li key={index} className="text-gray-600 text-sm font-bold my-2 cursor-pointer flex items-center py-0.5 hover:bg-gray-100" onClick={ () => {
                                        setSearchVal(item);
                                        setSearchResult([]);
                                    }}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAj1JREFUSEvl1kmozmEUx/HPLRtjSYZIEkIpbESIBZFEslIWknlOpihDVoQi04ZYYCORISlTSiQhZYodCyuFBUU8R89V93qH//ve3Js89fYu/s95vs85zznndxq00WpoI65/CjwAPfER7/ChnqgV8bgdZmMlxpaAvMAhnMSnopeoBu6BqxiJ2/l3F/fRN30bjTGYie+Yi2tF4JXAg3ED37AMlysc2A17MA87sbUavBy4Ex7jHhbgS7WD8vfxOULxLMcr2ZQDX8IgDK8B2siZn57hGEbgSTl4KfA0XMQoPCzoafNtV/A1gWfVAr6ADphcJzTMJuAWhuBlqXNKeRzvuQvbWgBuj8+pxlfjYBFwn5RMbzGlaFlUuNyDVGaPsKgIeGIK0010qaUZlIEfSI2lewr1nFrAA/GmBaEO01M53IuLgKNTvc8t8lwLwc9SSZ3H5iLg2PMap4t0nwoX65i9nYTrRcFbktdLcylEZtaz1ifwOvRK1fGjKLh3zuwjWF4HtR9e5VI6WksDib1rsTerTyhRLesOvwaMcZWMKqnT9nzrhThbgBwKFcIwI3W+3dhYLzjsQg4bRX5FTphS503FiTyNnEke70jisil3wJL8aoNAGIXUbcB0PM/1Hf/hYShY6HZnHM4JFTZL0ngUObIG+4smV7kI9U+NPzrb0BT6Ycmb6MdPs/6GGjVfqzI0ohaXaLKKeFzgectuCY/35WGiyWDwt8Fxo+gLMYtFpH6v1gAHrGvzMbi1wH+8xf8H/gkAv2Afkp5oSAAAAABJRU5ErkJggg==" alt="search" className="h-[15px] w-[15px] mx-3 cursor-pointer" />    
                                        <p>{item}</p>
                                    </li>
                                })
                            }
                        
                        </ul>
                    </div>
                }
                
            </div>
            <div className="header-menus flex justify-end text-blue-500">
            <div className="md:hidden flex">
                <button className="border-1 border-gray-400 rounded-full bg-gray-50">
                    <img src={`${!showSearch ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAj1JREFUSEvl1kmozmEUx/HPLRtjSYZIEkIpbESIBZFEslIWknlOpihDVoQi04ZYYCORISlTSiQhZYodCyuFBUU8R89V93qH//ve3Js89fYu/s95vs85zznndxq00WpoI65/CjwAPfER7/ChnqgV8bgdZmMlxpaAvMAhnMSnopeoBu6BqxiJ2/l3F/fRN30bjTGYie+Yi2tF4JXAg3ED37AMlysc2A17MA87sbUavBy4Ex7jHhbgS7WD8vfxOULxLMcr2ZQDX8IgDK8B2siZn57hGEbgSTl4KfA0XMQoPCzoafNtV/A1gWfVAr6ADphcJzTMJuAWhuBlqXNKeRzvuQvbWgBuj8+pxlfjYBFwn5RMbzGlaFlUuNyDVGaPsKgIeGIK0010qaUZlIEfSI2lewr1nFrAA/GmBaEO01M53IuLgKNTvc8t8lwLwc9SSZ3H5iLg2PMap4t0nwoX65i9nYTrRcFbktdLcylEZtaz1ifwOvRK1fGjKLh3zuwjWF4HtR9e5VI6WksDib1rsTerTyhRLesOvwaMcZWMKqnT9nzrhThbgBwKFcIwI3W+3dhYLzjsQg4bRX5FTphS503FiTyNnEke70jisil3wJL8aoNAGIXUbcB0PM/1Hf/hYShY6HZnHM4JFTZL0ngUObIG+4smV7kI9U+NPzrb0BT6Ycmb6MdPs/6GGjVfqzI0ohaXaLKKeFzgectuCY/35WGiyWDwt8Fxo+gLMYtFpH6v1gAHrGvzMbi1wH+8xf8H/gkAv2Afkp5oSAAAAABJRU5ErkJggg==" : "https://cdn3.iconfinder.com/data/icons/user-interface-2-9/34/161-512.png"}`} alt="search" className="h-[20px] w-[20px] mx-3 cursor-pointer" onClick={ () => setShowSearch(!showSearch) } />    
                </button>
            </div>
                <div className="border-1 border-gray-300 rounded-full md:px-4 px-2 py-1 flex items-center justify-evenly mx-1 cursor-pointer">
                    <img src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-unb6q333.png" alt="user" className="h-[20px] w-[20px] mx-2 cursor-pointer border-1 border-gray-500 rounded-full p-1" />
                    <span className="text-sm md:text-[15px]">Sign In</span>
                </div>
            </div>
        </div>
        { showSearch  && 
        
            <div className="flex absolute w-screen py-2 md:hidden z-10 bg-white transition-transform duration-500 ease-in-out">
                <input type="text" placeholder="Search" className="w-70 border-1 border-gray-400 rounded-bl-full rounded-tl-full pl-4 py-1 ml-4 focus:outline-none" />
                <button className="border-1 border-gray-400 p-1.5 rounded-br-full rounded-tr-full bg-gray-50">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAj1JREFUSEvl1kmozmEUx/HPLRtjSYZIEkIpbESIBZFEslIWknlOpihDVoQi04ZYYCORISlTSiQhZYodCyuFBUU8R89V93qH//ve3Js89fYu/s95vs85zznndxq00WpoI65/CjwAPfER7/ChnqgV8bgdZmMlxpaAvMAhnMSnopeoBu6BqxiJ2/l3F/fRN30bjTGYie+Yi2tF4JXAg3ED37AMlysc2A17MA87sbUavBy4Ex7jHhbgS7WD8vfxOULxLMcr2ZQDX8IgDK8B2siZn57hGEbgSTl4KfA0XMQoPCzoafNtV/A1gWfVAr6ADphcJzTMJuAWhuBlqXNKeRzvuQvbWgBuj8+pxlfjYBFwn5RMbzGlaFlUuNyDVGaPsKgIeGIK0010qaUZlIEfSI2lewr1nFrAA/GmBaEO01M53IuLgKNTvc8t8lwLwc9SSZ3H5iLg2PMap4t0nwoX65i9nYTrRcFbktdLcylEZtaz1ifwOvRK1fGjKLh3zuwjWF4HtR9e5VI6WksDib1rsTerTyhRLesOvwaMcZWMKqnT9nzrhThbgBwKFcIwI3W+3dhYLzjsQg4bRX5FTphS503FiTyNnEke70jisil3wJL8aoNAGIXUbcB0PM/1Hf/hYShY6HZnHM4JFTZL0ngUObIG+4smV7kI9U+NPzrb0BT6Ycmb6MdPs/6GGjVfqzI0ohaXaLKKeFzgectuCY/35WGiyWDwt8Fxo+gLMYtFpH6v1gAHrGvzMbi1wH+8xf8H/gkAv2Afkp5oSAAAAABJRU5ErkJggg==" alt="search" className="h-[20px] w-[20px] mx-3 cursor-pointer" />    
                </button>
            </div>
        }
       
    </>
}

export default Head;