import React from 'react'
import { Link } from 'react-router-dom'
import 'flowbite'
const Navbar = () => {

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  ">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focusdark:text-gray-400  dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                                <img src="https://explore-agadirsoussmassa.com/wp-content/uploads/2021/02/tiznit-4.jpg" className="w-8 h-8 me-3 rounded-full" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Gestion de Stock -Tiznit-</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            Abdel-Ali Nachit
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            abde_nachit@gmail.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0  " aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group">
                                <i className="fa-solid fa-home"></i>
                                <span className="ms-3">Acceuil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Stock" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group">
                                <i className="fa-solid fa-store"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Stock</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Commandes" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group">
                                <i className="fa-solid fa-clipboard"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Commandes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Utilisateurs" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group">
                                <i className="fa-solid fa-user"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Utilisateurs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Directions-Bureaus" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Directions & Bureaus</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Fournisseurs" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group">
                                <i className="fa-solid fa-truck"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Fournisseurs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Statistiques" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200  group">
                                <i className="fa-solid fa-chart-simple"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Statistiques</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Navbar
