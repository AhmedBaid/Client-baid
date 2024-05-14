import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Loader from './Components/Loader/Loader';
import { Acceuil, Stock, Statistiques, Commandes, DirectionsBureaus, Fournisseurs, Utilisateurs } from './Pages';
import { Route, Routes } from 'react-router-dom';
import Login from './loginPage/Login';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    async function authentificated() {
        try {
            const response = await fetch('http://localhost:4500/auth/verify', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include'
            });
            const parseRes = await response.json();
            parseRes === true ? setIsLoggedIn(true) : setIsLoggedIn(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        authentificated();
    }, []);
    return (
        <div>
            {isLoggedIn ?
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                        <Routes>
                            <Route path='/' element={<Acceuil />} />
                            <Route path='/Stock' element={<Stock />} />
                            <Route path='/Commandes' element={<Commandes />} />
                            <Route path='/Utilisateurs' element={<Utilisateurs />} />
                            <Route path='/Directions-Bureaus' element={<DirectionsBureaus />} />
                            <Route path='/Fournisseurs' element={<Fournisseurs />} />
                            <Route path='/Statistiques' element={<Statistiques />} />
                        </Routes>
                    </div>
                </div>
                : <Login setIsLoggedIn={setIsLoggedIn} />}
            {isLoggedIn && <Navbar />}

        </div>
    );
};

export default Dashboard;
