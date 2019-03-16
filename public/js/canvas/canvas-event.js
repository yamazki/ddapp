import {CanvasObject} from './canvas-object/canvas-object.js'
import {CanvasView} from './canvas-view.js'

export class CanvasEvent {
  
  static dropped(e) {
    const canvas = window.canvas;
    const draggedElement = window.draggedElement;
    console.log(draggedElement);
    const image = draggedElement.children[0];
    switch(draggedElement.className) {
      // $B%5%$%I%P!<$+$i$N%I%i%C%0%"%s%I%I%m%C%W$N>l9g(B
      case "component":
        const image = draggedElement.children[0]
        CanvasView.insertCanvasObjectImage(image, e.x, e.y, this);
        // $B?7$7$/EPO?$5$l$?(BcanvasObject$B$K%$%Y%s%H$rEPO?(B                    
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
        
      // $B%-%c%s%P%9Fb$+$i%-%c%s%P%9Fb$X$N%I%i%C%0%"%s%I%I%m%C%W(B
      case "canvasObject":
        // $B%I%i%C%0@h$K(BcanvasObject$B$,B8:_$9$k>l9g(B
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
