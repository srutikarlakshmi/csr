import React from "react";
import "./Task.css";

const Task = () => {
  return (
    <div className="tasks" id="task">
      <div className="tasks1">
        <div className="task-1">
          <div className="dates">On January 20 2024</div>
          <div className="event-name">Environment & Animal Welfare</div>

          <button class="container-20">
            <div class="apply">Apply</div>
          </button>
        </div>

        <div className="task-2">
          <div className="container-20">
            <div className="apply">Apply</div>
          </div>
          <div className="dates">On March 12 2024</div>
          <div className="event-name">
            Education, Differently Abled & Livelihood
          </div>
        </div>

        <div className="task-3">
          <div className="container-20">
            <div className="apply">Apply</div>
          </div>
          <div className="dates">On April 22 2024</div>
          <div className="event-name">Health & Eradicating Hunger</div>
        </div>

        <div className="task-4">
          <div className="container-20">
            <div className="apply">Apply</div>
          </div>

          <div className="dates">On May 26 2024</div>
          <div className="event-name">Poverty & Gender Equality</div>
        </div>

        <div className="recent-tasks">
          

<button class="button">See More</button>

          <div className="display-a-list">
            Here are events that you can take part in:
          </div>
          <b className="recent-tasks1">Recent Events</b>
        </div>
      </div>
    </div>
  );
};

export default Task;
