/**
	High Priest John
-- By ---------------------------------------------------------------------------------------------
	Angel (get31720 ragezone) - (Fixed engagement ring problems)
-- Extra Info -------------------------------------------------------------------------------------
	Fixed by  [happydud3] & [XotiCraze]
---------------------------------------------------------------------------------------------------
**/

var status;
var x;
var engageRings = new Array(4031360, 4031358, 4031362, 4031364);
var rings = new Array(1112806, 1112803, 1112807, 1112809);

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
    if (mode == -1 || mode == 0) {
        cm.sendOk("Goodbye then"); 
        cm.dispose();
        return;
    } else if (mode == 1) status++;
    else status--;
        
    if (status == 0) {
        var ring = false;
        for (x = 0; x < rings.length && !ring; x++) {
            if (cm.haveItem(rings[x]))
                ring = true;
        }
        var engage = false;
        for (x = 0; x < engageRings.length && !engage; x++) {
            if (cm.haveItem(engageRings[x]))
                engage = true;
        }
        if (ring > 0) {
            cm.sendOk("You are already married");
            cm.dispose();
        } else if (engage > 0) {
            cm.sendNext("You're ready to be married! Click Next!");
        } else {
            cm.sendOk("You do not have an engagement ring.");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendOk("Congratulations! You are hereby married! You can now participate in special quests for married people ONLY! Always keep your ring!");
        cm.gainItem(engageRings[x-1], -1);
        cm.gainItem(rings[x-1], 1);
        cm.dispose();
    }
}