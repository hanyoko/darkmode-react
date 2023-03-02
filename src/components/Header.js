import React, { useContext } from "react";
import { NameContext } from "../context/NameContext.js";
import { DarkContext } from "../context/DarkContext.js";
const Header = () => {
    const sitename = useContext(NameContext);
    const { isDark } = useContext(DarkContext);
    return(
        <div className='header' style={{
            backgroundColor: isDark ? '#222' : null,
            color: isDark ? '#fff' : '#222'
        }}>
            <h1>{sitename}</h1>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
            </ul>
        </div>
    )
}
export default Header;

// export default function Header(){
//     const sitename = useContext(NameContext);
//     return(
//         <div>
//             <h1>{sitename}</h1>
//             <ul>
//                 <li>menu1</li>
//                 <li>menu2</li>
//                 <li>menu3</li>
//             </ul>
//         </div>
        
//     )
// } 
//함수형은 함수 앞에 export default를 붙여서 사용할 수 있다.
