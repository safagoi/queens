export function getQueens() {
    console.log("getQueens() executing");  

    const apiURL = `http://www.nokeynoshade.party/api/queens?limit=10`;

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