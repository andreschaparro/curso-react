const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(baseUrl + endpoint)
        const data = await response.json()
        console.log(data)
        return {
            data,
            isLoading: false,
        }
    } catch (error) {
        console.error(error);
    }
}
