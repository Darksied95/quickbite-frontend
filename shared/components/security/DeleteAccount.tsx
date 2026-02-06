export const DeleteAccount = ({ description, actionLabel }: { description: string, actionLabel: string }) => {
    return (
        <div className="mt-8">
            <h3 className="text-sm font-medium my-3 text-red-600">Danger Zone</h3>
            <p className="text-gray-500 text-sm">{description}</p>
            <button className="mt-5 block w-full md:w-auto py-2 rounded-md bg-red-700 font-medium text-white px-3">{actionLabel}</button>
        </div>
    )
}
