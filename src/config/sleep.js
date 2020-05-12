export const sleepPageConfigArr = [
    {
        title: "您的起床时间通常为",
        model: "weakUpTime",
        weight: "weakUpTimeWeight",
        type: "time",
        bgUrl: "/img/03.sleep/morning.png"
    },
    {
        title: "您的就寝时间通常为",
        model: "sleepTime",
        weight: "sleepTimeWeight",
        type: "time",
        bgUrl: "/img/03.sleep/evening.png"
    },
    {
        title: "您是否有午睡的习惯",
        model: "lunchBreak",
        weight: "lunchBreakWeight",
        type: "radio",
        bgUrl: "/img/03.sleep/afternoon.png",
        choiceArr: ["是", "否"]
    }
]