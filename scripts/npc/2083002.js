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
			cm.sendOk("�n�F, ��A�ǰe�X�h�F!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if(cm.getChar().getMapId()!=240050500){
			if (status == 0 ) {
				cm.sendYesNo("�A�n�X�h�F��?�Ю�YES �p�G�S�����s���Τ����� �A�N�O���x�p��.�X�h��ܻ{��..");
			} else if (status == 1) {
				var eim = cm.getPlayer().getEventInstance();
				cm.warp(240050500);
				if (eim != null) {
					eim.unregisterPlayer(cm.getPlayer());
				}cm.dispose();
			}
		}else if(cm.getChar().getMapId()==240050500){
			if (status==0) {
				cm.sendNext("���W�o�i�h��!�U���A�D�Ԥ@���a~QQ :)");				
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