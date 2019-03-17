export class CanvasObjectView {
  
  // 選択された要素を灰色にする
  static addColorselectedObject(selectedCanvasObject) {
    
    // すべてのcanvasObjectの色を初期化
    for(const key in window.canvas.canvasObjects) {
      window.canvas.canvasObjects[key].element.style.filter = "brightness(100%)";
    }
    selectedCanvasObject.style.filter = "brightness(90%)";
  }
  
}
