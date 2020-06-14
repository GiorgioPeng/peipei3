export const sleepPageConfigArr = [
    {
        title: "您的起床时间通常为",
        model: "wake_time",
        weight: "wake_time_weight",
        type: "time",
        bgUrl: "/img/03.sleep/morning.png"
    },
    {
        title: "您的就寝时间通常为",
        model: "sleep_time",
        weight: "sleep_time_weight",
        type: "time",
        bgUrl: "/img/03.sleep/evening.png"
    },
    {
        title: "您是否有午睡的习惯",
        model: "is_nap",
        weight: "is_nap_weight",
        type: "radio",
        bgUrl: "/img/03.sleep/afternoon.png",
        choiceArr: ["是", "否"]
    }
]