import "./card.css";

import React, { useEffect, useState } from "react";

import Loader from "../BetterLoader/Loader";

function Card(props) {
  const { data, tableData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);
  return (
    <div className={"card"}>
      <div className={"cardHeader"}>
        {/* Element-1: Image */}
        <Loader
          loaded={loaded}
          customstyle={{
            height: "100%",
            width: "100%",
          }}
        >
          <img src={data.mainImg} alt="card-img" className={"cardHeaderImg"} />
        </Loader>
      </div>
      <div className={"cardSub"}>
        {/* Element-2: h3 tag */}
        <div className="title">
          <Loader
            loaded={loaded}
            customstyle={{
              height: "15px",
              width: "40%",
              marginBottom: "16px",
              borderRadius: "10px",
            }}
          >
            <h3>{data.title}</h3>
          </Loader>
        </div>
        <div className="subtitle">
          <Loader
            loaded={loaded}
            customstyle={{
              height: "15px",
              marginBottom: "16px",
              borderRadius: "10px",
            }}
          >
            <p>{data.subTitle}</p>
          </Loader>
        </div>
        {/* Element-3: table tag */}
        {tableData && (
          <Loader
            loaded={loaded}
            customstyle={{
              height: "100px",
            }}
          >
            <table className="tableWrapper">
              <tbody>
                {tableData.map((item) => {
                  return (
                    <tr>
                      {item.map((row) => {
                        return <td>
                            {row}
                        </td>
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Loader>
        )}
      </div>
    </div>
  );
}

export default Card;
