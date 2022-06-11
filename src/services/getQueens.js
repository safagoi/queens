export function getQueens() {
    console.log("getQueens() executing");  

    const apiURL = `http://www.nokeynoshade.party/api/queens/all`;

    return fetch(apiURL)
            .then(res => res.json())
            .then(data => data)
}

export function getQueenById(id) {
    console.log(`getting queen with id: ${id}`);

    const apiURL = `http://www.nokeynoshade.party/api/queens/${id}`;

    return fetch(apiURL)
            .then(res => res.json())
            .then(data => data)
}

// Servicio falso para mejorar el sistema de busquedas
export function getQueensByName(queens, name) {
    console.log(`getting queen with name: ${name}`);

    let filteredArray = queens.filter(queen => queen.name.toLowerCase().includes(name.toLowerCase()))

    return filteredArray

}