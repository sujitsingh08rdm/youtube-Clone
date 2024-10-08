// require("dotenv").config({ path: "/.env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "/.env",
});

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () =>
            console.log(`Server is running on Port ${process.env.PORT}`)
        );
    })
    .catch((err) => {
        console.log("There was an error connect to DB", err);
    });

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR: ", error);
        throw err;
    }
})();
*/
