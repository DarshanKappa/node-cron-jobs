


function cron_jobs(agenda) {

    agenda.define(
        "CREATE_CONTACT_2",
        {
            priority: "high",
            concurrency: 20,
            lockLifetime: 60000,
            shouldSaveResult: true
        },
        async (job) => {
            console.log("--------------------------------")
            console.log(job.attrs.data)
            console.log("1st CRON job is running...", new Date())

            job.attrs.data = { status: "Testing!" };
            job.save();

        }
    );

    agenda.define(
        "CREATE_CONTACT_3",
        {
            priority: "high",
            concurrency: 20,
            lockLifetime: 60000
        },
        async (job) => {
            console.log("--------------------------------")
            console.log(job.attrs.data)
            console.log("2st CRON job is running...", new Date())

        }
    );

    agenda.define(
        "CREATE_CONTACT_4",
        {
            priority: "high",
            concurrency: 20,
            lockLifetime: 60000
        },
        async (job) => {
            console.log("--------------------------------")
            console.log(job.attrs.data)
            console.log("4th CRON job is running...", new Date())
        }
    );
}


module.exports = cron_jobs;
