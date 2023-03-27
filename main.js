const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCV31octs5hft6bZmokUgQlA&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.getElementById('content')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '698c8383d7msh93cbe554be1fdffp1b77b4jsn066e5ce11e6b',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data;
}

// crear una funcion que se invoca asi misma
(async () => {
    try {
        const videos = await fetchData(API)
        // template
        let view = `
            ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full"/>
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
            `).slice(0, 4).join('')}
            `
        content.innerHTML = view;
    } catch (error) {
        console.log(error)
    }
})();