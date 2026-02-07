import * as Icons from 'lucide-react'

const iconMap = {
    user: Icons.User,
    mapPin: Icons.MapPin,
    bell: Icons.Bell,
    lock: Icons.Lock,
    truck: Icons.Truck,
    home: Icons.Home,
    settings: Icons.Settings,
    "layers": Icons.Layers,
    "shopping-bag": Icons.ShoppingBag,
    "shopping-cart": Icons.ShoppingCart,
    "chart-line": Icons.ChartLine,
}


export type IconKeys = keyof typeof iconMap

export const getIcon = (iconName: IconKeys) => {
    return iconMap[iconName] || Icons.HelpCircle
}