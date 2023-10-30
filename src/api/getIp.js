import axios from "axios";

const apiKey = process.env.REACT_APP_IP_API_KEY;

export async function getIp() {
  try {
    const userIpInfo = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`);
    return userIpInfo.data.ip;
  } catch (error) {
    console.error("Error fetching user IP:", error);
  }
}
