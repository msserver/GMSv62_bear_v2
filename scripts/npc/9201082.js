//Author: Moogra
var status = 1;
var gain = 10000;
var cost = 10000000;

function start() {
    cm.sendSimple("Hi #b#h ##k. 你是否想用楓幣買點數?\r\n#L0##b" + gain + "  點 (" + cost + " 楓幣)#k #l\r\n#L1##b" + 10 * gain + " 點 (" + cost * 9 + " 楓幣)#k #l");
}
function action(mode, type, selection) {
    if (mode < 1) cm.dispose();
    if (status == 1) {
        if (selection == 0) {
            if (cm.getMeso() >= cost) {
                cm.sendSimple("What would you like?\r\n#L0#點數 \r\n#L1#楓葉點數\r\n#L2#遊戲現金點數");
                status++;
            } else {
                cm.sendOk("你沒有錢!");
                cm.dispose();
            }
        } else if (selection == 1) {
            cost *= 9;
            gain *= 10;
            if (cm.getMeso() >= cost) {
                cm.sendSimple("What would you like?\r\n#L0#點數\r\n#L1#楓葉點數\r\n#L2#遊戲現金點數");
                status++;
            } else {
                cm.sendOk("你沒有錢!");
                cm.dispose();
            }
        }
    }  else if (status == 2) {
        cm.modifyNX(gain,Math.pow(2,selection));
        cm.gainMeso(-cost);
        cm.dispose();
    }
}