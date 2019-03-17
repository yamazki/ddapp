import {CanvasObjectEvent} from './canvas-object-event.js'

export class CanvasObject {
  
  constructor(element, id) {
    this.element = element;
    this.id = id;
    this.registerEvents();
  }
  
  setId() {
  }
  
  registerEvents() {
    this.element.addEventListener('dragstart', CanvasObjectEvent.dragstart, false);
    this.element.addEventListener('drop', CanvasObjectEvent.drop, false);
    this.element.addEventListener('click', CanvasObjectEvent.click, false);
  }
}
