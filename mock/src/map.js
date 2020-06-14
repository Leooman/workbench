import beijing from 'echarts/map/json/province/beijing.json'
echarts.registerMap('北京', beijing)
export default {
    "backgroundColor": "#4f5555",
    "title": {
        "text": "北京疫情分布",
        "subtext": "散点圆的大小随疫情累计数量改变而改变",
        "left": "center",
        "textStyle": {
            "color": "#7bbfea"
        }
    },
    "geo": {
        "map": "北京",
        "label": {
            "textStyle": {
                "fontSize": ".1rem"
            }
        },
        "itemStyle": {
            "normal": {
                "areaColor": "#fff",
                "borderColor": "#587A9F"
            },
            "emphasis": {
                "areaColor": "#ccc"
            }
        }
    },
    "series": [{
        "name": "定位点",
        "type": "effectScatter",
        "coordinateSystem": "geo",
        "hoverAnimation": "false",
        "legendHoverLink": "false",
        "rippleEffect": {
            "period": 4,
            "brushType": "stroke",
            "scale": 3
        },
        "data": [{
            "name": "东城",
            "value": [116.424697, 39.927967, 390]
        }, {
            "name": "西城",
            "value": [116.358141, 39.913919, 119]
        }, {
            "name": "朝阳",
            "value": [116.765487, 40.136573, 55]
        }, {
            "name": "丰台",
            "value": [116.290679, 39.857184, 329]
        }, {
            "name": "石景山",
            "value": [116.17672, 39.949198, 219]
        }, {
            "name": "海淀",
            "value": [116.177807, 40.062966, 290]
        }, {
            "name": "门头沟",
            "value": [115.905234, 40.010063, 319]
        }, {
            "name": "房山",
            "value": [115.941902, 39.708825, 199]
        }, {
            "name": "通州",
            "value": [116.747351, 39.814339, 419]
        }, {
            "name": "顺义",
            "value": [116.737316, 40.137897, 299]
        }, {
            "name": "昌平",
            "value": [116.226118, 40.225311, 49]
        }, {
            "name": "大兴",
            "value": [116.402095, 39.655493, 219]
        }, {
            "name": "怀柔",
            "value": [116.621138, 40.432762, 89]
        }, {
            "name": "平谷",
            "value": [117.117604, 40.192158, 49]
        }, {
            "name": "密云",
            "value": [117.065719, 40.500122, 209]
        }, {
            "name": "延庆",
            "value": [116.016705, 40.507607, 129]
        }],
        "itemStyle": {
            "normal": {
                "color": "#5599E4"
            }
        },
        "zlevel": 1
    }, {
        "type": "map",
        "map": "北京",
        "zlevel": 0,
        "itemStyle": {
            "normal": {
                "areaColor": "#323c48",
                "borderColor": "#111"
            },
            "emphasis": {
                "areaColor": "#2a333d"
            }
        },
        "label": {
            "normal": {
                "show": true,
                "textStyle": {
                    "color": "#ddb926",
                    "fontSize": 10
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ddb926",
                    "fontSize": 10
                }
            }
        },
        "data": [{
            "name": "东城",
            "value": 390,
            "alarm_num": 54
        }, {
            "name": "西城",
            "value": 119
        }, {
            "name": "朝阳",
            "value": 55,
            "alarm_num": 9
        }, {
            "name": "丰台",
            "value": 329
        }, {
            "name": "石景山",
            "value": 219,
            "alarm_num": 14
        }, {
            "name": "海淀",
            "value": 290
        }, {
            "name": "门头沟",
            "value": 319,
            "alarm_num": 2
        }, {
            "name": "房山",
            "value": 199
        }, {
            "name": "通州",
            "value": 419,
            "alarm_num": 11
        }, {
            "name": "顺义",
            "value": 299
        }, {
            "name": "昌平",
            "value": 49
        }, {
            "name": "大兴",
            "value": 219,
            "alarm_num": 15
        }, {
            "name": "怀柔",
            "value": 89
        }, {
            "name": "平谷",
            "value": 49
        }, {
            "name": "密云",
            "value": 209,
            "alarm_num": 27
        }, {
            "name": "延庆",
            "value": 129
        }]
    }, {
        "name": "点",
        "type": "effectScatter",
        "coordinateSystem": "geo",
        "symbolSize": 15,
        "label": {
            "normal": {
                "show": true,
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 9
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#F62157"
            }
        },
        "zlevel": 6,
        "data": [{
            "name": "通州",
            "value": [116.747351, 39.814339, 54]
        }, {
            "name": "顺义",
            "value": [116.737316, 40.137897, 9]
        }, {
            "name": "平谷",
            "value": [117.117604, 40.192158, 14]
        }, {
            "name": "丰台",
            "value": [116.290679, 39.857184, 2]
        }, {
            "name": "怀柔",
            "value": [116.621138, 40.432762, 11]
        }]
    }]
}