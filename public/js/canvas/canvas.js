import {CanvasView} from './canvas-view.js'
import {CanvasEvent} from './canvas-event.js'
import {CanvasObject} from './canvas-object/canvas-object.js'

export class Canvas {
  
  canvasObjects = {};
  selectedCanvasObject = null;
  canvasObjectCounter = 0; // canvasObject$B$N<1JLHV9f$H$7$FMxMQ(B
  
  constructor(id) {
    this.id = id;
    this.element = document.getElementById(id);
    this.registerEvents();
  }
  
  // $B%-%c%s%P%9$N=i4|2=(B
  initCanvas() {
    removeAllCanvasObject(this.canvasId);
  } 
  
  // canvas$BFb$N(BcanvasObject$B$NA4:o=|(B
  removeAllCanvasObject() {
    while (this.canvasElement.firstChild) {
      this.canvasElement.removeChild(canvasElement.firstChild);
    }
  }
   
  deleteCanvasObject(canvasObject) {
    selectedCanvasObject.remove();
  }
  
  SidebarObjectDropped(e) {
    
  }
  
  registerEvents() {
    this.element.addEventListener('dragover', CanvasEvent.dropped, false);
    
  }
  
  // canvas$B$K%*%V%8%'%/%H$,%I%m%C%W$5$l$?$H$-$N%$%Y%s%H(B
  droppedComponent(e) {
    console.log(window.draggedElement);
    // $B%3!<%k%P%C%/4X?t$N;EMM$h$j(B
    // this$B$O%$%s%9%?%s%9<+?H$G$O$J$/(B,this.Element$B$r;X$9(B
    console.log(this)
    const mousePosition = {};
    mousePosition.x = e.x;
    mousePosition.y = e.y;
    switch(draggedElement.className) {
      // $B%5%$%I%P!<$+$i$N%I%i%C%0%"%s%I%I%m%C%W(B
      case "component":
        const image = draggedElement.children[0]
        canvasView.insertCanvasObjectImage(image, mousePosition.x, mousePositiony, this);
        // $B?7$7$/EPO?$5$l$?(BcanvasObject$B$K%$%Y%s%H$NEPO?(B                    
          const canvasObjects = document.querySelectorAll('#canvas .canvasObject')
          canvasObjects.forEach(canvasObject => {
            canvasObject.addEventListener('dragstart', dragStartFromCanvasObject, false);
            canvasObject.addEventListener('drop', dragCheck, false);
            canvasObject.addEventListener('click', clickCanvasObject, false);
          });
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

const dorpped = function(e){
  
}

const droppedComponent = function (e) {
  const targetPosition = {};
  mousePosition.x = e.x;
  mousePosition.y = e.y;
  switch(draggedElement.className) {
    // $B%5%$%I%P!<$+$i$N%I%i%C%0%"%s%I%I%m%C%W(B
    case "component":
      const image = draggedElement.children[0]
      View.insertCanvasObjectImage(image, mousePosition.x, mousePositiony, this);
      // $B?7$7$/EPO?$5$l$?(BcanvasObject$B$K%$%Y%s%H$NEPO?(B                    
      // const canvasObjects = document.querySelectorAll('#canvas .canvasObject')
      // canvasObjects.forEach(canvasObject => {
      //   canvasObject.addEventListener('dragstart', dragStartFromCanvasObject, false);
      //   canvasObject.addEventListener('drop', dragCheck, false);
      //   canvasObject.addEventListener('click', clickCanvasObject, false);
      // });
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




// $B%-%c%s%P%9$N=i4|2=(B
export const initCanvas = (canvasId) => {
  removeAllCanvasObject(canvasId);
} 


// canvas$BFb$N(BcanvasObject$B$NA4:o=|(B
export const removeAllCanvasObject = (canvasId) => {
  const canvasElement = document.getElementById(canvasId)
  console.log(canvasId);
  console.log(canvasElement);
  while (canvasElement.firstChild) {
    canvasElement.removeChild(canvasElement.firstChild);
  }
}

// 
export const deleteCanvasObject = (canvasObject) => {
  selectedCanvasObject.remove();
}
