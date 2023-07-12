const { Agenda } = require("agenda");
const os = require("os");
const cron_jobs = require("../cron_jobs/index");

console.log(os.cpus())

const mongoURI = "mongodb://localhost:27017/agenda";

const agenda = new Agenda({
    db: {
        address: mongoURI,
    },
    processEvery: "1 minute",
});

agenda.on("ready", () => {
    console.log("Agenda started!")
    agenda.start();
})

agenda.on("error", (e) => console.log("Agenda connection error!\n", e))

cron_jobs(agenda)

console.log({ jobs: agenda._definitions });
