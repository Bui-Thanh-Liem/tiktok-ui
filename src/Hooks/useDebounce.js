import { useEffect, useState } from "react";

function useDebounce(value, delay) {

    // useState
    const [deBounceValue, setDeBounceValue] = useState(value);

    // useEffect 
    useEffect(() => {
        const timeout = setTimeout(() => setDeBounceValue(value), delay);
        
        return () => clearTimeout(timeout);
        
    }, [value, delay]);     // Nếu giá trị cũ (không lọt trong useEffect) thì vẫn return, 
                            // Còn giá trị mới thì sau delay thì re-render rồi return ra 

    // 
    return deBounceValue;   // Vẫn trả về giá trị, nhưng giống nhau, sau khoảng delay mới có giá trị mới
}

export default useDebounce;

