import endPoints from "@/services/api";

const addProduct = async (body) => {
    const  config  = {
        method: "POST",
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    const response = await fetch(endPoints.products.addProducts, config)
        .then((res) => res.json())
        const data =  response
        return data;
    
}

const deleteProduct = async (id) => {
    const  response = await fetch(endPoints.products.deleteProduct(id), {
        method: "DELETE",
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        },
    })
    return response
}

const updateProduct = async (id, body) => {
    const  config  = {
        method: "PUT",
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    const response = await fetch(endPoints.products.updateProduct(id), config)
        .then((res) => res.json())
        const data =  response
        return data;
}


export { addProduct, deleteProduct, updateProduct }; 