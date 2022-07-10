import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
            <Routes>
                <Route path={'/users'} element={<UsersPage />}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/user/:id'} element={<UserItemPage/>}/>
                <Route path={'/todo/:id'} element={<TodoItemPage/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
