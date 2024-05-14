// import React from 'react'
// // import { useQuery } from '@apollo/client';
// // import { GET_ARTICLES } from "../GQL/queries"
// import '../CSS/Stock.css'
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../dummyData.js";
// import { Link } from "react-router-dom";
// import { useState } from "react";

//  const Stock = () => {
//     const [data, setData] = useState(productRows);
//     // const { loading, error, data } = useQuery(GET_ARTICLES);
//     // if (loading) return 'Loading...';
//     // if (error) return `Error! ${error.message}`;
//     // console.log(data);
//     const handleDelete = (id) => {
//         setData(data.filter((item) => item.id !== id));
//     };

//     const columns = [
//         { field: "id", headerName: "ID", width: 90 },
//         {
//             field: "product",
//             headerName: "Product",
//             width: 200,
//             renderCell: (params) => {
//                 return (
//                     <div className="productListItem">
//                         <img className="productListImg" src={params.row.img} alt="" />
//                         {params.row.name}
//                     </div>
//                 );
//             },
//         },
//         { field: "stock", headerName: "Stock", width: 200 },
//         {
//             field: "status",
//             headerName: "Status",
//             width: 120,
//         },
//         {
//             field: "price",
//             headerName: "Price",
//             width: 160,
//         },
//         {
//             field: "action",
//             headerName: "Action",
//             width: 150,
//             renderCell: (params) => {
//                 return (
//                     <>
//                         {/* <Link to={"/product/" + params.row.id}> */}
//                             <button className="productListEdit">Edit</button>
//                         {/* </Link> */}
//                         <DeleteOutline
//                             className="productListDelete"
//                             onClick={() => handleDelete(params.row.id)}
//                         />
//                     </>
//                 );
//             },
//         },
//     ];

//     return (
//         <div className="productList">
//             <DataGrid
//                 rows={data}
//                 disableSelectionOnClick
//                 columns={columns}
//                 pageSize={8}
//                 checkboxSelection
//             />
//         </div>
//     );
// }
// export default Stock;
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'nom',
        headerName: 'Nom',
        width: 110,
        editable: true,
    },
    {
        field: 'reference',
        headerName: 'Reference',
        width: 140,
        editable: true,
    },
    {
        field: 'um',
        headerName: 'Um',
        width: 100,
        editable: true,
    },
    {
        field: 'dateentre',
        headerName: 'DateEntre',
        editable: true,
        width: 140,

    },
    {
        field: 'quantite',
        headerName: 'Quantite',
        editable: true,
        // type: 'number',
        width: 130,

    },
    {
        field: 'sousFamille',
        headerName: 'Sous_Famille',
        editable: true,
        width: 160,

    },
    {
        field: 'c_famille',
        headerName: 'C_Famille',
        sortable: false,
        width: 150,

    },
    // {
    //     field: "action",
    //     headerName: "Action",
    //     width: 150,
    //     renderCell: (params) => {
    //         return (
    //             <>
    //                 {/* <Link to={"/product/" + params.row.id}> */}
    //                 <button className="productListEdit">Edit</button>
    //                 {/* </Link> */}
    //                 <DeleteOutline
    //                     className="productListDelete"
    //                     onClick={() => handleDelete(params.row.id)}
    //                 />
    //             </>
    //         );
    //     },
    // }
];

const rows = [
    { id: 1, nom: 'A', reference: 'reference_1', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },
    { id: 2, nom: 'B', reference: 'reference_2', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },
    { id: 4, nom: 'D', reference: 'reference_3', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },
    { id: 5, nom: 'E', reference: 'reference_4', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },
    { id: 3, nom: 'C', reference: 'reference_5', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },
    { id: 6, nom: 'F', reference: 'reference_6', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },
    { id: 7, nom: 'J', reference: 'reference_7', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },
    { id: 8, nom: 'H', reference: 'reference_8', um: 'kg', dateentre: '2024/08/05', quantite: 12, sousFamille: 'sousFamille', c_famille: 'c_famille' },

];

export default function Stock() {
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
