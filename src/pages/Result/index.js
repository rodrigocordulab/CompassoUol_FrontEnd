import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import ResultSearch from "../../components/ResultSearch";
import Api from "../../service";
import { useHistory } from "react-router-dom";
import ListData from "../../components/List";

function Result(props) {
  let history = useHistory();
  const [textInput, setTextInput] = useState('')
  const [type, setType] = useState('')
  const [dataResult, setDataResult] = useState(null)
  const [dataResultUserInfo, setDataResultUserInfo] = useState(null)

  useEffect(() => {
    if (props.location.state) {
      setDataResult(props.location.state)
    }

    if (!props.location.key && props.match.params.usuario) {
      getUserGitHub(props.match.params.usuario)
    }
  }, [])


  const getUserGitHub = async (input) => {
    await Api.get(`users/${input}`)
      .then((response) => {
        setDataResult(response.data)
        setDataResultUserInfo(null)
        history.push(`/${input}`);
      }).catch((error) => {
        console.log(error)
      })
  }

  const getUserReposGitHub = async () => {
    await Api.get(`users/${props.match.params.usuario}/repos`)
      .then((response) => {
        setType("Repositórios")
        setDataResultUserInfo(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  const getUserStarredGitHub = async () => {
    await Api.get(`users/${props.match.params.usuario}/starred`)
      .then((response) => {
        setType("Mais Visualizados")
        setDataResultUserInfo(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="col-sm center" style={{ flex: 1 }}>
      <Form
        onChange={(textInput) => { setTextInput(textInput) }}
        onClick={() => getUserGitHub(textInput)} />
      {
        dataResult
          ?
          <ResultSearch
            dataView={dataResult}
            onClickRepositorios={() => getUserReposGitHub()}
            onClickMaisVisitados={() => getUserStarredGitHub()} />
          :
          null
      }

      {
        dataResultUserInfo
          ?
          <ListData dataUserInfo={dataResultUserInfo} type={type} />
          :
          null
      }
    </div>
  );
}

export default Result;
