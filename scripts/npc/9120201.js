/* Konpei (9120201)
 * Bain Armory Version
 */

importPackage(net.sf.odinms.server.maps);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("Are you ready to fight the boss?");
        }
        if (status == 1) {
            cm.warp(801040100, 0);
            cm.dispose();
        }
    }
}  