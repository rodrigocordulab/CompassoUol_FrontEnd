import React from "react";

function Form(props) {
  return (
    <>
      <div class="d-flex flex-row justify-content-center"
        style={{ margin: 50 }}>
        <div class="form-group mr-auto">
          <label for="inputUserGit">Usuário do Github</label>
          <input
            type="text"
            class="form-control"
            id="inputUserGit"
            placeholder="Digite um usuário do Github"
            style={{ marginTop: 5, width: 260 }} 
            onChange={(teste) => {
              props.onChange(teste.target.value)
            }}/>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style={{ height: 35, marginTop: 30, marginLeft: 20 }}
          onClick={props.onClick}>
          Buscar
        </button>
      </div>
    </>
  );
}

export default Form;
