const Food = () => {

  const click = ()=>{
    alert ("Food")
  }

    return (
      <div className="card"  onClick = {click}  style={{ background: "lightpink" }}>
        <h3>Mi comida favorita</h3>
        <ul>
          <li>Hamburguesa</li>
          <li>Pasta</li>
          <li>Sushi</li>
        </ul>
      </div>
    );
  };
  
  export default Food;