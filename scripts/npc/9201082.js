//Author: Moogra
var status = 1;
var gain = 10000;
var cost = 10000000;

function start() {
    cm.sendSimple("Hi #b#h ##k. �A�O�_�Q�η����R�I��?\r\n#L0##b" + gain + "  �I (" + cost + " ����)#k #l\r\n#L1##b" + 10 * gain + " �I (" + cost * 9 + " ����)#k #l");
}
function action(mode, type, selection) {
    if (mode < 1) cm.dispose();
    if (status == 1) {
        if (selection == 0) {
            if (cm.getMeso() >= cost) {
                cm.sendSimple("What would you like?\r\n#L0#�I�� \r\n#L1#�����I��\r\n#L2#�C���{���I��");
                status++;
            } else {
                cm.sendOk("�A�S����!");
                cm.dispose();
            }
        } else if (selection == 1) {
            cost *= 9;
            gain *= 10;
            if (cm.getMeso() >= cost) {
                cm.sendSimple("What would you like?\r\n#L0#�I��\r\n#L1#�����I��\r\n#L2#�C���{���I��");
                status++;
            } else {
                cm.sendOk("�A�S����!");
                cm.dispose();
            }
        }
    }  else if (status == 2) {
        cm.modifyNX(gain,Math.pow(2,selection));
        cm.gainMeso(-cost);
        cm.dispose();
    }
}