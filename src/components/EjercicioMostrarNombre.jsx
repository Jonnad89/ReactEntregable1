import React from 'react';

const EjercicioMostrarNombre = () => {
    return (
        <div>
              <h1>
        {users[0].name.title} {" "}
        {users[0].name.first} {""}
        {users[0].name.last} {" "}
      </h1>
        </div>
    );
};

export default EjercicioMostrarNombre;