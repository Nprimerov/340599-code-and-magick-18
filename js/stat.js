//Важные значения
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420; //Ширина поля
var CLOUD_HEIGHT = 270; //Высота поля
var COLUMN_X = 140;
var COLUMN_Y = 70;
var COLUMN_WIDTH = 40; //Ширина столбца
var COLUMN_HEIGHT = 140;//Высота столбца
var COLUMN_GAP = 50;//Отступ между столбцами
var TEXT_X = 150;
var TEXT_Y = 240;
var TEXT_GAP = 92;

/**
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // отступ
var TEXT_GAP = 20; // отступ заглавного текста
var LINE_GAP = 20; // отступ между строк
var GIST_HEIGHT = 150; // высота гистограммы
var BAR_WIDTH = 40; // ширина колонки
var BAR_GAP = 50; // расстояние между колонками
var barHeight = (times[i] * (GIST_HEIGHT - LINE_GAP)) / maxTime;
 */
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  //Рисуем поле где будет статистика
  renderCloud (ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud (ctx, CLOUD_X, CLOUD_Y, '#fff');
  //Добавляем текст
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.fillText ('Ура вы победили!', 210, 30)

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.fillText ('Список результатов:', 200, 50)

  //Рисуем колонки
  ctx.font = '16px PT Mono';
  ctx.fillText ('Вы', TEXT_X, TEXT_Y);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect (COLUMN_X, COLUMN_Y, COLUMN_WIDTH, COLUMN_HEIGHT);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText ('Иван', TEXT_X + TEXT_GAP, TEXT_Y);
  ctx.fillStyle = 'rgba(9, 28, 232, 1)';
  ctx.fillRect (COLUMN_X + COLUMN_GAP, COLUMN_Y, COLUMN_WIDTH, COLUMN_HEIGHT);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText ('Саша', TEXT_X + TEXT_GAP * 2, TEXT_Y);
  ctx.fillStyle = 'rgba(9, 28, 232, 1)';
  ctx.fillRect (COLUMN_X + COLUMN_GAP * 2, COLUMN_Y, COLUMN_WIDTH, COLUMN_HEIGHT);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText ('Вася', TEXT_X + TEXT_GAP * 3, TEXT_Y)
  ctx.fillStyle = 'rgba(10, 30, 167, 1)';
  ctx.fillRect (COLUMN_X + COLUMN_GAP * 3, COLUMN_Y, COLUMN_WIDTH, COLUMN_HEIGHT);

}

