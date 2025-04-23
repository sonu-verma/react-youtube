import { useEffect, useMemo, useState } from "react";
import { sum } from "../../utils/helper";

const UseMemo = () => {

    console.log("rendering...");
    const [text, setText] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);


    const useDebounced = (value, delay) => {

        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const timer = setTimeout(() =>  setDebouncedValue(value), delay);
    
            return () => clearInterval(timer);

        }, [delay, value])
   
        return debouncedValue;
    }
    

    const debouncedText = useDebounced(text, 1000); 

    const totalSum = useMemo(() => {
        
        console.log("change:");
        const parsedText = parseInt(debouncedText, 10) || 0; // Ensure text is parsed as a number
        return sum(parsedText);
    }, [debouncedText]);


    return <>
        <div className={`flex flex-col border-2 border-black items-center justify-center h-full p-10 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            
            <div>
                <button className="p-2 m-2 bg-yellow-300 text-white cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode) }>Toggle</button>
            </div>
            <input type="number" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a number" className="border-2 border-gray-400 rounded-lg p-1" />

            <div className="bottom-0">Total: {totalSum }</div>
        </div>
    </>
}

export default UseMemo;