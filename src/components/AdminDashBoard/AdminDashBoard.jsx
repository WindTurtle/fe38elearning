import React, { Fragment } from "react";
import { Chart } from "react-charts";
import "./AdminDashBoard.scss";
import RankMentor from "../RankMentor/RankMentor";
import SkillDashboard from "../SkillDashboard/SkillDashboard";
export default function AdminDashBoard() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 6],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 3],
          [3, 4],
          [4, 7],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <RankMentor />
        </div>
        <div className="col-6 item-col">
          <SkillDashboard />
        </div>
        <div className="col-6 item-col">
          <h2>The Growth of Website</h2>
          <div
            style={{
              width: "100%",
              height: "300px",
            }}
          >
            <Chart data={data} axes={axes} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
