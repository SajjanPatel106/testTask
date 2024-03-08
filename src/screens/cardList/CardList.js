import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { instance } from "../../services/instance";
import { Spinner } from "../../components";

import "./cardList.style.css";
import { setData } from "../../redux/MySlice";

export const CardList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.mydata);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    instance({
      url: "/api/character",
      method: "GET",
    }).then((res) => {
      dispatch(setData(res.data.results))
      setIsLoading(false)
    }).catch(e => {
      dispatch(setData([]));
      setIsLoading(false);
    })
  },[])

  const handleclickitem = (item) => {
    navigate(`/SingleCard/${item.id}`);
  };
  return (
    <div className="card-list">
      {isLoading ? <Spinner /> : ""}
      {data.map((item) => {
        return (
          <div
            className="card-container"
            key={item.id}
            onClick={() => handleclickitem(item)}
          >
            <img alt={`${item.name}`} src={`${item.image}`} />
            <span className="list-name">{item.name}</span>
            <span className="item-gender">Gender : {item.gender}</span>

            <span>
              <span className="item-species">{item.species} -</span>
              <span className="item-status"> {item.status}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
