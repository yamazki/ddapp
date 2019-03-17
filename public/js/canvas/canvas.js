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
    this.canvasObjects.length = 0;
  }
   
  removeCanvasObject() {
    CanvasView.deleteElement(this.selectedCanvasObject);
    // selectedCanvasObjectを配列から削除
    this.canvasObjects = this.canvasObjects.filter(canvasObject => canvasObject.element != this.selectedCanvasObject);
  }
  
  SidebarObjectDropped(e) {
    
  }
  
  registerEvents() {
    this.element.addEventListener('drop', CanvasEvent.dropped, false);
    this.element.addEventListener('dragover', CanvasEvent.dragover, false);
    
  }
  
  // canvasにオブジェクトがドロップされたときのイベント
  droppedComponent(e) {
    console.log(window.canvas.draggedElement);
    // コールバック関数の仕様より
    // thisはインスタンス自身ではなく,this.Elementを指す
    console.log(this)
    const mousePosition = {};
    mousePosition.x = e.x;
    mousePosition.y = e.y;
    switch(draggedElement.className) {
      // サイドバーからのドラッグアンドドロップ
      case "component":
        const image = draggedElement.children[0]
        canvasView.insertCanvasObjectImage(image, mousePosition.x, mousePositiony, this);
        // 新しく登録されたcanvasObjectにイベントの登録                    
          const canvasObjects = document.querySelectorAll('#canvas .canvasObject')
          canvasObjects.forEach(canvasObject => {
            canvasObject.addEventListener('dragstart', dragStartFromCanvasObject, false);
            canvasObject.addEventListener('drop', dragCheck, false);
            canvasObject.addEventListener('click', clickCanvasObject, false);
          });
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

const dorpped = function(e){
  
}

const droppedComponent = function (e) {
  const targetPosition = {};
  mousePosition.x = e.x;
  mousePosition.y = e.y;
  switch(draggedElement.className) {
    // サイドバーからのドラッグアンドドロップ
    case "component":
      const image = draggedElement.children[0]
      View.insertCanvasObjectImage(image, mousePosition.x, mousePositiony, this);
      // 新しく登録されたcanvasObjectにイベントの登録                    
      // const canvasObjects = document.querySelectorAll('#canvas .canvasObject')
      // canvasObjects.forEach(canvasObject => {
      //   canvasObject.addEventListener('dragstart', dragStartFromCanvasObject, false);
      //   canvasObject.addEventListener('drop', dragCheck, false);
      //   canvasObject.addEventListener('click', clickCanvasObject, false);
      // });
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
