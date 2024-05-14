import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import 'flowbite';

const Fournisseurs = () => {
    const [fournisseurs, setFournisseurs] = useState([]);
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
            .then(data => setFournisseurs(data.Fournisseurs))
            .catch(error => console.error('Error fetching admin data:', error));
    }, []);

    const pageCount = Math.ceil(fournisseurs.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayFournisseurs = fournisseurs
        .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
        .map((fournisseur) => (
            <tr key={fournisseur.id} className='border-b dark:border-gray-700'>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{fournisseur.id}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{fournisseur.nom_fournisseur}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{fournisseur.adresse_fournisseur}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{fournisseur.ville_fournisseur}</td>
                <td className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>{fournisseur.type_d_achat}</td>
            </tr>
        ));

    return (
        <div>
            <h1>Gestion des Fournisseurs</h1>
            <table>
                {/* Table header */}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom_fournisseur</th>
                        <th>adresse_fournisseur</th>
                        <th>ville_fournisseur</th>
                        <th>type_d_achat</th>
                    </tr>
                </thead>

                {/* Table body */}
                <tbody>{displayFournisseurs}</tbody>

            </table>

            {/* Pagination */}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagination'}
                previousLinkClassName={'pagination__link'}
                nextLinkClassName={'pagination__link'}
                disabledClassName={'pagination__link--disabled'}
                activeClassName={'pagination__link--active'}
                className='flex'
            />
        </div>
    );
};

export default Fournisseurs;