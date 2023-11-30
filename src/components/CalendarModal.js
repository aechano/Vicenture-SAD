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
  const [selectedEventDetails, setSelectedEventDetails] = useState(null);
  const [eventDetailsModalOpen, setEventDetailsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // State for tracking edit mode

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
    //setEventTitle("");
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
    // Create a new event object with a unique identifier
    const newEvent = {
      id: generateUniqueId(), // Use a function to generate a unique ID
      title: title,
      start: date,
      allDay: true, // Assuming events are all-day
    };

    // Update the state with the new events
    setEvents((prevEvents) => [...prevEvents, newEvent]);

    console.log("Updated events:", events); // Add this log statement
  };

  // Function to generate a unique ID (you can use a library like `uuid` for this purpose)
  const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleEventClick = (clickInfo) => {
    // When an event is clicked, set the details and open the event details modal
    setSelectedEventDetails(clickInfo.event);
    setIsEditMode(false); // Reset edit mode when clicking on a new event
    setEventTitle(""); // Clear the event title input
    setEventDetailsModalOpen(true);
  };

  const EventDetailsModal = () => {
    // Modal for displaying event details

    const handleDeleteEvent = () => {
      if (selectedEventDetails) {
        // Filter out the selected event and update the events state
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== selectedEventDetails.id)
        );

        // Close the event details modal
        setEventDetailsModalOpen(false);
      }
    };


    const handleEditEvent = () => {
      // Set edit mode to true when clicking the edit button
      setIsEditMode(true);
    
      // Populate the input field with the current title of the selected event
      setEventTitle(selectedEventDetails.title);
    };

    const handleUpdateEvent = () => {
      // Update the event details
      if (selectedEventDetails) {
        const updatedEvents = events.map((event) =>
          event.id === selectedEventDetails.id
            ? { ...event, title: eventTitle }
            : event
        );
        setEvents(updatedEvents);
        setEventDetailsModalOpen(false);
        setEventTitle("");
        setIsEditMode(false);
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-lgu-lime p-4 shadow-md rounded-md w-full md:w-3/4">
          <h2 className="text-lg font-semibold mb-4">
            {isEditMode ? "Edit Event" : "Event Details"}
          </h2>
          {selectedEventDetails && (
            <>
              {isEditMode ? (
                <input
                  type="text"
                  placeholder="Enter event title"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  className="w-full border p-2 rounded-md mb-4"
                />
              ) : (
                <p className="font-bold text-3xl">
                  {selectedEventDetails.title}
                </p>
              )}
              {/* Add more details as needed */}
            </>
          )}
          <div className="mt-4 flex justify-end">
            {!isEditMode && (
              <button
                className="mr-2 px-4 py-2 bg-lgu-yellow text-black rounded-md"
                onClick={handleEditEvent}
              >
                Edit
              </button>
            )}
            
            {isEditMode && (
              <button
                className="mr-2 px-4 py-2 bg-lgu-yellow text-black rounded-md"
                onClick={handleUpdateEvent}
              >
                Update
              </button>
            )}
            {!isEditMode && (
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={handleDeleteEvent}
              >
                Delete
              </button>
            )}
            <button
              className="mr-2 px-4 py-2 bg-lgu-green text-white rounded-md"
              onClick={() => setEventDetailsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };



  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full md:w-1/2 my-6 mx-auto max-w-7xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">Calendar</h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-lgu-lime hover:bg-lgu-green hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                    eventClick={handleEventClick} // Add eventClick prop
                    // className="w-full md:w-1/2 lg:w-1/2 mx-auto max-w-7xl"
                    eventBackgroundColor="#2D5F2E"
                    eventBorderColor="#2D5F2E"
                            
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
          <div className="bg-lgu-lime p-4 shadow-md rounded-md">
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
                className="mr-2 px-4 py-2 bg-lgu-green text-white rounded-md"
                onClick={handleCreateEvent}
              >
                OK
              </button>
              <button
                className="mr-2 px-4 py-2 bg-lgu-yellow text-black rounded-md"
                onClick={handleEventModalClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {eventDetailsModalOpen && <EventDetailsModal />}
    </>
  );
}
