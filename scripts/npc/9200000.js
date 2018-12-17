/* [NPC]
	Job Advancer
	Made by Tryst (wasdwasd) of Odinms Forums.
	Please don't release this anywhere else.
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

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
			if (cm.getLevel() < 30) {
				cm.sendNext("�藍�_,�A�٤���30�Ŷi��ĤG����¾,�Ш�30�ŦA�ӧa");
				status = 98;
			} else if (cm.getLevel() >= 30 && cm.getLevel() < 70) {
				cm.sendNext("�ڬO#r���y(Duey)-��¾¾�x#k,�A�ݭn�����U�A��¾��?");
			} else if (cm.getLevel() >= 70 && cm.getLevel() < 120) {
				status = 60;
				cm.sendNext("�ڬO#r���y(Duey)-��¾¾�x#k,�A�ݭn�����U�A��¾��?");
			} else if (cm.getLevel() >=120) {
				status = 101;
				cm.sendNext("�ڬO#r���y(Duey)-��¾¾�x#k,�A�ݭn�����U�A��¾��?");
			}
		} else if (status == 1) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
				cm.sendSimple("�A�w�g�ŦX����A�i�H�i��ĤG����¾�A�п�ܧA��¾�~:#b\r\n#L0#���#l\r\n#L1#�L�s#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
				cm.sendSimple("�A�w�g�ŦX����A�i�H�i��ĤG����¾�A�п�ܧA��¾�~:#b\r\n#L2#�g�Ԥh#l\r\n#L3#�����M�h#l\r\n#L4#�j�M�L#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
				cm.sendSimple("�A�w�g�ŦX����A�i�H�i��ĤG����¾�A�п�ܧA��¾�~:#b\r\n#L5#�k�v(�B,�p)#l\r\n#L6#�k�v(��,�r)#l\r\n#L7#���Q#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
				cm.sendSimple("�A�w�g�ŦX����A�i�H�i��ĤG����¾�A�п�ܧA��¾�~: #b\r\n#L8#�y�H#l\r\n#L9#����#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
				cm.sendSimple("�A�w�g�ŦX����A�i�H�i��ĤG����¾�A�п�ܧA��¾�~: #b\r\n#L10#����#l\r\n#L11#�j��#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("�A���ŦX����,����i����¾");
				cm.dispose();
			}
		} else if (status == 2) {
			var jobName;
			if (selection == 0) {
				jobName = "���";
				job = net.sf.odinms.client.MapleJob.ASSASSIN;
			}
			if (selection == 1) {
				jobName = "�L�s";
				job = net.sf.odinms.client.MapleJob.BANDIT;
			}
			if (selection == 2) {
				jobName = "�����M�h";
				job = net.sf.odinms.client.MapleJob.FIGHTER;
			}
			if (selection == 3) {
				jobName = "�g�Ԥh";
				job = net.sf.odinms.client.MapleJob.PAGE;
			}
			if (selection == 4) {
				jobName = "�j�M�L";
				job = net.sf.odinms.client.MapleJob.SPEARMAN;
			}
			if (selection == 5) {
				jobName = "�k�v(�B,�p)";
				job = net.sf.odinms.client.MapleJob.IL_WIZARD;
			}
			if (selection == 6) {
				jobName = "�k�v(��,�r)";
				job = net.sf.odinms.client.MapleJob.FP_WIZARD;
			}
			if (selection == 7) {
				jobName = "���Q";
				job = net.sf.odinms.client.MapleJob.CLERIC;
			}
			if (selection == 8) {
				jobName = "�y�H";
				job = net.sf.odinms.client.MapleJob.HUNTER;
			}
			if (selection == 9) {
				jobName = "����";
				job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
			}
			if (selection == 10) {
				jobName = "����";
				job = net.sf.odinms.client.MapleJob.BRAWLER;
			}
			if (selection == 11) {
				jobName = "�j��";
				job = net.sf.odinms.client.MapleJob.GUNSLINGER;
			}
			cm.sendYesNo("�A�u���M�w�n�����@�W#r" + jobName + "#k��?");
		} else if (status == 3) {
			cm.changeJob(job);
			cm.sendOk("��¾���\");
		} else if (status == 61) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
				status = 63;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
				status = 66;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
				status = 69;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
				status = 72;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
				status = 75;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
				status = 78;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
				status = 81;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
				status = 84;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
				status = 87;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
				status = 90;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
				status = 93;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
				status = 96;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĤT����¾,�O�_���W��¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("�A���ŦX����,����i����¾");
			}
		} else if (status == 64) {
			cm.changeJob(MapleJob.HERMIT);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�t����#k�F");
		} else if (status == 67) {
			cm.changeJob(MapleJob.CHIEFBANDIT);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r����#k�F");
		} else if (status == 70) {
			cm.changeJob(MapleJob.RANGER);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�Q�r�x#k�F");
		} else if (status == 73) {
			cm.changeJob(MapleJob.SNIPER);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�M�h#k�F");
		} else if (status == 76) {
			cm.changeJob(MapleJob.FP_MAGE);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�s�M�h#k�F");
		} else if (status == 79) {
			cm.changeJob(MapleJob.IL_MAGE);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�Ův(�B,�p)#k�F");
		} else if (status == 82) {
			cm.changeJob(MapleJob.PRIEST);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�Ův(��,�r)#k");
		} else if (status == 85) {
			cm.changeJob(MapleJob.CRUSADER);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r���q#k�F");
		} else if (status == 88) {
			cm.changeJob(MapleJob.WHITEKNIGHT);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r���}��#k�F");
		} else if (status == 91) {
			cm.changeJob(MapleJob.DRAGONKNIGHT);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�C�L#k�F");
		} else if (status == 94) {
			cm.changeJob(MapleJob.MARAUDER);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�氫�a#k�F");
		} else if (status == 97) {
			cm.changeJob(MapleJob.OUTLAW);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r���j��#k�F");
		} else if (status == 99) {
			cm.sendOk("���A�n�B");
			cm.dispose();
		} else if (status == 102) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
				status = 105;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
				status = 108;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
				status = 111;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
				status = 114;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
				status = 117;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
				status = 120;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
				status = 123;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
				status = 126;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
				status = 129;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
				status = 132;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
				status = 135;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?  #r[��¾��]:#k���Q");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
				status = 138;
				cm.sendYesNo("�A�w�g�ŦX����,�i�H�i��ĥ|����¾,�O�_���W�i��ĥ|����¾?   #r[��¾��]:#k�j��");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("�A���ŦX����,����i����¾");
			}
		} else if (status == 106) {
			cm.changeJob(MapleJob.NIGHTLORD);
			cm.teachSkill(4121009,1,1);
			cm.teachSkill(4120002,0,0);
			cm.teachSkill(4121000,20,20);
			cm.teachSkill(4121004,30,30);
			cm.teachSkill(4121008,30,30);
                        cm.teachSkill(4121003,30,30);
                        cm.teachSkill(4121006,30,30);
                        cm.teachSkill(4121007,30,30);
                        cm.teachSkill(4120005,30,30);
                        
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�]�Ϫ�#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 109) {
			cm.changeJob(MapleJob.SHADOWER);
			cm.teachSkill(4221000,20,20);
			cm.teachSkill(4221001,30,30);
			cm.teachSkill(4220002,0,0);
			cm.teachSkill(4221003,30,30);
			cm.teachSkill(4221004,30,30);
			cm.teachSkill(4221007,30,30);
			cm.teachSkill(4221008,1,1);
			cm.teachSkill(4221006,30,30);
                        cm.teachSkill(4220005,30,30);
                        
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�t�v����#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 112) {
			cm.changeJob(MapleJob.BOWMASTER);
			cm.teachSkill(3121009,1,1);
			cm.teachSkill(3120005,30,30);
			cm.teachSkill(3121008,30,30);
			cm.teachSkill(3121003,30,30);
			cm.teachSkill(3121007,30,30);
			cm.teachSkill(3121000,20,20);
                        cm.teachSkill(3121006,30,30);
                        cm.teachSkill(3121002,30,30);
                        cm.teachSkill(3121004,30,30);
                        
                        cm.sendOk("��¾���\,�A�{�b�w�g�O#r���g��#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 115) {
			cm.changeJob(MapleJob.CROSSBOWMASTER);
			cm.teachSkill(3221008,1,1);
			cm.teachSkill(3221006,30,30);
			cm.teachSkill(3220004,30,30);
			cm.teachSkill(3221003,30,30);
			cm.teachSkill(3221005,30,30);
			cm.teachSkill(3221000,10,10);
                        cm.teachSkill(3221001,30,30);
                        cm.teachSkill(3221002,30,30);
                        cm.teachSkill(3221007,30,30);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�b��#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 118) {
			cm.changeJob(MapleJob.FP_ARCHMAGE);
			cm.teachSkill(2121008,1,1);
			cm.teachSkill(2121001,30,30);
			cm.teachSkill(2121005,30,30);
			cm.teachSkill(2121003,30,30);
                        cm.teachSkill(2121004,30,30);
			cm.teachSkill(2121002,30,30);
                        cm.teachSkill(2121000,20,20);
			cm.teachSkill(2121007,30,30);
                        cm.teachSkill(2121006,30,30);
                        
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�]�ɮv(��,�r)#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 121) {
			cm.changeJob(MapleJob.IL_ARCHMAGE);
			cm.teachSkill(2221008,1,1);
			cm.teachSkill(2221001,30,30);
			cm.teachSkill(2221007,30,30);
                        cm.teachSkill(2221006,30,30);
                        cm.teachSkill(2221003,30,30);
                        cm.teachSkill(2221005,30,30);
                        cm.teachSkill(2221004,30,30);
                        cm.teachSkill(2221002,30,30);
                        cm.teachSkill(2221000,20,20);
                        
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�]�ɮv(�B,�p)#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 124) {
			cm.changeJob(MapleJob.BISHOP);
			cm.teachSkill(2321007,30,30);
			cm.teachSkill(2321009,1,1);
			cm.teachSkill(2321003,30,30);
			cm.teachSkill(2321001,30,30);
			cm.teachSkill(2321008,30,30);
		        cm.teachSkill(2321005,30,30);
                        cm.teachSkill(2321004,30,30);
                        cm.teachSkill(2321002,30,30);
                        cm.teachSkill(2321000,20,20);
                        cm.teachSkill(2321006,30,30);
                        
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�D��#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 127) {
			cm.changeJob(MapleJob.HERO);
			cm.teachSkill(1120004,30,30);
			cm.teachSkill(1120003,30,30);
                        cm.teachSkill(1121011,0,0);
			cm.teachSkill(1120005,30,30);
			cm.teachSkill(1121008,30,30);
			cm.teachSkill(1121010,30,30);
                        cm.teachSkill(1121000,20,20);
                        cm.teachSkill(1121001,0,0);
                        cm.teachSkill(1121006,30,30);
                        cm.teachSkill(1121002,30,30);

			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�^��#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 130) {
			cm.changeJob(MapleJob.PALADIN);
			cm.teachSkill(1220005,30,30);
			cm.teachSkill(1220010,10,10);
			cm.teachSkill(1221012,1,1);
			cm.teachSkill(1221009,30,30);
			cm.teachSkill(1220006,30,30);
			cm.teachSkill(1221004,30,30);
			cm.teachSkill(1221003,30,30);
			cm.teachSkill(1221000,20,20);
                        cm.teachSkill(1221001,0,0);
                        cm.teachSkill(1221007,30,30);
                        cm.teachSkill(1221011,30,30);
                        cm.teachSkill(1221002,30,30);

			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�t�M�h#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 133) {
			cm.changeJob(MapleJob.DARKKNIGHT);
			cm.teachSkill(1320005,30,30);
			cm.teachSkill(1320006,30,30);
			cm.teachSkill(1320008,25,25);
			cm.teachSkill(1320009,25,25);
			cm.teachSkill(1321000,20,20);
                        cm.teachSkill(1321001,0,0); 
                        cm.teachSkill(1321002,30,30);
                        cm.teachSkill(1321003,30,30);
                        cm.teachSkill(1321007,10,10);
                        cm.teachSkill(1321010,1,1);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r���M�h#k�F,�åB�Ƿ|�|��ޯ�");
		} else if (status == 136) {
			cm.changeJob(MapleJob.BUCCANEER);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r���Q(Viper)#k�F,�åB�Ƿ|�|��ޯ�,�ޯ�ݭn���]�kNANA�B���ޯ�.");
		} else if (status == 139) {
			cm.changeJob(MapleJob.CORSAIR);
			cm.sendOk("��¾���\,�A�{�b�w�g�O#r�j��(Captain)#k�F,�åB�Ƿ|�|��ޯ�,�ޯ�ݭn���]�kNANA�B���ޯ�.");
		}
	}
}	

