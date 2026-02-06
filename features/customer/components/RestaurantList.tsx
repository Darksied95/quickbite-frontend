import { Action } from "@/shared/components/Action"
import { Stars } from "@/shared/components/Stars"
import { Star } from "lucide-react"
import Image from "next/image"

const restaurants = [
    {
        id: 1,
        name: 'Burger Palace',
        image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        rating: 4.7,
        deliveryTime: '15-25 min',
        deliveryFee: '$1.99',
        tags: ['Burgers', 'American', 'Fast Food'],
    },
    {
        id: 2,
        name: 'Pizza Heaven',
        image:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        rating: 4.5,
        deliveryTime: '20-30 min',
        deliveryFee: '$2.99',
        tags: ['Pizza', 'Italian', 'Pasta'],
    },
    {
        id: 3,
        name: 'Sushi Express',
        image:
            'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        rating: 4.8,
        deliveryTime: '25-35 min',
        deliveryFee: '$3.99',
        tags: ['Japanese', 'Sushi', 'Asian'],
    },
    {
        id: 4,
        name: 'Taco Town',
        image:
            'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
        rating: 4.3,
        deliveryTime: '15-25 min',
        deliveryFee: '$1.99',
        tags: ['Mexican', 'Tacos',],
    },
    {
        id: 5,
        name: 'Pasta Paradise',
        image:
            'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        rating: 4.6,
        deliveryTime: '25-35 min',
        deliveryFee: '$2.99',
        tags: ['Italian', 'Pasta', 'Pizza'],
    },
    {
        id: 6,
        name: 'Healthy Harvest',
        image:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        rating: 4.4,
        deliveryTime: '20-30 min',
        deliveryFee: '$3.99',
        tags: ['Healthy', 'Salads', 'Vegan'],
    },
]

export const RestaurantList = () => {
    return (
        <ul className=" grid grid-cols-(--grid-cols-auto-fit-300) mt-3 gap-6">
            {restaurants.map((restaurant) => (
                <li key={restaurant.id} className="  rounded-lg overflow-x-hidden  shadow-sm">
                    <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        width={500}
                        height={200}
                        className="h-45 object-cover"
                    />
                    <div className="grid grid-cols-[1fr_auto] p-4 gap-y-3">
                        <p className="font-medium text-xl">{restaurant.name}</p>

                        <div className="flex items-center justify-center gap-2">
                            <Star className=" fill-yellow-400 text-transparent" size={20} />
                            <p>{restaurant.rating}</p>
                        </div>

                        <div className="text-gray-500 text-sm col-span-2 flex gap-2">
                            <span>{restaurant.deliveryTime}</span>
                            &bull;
                            <span>{restaurant.deliveryFee} delivery</span>
                        </div>

                        <div className="col-span-2">
                            {
                                restaurant.tags.slice(0, 2).map((tag, index) => {
                                    return (
                                        <span key={index} className="bg-gray-200 text-gray-700 rounded-md px-2 py-1 text-xs font-medium mr-2">{tag}</span>
                                    )
                                })
                            }
                            {restaurant.tags.length > 2 && <span className="bg-gray-200 text-gray-700 rounded-md px-2 py-1 text-xs font-medium">{"+" + (restaurant.tags.length - 2)}</span>}
                        </div>

                        <Action as="button" type="submit" variant="secondary" size="sm" className=" col-span-2">View Menu</Action>
                    </div>

                </li>
            ))}
        </ul>
    )
}