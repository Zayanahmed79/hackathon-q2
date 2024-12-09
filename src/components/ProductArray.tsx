type ProductsType = {
    id: string,
    title: string,
    price: number,
    image: string,
    slug: string
    newArrival?: boolean
    isSale?: boolean
    salePrice?: number
}
type ProductsTypeTwo = {
    id: string,
    title: string,
    price: number,
    image: string,
    slug: string
    newArrival?: boolean
    isSale?: boolean
    salePrice: number
}

export const Products: ProductsType[] = [
    {
        id: "Y523201",
        title: "Cantilever chair",
        price: 42.00,
        image: "/images/f1.png",
        slug: "Cantilever-chair1",
    },
    {
        id: "Y523201",
        title: "Cantilever chair",
        price: 42.00,
        image: "/images/f2.png",
        slug: "Cantilever-chair2",
    },
    {
        id: "Y523201",
        title: "Cantilever chair",
        price: 42.00,
        image: "/images/f3.png",
        slug: "Cantilever-chair3",
    },
    {
        id: "Y523201",
        title: "Cantilever chair",
        price: 42.00,
        image: "/images/f4.png",
        slug: "Cantilever-chair4",
    },
]

export const LatestPro: ProductsTypeTwo[] = [
        {
            id: "Y523201",
            title: "Comfort Handy Craft",
            price: 42.00,
            salePrice: 65.00,
            image: "/images/l1.png",
            slug: "Comfort-Handy-Craft",
        },
        {
            id: "Y523201",
            title: "Comfort Handy Craft",
            price: 42.00,
            salePrice: 65.00,
            image: "/images/rem.png",
            slug: "Comfort-Handy-Craft",
        },
        {
            id: "Y523201",
            title: "Comfort Handy Craft",
            price: 42.00,
            salePrice: 65.00,
            image: "/images/l3.png",
            slug: "Comfort-Handy-Craft",
        },
        {
            id: "Y523201",
            title: "Comfort Handy Craft",
            price: 42.00,
            salePrice: 65.00,
            image: "/images/l4.png",
            slug: "Comfort-Handy-Craft",
        },
        {
            id: "Y523201",
            title: "Comfort Handy Craft",
            price: 42.00,
            salePrice: 65.00,
            image: "/images/l5.png",
            slug: "Comfort-Handy-Craft",
        },
        {
            id: "Y523201",
            title: "Comfort Handy Craft",
            price: 42.00,
            salePrice: 65.00,
            image: "/images/l6.png",
            slug: "Comfort-Handy-Craft",
        },

]