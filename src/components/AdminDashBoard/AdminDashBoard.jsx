import React, { useMemo } from "react";
import "./AdminDashBoard.scss";
import RankMentor from "../RankMentor/RankMentor";
import SkillDashboard from "../SkillDashboard/SkillDashboard";
import { Chart } from "react-charts";
export default function AdminDashBoard() {
  const data = useMemo(
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

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <div className="row">
      <article className="col-12">
        <RankMentor />
      </article>
      <article className="col-md-6 col-sm-12 item-col border-tbl">
        <SkillDashboard />
      </article>
      <article className="col-md-6 col-sm-12 item-col border-tbr">
        <h2>The Growth of Website</h2>
        <article
          style={{
            width: "100%",
            height: "300px",
          }}
        >
          <Chart data={data} axes={axes} />
        </article>
      </article>
    </div>
  );
}
