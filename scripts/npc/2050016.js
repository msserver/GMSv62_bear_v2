var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("�ڬO��ԣ?��?�ڧѰO�F!�i��jG�٨S�}��");
		} else if (status == 1) {
			cm.warp(910000000, 0);
			cm.dispose();
		}
	}
}