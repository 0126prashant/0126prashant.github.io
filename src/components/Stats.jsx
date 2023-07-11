import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../styles/Stats.css"

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-content">
        <div className="github-streak-stats">
          <a href="https://github.com/0126prashant">
            <img
              className="stats-image"
              src="https://camo.githubusercontent.com/b940b94c9b1b0a7c2fa882f7efa9d35c94c9420f0019eff409a10e42e5447ada/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d303132367072617368616e7426"
              alt="GitHub Streak Stats"
            />
          </a>
        </div>
        <div className="github-stats-card">
          <img
            className="stats-image"
            src="https://github-readme-stats.vercel.app/api?username=0126prashant&show_icons=true&locale=en"
            alt="GitHub Stats Card"
          />
        </div>
      </div>

      <div className="github-activity-calendar">
        <GitHubCalendar
          style={{ marginTop: "4rem", padding: "0 1rem" }}
          year={"last"}
          showWeekdayLabels={true}
          hideColorLegend
          hideTotalCount
          username="0126prashant"
        />
      </div>

      <div className="github-commits-graph">
        <a href="https://github.com/0126prashant">
          <img
            src="https://github-readme-activity-graph.cyclic.app/graph?username=0126prashant&bg_color=000000&color=ffffff&line=0891b2&point=ffffff&area_color=000000&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph"
            alt="GitHub Commits Graph"
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
