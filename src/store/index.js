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
        "major/career": 0,
        "weakUpTime": "",
        "weakUpTimeWeight": 0,
        "sleepTime": "",
        "sleepTimeWeight": 0,
        "lunchBreak": 0,
        "lunchBreakWeight": 0,
        "smoke": 0,
        "smokeWeight": 0,
        "clean": 0,
        "cleanWeight": 0,
        "headset": 0,
        "headsetWeight": 0,
        "addr": 0,
        "addrWeight": 0,
        "taste": [0, 0],
        "tasteWeight": 0,
        "temperature": [0, 0],
        "temperatureWeight": 0,
        "sport": [],
        "read": [],
        "game": []
    }
})