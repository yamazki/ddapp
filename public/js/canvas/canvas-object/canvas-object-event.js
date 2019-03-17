import {CanvasObjectView} from './canvas-object-view.js'

export class CanvasObjectEvent {
  
  static click(e) {
    console.log(this);
    window.canvas.selectedCanvasObject = this;
    CanvasObjectView.addColorselectedObject(this);
  }
  
  static dragstart(e) {
    window.canvas.draggedElement = this;
  }
  
  static drop(e) {
    console.log("drop")
    e.stopPropagation();
  }
  
}
