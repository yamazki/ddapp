export class Canvas {
  
  thiscanvasObjects = [];
  
  constructor(canvasId) {
    this.canvasId = canvasId;
    this.canvasElement = document.getElementById(canvasId);
  }
  
  // $B%-%c%s%P%9$N=i4|2=(B
  initCanvas() {
    removeAllCanvasObject(this.canvasId);
  } 
  
  // canvas$BFb$N(BcanvasObject$B$NA4:o=|(B
  removeAllCanvasObject() {
    while (thix.canvasElement.firstChild) {
      this.canvasElement.removeChild(canvasElement.firstChild);
    }
  }
   
  deleteCanvasObject(canvasObject) {
    selectedCanvasObject.remove();
  }
  
}





// $B%-%c%s%P%9$N=i4|2=(B
export const initCanvas = (canvasId) => {
  removeAllCanvasObject(canvasId);
} 


// canvas$BFb$N(BcanvasObject$B$NA4:o=|(B
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
