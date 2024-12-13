document.addEventListener('DOMContentLoaded', function() {
    // 各地域の天気予報データ
    const weatherData = {
        "東京都": {
            "reportDatetime": "2024-12-13T10:34:00+09:00",
            "targetArea": "東京都",
            "forecast": [
                {
                    "weather": "曇り",
                    "highTemp": 10,
                    "lowTemp": 5,
                    "icon": "https://openweathermap.org/img/wn/03d.png", // 曇りアイコン
                    "text": "曇り時々晴れ。午後からは回復の兆し。",
                    "date": "2024-12-13"
                },
                {
                    "weather": "晴れ",
                    "highTemp": 12,
                    "lowTemp": 4,
                    "icon": "https://openweathermap.org/img/wn/01d.png", // 晴れアイコン
                    "text": "晴れ時々曇り。昼間は温暖。",
                    "date": "2024-12-14"
                },
                {
                    "weather": "雨",
                    "highTemp": 8,
                    "lowTemp": 3,
                    "icon": "https://openweathermap.org/img/wn/09d.png", // 雨アイコン
                    "text": "雨が降りやすく、雷を伴うこともあります。",
                    "date": "2024-12-15"
                }
            ]
        },
        "埼玉県": {
            "reportDatetime": "2024-12-13T10:30:00+09:00",
            "targetArea": "埼玉県",
            "forecast": [
                {
                    "weather": "晴れ",
                    "highTemp": 12,
                    "lowTemp": 4,
                    "icon": "https://openweathermap.org/img/wn/01d.png", // 晴れアイコン
                    "text": "晴れ時々曇り。昼間は温暖。",
                    "date": "2024-12-13"
                },
                {
                    "weather": "曇り",
                    "highTemp": 10,
                    "lowTemp": 5,
                    "icon": "https://openweathermap.org/img/wn/03d.png", // 曇りアイコン
                    "text": "曇り時々晴れ。午後から晴れる時間も。",
                    "date": "2024-12-14"
                },
                {
                    "weather": "雨",
                    "highTemp": 9,
                    "lowTemp": 3,
                    "icon": "https://openweathermap.org/img/wn/09d.png", // 雨アイコン
                    "text": "午前中は雨が降り、午後は回復に向かいます。",
                    "date": "2024-12-15"
                }
            ]
        },
        "神奈川県": {
            "reportDatetime": "2024-12-13T10:30:00+09:00",
            "targetArea": "神奈川県",
            "forecast": [
                {
                    "weather": "晴れ",
                    "highTemp": 13,
                    "lowTemp": 6,
                    "icon": "https://openweathermap.org/img/wn/01d.png", // 晴れアイコン
                    "text": "晴れ時々曇り。日中は暖かくなりそうです。",
                    "date": "2024-12-13"
                },
                {
                    "weather": "曇り",
                    "highTemp": 11,
                    "lowTemp": 4,
                    "icon": "https://openweathermap.org/img/wn/03d.png", // 曇りアイコン
                    "text": "曇り時々晴れ。夜間は冷え込みます。",
                    "date": "2024-12-14"
                },
                {
                    "weather": "雨",
                    "highTemp": 10,
                    "lowTemp": 4,
                    "icon": "https://openweathermap.org/img/wn/09d.png", // 雨アイコン
                    "text": "午後から雨が降る見込みです。",
                    "date": "2024-12-15"
                }
            ]
        },
        "千葉県": {
            "reportDatetime": "2024-12-13T10:30:00+09:00",
            "targetArea": "千葉県",
            "forecast": [
                {
                    "weather": "曇り",
                    "highTemp": 11,
                    "lowTemp": 5,
                    "icon": "https://openweathermap.org/img/wn/03d.png", // 曇りアイコン
                    "text": "曇り時々晴れ。気温は低めですが、過ごしやすい一日です。",
                    "date": "2024-12-13"
                },
                {
                    "weather": "晴れ",
                    "highTemp": 13,
                    "lowTemp": 6,
                    "icon": "https://openweathermap.org/img/wn/01d.png", // 晴れアイコン
                    "text": "晴れ時々曇り。昼間は温かく感じるでしょう。",
                    "date": "2024-12-14"
                },
                {
                    "weather": "雨",
                    "highTemp": 9,
                    "lowTemp": 3,
                    "icon": "https://openweathermap.org/img/wn/09d.png", // 雨アイコン
                    "text": "午後から雷を伴った雨が降る可能性があります。",
                    "date": "2024-12-15"
                }
            ]
        }
    };

    // 地域が選ばれた時に天気情報を更新する関数
    function updateWeather(area) {
        const data = weatherData[area];

        if (data) {
            // 基本情報を更新
            document.getElementById('target-area').textContent = data.targetArea;

            // 各日の天気情報を更新
            for (let i = 0; i < 3; i++) {
                document.getElementById(`weather-description-${i}`).textContent = data.forecast[i].text;
                document.getElementById(`high-temp-${i}`).textContent = data.forecast[i].highTemp;
                document.getElementById(`low-temp-${i}`).textContent = data.forecast[i].lowTemp;
                document.getElementById(`weather-icon-${i}`).src = data.forecast[i].icon;
            }
        }
    }

    // 初期状態で「東京都」の天気を表示
    updateWeather("東京都");

    // プルダウンで地域を選択した際に天気を更新
    document.getElementById('area-select').addEventListener('change', function() {
        const selectedArea = this.value;
        updateWeather(selectedArea);
    });
});
