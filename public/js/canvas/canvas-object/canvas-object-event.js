import {CanvasObjectView} from './canvas-object-view.js'
import {ArrowLine} from '../arrow-line/arrow-line.js'
import {ArrowLineView} from '../arrow-line/arrow-line-view.js'

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
    const line = ArrowLineView.depictArrowLine(window.canvas.draggedElement, this);    
    window.canvas.arrowLines[line._id] = line;
    
    // 追加された矢印の要素の取得 
    const arrowLineElements = document.querySelectorAll('.leader-line'); 
    const addedArrowLineElement = arrowLineElements[arrowLineElements.length - 1];
    
    // 矢印のデータモデル作成
    new ArrowLine(window.canvas.draggedElement, this, addedArrowLineElement, line);
    
    e.stopPropagation();
  }
  
}
