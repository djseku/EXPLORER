export async function getTx(tx) {
    const response = await fetch(`http://localhost:5000/tx/${tx.queryKey[1]}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    return JSON.parse(data)
}

export async function getBlock(bloque) {
    const response = await fetch(`http://localhost:5000/bloque/${bloque.queryKey[1]}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    return JSON.parse(data)
}

export async function getBalance(address) {
    const response = await fetch(`http://localhost:5000/balance/${address.queryKey[1]}`)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    return data
}