import {CanvasObjectEvent} from './canvas-object-event.js'

let id = 0;
export class CanvasObject {
  
  constructor(element) {
    this.element = element;
    this.registerEvents();
    this.id = id++
    console.log(this.id);
    console.log(this);
    window.canvas.canvasObjects[this.id] = this;
  }
  
  setId() {
  }
  
  registerEvents() {
    this.element.addEventListener('dragstart', CanvasObjectEvent.dragstart, false);
    this.element.addEventListener('drop', CanvasObjectEvent.drop, false);
    this.element.addEventListener('click', CanvasObjectEvent.click, false);
  }
}
