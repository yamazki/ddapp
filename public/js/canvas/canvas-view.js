export class CanvasView {
  
    
  // $B2hA|$rMWAG$KA^F~$9$k(B
  // @param draggedElement $BE=$jIU$1$k2hA|(B
  // @param xPoint $BE=$jIU$1@h$N(Bx$B:BI8(B
  // @param yPoint $BE=$jIU$1@h$N(By$B:BI8(B
  // @param targetElement $BE=$jIU$1@h$N?FMWAG(B
  // @retrun $BDI2C$7$?(Belement 
  static insertCanvasObjectImage (image, xPoint, yPoint, parentElement) {
    const insertElement = `<span class=canvasObject style="left: ${xPoint - 30}; top: ${yPoint - 30};"> 
                             <img src=${image.src} style="width: 95%; height: 95%">
                           </span>`;
    parentElement.insertAdjacentHTML('afterbegin', insertElement);
    
    // $BDI2C$5$l$?MWAG$O?FMWAG$N:G=i$KMh$k$N$G(B(Chrome$B$@$1!)(B)
    // $B?FMWAG$N0lHV:G=i$NMWAG$r(Breturn
    return parentElement.firstChild;
  }
  
  // $B2hA|$r%I%i%C%0$G0\F0$5$;$k(B
  // @param draggedElement $B0\F0$5$;$k2hA|$NMWAG(B
  // @param xPoint $B0\F0@h$N(Bx$B:BI8(B
  // @param yPoint $B0\F0@h$N(By$B:BI8(B
  static moveImage(draggedElement, xPoint, yPoint) {
    draggedElement.style.left = xPoint
    draggedElement.style.top  = yPoint
  }
  
  // $B%-%c%s%P%9Fb$NMWAG$r:o=|(B
  // @param draggedElement $B:o=|$9$k2hA|$NMWAG(B
  static deleteElement(targetElement) {
    targetElement.remove();
  }
  
}
