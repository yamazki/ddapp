import {CanvasObject} from './canvas-object/canvas-object.js'
import {CanvasView} from './canvas-view.js'

export class CanvasEvent {
  
  static dropped(e) {
    const draggedElement = window.canvas.draggedElement;
    const image = draggedElement.children[0];
    switch(draggedElement.className) {
      // $B%5%$%I%P!<$+$i$N%I%i%C%0%"%s%I%I%m%C%W$N>l9g(B
      case "component":
        const image = draggedElement.children[0]
        const insertElement = CanvasView.insertCanvasObjectImage(image, e.x, e.y, this);
        canvas.canvasObjects.push(new CanvasObject(insertElement));
        
         // canvasObjectElement.addEventListener('dragstart', dragStartFromCanvasObject, false);
         // canvasObjectElement.addEventListener('drop', dragCheck, false);
         // canvasObjectElement.addEventListener('click', clickCanvasObject, false);
        break;
        
      // $B%-%c%s%P%9Fb$+$i%-%c%s%P%9Fb$X$N%I%i%C%0%"%s%I%I%m%C%W(B
      case "canvasObject":
        draggedElement.style.left = e.x;
        draggedElement.style.top = e.y;
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
