export function fetchData(setData: any, setLoading: any, seachText: string) {
    fetch('https://api.le-systeme-solaire.net/rest/bodies?filter[]=id,cs,' + seachText, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
        .then((response) => response.json())
        .then((json) => setData(json.bodies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}
export function fetchDataByID(setData: any, setLoading: any, id: number) {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/' + id, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}