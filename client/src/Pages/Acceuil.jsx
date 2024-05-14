import React from "react";
import "../CSS/Accueil.css";
import Chart from "../Components/chart/chart";
import BarChartComponent from "../ChartCompenant/BarChartComponent ";
import PieChartComponent from "../ChartCompenant/PieChartComponent ";

const Acceuil = () => {
    // Dummy pie chart data
    const pieChartData = [
        { id: 0, value: 30, label: 'PAPIER LASER BLANC' },
        { id: 1, value: 20, label: 'ENVELOPPE KRAFT AUTOADHESIVE' },
        { id: 2, value: 25, label: 'REGISTRE PREIMPRIME' },
        { id: 3, value: 15, label: 'CD DVD VIERGES' },
        { id: 4, value: 10, label: 'BOITE ARCHIVES EN CARTONNE' },
        { id: 5, value: 10, label: 'AGRAFE' },
        { id: 6, value: 10, label: 'ROULEAU ADHESIF TRANSPARENT' },
        { id: 7, value: 10, label: 'PORTES VUES' },
    ];
    return (
        <div className="home">
            <div className="cardBox p-0 gap-4 flex flex-wrap">
                <div className="card grow bg-[#FFE2E5] ">
                    <div>
                        <div className="title-card">Ajouter</div>
                        <div className="cardName">des Admins</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="person" className="person"></ion-icon>
                    </div>
                </div>

                <div className="card grow bg-[#FFF4DE] ">
                    <div>
                        <div className="title-card">Ajouter</div>
                        <div className="cardName">des Catégories</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="grid"></ion-icon>
                    </div>
                </div>

                <div className="card grow bg-[#DCFCE7] ">
                    <div>
                        <div className="title-card">Ajouter</div>
                        <div className="cardName">des Articles</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="cube"></ion-icon>
                    </div>
                </div>

                <div className="card grow bg-[#F3E8FF] ">
                    <div>
                        <div className="title-card">Voir</div>
                        <div className="cardName">les Statistiques</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="pie-chart"></ion-icon>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Chart />
                </div>
                <div className="grid1">
                    <div className='chart2'>
                        <h1 className='chart-title'>Nombre des Commandes par mois</h1>
                        <BarChartComponent w={500} h={300} />
                    </div>
                </div>
                <div className='Piechart'>
                    <h1 className='chart-title'>Répartition des produits par catégorie</h1>
                    <PieChartComponent data={pieChartData} h={250} />
                </div>
            </div>
        </div>
    );
};

export default Acceuil;
