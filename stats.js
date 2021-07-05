function quantile(arr, q) {
    const sorted = arr.sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sorted[base + 1] !== undefined) {
        return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
    } else {
        return Math.floor(sorted[base]);
    }
};

function prepareData(result) {
	return result.data.map(item => {
		item.date = item.timestamp.split('T')[0];

		return item;
	});
}

// показать значение метрики за несколько день
function showMetricByPeriod(...) {
}

// показать сессию пользователя
function showSession(...) {
}

// сравнить метрику в разных срезах
function compareMetric(...) {
}

// рассчитать метрику за выбранный день
function calcMetricByDate(data, page, name, date) {
	let sampleData = data
					.filter(item => item.page == page && item.name == name && item.date == date)
					.map(item => item.value);

	console.log(`${date} ${name}: ` +
		`p25=${quantile(sampleData, 0.25)} p50=${quantile(sampleData, 0.5)} ` +
		`p75=${quantile(sampleData, 0.75)} p90=${quantile(sampleData, 0.95)} ` +
		`hits=${sampleData.length}`);
}

fetch('https://shri.yandex/hw/stat/data?counterId=6A1D62E1-5DB9-4480-A661-AC766AD7D3FD')
	.then(res => res.json())
	.then(result => {
		let data = prepareData(result);

		calcMetricByDate(data, 'send test', 'connect', '2021-07-03');
		calcMetricByDate(data, 'send test', 'ttfb', '2021-07-03');
		calcMetricByDate(data, 'send test', 'load', '2021-07-03');

		// добавить свои сценарии, реализовать функции выше
		// ...
	});



