function Button() {
    function meuButton(){
        console.log("Opa, fui ativado")
    }
    return (
      <div>
        <button onClick={meuButton}>Disparar</button>
      </div>
    )
}

export default Button;