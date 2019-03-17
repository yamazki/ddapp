export class CanvasView {
  
    
  // 画像を要素に挿入する
  // @param draggedElement 貼り付ける画像
  // @param xPoint 貼り付け先のx座標
  // @param yPoint 貼り付け先のy座標
  // @param targetElement 貼り付け先の親要素
  // @retrun 追加したelement 
  static insertCanvasObjectImage (image, xPoint, yPoint, parentElement) {
    const insertElement = `<span class=canvasObject style="left: ${xPoint - 10}; top: ${yPoint - 10};"> 
                             <img src=${image.src} style="width: 95%; height: 95%">
                           </span>`;
    parentElement.insertAdjacentHTML('afterbegin', insertElement);
    
    // 親要素の一番最初の要素,つまり追加した要素をreturn
    return parentElement.firstChild;
  }
  
  // 画像をドラッグで移動させる
  // @param draggedElement 移動させる画像の要素
  // @param xPoint 移動先のx座標
  // @param yPoint 移動先のy座標
  static moveImage(draggedElement, xPoint, yPoint) {
    draggedElement.style.left = xPoint
    draggedElement.style.top  = yPoint
  }
  
  // キャンバス内の要素を削除
  // @param draggedElement 削除する画像の要素
  static deleteElement(targetElement) {
    targetElement.remove();
  }
  
}
