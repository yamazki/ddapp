export class CanvasObjectView {
  
  // 選択された要素を灰色にする
  static addColorselectedObject(selectedCanvasObject) {
    
    for(const key in window.canvas.canvasObjects) {
      window.canvas.canvasObjects[key].element.style.filter = "brightness(100%)";
    }
    
    // 選択した要素の色を変更
    selectedCanvasObject.style.filter = "brightness(90%)";
  }
  
  // 画像を要素に挿入する
  // @param draggedElement 貼り付ける画像
  // @param xPoint 貼り付け先のx座標
  // @param yPoint 貼り付け先のy座標
  // @param targetElement 貼り付け先の親要素
  // @retrun 追加したelement 
  static insertCanvasObjectImage (image, xPoint, yPoint, parentElement) {
    const insertElement = `<span class=canvasObject style="left: ${xPoint - 30}; top: ${yPoint - 30};"> 
                             <img src=${image.src} style="width: 100%; height: 100%">
                           </span>`;
    parentElement.insertAdjacentHTML('afterbegin', insertElement);
    
    // 親要素の一番最初の要素,つまり追加した要素をreturn
    return parentElement.firstChild;
  }
  
  // elementをドラッグで移動させる
  // @param draggedElement 移動させる画像の要素
  // @param xPoint 移動先のx座標
  // @param yPoint 移動先のy座標
  static moveCanvasObject(draggedElement, xPoint, yPoint) {
    draggedElement.style.left = xPoint
    draggedElement.style.top  = yPoint
  }
  
  // キャンバス内の要素を削除
  // @param draggedElement 削除する要素
  static deleteElement(targetElement) {
    targetElement.remove();
  }
  
}
