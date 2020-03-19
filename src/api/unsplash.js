import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YbiCNoTyeZ_lUv61QOP2J_4fGlXOv8mm2mRuuydxoho"
  }
});
