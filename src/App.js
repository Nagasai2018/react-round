import React, { useState } from "react";
import "./styles.css";

const EventManagementForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventList, setEventList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      eventDescription,
    };
    setEventList((prevEvents) => [...prevEvents, eventData]);
    resetForm();
  };

  const resetForm = () => {
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventDescription("");
  };

  return (
    <div>
      <div className="form-container">
        <h2>Create an Event</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Event Name:
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Event Date:
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Event Time:
              <input
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Event Location:
              <input
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Event Description:
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Create Event</button>
        </form>
      </div>

      <div className="list" id="listview">
        <h2 className="eventHeading">Event List: </h2>
        {eventList.length === 0 ? (
          <p className="text">No Event's Created Till Now.</p>
        ) : (
          <ul>
            {eventList.map((event, index) => (
              <li key={index}>
                <strong>{event.eventName}</strong> - {event.eventDate} at{" "}
                {event.eventTime} - {event.eventLocation}
                <p className="text">{event.eventDescription}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventManagementForm;
