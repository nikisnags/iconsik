figma.showUI(__html__, {  
    width: 305,
    height: 400,
  });

// Функция для добавления SVG иконки в проект Figma
function addIcon(svgData: string) {
  // Создание нового слоя с переданным SVG
  const svgNode = figma.createNodeFromSvg(svgData);
  // Установка позиции слоя в центр видимой области
  svgNode.x = figma.viewport.center.x;
  svgNode.y = figma.viewport.center.y;

  // Добавление слоя в текущую страницу проекта
  //figma.currentPage.appendChild(svgNode);
  
  // Выделение только что добавленного слоя
  figma.currentPage.selection = [svgNode];

  // Перемещение видимой области, чтобы было видно добавленный слой
  //figma.viewport.scrollAndZoomIntoView([svgNode]);
}


// Обработка сообщений от UI
figma.ui.onmessage = (msg) => {
  // Если получено сообщение с SVG иконкой
  if (msg.type === 'add-icon') {
    addIcon(msg.svgData);
  }
};
