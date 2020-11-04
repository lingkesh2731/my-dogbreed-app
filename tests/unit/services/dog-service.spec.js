import * as methods from "../../../src/dog.service";
//import mockAxios from '../services/helperAxios';
import axios from "axios";

jest.mock("axios");

describe("In Dog service", () => {
  beforeEach(() => {});
  it("getAllBreeds api should call", async () => {
    const allBreeds = {
      affenoinscher: [],
      african: [],
      australian: ["shepherd"],
      boxer: [],
      bulldog: ["boston", "english", "french"]
    };
    const resp = { allBreeds: allBreeds };

    axios.get.mockResolvedValue(resp.allBreeds);

    return methods.getAllBreeds().then(data => {
      expect(data).toEqual(allBreeds);
    });
  });

  it("getDogImage api should call", () => {
    const imageUrl = [
      "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
      "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
      "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
    ];
    const resp = { imageUrl: imageUrl };
    axios.get.mockResolvedValue(resp.imageUrl);
    const name = "african";
    return methods.getDogImage(name, 20).then(data => {
      // console.log(data);
      expect(data).toEqual(imageUrl);
    });
  });
  it("getSubDogImage api should call", () => {
    const imageUrl = [
      "https://images.dog.ceo/breeds/african/n02116738_10081.jpg",
      "https://images.dog.ceo/breeds/african/n02116738_10493.jpg",
      "https://images.dog.ceo/breeds/african/n02116738_1739.jpg"
    ];
    const resp = { imageUrl: imageUrl };
    axios.get.mockResolvedValue(resp.imageUrl);
    const name = "bulldog";
    const sub = "english";
    return methods.getSubDogImage(name, sub, 20).then(data => {
      //console.log(data);
      expect(data).toEqual(imageUrl);
    });
  });
  it("getRandomDogImage api should call", () => {
    const imageUrl = "https://images.dog.ceo/breeds/african/n02116738_4382.jpg";
    const resp = { imageUrl: imageUrl };
    axios.get.mockResolvedValue(resp.imageUrl);
    const name = "bulldog";
    return methods.getRandomDogImage(name).then(data => {
      //console.log(data);
      expect(data).toEqual(imageUrl);
    });
  });
  it("getSubList api should call", () => {
    const sub = {
      message: ["boston", "english", "french"],
      status: "success"
    };
    const resp = { message: sub };
    axios.get.mockResolvedValue(resp.message);
    const name = "bulldog";
    return methods.getSubList(name).then(data => {
      console.log(data);
      expect(data).toEqual(sub);
    });
  });
});
