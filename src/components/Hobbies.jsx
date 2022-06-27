const Hobbies = () => {

    const click = () =>{
        alert ("Hobbies")
    }

    return (
        <div className="card" onClick={click}  style={{backgroundColor: "lightcoral"}}>
            <h3>Mis Hobbies</h3>
            <ul>
                <li>Leer</li>
                <li>Ordenar</li>
                <li>Ejercicio</li>
            </ul>
        </div>
    )
}

export default Hobbies