// example data 
/*
[
    {
        "requestId": "717013653589",
        "page": "send test",
        "name": "connect",
        "value": 247,
        "index": 0,
        "timestamp": "2021-07-02T21:38:38.903734",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "682037933413",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-02T21:38:43.30402",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "663869543246",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-02T21:38:52.389475",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "951098268366",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-02T21:38:56.858539",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "359987112502",
        "page": "send test",
        "name": "connect",
        "value": 1,
        "index": 0,
        "timestamp": "2021-07-02T22:09:11.173715",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "359987112502",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-02T22:09:11.173723",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "359987112502",
        "page": "send test",
        "name": "load",
        "value": 1233,
        "index": 0,
        "timestamp": "2021-07-02T22:09:11.431226",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "303819188488",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-02T22:09:19.409898",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "303819188488",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-02T22:09:19.409905",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "303819188488",
        "page": "send test",
        "name": "load",
        "value": 774,
        "index": 0,
        "timestamp": "2021-07-02T22:09:19.84012",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "716452000365",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:00:48.829401",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "716452000365",
        "page": "send test",
        "name": "ttfb",
        "value": 14,
        "index": 0,
        "timestamp": "2021-07-03T19:00:48.829409",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "242710523000",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:00:49.028924",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "242710523000",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:00:49.028932",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "716452000365",
        "page": "send test",
        "name": "load",
        "value": 941,
        "index": 0,
        "timestamp": "2021-07-03T19:00:48.888794",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "705830808649",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:00:49.324381",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "705830808649",
        "page": "send test",
        "name": "ttfb",
        "value": 9,
        "index": 0,
        "timestamp": "2021-07-03T19:00:49.324387",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "336539525325",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:00:50.080908",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "336539525325",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:00:50.080917",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "336539525325",
        "page": "send test",
        "name": "load",
        "value": 705,
        "index": 0,
        "timestamp": "2021-07-03T19:00:50.737918",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "553491733599",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:00:50.863819",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "553491733599",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:00:50.863825",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "553491733599",
        "page": "send test",
        "name": "load",
        "value": 1393,
        "index": 0,
        "timestamp": "2021-07-03T19:00:52.229318",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "717588896324",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:00:54.00167",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "717588896324",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:00:54.001676",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "717588896324",
        "page": "send test",
        "name": "load",
        "value": 766,
        "index": 0,
        "timestamp": "2021-07-03T19:00:54.430436",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "937003940027",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:00:55.935394",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "937003940027",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:00:55.935399",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "937003940027",
        "page": "send test",
        "name": "load",
        "value": 1458,
        "index": 0,
        "timestamp": "2021-07-03T19:00:57.344351",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "148705317323",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:01:03.638507",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "148705317323",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:01:03.638517",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "148705317323",
        "page": "send test",
        "name": "load",
        "value": 1486,
        "index": 0,
        "timestamp": "2021-07-03T19:01:04.456417",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "281801626311",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:01:05.212408",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "281801626311",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:01:05.212412",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "281801626311",
        "page": "send test",
        "name": "load",
        "value": 1491,
        "index": 0,
        "timestamp": "2021-07-03T19:01:06.715015",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "261855074128",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:01:07.46136",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "261855074128",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:01:07.461364",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "261855074128",
        "page": "send test",
        "name": "load",
        "value": 680,
        "index": 0,
        "timestamp": "2021-07-03T19:01:08.120775",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "685718115172",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:01:09.723098",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "685718115172",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:01:09.723102",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "685718115172",
        "page": "send test",
        "name": "load",
        "value": 1504,
        "index": 0,
        "timestamp": "2021-07-03T19:01:11.22014",
        "additional": {
            "env": "development",
            "platform": "desktop"
        }
    },
    {
        "requestId": "788552066363",
        "page": "send test",
        "name": "connect",
        "value": 1,
        "index": 0,
        "timestamp": "2021-07-03T19:02:05.102155",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "788552066363",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:05.102159",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "788552066363",
        "page": "send test",
        "name": "load",
        "value": 536,
        "index": 0,
        "timestamp": "2021-07-03T19:02:05.617306",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "839489034445",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:06.409779",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "839489034445",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:06.409784",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "839489034445",
        "page": "send test",
        "name": "load",
        "value": 800,
        "index": 0,
        "timestamp": "2021-07-03T19:02:07.158054",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "744710406944",
        "page": "send test",
        "name": "load",
        "value": 1307,
        "index": 0,
        "timestamp": "2021-07-03T19:02:11.393805",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "466114034333",
        "page": "send test",
        "name": "load",
        "value": 1263,
        "index": 0,
        "timestamp": "2021-07-03T19:02:13.241712",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "075496612901",
        "page": "send test",
        "name": "load",
        "value": 1462,
        "index": 0,
        "timestamp": "2021-07-03T19:02:15.547619",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "744710406944",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:10.083573",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "744710406944",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-03T19:02:10.083577",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "466114034333",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:12.042002",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "466114034333",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:12.042006",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "075496612901",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:14.139134",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "075496612901",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:14.139138",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "895690250167",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:19.398",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "895690250167",
        "page": "send test",
        "name": "ttfb",
        "value": 8,
        "index": 0,
        "timestamp": "2021-07-03T19:02:19.398004",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "895690250167",
        "page": "send test",
        "name": "load",
        "value": 829,
        "index": 0,
        "timestamp": "2021-07-03T19:02:20.193687",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "060863084515",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:21.620863",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "060863084515",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:21.620867",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "060863084515",
        "page": "send test",
        "name": "load",
        "value": 942,
        "index": 0,
        "timestamp": "2021-07-03T19:02:22.029917",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "838640805493",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:22.568879",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "838640805493",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-03T19:02:22.568883",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "814799370017",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:23.133278",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "814799370017",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:23.133282",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "877567991520",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:23.903195",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "877567991520",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:23.903199",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "101403409686",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.148551",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "101403409686",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.148555",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "258550215650",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.201548",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "258550215650",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.201561",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "430395661975",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.451907",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "430395661975",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.451912",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "597245462064",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.692069",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "597245462064",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.692073",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "845135359637",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.754833",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "845135359637",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.754837",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "531571679889",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.955021",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "531571679889",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:24.955026",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "874808822020",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.211151",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "874808822020",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.211155",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "999426236279",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.374263",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "999426236279",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.374267",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "111641575017",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.554607",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "111641575017",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.554611",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "767069877410",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.680009",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "767069877410",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.680014",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "857094937369",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.887535",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "857094937369",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:25.88754",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "950415186132",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:26.037882",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "950415186132",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:26.037886",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "484506316622",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:26.272975",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "484506316622",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:26.27298",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "484506316622",
        "page": "send test",
        "name": "load",
        "value": 1008,
        "index": 0,
        "timestamp": "2021-07-03T19:02:27.326587",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "601318685594",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:28.427633",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "601318685594",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:28.427637",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "601318685594",
        "page": "send test",
        "name": "load",
        "value": 850,
        "index": 0,
        "timestamp": "2021-07-03T19:02:29.230599",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "721467861192",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:30.472656",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "721467861192",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:30.472661",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "721467861192",
        "page": "send test",
        "name": "load",
        "value": 1398,
        "index": 0,
        "timestamp": "2021-07-03T19:02:31.908546",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "154435211817",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:32.737879",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "154435211817",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:32.737884",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "065483753449",
        "page": "send test",
        "name": "connect",
        "value": 1,
        "index": 0,
        "timestamp": "2021-07-03T19:02:38.734256",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "065483753449",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:38.73426",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "188876631050",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:40.369322",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "188876631050",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:40.369327",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "623470934643",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:42.586623",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "623470934643",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:42.586628",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "439784192955",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:44.445267",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "439784192955",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-03T19:02:44.445272",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "425799496340",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:44.892477",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "425799496340",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:44.892482",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "745173787793",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.499114",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "745173787793",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.499119",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "976824651548",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.855911",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "976824651548",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.855914",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "958790947626",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:46.222467",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "958790947626",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-03T19:02:46.222472",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "154435211817",
        "page": "send test",
        "name": "load",
        "value": 1161,
        "index": 0,
        "timestamp": "2021-07-03T19:02:33.818081",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "065483753449",
        "page": "send test",
        "name": "load",
        "value": 609,
        "index": 0,
        "timestamp": "2021-07-03T19:02:39.279641",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "188876631050",
        "page": "send test",
        "name": "load",
        "value": 762,
        "index": 0,
        "timestamp": "2021-07-03T19:02:41.09547",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "623470934643",
        "page": "send test",
        "name": "load",
        "value": 1293,
        "index": 0,
        "timestamp": "2021-07-03T19:02:43.872391",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "046703364430",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:44.723999",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "046703364430",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-03T19:02:44.724003",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "948509073342",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.109591",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "948509073342",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.109595",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "941379703970",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.84858",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "941379703970",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:45.84859",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "984832913437",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:46.042526",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "984832913437",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:46.042531",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "107283682449",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:46.418059",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "107283682449",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:02:46.418063",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "715477454977",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:02:47.092271",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "715477454977",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:02:47.092276",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "107283682449",
        "page": "send test",
        "name": "load",
        "value": 839,
        "index": 0,
        "timestamp": "2021-07-03T19:02:47.211898",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "661732994432",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:10:39.736001",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "661732994432",
        "page": "send test",
        "name": "ttfb",
        "value": 6,
        "index": 0,
        "timestamp": "2021-07-03T19:10:39.736006",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "661732994432",
        "page": "send test",
        "name": "load",
        "value": 1172,
        "index": 0,
        "timestamp": "2021-07-03T19:10:39.964049",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "177500145848",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:10:40.792512",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "177500145848",
        "page": "send test",
        "name": "ttfb",
        "value": 4,
        "index": 0,
        "timestamp": "2021-07-03T19:10:40.792517",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "177500145848",
        "page": "send test",
        "name": "load",
        "value": 755,
        "index": 0,
        "timestamp": "2021-07-03T19:10:41.515851",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "853675565283",
        "page": "send test",
        "name": "connect",
        "value": 0,
        "index": 0,
        "timestamp": "2021-07-03T19:10:43.509421",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "853675565283",
        "page": "send test",
        "name": "ttfb",
        "value": 5,
        "index": 0,
        "timestamp": "2021-07-03T19:10:43.509426",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    },
    {
        "requestId": "853675565283",
        "page": "send test",
        "name": "load",
        "value": 1116,
        "index": 0,
        "timestamp": "2021-07-03T19:10:43.870157",
        "additional": {
            "env": "production",
            "platform": "touch"
        }
    }
]
*/