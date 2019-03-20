import {CanvasView} from './canvas-view.js'
import {CanvasEvent} from './canvas-event.js'
import {CanvasObject} from './canvas-object/canvas-object.js'

export class Canvas {
  
  
  constructor(id) {
    this.canvasObjects = {};
    this.arrowLines = {};
    this.selectedCanvasObject = null;
    this.draggedElement = null;
    this.element = document.getElementById(id);
    this.registerEvents();
  }
  
  // キャンバスの初期化
  initCanvas() {
    this.removeAllCanvasObject(this.canvasId);
  } 
  
  // canvas内のcanvasObjectの全削除
  removeAllCanvasObject() {
    // DOMの削除
    while (this.element.firstChild) {
      CanvasView.deleteElement(this.element.firstChild);
    }
    // データモデルの削除
    this.canvasObjects = {};
  }
   
  removeCanvasObject() {
    CanvasView.deleteElement(this.selectedCanvasObject);
    // selectedCanvasObjectを配列から削除
    delete window.canvas.canvasObjects[this.selectedCanvasObject.id]
  }
  
  SidebarObjectDropped(e) {
    
  }
  
  registerEvents() {
    this.element.addEventListener('drop', CanvasEvent.dropped, false);
    this.element.addEventListener('dragover', CanvasEvent.dragover, false);
    
  }
  
}

