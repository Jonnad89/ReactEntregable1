import React from 'react';

const Cake = ({flavour})  => {  //({flavour}) vendria a ser la prop que hay que colocarla tambien en la App.jsx
    return (
        <div>
            <b>Sabor:</b> {flavour}
        </div>
    );
};

export default Cake;