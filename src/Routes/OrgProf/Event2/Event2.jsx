import React, { useEffect, useState } from "react";
import "./Event2.css";
import { database } from "../../../config/appwrite";

const Event2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await database.listDocuments(
      "658fb4872811d10690cc",
      "659ae042bb91df79de32"
    );
    setData(res.documents);
  }
  return (
    <div className="events1">
      {data.map((e, i) => (
        <div className={"event" + (i + 1)}>
          <div className={"btn" + (i + 1)}>Upcoming</div>
          <div className="task4">{e.name}</div>
          <div className="date4">{e.date}</div>
        </div>
      ))}

      <b className="head1">Your Events</b>
    </div>
  );
};

export default Event2;