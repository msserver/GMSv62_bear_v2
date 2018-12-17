/*
		Author: Frisby
		NPC   : 9010008 - pettite
		Use   : Give a selection of All Pets in exchange for Jewel
 */
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (cm.getPlayer().getMapId() != 109010110) {
            cm.dispose();
        }
        if (mode == 0) {
            cm.sendOk("Ow Wow.. Ok Lol Bye :D");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0 && cm.getPlayer().getMapId() == 109010110) { // change according to which ever npc you use that might already be in use
            if (cm.haveItem(4031574, 1)) { // change if u want the npc to take ANOTHER item instead of event ticket.
                cm.sendOk("Great!");
            } else {
                cm.sendYesNo("Would you like to get out of here?!");
                status = 1;
            }
        } else if (status == 1) {
            cm.completeQuest(100200);
            cm.removeAll(4031574);
            cm.warp(100000000);
            cm.dispose();
        } else if (status == 2) {
            cm.warp(100000000);
            cm.removeAll(4031574);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}