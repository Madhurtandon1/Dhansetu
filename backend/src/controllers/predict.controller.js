import axios from "axios";

export const getPrediction = async (req, res) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/predict", req.body);
    return res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Prediction failed" });
  }
};
