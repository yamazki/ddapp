import {CanvasObjectView} from './canvas-object-view.js'
import {LeaderLine} from '../../lib/leader-line/leader-line.min.js'
import {AllowLine} from '../arrow-line/arrow-line.js'

export class CanvasObjectEvent {
  
  static click(e) {
    window.canvas.selectedCanvasObject = this;
    CanvasObjectView.addColorselectedObject(this);
  }
  
  static dragstart(e) {
    window.canvas.draggedElement = this;
  }
  
  static drop(e) {
    // 始点をドラッグ中のオブジェクト,終点をドロップされるオブジェクトとした線を引く
    const line = new LeaderLine(window.canvas.draggedElement, this);    
    window.canvas.arrowLines[line._id] = line;
    
    // 追加された矢印の要素の取得 
    const arrowLineElements = document.querySelectorAll('.leader-line'); 
    const addedArrowLineElement = arrowLineElements[arrowLineElements.length - 1];
    
    new AllowLine(window.canvas.draggedElement, this, addedArrowLineElement, line);
    
    e.stopPropagation();
  }
  
}
