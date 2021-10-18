import React, { useState } from "react";
import Form from "../../components/Form";
import Api from "../../service";
import { useHistory } from "react-router-dom";

function Home(props) {

  let history = useHistory();
  const [textInput, setTextInput] = useState('')


  const getUserGitHub = async () => {
    await Api.get(`users/${textInput}`)
      .then((response) => {
        history.push(`/${textInput}`, response.data);
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="col-sm center" style={{ flex: 1 }}>
      <Form
        onChange={(textInput) => { setTextInput(textInput) }}
        onClick={() => getUserGitHub()} />
    </div>
  );
}

export default Home;
