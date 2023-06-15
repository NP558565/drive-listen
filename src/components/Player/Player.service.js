export default class PlayerService {
    links = {
        "Sao Paulo": "WcjGyIjHLDA",
        "New York": "MeZ8P73JNtw",
        "London": "5me0b0vEtEA",
        "Edinburgh": "bI0CWjb8d8s",
        "Paris": "83JYxoF3Y1Q",
        "Chicago": "3ma3yXXc3V8",
        "Los Angeles": "9m0bC07LA64",
        "Dubai": "MKFUdOw-U8Q",
        "Miami": "xj7abSp07w0",
        "Monaco": "t76IJmQKzKA",
        "Cairo-Egypt": "--I-TdCe2_g",
        "Alexandria-Egypt": "PmKKIx6_Sak" ,
        "Lake District-UK": "ZWfGCWgi7vY",
        "Nice": "Hlwvs8Vkqao",
        "Oslo-Norway": "5WnAzEcebGU",
        "Stockholm-Sweden": "99BCNvi7Bd8",
        "Helsinki": "zZRObFCuEm0",
        "Valencia-Spain": "leVlrPwmyOw",
        "Madrid-Spain": "hPeRC6a9asQ",
        "Alicante-Spain": "RFoke55Y4s0",
        "Malaga-Spain": "xlr_XMJ6gsg",
        "Portugal": "6Nwi3hFVxkg",
        "Frankfurt": "vnqkraiSiTI",
        "Berlin": "1Hz2zTMO00I",
        "Delhi-1": "QZPqluJA0OY",
        "Delhi-2": "2WaqdZTPiuM",
        "Mumbai-1": "j_lBv6BSrNo",
        "Mumbai-2": "MAj6y23vNuU",
        "Jaipur-India": "jwZV8i60Sbs",
        "Guwahati-India": "mnvVEZLpmlI",
        "Kolkata-1": "QOKZYt7a0pw",
        "Kolkata-2": "AkutbKoYpdE",
        "Goa-India": "MoAygX3sTxg",
        "Pune-1-India": "D_zKaUC5U4U",
        "Pune-2-India": "OclPVwWuoYs",
        "Chandigarh-India": "1NC8dXxuZ4g",
        "Kochi-India": "DxJxfSnRvWU",
        "Bhubaneshwar-India": "6WUdVxzlSRo",
        "Ahemdabad-India": "saG6xPEelb0",
        "Manali-India": "zQiOpjSWFw4",
        "Bangkok": "3xTbO0NSuNo",
        "Hong Kong": "ULcuZ3Q02SI",
        "Istanbul": "RKIPWCWldzE",
        "Kuala Lumpur": "qnXM7J5sCVo",
        "Marrakesh": "L4IcGzzWMW4",
        "Prague": "gAH3yvalKx8",
        "Moscow": "YORkrd05BtA",
        "Rome": "XmI335zvBF8",
        "Amsterdam": "_nS2FvZ0h2g",
        "Antalya-Turkey": "pPQo2mgcdkg",
        "Bangalore-India": "iss5ULIt13E",
        "Barcelona-Spain": "gmalRuDt1rc",
        "Beijing-China": "QkbJLsWyfsI",
        "Bengalaru-India": "F0cOAVwj-dw",
        "Stuttgart-Germany": "N8CO0pUlMs4",
        "Brisbane-Australia": "uzIFSGla_t0",
        "Budapest": "CLh8kD5IVb8",
        "Buenos Aires-Argentina": "-TPJot7-HTs",
        "Cairns-Australia": "NH6D8TkDBy0",
        "Cancun-Mexico": "nOvtbcDdzwk",
        "Cartagenga-Columbia": "XoRDuRQcmCg",
        "Cologne-Germany": "a8bUnrhPB4Y",
        "Copenhagen-Denmark": "59GnY0FbLDQ",
        "Curitiba-Brazil": "xegZIesrRsQ",
        "Doha-Qatar": "qf4jXk5Q3lQ",
        "Dublin-Ireland": "PX8bD5tpQWQ",
        "Dunedin-New Zealand": "yJ5fyvDOy_Q",
        "Vienna-Austria": "TC64wRJt3JA",
        "Guadalajara-Mexico": "6t3XkVX7dVk",
        "Guwahati": "Bba_hM0y8H8",
        "Hanoi-Vietnam": "DBRqqEiUtMU",
        "Habana-Cuba": "G-F6VSjSyG4",
        "Hyderabad-India": "NlBH2AcNv10",
        "Izmir-Turkey": "DiWh2CmZRL4",
        "Jeju Island-South Korea": "57-34iNmzww",
        "Kieve-Ukraine": "o6TC5CsBQaA",
        "Melbourne-Australia": "WM76uaLLnrQ",
        "Mumbai-India": "M0-q9Lf7Ivo",
        "Munich-Germany": "lFSf-49awKw",
        "Mysore-India": "8WepuA_Gi34",
        "Nairobi-Kenya": "-UV94iPFRlw",
        "Thessaloniki-Greece": "_dp8sC2qGsA",
        "San Francisco-USA": "PGMu_Z89Ao8",
        "Seattle-USA": "6kmWtd5uGfA",
        "Shangai-China": "7oolCCCgOJ4",
        "Shenzen-China": "diGHJLCg6i4",
        "Sikkim-India": "h-jKUudLTFE",
        "Singapore": "IpEpTWIDL4Q",
        "Surat-India": "PpjRWk_Cc1w",
        "Toronto-Canada": "Cmp39Cd3t7I",
        "Zurich-Switerland": "RMZO7hcg9DM",
        "Malta-1": "6yu-ur02Oto",
        "Malta-2": "Peu7hQ1OYdE",
        "Lanzarote": "LX_UOEWbgwY"

    };
    cities = ["Sao Paulo", "New York", "London", "Edinburgh", "Paris", "Chicago", "Los Angeles", "Dubai", "Miami", "Monaco", 
            "Cairo-Egypt", "Alexandria-Egypt", "Lake District-UK", "Nice", "Oslo-Norway", "Stockholm-Sweden", "Helsinki", "Valencia-Spain", 
            "Madrid-Spain", "Alicante-Spain", "Malaga-Spain", "Portugal", "Frankfurt", "Berlin", "Delhi-1", "Delhi-2", "Mumbai-1", "Mumbai-2", 
            "Jaipur-India", "Guwahati-India", "Kolkata-1", "Kolkata-2", "Goa-India", "Pune-1-India", "Pune-2-India", "Chandigarh-India", 
            "Kochi-India", "Bhubaneshwar-India", "Ahemdabad-India", "Manali-India", "Bangkok", "Hong Kong", "Istanbul", "Kuala Lumpur", 
            "Marrakesh", "Prague", "Moscow", "Rome", "Amsterdam", "Antalya-Turkey", "Bangalore-India", "Barcelona-Spain", "Beijing-China", 
            "Bengalaru-India", "Stuttgart-Germany", "Brisbane-Australia", "Budapest", "Buenos Aires-Argentina", "Cairns-Australia", 
            "Cancun-Mexico", "Cartagenga-Columbia", "Cologne-Germany", "Curitiba-Brazil", "Doha-Qatar", "Dublin-Ireland", "Dunedin-New Zealand", 
            "Vienna-Austria", "Guadalajara-Mexico", "Guwahati", "Hanoi-Vietnam", "Habana-Cuba", "Hyderabad-India", "Izmir-Turkey", 
            "Jeju Island-South Korea", "Kieve-Ukraine", "Melbourne-Australia", "Mumbai-India", "Munich-Germany", "Mysore-India", "Nairobi-Kenya", 
            "Thessaloniki-Greece", "San Francisco-USA", "Seattle-USA", "Shangai-China", "Shenzen-China", "Sikkim-India", "Singapore", "Surat-India", 
            "Toronto-Canada", "Zurich-Switerland", "Malta-1", "Malta-2", "Lanzarote"];
    speed = 0.5;
    opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            fs: 0,
            disableKeyboard: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 0,
            rel: 0,
            mute: 1,
            playsinline: 1,
        },
    };

    selectedCity;
    // setSelectedCity;
    // setOverlayVisible;

    setData(setSelectedCity, setOverlayVisible, selectedCity) {
        this.setSelectedCity = setSelectedCity;
        this.selectedCity = selectedCity;
        this.setOverlayVisible = setOverlayVisible;
    }

    onPlay() {
        console.log(this);
        setTimeout(() => {
            this.setOverlayVisible(false);
        }, 3100)
    }

    onEnd() {
        let nextCityIndex = this.cities.findIndex(city => city === this.selectedCity) + 1
        if (nextCityIndex > this.cities.length) {
            nextCityIndex = 0;
        }
        this.setSelectedCity(this.cities[nextCityIndex])
        this.setOverlayVisible(true);
    }

    cityChanged(event) {
        this.setOverlayVisible(true);
        this.setSelectedCity(event.target.value);
    }

}