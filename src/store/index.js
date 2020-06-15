import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)

// 袁系统说把默认权重改成3
export default new Vuex.Store({
    state: {
        "school": "",
        "id": "",
        "name": "",
        "gender": "",
        "major": "",
        "plan": "",
        "plan_weight": 3,
        "wake_time": "",
        "wake_time_weight": 3,
        "sleep_time": "",
        "sleep_time_weight": 3,
        "is_nap": 0,
        "is_nap_weight": 3,
        "smoke": 0,
        "smoke_weight": 3,
        "clean": 0,
        "clean_weight": 3,
        "earphone": 0,
        "earphone_weight": 3,
        "north_or_south": 0,
        "north_or_south_weight": 3,
        "taste": [0, 0],
        "taste_weight": 3,
        "temperature": [0, 0],
        "temperature_weight": 3,
        "sports": [],
        "sports_weight":3,
        "books": [],
        "books_weight":3,
        "games": [],
        "games_weight":3
    }
})