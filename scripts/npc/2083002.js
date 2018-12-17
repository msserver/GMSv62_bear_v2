/*@author Jvlaple
  *Crystal of Roots
  */

var status = 0;
var PQItems = Array(4001087, 4001088, 4001089, 4001090, 4001091, 4001092, 4001093);

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.sendOk("好了, 把你傳送出去了!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if(cm.getChar().getMapId()!=240050500){
			if (status == 0 ) {
				cm.sendYesNo("你要出去了嗎?請案YES 如果沒打完龍王或不敢打 你就是個膽小鬼.出去表示認輸..");
			} else if (status == 1) {
				var eim = cm.getPlayer().getEventInstance();
				cm.warp(240050500);
				if (eim != null) {
					eim.unregisterPlayer(cm.getPlayer());
				}cm.dispose();
			}
		}else if(cm.getChar().getMapId()==240050500){
			if (status==0) {
				cm.sendNext("辛苦囉勇士們!下次再挑戰一次吧~QQ :)");				
			}else if (status == 1){
				for (var i = 0; i < PQItems.length; i++) {
					cm.removeAll(PQItems[i]);
				}
				cm.warp(240040700);
				cm.dispose();
			}
		}
	}
}	