const axios = require("axios");

const newsFetch = async (url) => {
  try {
    const response = await axios.get(url);

    if (response.data.totalResults > 0) {
      return {
        status: 200,
        success: true,
        message: "Data fetched successfully!",
        data: response.data,
      };
    } else {
      return {
        status: 200,
        success: true,
        message: "No data to show!",
        data: [],
      };
    }
  } catch (error) {
    return {
      status: 500,
      success: false,
      message: "Data could not be fetched!",
      error: error.message,
    };
  }
};

module.exports = { newsFetch };
 