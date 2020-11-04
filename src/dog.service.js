import axios from "axios";

export function getAllBreeds() {
  return axios.get("https://dog.ceo/api/breeds/list/all");
}

export function getDogImage(name, count) {
  return axios.get(
    "https://dog.ceo/api/breed/" + name + "/images/random/" + count
  );
}

export function getSubDogImage(name, sub, count) {
  return axios.get(
    "https://dog.ceo/api/breed/" + name + "/" + sub + "/images/random/" + count
  );
}
export function getRandomDogImage(name) {
  return axios.get("https://dog.ceo/api/breed/" + name + "/images/random");
}

export function getSubList(name) {
  return axios.get("https://dog.ceo/api/breed/" + name + "/list");
}
