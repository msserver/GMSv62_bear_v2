/* 
	Machine Apparatus
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("\r\n#L1##b�l��������#k �ɥ�D�� (1��250�U)#l\r\n\#L2#�ǰe�� #b�ۥѥ����J�f#k!#l\r\n\#L3#�ǰe�� #b�~��#k!#l");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= 2500000) {
                    cm.gainMeso(-2500000);
                    cm.gainItem(4031179, 1);
                }
                cm.dispose();
            } else if (selection == 2) {
                cm.resetReactors();
                cm.warp(220000000, 0);
                cm.dispose();
            } else if (selection == 3) {
                cm.resetReactors();
                cm.warp(910000000, 0);
                cm.dispose();
            }
        }
    }
}