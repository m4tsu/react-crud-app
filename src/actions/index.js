import axios from 'axios'
import { ROOT_URL, QUERYSTRING } from '../environment'

export const READ_EVENTS = 'READ_EVENTS'

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(response)
  dispatch({type: READ_EVENTS, response})
}