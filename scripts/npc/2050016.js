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
			cm.sendYesNo("我是做啥?的?我忘記了!可能大G還沒開放");
		} else if (status == 1) {
			cm.warp(910000000, 0);
			cm.dispose();
		}
	}
}