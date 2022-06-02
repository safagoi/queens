
export default function getCinemas({cinemaId = ""} = {}) {
    const apiURL = `http://localhost:3004/cinemas/${cinemaId}`;
    console.log("api url" + apiURL);
    return fetch(apiURL)
        .then(res => res.json())
        .then(payload => payload)
}