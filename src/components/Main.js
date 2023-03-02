import React, {useContext} from 'react';
import { DarkContext } from '../context/DarkContext.js';

const Main = () => {
    const {isDark} = useContext(DarkContext);
    return (
        <div className='main' style={{
            backgroundColor: isDark ? '#222' : null,
            color: isDark ? '#fff' : '#222'
        }}>
            메인 페이지 입니다.
        </div>
    );
};

export default Main;