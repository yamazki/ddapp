import {CanvasObjectView} from './canvas-object-view.js'
import {LeaderLine} from '../../lib/leader-line.min.js'

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
    // 始点をdraggedelementの中心,終点をthisとした線を引く
    
    
    e.stopPropagation();
  }
  
}
