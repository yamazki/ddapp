import {CanvasObjectView} from './canvas-object-view.js'

export class CanvasObjectEvent {
  
  static click(e) {
    window.canvas.selectedCanvasObject = this;
    CanvasObjectView.addColorselectedObject(this);
  }
  
  static dragstart(e) {
    window.canvas.draggedElement = this;
  }
  
  static drop(e) {
    console.log(window.canvas.draggedElement);
    console.log(this);
    
    e.stopPropagation();
  }
  
}
