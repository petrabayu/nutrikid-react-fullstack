import axios from "axios";

const BASE_URL_API =
  "https://nutrikid-express-be-production.up.railway.app/api/events";

// Action types
export const SET_EVENTS = "SET_EVENTS";
export const SET_SELECTED_EVENT = "SET_SELECTED_EVENT";

// Action creators
export const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events,
});

// Async action creators
export const fetchEvents = () => async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL_API);
    dispatch(setEvents(response.data));
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

export const fetchEventDetailsById = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL_API}/${eventId}`);
    const eventDetails = response.data;
    return eventDetails;
  } catch (error) {
    console.error(`Error fetching event with ID ${eventId}:`, error);
    return null;
  }
};

export const fetchOtherEventsById = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL_API}/exclude/${eventId}`);
    const eventDetails = response.data;
    return eventDetails;
  } catch (error) {
    console.error(`Error fetching event with ID ${eventId}:`, error);
    return null;
  }
};
