
type Props = {
    heading: string;
    lists: Array<{ title: string, description: string }>
}

export const Notification = ({ heading, lists }: Props) => {
    return (
        <div className="border-b pb-3 mt-8">
            <h3 className="text-sm font-medium my-3">{heading}</h3>
            <ul>
                {
                    lists.map((item) => {
                        return (
                            <li key={item.title} className="grid grid-cols-[auto_1fr] gap-x-3 mb-4">
                                <input type="checkbox" id={item.title} name={item.title} checked readOnly />
                                <label htmlFor={item.title} className="font-medium text-sm">{item.title}</label>
                                <p className="col-start-2 text-gray-700 text-sm font-light">{item.description}</p>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}