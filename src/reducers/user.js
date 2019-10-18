import { generateUser } from "../store/static-data";
export default function user(state = generateUser(), action) {
  return state;
}