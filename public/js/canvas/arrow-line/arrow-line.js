export class AllowLine  {
  
  constructor(start, end, element, line) {
    this.startElement = start;
    this.endElement   = end;
    this.element      = element;
    this.line    = line;
    console.log(this.line);
    window.canvas.arrowLines[this.line._id] = this;
  }
  
  
  
}
