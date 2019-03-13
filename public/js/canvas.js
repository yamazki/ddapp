export class Canvas {
  
  thiscanvasObjects = [];
  
  constructor(canvasId) {
    this.canvasId = canvasId;
    this.canvasElement = document.getElementById(canvasId);
  }
  
  // キャンバスの初期化
  initCanvas() {
    removeAllCanvasObject(this.canvasId);
  } 
  
  // canvas内のcanvasObjectの全削除
  removeAllCanvasObject() {
    while (thix.canvasElement.firstChild) {
      this.canvasElement.removeChild(canvasElement.firstChild);
    }
  }
   
  deleteCanvasObject(canvasObject) {
    selectedCanvasObject.remove();
  }
  
}





// キャンバスの初期化
export const initCanvas = (canvasId) => {
  removeAllCanvasObject(canvasId);
} 


// canvas内のcanvasObjectの全削除
export const removeAllCanvasObject = (canvasId) => {
  const canvasElement = document.getElementById(canvasId)
  console.log(canvasId);
  console.log(canvasElement);
  while (canvasElement.firstChild) {
    canvasElement.removeChild(canvasElement.firstChild);
  }
}

// 
export const deleteCanvasObject = (canvasObject) => {
  selectedCanvasObject.remove();
}
