export class CanvasObjectView {
  
  // 選択された要素を灰色にする
  static addColorselectedObject(selectedCanvasObject) {
    
    for(const key in window.canvas.canvasObjects) {
      window.canvas.canvasObjects[key].element.style.filter = "brightness(100%)";
    }
    
    // 選択した要素の色を変更
    selectedCanvasObject.style.filter = "brightness(90%)";
  }
  
}
