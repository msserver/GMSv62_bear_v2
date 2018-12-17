var status = 0; 
function start() { 
 cm.sendYesNo("你確定要出去,回到自由市場?"); 
} 
function action(mode, type, selection) { 
 if (mode == 1) { 
  if (cm.getChar().getGender() == 0) { 
   cm.warp(910000000); 
  } else { 
   cm.warp(910000000); 
  } 
 } 
 cm.dispose(); 
} 