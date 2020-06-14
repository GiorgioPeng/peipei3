import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        "school": "",
        "id": "",
        "name": "",
        "gender": "",
        "major": "",
        "plan": "",
        "plan_weight": 1,
        "wake_time": "",
        "wake_time_weight": 1,
        "sleep_time": "",
        "sleep_time_weight": 1,
        "is_nap": 0,
        "is_nap_weight": 1,
        "smoke": 0,
        "smoke_weight": 1,
        "clean": 0,
        "clean_weight": 1,
        "earphone": 0,
        "earphone_weight": 1,
        "north_or_south": 0,
        "north_or_south_weight": 1,
        "taste": [0, 0],
        "taste_weight": 1,
        "temperature": [0, 0],
        "temperature_weight": 1,
        "sports": [],
        "sports_weight":1,
        "books": [],
        "books_weight":1,
        "games": [],
        "games_weight":1
    }
})