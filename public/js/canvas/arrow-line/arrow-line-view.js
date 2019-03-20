import {LeaderLine} from '../../lib/myleader-line/myleader-line.min.js'

export class ArrowLineView {
  
  static depictArrowLine(start, end) {
    return new LeaderLine(start, end);    
  }
  
  static redepictArrowLine() {
    for(const key in window.canvas.arrowLines) {
      window.canvas.arrowLines[key].line.position();
    }
  }
  
  static removeAllArrowLines() {
    for(const key in window.canvas.arrowLines) {
      window.canvas.arrowLines[key].element.parentNode.removeChild(window.canvas.arrowLines[key].element);
    }
  }
  
}
