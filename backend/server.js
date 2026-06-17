require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")
//const {resume,selfDescription,jobDescription} = require("./src/services/temp.js")
//const {generateInterviewReport} = require("./src/services/ai.service.js")

connectToDB()

// generateInterviewReport({ resume, selfDescription, jobDescription})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});