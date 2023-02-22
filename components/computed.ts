export const getProductName = (p: any) => {
    return p.name
}

export const getProductImage = (p: any) => {
    console.log(p)
    return p.images[0]
}

export const getProductDescription = (p: any) => {
    return p.description || ""
}

export const getProductPrice = (p: any) => {
    return Number(p.unit_amount/100)
}

// export const getProductName = (p: any) => {
//     return p.name
// }