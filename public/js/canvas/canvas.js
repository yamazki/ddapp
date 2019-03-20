import {CanvasEvent} from './canvas-event.js'
import {CanvasObjectView} from './canvas-object/canvas-object-view.js'
import {ArrowLineView} from './arrow-line/arrow-line-view.js'

export class Canvas {
  
  constructor(id) {
    this.canvasObjects = {};
    this.arrowLines = {};
    this.selectedCanvasObject = null;
    this.draggedElement = null;
    this.selectedArrowLine = null;
    this.element = document.getElementById(id);
    this.registerEvents();
  }
  
  // キャンバスの初期化
  initCanvas() {
    this.removeAllCanvasObject();
    this.removeAllArrowLines()
  } 
  
  // canvas内のcanvasObjectの全削除
  removeAllCanvasObject() {
    // DOMの削除
    while (this.element.firstChild) {
      CanvasObjectView.deleteElement(this.element.firstChild);
    }
    // データモデルの削除
    this.canvasObjects = {};
  }
  
  removeAllArrowLines() {
    ArrowLineView.removeAllArrowLines();
    this.arrowLines = {};
  }
  
   
  removeCanvasObject() {
    CanvasObjectView.deleteElement(this.selectedCanvasObject);
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

