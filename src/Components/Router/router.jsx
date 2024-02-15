import React from 'react';
import { Routes , Route , Navigate } from 'react-router-dom';
import Login from '../../Pages/Login/login';
import Main from '../../Pages/Main/main';
const Router = () => {
    return (
        <div>
            <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/login' element={<Login />}/>
            </Routes>
        </div>
    );
}

export default Router;
