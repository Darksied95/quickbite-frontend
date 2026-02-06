const data = [
    {
        title: "Deliveries",
        value: "28"
    },
    {
        title: "Online Hours",
        value: "26"
    },
    {
        title: "Active Hours",
        value: "21.9"
    },
    {
        title: "Avg. per Hour",
        value: "$10.00"
    }
]

export const EarningCard = () => {

    return (
        <section className="bg-linear-to-r bg-green-600 to-green-700 text-white p-12 rounded-md grid grid-cols-2 md:grid-cols-4 gap-y-3">
            <h3 className="col-start-2 md:col-start-4 justify-self-end font-light">This Week</h3>

            <div className="flex flex-col col-start-1 row-start-1">
                <span className="text-xl font-medium">Total Earnings</span>
                <strong className="text-3xl">$352.42</strong>
            </div>

            {
                data.map((item, index) => {
                    return (
                        <div className="flex flex-col" key={index}>
                            <span className="font-light">{item.title}</span>
                            <strong className="text-bold">{item.value}</strong>
                        </div>
                    )
                })
            }
        </section>
    )
}

