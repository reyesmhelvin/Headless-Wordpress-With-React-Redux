const REQUEST_API = 'https://headlesswordpress.000webhostapp.com/wp-json/acf/v3';

export const getNews = async () => {
    return await fetch(`${REQUEST_API}/news`)
    .then(res => res.json())
}



