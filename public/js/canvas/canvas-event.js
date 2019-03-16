import {CanvasObject} from './canvas-object/canvas-object.js'
import {CanvasView} from './canvas-view.js'

export class CanvasEvent {
  
  static dropped(e) {
    const canvas = window.canvas;
    const draggedElement = window.draggedElement;
    console.log(draggedElement);
    const image = draggedElement.children[0];
    switch(draggedElement.className) {
      // サイドバーからのドラッグアンドドロップの場合
      case "component":
        const image = draggedElement.children[0]
        CanvasView.insertCanvasObjectImage(image, e.x, e.y, this);
        // 新しく登録されたcanvasObjectにイベントを登録                    
        canvas.canvasObjects[canvas.canvasObjectCounter++] = new CanvasObject(e.x, e.y, image, this)
        const canvasObjects = document.querySelectorAll('#canvas .canvasObject')
        console.log(canvas.canvasObjects);
        
        for(const key in canvas.canvasObjects) {
          const canvasObjectElement = canvas.canvasObjects[key]
          console.log(canvasObjectElement);
         // canvasObjectElement.addEventListener('dragstart', dragStartFromCanvasObject, false);
         // canvasObjectElement.addEventListener('drop', dragCheck, false);
         // canvasObjectElement.addEventListener('click', clickCanvasObject, false);
        }
      break;
        
      // キャンバス内からキャンバス内へのドラッグアンドドロップ
      case "canvasObject":
        // ドラッグ先にcanvasObjectが存在する場合
        //  if(targetCanvasObjectExists) {
        //    console.log("test2");
        //    draggedElement.style.left = targetPosition.x;
        //    draggedElement.style.top = targetPosition.y;
        //  }
        //  else {
        //    targetCanvasObjectExists = true;
        //  }
        break;
    }
    return false;
  }
  
}
