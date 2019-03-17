import {CanvasView} from './canvas-view.js'
import {CanvasEvent} from './canvas-event.js'
import {CanvasObject} from './canvas-object/canvas-object.js'

export class Canvas {
  
  canvasObjects = [];
  selectedCanvasObject = null;
  draggedElement = null;
  
  constructor(id) {
    this.element = document.getElementById(id);
    this.registerEvents();
  }
  
  // $B%-%c%s%P%9$N=i4|2=(B
  initCanvas() {
    this.removeAllCanvasObject(this.canvasId);
  } 
  
  // canvas$BFb$N(BcanvasObject$B$NA4:o=|(B
  removeAllCanvasObject() {
    // DOM$B$N:o=|(B
    while (this.element.firstChild) {
      CanvasView.deleteElement(this.element.firstChild);
    }
    // $B%G!<%?%b%G%k$N:o=|(B
    this.canvasObjects.length = 0;
  }
   
  removeCanvasObject() {
    CanvasView.deleteElement(this.selectedCanvasObject);
    // selectedCanvasObject$B$rG[Ns$+$i:o=|(B
    this.canvasObjects = this.canvasObjects.filter(canvasObject => canvasObject.element != this.selectedCanvasObject);
  }
  
  SidebarObjectDropped(e) {
    
  }
  
  registerEvents() {
    this.element.addEventListener('drop', CanvasEvent.dropped, false);
    this.element.addEventListener('dragover', CanvasEvent.dragover, false);
    
  }
  
  // canvas$B$K%*%V%8%'%/%H$,%I%m%C%W$5$l$?$H$-$N%$%Y%s%H(B
  droppedComponent(e) {
    console.log(window.canvas.draggedElement);
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
