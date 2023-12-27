import React from "react";
import "./Host.css";

const Host = () => {
  return (
    <div class="host">
    <button class="host1">
    </button>
    <div class="desc">
      <div class="desc-input">
      </div>
      <img class="sort-icon" alt="" src="sort.png" />

    </div>
    <div class="loc">
      <div class="loc-input">
      </div>
      <img class="add-location-icon" alt="" src="add_location.png" />

    </div>
    <div class="time">
      <img class="clock-icon" alt="" src="clock.png" />

      <div class="sunday">Sunday, December 3</div>
    </div>
    <div class="event">
      <div class="event-input">
      </div>
      <div class="event1">Event Name: </div>
    </div>
    <b class="head1">HOST YOUR EVENT WITH US</b>
  </div>
  );
};

export default Host;
