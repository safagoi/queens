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

export function getQueensByName(name) {
    console.log(`getting queen with name: ${name}`);

    const apiURL = `http://www.nokeynoshade.party/api/queens?name=${name}`;

    return fetch(apiURL)
            .then(res => res.json())
            .then(data => data)
}