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

// TODO: реализовать
// показать значение метрики за несколько день
function showMetricByPeriod() {
}

// показать сессию пользователя
function showSession() {
}

// сравнить метрику в разных срезах
function compareMetric() {
}

// любые другие сценарии, которые считаете полезными


// Пример
// добавить метрику за выбранный день
function addMetricByDate(data, page, name, date) {
	let sampleData = data
					.filter(item => item.page == page && item.name == name && item.date == date)
					.map(item => item.value);

	let result = {};

	result.hits = sampleData.length;
	result.p25 = quantile(sampleData, 0.25);
	result.p50 = quantile(sampleData, 0.5);
	result.p75 = quantile(sampleData, 0.75);
	result.p95 = quantile(sampleData, 0.95);

	return result;
}
// рассчитывает все метрики за день
function calcMetricsByDate(data, page, date) {
	console.log(`All metrics for ${date}:`);

	let table = {};
	table.connect = addMetricByDate(data, page, 'connect', date);
	table.ttfb = addMetricByDate(data, page, 'ttfb', date);
	table.load = addMetricByDate(data, page, 'load', date);
	table.square = addMetricByDate(data, page, 'square', date);
	table.load = addMetricByDate(data, page, 'load', date);
	table.generate = addMetricByDate(data, page, 'generate', date);
	table.draw = addMetricByDate(data, page, 'draw', date);

	console.table(table);
};

fetch('https://shri.yandex/hw/stat/data?counterId=D8F28E50-0001-11EC-9EDF-9U93090795C1')
	.then(res => res.json())
	.then(result => {
		let data = prepareData(result);

		calcMetricsByDate(data, 'send test', '2021-10-22');

		// добавить свои сценарии, реализовать функции выше
	});
