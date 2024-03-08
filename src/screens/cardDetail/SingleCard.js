import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import bacward from "../../assests/singleCard/backward.png";
import forward from "../../assests/singleCard/forward.png";
import { Spinner, instance } from "../../components";
import { setSelectedData } from "../../redux/MySlice";
import "./SingleCard.css";

export const SingleCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedData } = useSelector((state) => state.mydata);
  const params = useParams();
  useEffect(() => {
    setIsLoading(true);
    instance({
      url: `/api/character/${params.id}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(setSelectedData(res.data));
        setIsLoading(false);
      })
      .catch((e) => {
        alert("Something Went Wrong");
        setIsLoading(false);
      });
  }, [params]);
  const handleclickitem = (value) => {
    const AddCard = Number(params.id) + value;
    if (AddCard < 1) {
      return;
    }
    navigate(`/SingleCard/${AddCard}`);
  };

  return (
    <div className="single-card">
      <div className="single-card-container">
        <img
          className="backward-button"
          src={bacward}
          alt="<"
          onClick={() => handleclickitem(-1)}
        />
        <img
          className="single-image"
          alt={`${selectedData?.name}`}
          src={`${selectedData?.image}`}
        />
        {isLoading ? <Spinner /> : ""}
        <span className="single-card-head">
          <span className="single-list-name">{selectedData?.name}</span>
          <span className="single-item-gender">
            <span className="single-gender">Gender</span> -{" "}
            {selectedData?.gender}
          </span>

          <span>
            <span className="single-item-species">
              {selectedData?.species} -
            </span>
            <span className="single-item-status"> {selectedData?.status}</span>
          </span>
          <span className="single-item-origin-head">
            <span className="item-origin">Origin</span> -{" "}
            <span className="item-origin-name">
              {" "}
              {selectedData?.origin.name}
            </span>
          </span>
          <span className="single-item-location-head">
            <span className="item-location">Current location</span> -{" "}
            <span className="item-origin-location">
              {" "}
              {selectedData?.location.name}
            </span>
          </span>
        </span>
      </div>
      <img
        className="forward-button"
        onClick={() => handleclickitem(1)}
        src={forward}
        alt=">"
      />
    </div>
  );
};
