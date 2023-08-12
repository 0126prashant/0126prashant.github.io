import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../styles/Stats.css"

// My GitHub Stats
const Stats = () => {
  return (
    <div className="stats-container">
    <h2 className="skills-heading">My GitHub Stats</h2>
      <div className="stats-content">
      <div >
    <img
      id="github-streak-stats"
      className="stats-image"
      src="https://github-readme-streak-stats.herokuapp.com/?user=0126prashant"
      alt="GitHub Streak Stats"
    />
</div>
        <div >
          <img
            id="github-stats-card"
            className="stats-image"
            src="https://github-readme-stats.vercel.app/api?username=0126prashant&show_icons=true&locale=en"
            alt="GitHub Stats Card"
          />
        </div>
        <div >
          <img
          id="github-top-langs"
            className="stats-image"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=0126prashant"
            alt="github-langs-cards"
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
