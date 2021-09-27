const BASE_URL = "https://drift.durieux.me";
const requestService = new RequestService();

export default class ApiService {

    //return an array with all the available sites
    getSites() {
        const url = `/assets/data/sites.json`;
        return requestService.getRequest(url)
    }

    getTimes() {
        const url = `/assets/data/times.json`;
        return requestService.getRequest(url)

    }

    getMenu(type) {
        return type == "views" ? viewsMenu : sitesMenu;
    }

    getData(type) {
        const url = `/assets/data/sites.json`;
        return requestService.getRequest(url)
    }

    getSiteScreenshot(site, time, size) {
        return `/assets/images/${size}/${site}/screenshots/${time}.jpg`;
    }

    getSiteGraph(site, time, size) {
        return `/assets/images/${size}/${site}/graph/${time}.jpg`;
    }

    getSiteCoverage(site, time, size) {
        return `/assets/images/${size}/${site}/coverage/${time}.jpg`;
    }

    getSiteNetwork(site, time, size) {
        return `/assets/images/${size}/${site}/network/${time}.jpg`;
    }

    getMainMenu() {
        return mainMenu;
    }

    getVoteWebsites() {
        const url = `${BASE_URL}/api/vote/websites`
        return requestService.getRequest(url)
    }

    getAvatar(userId) {
        return `${BASE_URL}/api/chat/user/${userId}/avatar`
    }
}




export const dataTest = {
    value: 0,
    children: [

        {
            name: "bing",
            state: 0,
            value: 1.25,
            image: "/assets/images/300/bing/graph/1619197200000.jpg",
            logo: "logo.bing.png",

        },
        {
            name: "duckduckgo",
            state: 0,
            value: 1.25,
            image: "/assets/images/300/duckduckgo/graph/1619197200000.jpg",
            logo: "logo.duckduckgo.png",

        },
        {
            name: "google",
            state: 0,
            value: 1.25,
            image: "/assets/images/300/google/graph/1619197200000.jpg",
            logo: "logo.google.png",

        },
        {
            name: "kiddle",
            state: 0,
            value: 1.25,
            image: "/assets/images/300/kiddle/graph/1619197200000.jpg",
            logo: "logo.kiddle.png",

        },
        {
            name: "qwant",
            state: 1,
            value: 1.25,
            image: "/assets/images/300/qwant/graph/1619197200000.jpg",
            logo: "logo.qwant.png",

        },
        {
            name: "spotify",
            state: 0,
            value: 1.25,
            image: "/assets/images/300/spotify/graph/1619197200000.jpg",
            logo: "logo.spotify.png",

        },
        {
            name: "wikipedia",
            state: 0,
            value: 1.25,
            image: "/assets/images/300/wikipedia/graph/1619197200000.jpg",
            logo: "logo.wikipedia.png",

        },
        {
            name: "yahoo",
            state: 0,
            value: 1.25,
            image: "/assets/images/300/yahoo/graph/1619197200000.jpg",
            logo: "logo.yahoo.png",

        },

    ]
}

export const mainMenu = [
    // {
    //     human: "Meet the bot",
    //     nerd: "Meet Motoo",
    //     value: "driftbot"
    // },
    {
        human: "View exhibition",
        nerd: "View Evolution",
        value: "exhibition"
    },
    {
        human: "Virtual tour",
        nerd: "Video exploration",
        value: "tour"
    },
    {
        human: "About re|thread ",
        nerd: "About re|thread",
        value: "about"
    }
]


const viewsMenu = [

    {
        name: "Screenshot",
        human: "Screenshot",
        nerd: "Human",
        value: "screenshot",
        state: 1,
    },
    {
        name: "Coverage",
        human: "Coverage",
        nerd: "Code",
        value: "coverage",
        state: 1,
    },
    {
        name: "graph",
        human: "Execution trace",
        nerd: "Flow",
        value: "graph",
        state: 0
    },
    {
        name: "Network",
        human: "Network",
        nerd: "Underworld",
        value: "network",
        state: 0
    }
]

const sitesMenu = [{
    name: "Intro",
    state: 1,
},
{
    name: "Qwant",
    state: 0
},
{
    name: "Bing",
    state: 0,
},
{
    name: "Duckduckgo",
    state: 0,
},
{
    name: "Google",
    state: 0
},
{
    name: "Kiddle",
    state: 0
},
{
    name: "Spotify",
    state: 0
},
{
    name: "Wikipedia",
    state: 0
},
{
    name: "Yahoo",
    state: 0
}
]
