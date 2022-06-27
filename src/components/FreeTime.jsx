const FreeTime = () => {

const click = () =>{
    alert("Tiempo libre")
}

    return (
        <div className='card bg-blue' onClick={click}>
            <h3>En mi tiempo libre</h3>
            <ul>
                <li>Veo la TV</li>
                <li>Videojuegos</li>
                <li>Escuchar musica</li>
            </ul>
        </div>
    );
};

export default FreeTime;