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
            cm.sendSimple("\r\n#L1##b召喚鐘王物#k 時光D片 (1個250萬)#l\r\n\#L2#傳送到 #b自由市場入口#k!#l\r\n\#L3#傳送到 #b外面#k!#l");
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