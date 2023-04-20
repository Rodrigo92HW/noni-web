import React from 'react';

function Games() {
    return (
        <div className='games'>
            <div className='container DOM'>
                <img src='https://cdn.inprnt.com/thumbs/2a/ca/2aca062e5461cef1dba104324da9115c@2x.jpg' alt='scary' height='250px' width='250px'/>
                <div className='text'>
                <h1>Desease of Man</h1>
                La base del juego se desarrolla dentro de un enorme hospital con siete pisos, en el que se producen hechos escalofriantes ante tu llegada. Tendrás que desplazarte por pasillos sombríos, explorar cada habitación y perderte en laberintos infinitos que llenarán tu cabeza de recuerdos de fantasmas de tu pasado que habitaron tu mente y cubren ahora este lugar. Este escenario retorcido, carente de toda vida salvo la tuya, te guiará hasta lugares jamás imaginados retorciendo tu camino para evitar que logres tu objetivo. 
                </div>
            </div>
            <div className='container MTG'>
                <img src='https://static.displate.com/857x1200/displate/2022-12-11/919c68aa57f7c4d486488829af4b2d6e_1d0354edc95336b5c1dce8b8308540bd.jpg' alt='scary' height='250px' width='250px'/>
                <div className='text'>
                <h1>Move the Ground</h1>
                Eres un pequeño polluelo glotón que por seguir a tu estómago se ha perdido en la inmensidad de la granja. Tu misión será regresar con tu hermosa y plumífera familia. Sigue tus instintos y si puedes devora todas las galletas posibles hasta llegar a tu meta. 
                </div>
            </div>
        </div>
    )
};

export default Games;