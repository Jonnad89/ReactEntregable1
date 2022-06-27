

const AboutMe = () =>{
  const me ={
    name: "Jonatan",
    movie: "Avengers: End Game",
    music: "rock"
  }

  const click = () =>{
    alert ("Sobre mi")
  }
    return(
      <div className='card' onClick={click}>
        
      <h2>Sobre mí</h2>
      <ul>
        <li>{me.name}</li>
        <li>Pelicula favorita: {me.movie} </li>
        <li>
          Musica: {me.music}
        </li>
      </ul>
      </div>
    )
}

export default AboutMe