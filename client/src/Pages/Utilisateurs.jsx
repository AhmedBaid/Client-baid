import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import 'flowbite'
const Utilisateurs = () => {
    const [admins, setAdmins] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        fetch('/DataExepmle.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setAdmins(data.admins))
            .catch(error => console.error('Error fetching admin data:', error));
    }, []);

    const pageCount = Math.ceil(admins.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayAdmins = admins
        .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
        .map((admins, index) => (
            <tr key={index}>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{admins.id}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{admins.nom}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{admins.prenom}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{admins.telephone}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{admins.email}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{admins.grade_admin ? 'Admin ' : '-'}</td>
            </tr>
        ));
    return (
        <>
            <section className="">
                <div className=''>
                    <div className='bg-white w-full dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
                        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
                            <div className='w-full md:w-1/2'>
                                <form className='flex items-center'>
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 /dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2   " placeholder="Search" required="" />
                                    </div>
                                </form>
                            </div>
                            <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
                                <button type="button" data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="flex items-center bg-emerald-500 justify-center text-white bg-primary-700 hover:bg-emerald-600 focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                    Ajouter un Nouveau Admin
                                </button>
                                <div className='flex items-center space-x-3 w-full md:w-auto'>
                                    <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                        <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                        Actions
                                    </button>
                                    <div id="actionsDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">

                                        <div className="py-1">
                                            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" href="#" className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='overflow-x-auto'>
                            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">N° Admin</th>
                                        <th scope="col" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Nom Admin</th>
                                        <th scope="col" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">prenom Admin</th>
                                        <th scope="col" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Téléphone Admin</th>
                                        <th scope="col" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Adresse Email</th>
                                        <th scope="col" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Grade Admin</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {displayAdmins}
                                </tbody>
                            </table>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4' aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                La page
                                <span className="font-semibold text-gray-900 dark:text-white m-1">
                                    {pageNumber + 1}
                                </span>
                                /
                                <span className="font-semibold text-gray-900 dark:text-white m-1">
                                    {pageCount}
                                </span>
                            </span>
                            <ul className='inline-flex items-stretch -space-x-px'>
                                <ReactPaginate
                                    previousLabel={<ion-icon name="caret-back"></ion-icon>}
                                    nextLabel={<ion-icon name="caret-forward"></ion-icon>}
                                    previousClassName='flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                    nextClassName='flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                    pageCount={pageCount}
                                    pageClassName='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                    onPageChange={changePage}
                                    containerClassName={'inline-flex -space-x-px text-sm'}
                                    previousLinkClassName={''}
                                    nextLinkClassName={''}
                                    activeClassName={'flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                                />
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-4 md:p-5 text-center">
                                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Vous voulez vraiment supprimer tous les Admins ?? cette action est invérsable !</h3>
                                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                    Oui , Continue
                                </button>
                                <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Annuler</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Ajouter un Nouveau Admin
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form class="p-4 md:p-5">
                                <div class="grid gap-4 mb-4 grid-cols-2">
                                    <div class="col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Admin</label>
                                        <input type="number" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom Admin</label>
                                        <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' />
                                    </div>
                                    <div>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom Admin</label>
                                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div class="col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numéro de Téléphone</label>
                                        <input type="number" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div class="col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse Email</label>
                                        <input type="email" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>

                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade</label>
                                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">----</option>
                                            <option value="TV">Admin</option>
                                            <option value="PC">Sous-Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    ajouter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Utilisateurs;
