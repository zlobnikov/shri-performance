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
function showMetricByPeriod(data, page, name, startDate, finishDate) {
  const filteredData = data.filter(
    item => item.page === page
    && item.name === name
    && item.date >= startDate
    && item.date <= finishDate
  );

  const mappedData = filteredData.map(item => item.value);

  console.log(`${name.toUpperCase()} from ${startDate} to ${finishDate}:`);

  const table = {[name]: {}};
  table[name].hits = mappedData.length;
  table[name].p25 = quantile(mappedData, 0.25);
  table[name].p50 = quantile(mappedData, 0.5);
  table[name].p75 = quantile(mappedData, 0.75);
  table[name].p95 = quantile(mappedData, 0.95);

  console.table(table);
}

// показать сессию пользователя
function showSession(data, id) {
  console.log(`Session #${id}:`)

  const filteredData = data.filter(item => item.requestId === id);

  const table = {};
  filteredData.forEach((v, i) => {
    table[i] = {};
    table[i].page = v.page;
    table[i].name = v.name;
    table[i].value = v.value;
    table[i].timestamp = v.timestamp;
  });

  console.table(table);
}

// сравнить метрику в разных срезах
function compareMetric(data, name, attribute) {
  console.log(`Compare ${name.toUpperCase()} by ${attribute}-attribute:`);

  const attributeItems = new Set();
  data.forEach(item => {
    attributeItems.add(item.additional[attribute]);
  });
  attributeItems.delete(undefined);

  let table = {};

  for (let value of attributeItems) {
    table[value] = addMetricByAttribute(data, name, attribute, value);
  }

  console.table(table);
}

// добавить метрику по атрибуту
function addMetricByAttribute(data, name, attribute, value) {
  let filteredData = data.filter(
    item => item.name === name && item.additional[attribute] === value
  );

  let mappedData = filteredData.map(item => item.value);

  const result = {};

  result.hits = mappedData.length;
  result.p25 = quantile(mappedData, 0.25);
  result.p50 = quantile(mappedData, 0.5);
  result.p75 = quantile(mappedData, 0.75);
  result.p95 = quantile(mappedData, 0.95);

  return result;
}
// рассчитывает все метрики за день
function calcMetricsByDate(data, page, date) {
  console.log(`All metrics for ${date}:`);

  let table = {};
  table.connect = addMetricByDate(data, page, 'connect', date);
  table.ttfb = addMetricByDate(data, page, 'ttfb', date);
  table.fcp = addMetricByDate(data, page, 'fcp', date);
  table.lcp = addMetricByDate(data, page, 'lcp', date);
  table.fid = addMetricByDate(data, page, 'fid', date);
  table.cls = addMetricByDate(data, page, 'cls', date);

  console.table(table);
};

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
  table.fcp = addMetricByDate(data, page, 'fcp', date);
  table.lcp = addMetricByDate(data, page, 'lcp', date);
  table.fid = addMetricByDate(data, page, 'fid', date);
  table.cls = addMetricByDate(data, page, 'cls', date);

  console.table(table);
};

fetch('https://shri.yandex/hw/stat/data?counterId=9b2714be-bf3c-4a10-96bb-1ddaf1f09399')
.then(res => res.json())
.then(result => {
  let data = prepareData(result);

  calcMetricsByDate(data, 'clock', '2021-10-31');
  console.log('\n');
  showMetricByPeriod(data, 'clock', 'fcp', '2021-10-31', '2021-11-01');
  console.log('\n');
  showSession(data, '974885867097');
  console.log('\n');
  compareMetric(data, 'fcp', 'experiment');
});
