import React from "react";

function ListData(props) {
  return (
    <div class="flex-col justify-content-center" style={{margin:40}}>

      <h2>{props.type}</h2>
      <ul class="list-group">
        {
          props.dataUserInfo.map((obj)=>{
            return (
              <li class="list-group-item" key={obj.id}>{obj.name}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ListData;
