import React from "react";

function ResultSearch(props) {
  return (
    <div class="d-flex flex-row justify-content-center">
      <div class="card shadow ">

        <div class="d-flex flex-row card-body">
          <img src={props.dataView.avatar_url} width={200} height={200} />
          <div class="flex flex-col align-items-center">
            <h3 style={{ width: 350, textAlign: 'justify', paddingLeft: 20 }}>{props.dataView.login}</h3>
            <p class="card-text m-auto" style={{ width: 350, textAlign: 'justify', paddingLeft: 20 }}>{props.dataView.bio}</p>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={props.onClickRepositorios}>Repositórios</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={props.onClickMaisVisitados}>Mais visualizados</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSearch;
