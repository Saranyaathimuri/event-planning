import app from "./app.js";
import cors from "cors";

app.use(cors({
  origin: [process.env.FRONTEND_URL], // Your frontend URL
  credentials: true,
}));

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});

