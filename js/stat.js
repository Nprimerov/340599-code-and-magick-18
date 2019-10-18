//Важные значения
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420; //Ширина поля
var CLOUD_HEIGHT = 270; //Высота поля
var COLUMN_X = 140;
var COLUMN_Y = 230;
var COLUMN_WIDTH = 40; //Ширина столбца
var COLUMN_HEIGHT = -140;//Высота столбца
var GAP = 50;//Отступ между столбцами
var TEXT_Y = 250;
var TIMES_Y = 80;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(times) {
  var maxElement = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  //Рисуем поле где будет статистика
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  //Добавляем текст
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 210, 35)

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', 200, 55)

  //Рисуем колонки

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i, TEXT_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i, TIMES_Y);
    ctx.fillStyle = 'hsl(230, 77%, '+ Math.round(Math.random()*100 + 20) +'%)';
    ctx.fillRect(CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i, COLUMN_Y, COLUMN_WIDTH, (times[i] * COLUMN_HEIGHT) / maxTime);
      if (names[i] <= 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i, COLUMN_Y, COLUMN_WIDTH,COLUMN_HEIGHT);
    }
  }
};

