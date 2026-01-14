export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    available: boolean;
    popular: boolean;
}

export type MenuItemForm = {
    name: string;
    description: string | null;
    price: number;
    image: string;
    category: string;
    available: boolean;
    popular: boolean;
}