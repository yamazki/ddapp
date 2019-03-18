import {CanvasObjectView} from './canvas-object-view.js'
import {LeaderLine} from '../../lib/leader-line/leader-line.min.js'

export class CanvasObjectEvent {
  
  static click(e) {
    window.canvas.selectedCanvasObject = this;
    CanvasObjectView.addColorselectedObject(this);
  }
  
  static dragstart(e) {
    window.canvas.draggedElement = this;
  }
  
  static drop(e) {
    // 始点をdraggedelementの中心,終点をthisとした線を引く
    const line = new LeaderLine(window.canvas.draggedElement, this);
    
    // 矢印の要素の取得 
    const arrowElements = document.querySelectorAll('.leader-line'); 
    console.log(arrowElements[arrowElements.length - 1])
    
    e.stopPropagation();
  }
  
}
