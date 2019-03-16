export class CanvasView {
    
  // 画像を要素に挿入する
  // @param draggedElement 貼り付ける画像
  // @param xPoint 貼り付け先のx座標
  // @param yPoint 貼り付け先のy座標
  // @param targetElement 貼り付け先の親要素
  static insertCanvasObjectImage (image, xPoint, yPoint, targetElement) {
    const insertHTML = `<span class=canvasObject style="left: ${xPoint - 30}; top: ${yPoint - 30};"> 
                          <img src=${image.src} style="width: 95%; height: 95%">
                        </span>`;
    targetElement.insertAdjacentHTML('afterbegin', insertHTML)
  }
  
  // 画像をドラッグで移動させる
  // @param draggedElement 移動させる画像の要素
  // @param xPoint 移動先のx座標
  // @param yPoint 移動先のy座標
  static moveImage(draggedElement, xPoint, yPoint) {
    draggedElement.style.left = xPoint
    draggedElement.style.top  = yPoint
  }
  
}
