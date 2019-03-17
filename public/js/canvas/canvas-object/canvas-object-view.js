export class CanvasObjectView {
  
  // $BA*Br$5$l$?MWAG$r3%?'$K$9$k(B
  static addColorselectedObject(selectedCanvasObject) {
    
    // $B$9$Y$F$N(BcanvasObject$B$N?'$r=i4|2=(B
    for(const key in window.canvas.canvasObjects) {
      window.canvas.canvasObjects[key].element.style.filter = "brightness(100%)";
    }
    selectedCanvasObject.style.filter = "brightness(90%)";
  }
  
}
