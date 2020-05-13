export const habit1ConfigArr = [
    {
        title: "请选择您的所属地域",
        model: "addr",
        weight: "addrWeight",
        type: "radio",
        bgUrl: "/img/04.habit1/1.png",
        choiceArr: ["南方", "北方"]
    },
    {
        title: "请选择您的偏好口味",
        model: "taste",
        weight: "tasteWeight",
        type: "slide",
        bgUrl: "/img/04.habit1/2.png",
        choiceArr: [
            ["辣", "不辣"],
            ["酸", "不酸"],
        ]
    },
    {
        title: "请选择您的空调常设温度",
        model: "temperature",
        weight: "temperatureWeight",
        count: 2,
        type: "twoTime",
        bgUrl: "/img/04.habit1/3.png",
    },
];

export const habit2ConfigArr = [
    {
        title: "您是否讨厌抽烟行为",
        model: "smoke",
        weight: "smokeWeight",
        type: "radio",
        bgUrl: "/img/05.habit2/1.png",
        choiceArr: ["是", "否"]
    },
    {
        title: "您对桌面、地面等的卫生管理",
        model: "clean",
        weight: "cleanWeight",
        type: "radio",
        bgUrl: "/img/05.habit2/2.png",
        choiceArr: ["极致整齐", "能用就好"]
    },
    {
        title: "您是否有带耳机使用设备",
        model: "headset",
        weight: "headsetWeight",
        type: "radio",
        bgUrl: "/img/05.habit2/3.png",
        choiceArr: ["是", "否"]
    }
]