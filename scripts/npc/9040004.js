/* Honorable Rock (9010002)
	Boss Warp NPC
	 
 */

var status = 0;
var maps = Array(105090900, 221020701, 682000001, 801040100, 240020401, 240020101, 221030601, 221040400, 801040003, 230040420, 105090300, 211042300, 220080000, 800020130, 100000005, 105070002, 801040001, 800010100, 240040700);
var cost = Array(200000, 100000, 300000, 1000000, 500000, 500000, 100000, 100000, 500000, 500000, 100000, 2000000, 1000000, 1000000, 100000, 200000, 500000, 500000, 10000000);
var costBeginner = Array(20000, 10000, 30000, 100000, 50000, 50000, 10000, 10000, 50000, 50000, 10000, 200000, 100000, 100000, 10000, 20000, 50000, 50000, 1000000);
var selectedMap = -1;
var job;

importPackage(net.sf.odinms.client);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("Alright, see you next time.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("I'm the Honorable Rock.");
        } else if (status == 1) {
            cm.sendNextPrev("I can take you to every boss that works for a reasonable fee, depending on the boss. Beginners will get a 90% discount on normal prices.")
        } else if (status == 2) {
            var selStr = "Select your destination.#b";
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                for (var i = 0; i < maps.length; i++) {
                    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " meso)#l";
                }
            } else {
                for (var i = 0; i < maps.length; i++) {
                    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " meso)#l";
                }
            }
            cm.sendSimple(selStr);
        } else if (status == 3) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getMeso() < costBeginner[selection]) {
                    cm.sendOk("You do not have enough mesos.")
                    cm.dispose();
                } else {
                    cm.sendYesNo("So you have nothing left to do here? Do you want to go to #m" + maps[selection] + "#?");
                    selectedMap = selection;
                }
            }
            else {
                if (cm.getMeso() < cost[selection]) {
                    cm.sendOk("You do not have enough mesos.")
                    cm.dispose();
                } else {
                    cm.sendYesNo("So you have nothing left to do here? Do you want to go to #m" + maps[selection] + "#?");
                    selectedMap = selection;
                }
            }		
        } else if (status == 4) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                cm.gainMeso(-costBeginner[selectedMap]);
            }
            else {
                cm.gainMeso(-cost[selectedMap]);
            }
            cm.warp(maps[selectedMap], 0);
            cm.dispose();
        }
    }
}	

