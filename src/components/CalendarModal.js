import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import 'tailwindcss/tailwind.css'; // Assuming you have Tailwind CSS setup globally

export default function CalendarModal({ isOpen, onRequestClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [events, setEvents] = useState([]); // State for managing events

  const [selectedEventDate, setSelectedEventDate] = useState(null);

  const handleDateSelect = (selectInfo) => {
    console.log("Select Info:", selectInfo);
    const selectedDate = selectInfo.start;

    if (selectedDate) {
      setSelectedDate(selectedDate);
      setSelectedEventDate(selectedDate);
      setEventModalOpen(true);
    } else {
      console.error("Selected date is null");
    }
  };

  const handleEventModalClose = () => {
    setEventModalOpen(false);
    setEventTitle("");
  };

  const handleCreateEvent = () => {
    // Update the events for the selected date
    if (selectedEventDate && eventTitle) {
      updateEvents(selectedEventDate, eventTitle);
    }

    // After creating the event, close the event modal
    handleEventModalClose();
  };

  const updateEvents = (date, title) => {
    // Create a new event object
    const newEvent = {
      title: title,
      start: date,
      allDay: true, // Assuming events are all-day
    };
    // Update the state with the new events
    setEvents((prevEvents) => [...prevEvents, newEvent]);

    console.log("Updated events:", events); // Add this log statement
  };

  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-7xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">Calendar</h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal"
                    onClick={onRequestClose}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    selectable={true}
                    select={handleDateSelect}
                    events={events}  // Make sure to pass the events state to the FullCalendar component
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Event Modal */}
      {eventModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Create Event</h2>
            <p>{selectedDate && selectedDate.toLocaleDateString()}</p>
            <input
              type="text"
              placeholder="Enter event title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="w-full border p-2 rounded-md mb-4"
            />
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleCreateEvent}
              >
                OK
              </button>
              <button
                className="px-4 py-2 border border-gray-300 rounded-md"
                onClick={handleEventModalClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
