import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        "school": "",
        "studentNumber": "",
        "name": "",
        "gender": "",
        "major": "",
        "career": "",
        "major/career": 1,
        "weakUpTime": "",
        "weakUpTimeWeight": 1,
        "sleepTime": "",
        "sleepTimeWeight": 1,
        "lunchBreak": 0,
        "lunchBreakWeight": 1,
        "smoke": 0,
        "smokeWeight": 1,
        "clean": 0,
        "cleanWeight": 1,
        "headset": 0,
        "headsetWeight": 1,
        "addr": 0,
        "addrWeight": 1,
        "taste": [0, 0],
        "tasteWeight": 1,
        "temperature": [0, 0],
        "temperatureWeight": 1,
        "sport": [],
        "read": [],
        "game": []
    }
})