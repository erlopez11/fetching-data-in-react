const API_KEY = '';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


//Named Export Syntax: export each ind function by name (exporting entire function)
export { show };