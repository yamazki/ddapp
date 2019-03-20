import {CanvasObject} from './canvas-object/canvas-object.js'
import {CanvasObjectView} from './canvas-object/canvas-object-view.js'
import {ArrowLineView} from './arrow-line/arrow-line-view.js'

export class CanvasEvent {
  
  static dropped(e) {
    const draggedElement = window.canvas.draggedElement;
    const image = draggedElement.children[0];
    switch(draggedElement.className) {
      
      // サイドバーからのコンポーネントのドラッグアンドドロップの場合
      case "component":
        const image = draggedElement.children[0]
        const insertElement = CanvasObjectView.insertCanvasObjectImage(image, e.x, e.y, this);
        new CanvasObject(insertElement);
        
         // canvasObjectElement.addEventListener('dragstart', dragStartFromCanvasObject, false);
         // canvasObjectElement.addEventListener('drop', dragCheck, false);
         // canvasObjectElement.addEventListener('click', clickCanvasObject, false);
        break;
        
      // キャンバス内からキャンバス内へのキャンバスオブジェクトのドラッグアンドドロップの場合
      case "canvasObject":
        CanvasObjectView.moveCanvasObject(window.canvas.draggedElement, e.x, e.y)
        ArrowLineView.redepictArrowLines();
        break;
    }
    return false;
  }
  
  static dragover(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to dorp
    }
    e.dataTransfer.dorpEffect = 'copy'; // See the section on the DataTransfer object.
    return false;
  }
  
}
