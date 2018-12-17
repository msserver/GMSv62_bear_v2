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
				cm.sendNext("對不起,你還不夠30級進行第二次轉職,請到30級再來吧");
				status = 98;
			} else if (cm.getLevel() >= 30 && cm.getLevel() < 70) {
				cm.sendNext("我是#r杜宜(Duey)-轉職職官#k,你需要我幫助你轉職嗎?");
			} else if (cm.getLevel() >= 70 && cm.getLevel() < 120) {
				status = 60;
				cm.sendNext("我是#r杜宜(Duey)-轉職職官#k,你需要我幫助你轉職嗎?");
			} else if (cm.getLevel() >=120) {
				status = 101;
				cm.sendNext("我是#r杜宜(Duey)-轉職職官#k,你需要我幫助你轉職嗎?");
			}
		} else if (status == 1) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
				cm.sendSimple("你已經符合條件，可以進行第二次轉職，請選擇你的職業:#b\r\n#L0#刺客#l\r\n#L1#俠盜#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
				cm.sendSimple("你已經符合條件，可以進行第二次轉職，請選擇你的職業:#b\r\n#L2#狂戰士#l\r\n#L3#見習騎士#l\r\n#L4#槍騎兵#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
				cm.sendSimple("你已經符合條件，可以進行第二次轉職，請選擇你的職業:#b\r\n#L5#法師(冰,雷)#l\r\n#L6#法師(火,毒)#l\r\n#L7#僧侶#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
				cm.sendSimple("你已經符合條件，可以進行第二次轉職，請選擇你的職業: #b\r\n#L8#獵人#l\r\n#L9#弩手#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
				cm.sendSimple("你已經符合條件，可以進行第二次轉職，請選擇你的職業: #b\r\n#L10#打手#l\r\n#L11#槍手#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("你不符合條件,不能進行轉職");
				cm.dispose();
			}
		} else if (status == 2) {
			var jobName;
			if (selection == 0) {
				jobName = "刺客";
				job = net.sf.odinms.client.MapleJob.ASSASSIN;
			}
			if (selection == 1) {
				jobName = "俠盜";
				job = net.sf.odinms.client.MapleJob.BANDIT;
			}
			if (selection == 2) {
				jobName = "見習騎士";
				job = net.sf.odinms.client.MapleJob.FIGHTER;
			}
			if (selection == 3) {
				jobName = "狂戰士";
				job = net.sf.odinms.client.MapleJob.PAGE;
			}
			if (selection == 4) {
				jobName = "槍騎兵";
				job = net.sf.odinms.client.MapleJob.SPEARMAN;
			}
			if (selection == 5) {
				jobName = "法師(冰,雷)";
				job = net.sf.odinms.client.MapleJob.IL_WIZARD;
			}
			if (selection == 6) {
				jobName = "法師(火,毒)";
				job = net.sf.odinms.client.MapleJob.FP_WIZARD;
			}
			if (selection == 7) {
				jobName = "僧侶";
				job = net.sf.odinms.client.MapleJob.CLERIC;
			}
			if (selection == 8) {
				jobName = "獵人";
				job = net.sf.odinms.client.MapleJob.HUNTER;
			}
			if (selection == 9) {
				jobName = "弩手";
				job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
			}
			if (selection == 10) {
				jobName = "打手";
				job = net.sf.odinms.client.MapleJob.BRAWLER;
			}
			if (selection == 11) {
				jobName = "槍手";
				job = net.sf.odinms.client.MapleJob.GUNSLINGER;
			}
			cm.sendYesNo("你真的決定要成為一名#r" + jobName + "#k嗎?");
		} else if (status == 3) {
			cm.changeJob(job);
			cm.sendOk("轉職成功");
		} else if (status == 61) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
				status = 63;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
				status = 66;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
				status = 69;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
				status = 72;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
				status = 75;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
				status = 78;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
				status = 81;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
				status = 84;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
				status = 87;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
				status = 90;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
				status = 93;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
				status = 96;
				cm.sendYesNo("你已經符合條件,可以進行第三次轉職,是否馬上轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("你不符合條件,不能進行轉職");
			}
		} else if (status == 64) {
			cm.changeJob(MapleJob.HERMIT);
			cm.sendOk("轉職成功,你現在已經是#r暗殺者#k了");
		} else if (status == 67) {
			cm.changeJob(MapleJob.CHIEFBANDIT);
			cm.sendOk("轉職成功,你現在已經是#r神偷#k了");
		} else if (status == 70) {
			cm.changeJob(MapleJob.RANGER);
			cm.sendOk("轉職成功,你現在已經是#r十字軍#k了");
		} else if (status == 73) {
			cm.changeJob(MapleJob.SNIPER);
			cm.sendOk("轉職成功,你現在已經是#r騎士#k了");
		} else if (status == 76) {
			cm.changeJob(MapleJob.FP_MAGE);
			cm.sendOk("轉職成功,你現在已經是#r龍騎士#k了");
		} else if (status == 79) {
			cm.changeJob(MapleJob.IL_MAGE);
			cm.sendOk("轉職成功,你現在已經是#r巫師(冰,雷)#k了");
		} else if (status == 82) {
			cm.changeJob(MapleJob.PRIEST);
			cm.sendOk("轉職成功,你現在已經是#r巫師(火,毒)#k");
		} else if (status == 85) {
			cm.changeJob(MapleJob.CRUSADER);
			cm.sendOk("轉職成功,你現在已經是#r祭司#k了");
		} else if (status == 88) {
			cm.changeJob(MapleJob.WHITEKNIGHT);
			cm.sendOk("轉職成功,你現在已經是#r弩弓手#k了");
		} else if (status == 91) {
			cm.changeJob(MapleJob.DRAGONKNIGHT);
			cm.sendOk("轉職成功,你現在已經是#r遊俠#k了");
		} else if (status == 94) {
			cm.changeJob(MapleJob.MARAUDER);
			cm.sendOk("轉職成功,你現在已經是#r格鬥家#k了");
		} else if (status == 97) {
			cm.changeJob(MapleJob.OUTLAW);
			cm.sendOk("轉職成功,你現在已經是#r神槍手#k了");
		} else if (status == 99) {
			cm.sendOk("祝你好運");
			cm.dispose();
		} else if (status == 102) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
				status = 105;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
				status = 108;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
				status = 111;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
				status = 114;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
				status = 117;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
				status = 120;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
				status = 123;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
				status = 126;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
				status = 129;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
				status = 132;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
				status = 135;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?  #r[轉職為]:#k拳霸");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
				status = 138;
				cm.sendYesNo("你已經符合條件,可以進行第四次轉職,是否馬上進行第四次轉職?   #r[轉職為]:#k槍神");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("你不符合條件,不能進行轉職");
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
                        
			cm.sendOk("轉職成功,你現在已經是#r夜使者#k了,並且學會四轉技能");
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
                        
			cm.sendOk("轉職成功,你現在已經是#r暗影神偷#k了,並且學會四轉技能");
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
                        
                        cm.sendOk("轉職成功,你現在已經是#r神射手#k了,並且學會四轉技能");
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
			cm.sendOk("轉職成功,你現在已經是#r箭神#k了,並且學會四轉技能");
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
                        
			cm.sendOk("轉職成功,你現在已經是#r魔導師(火,毒)#k了,並且學會四轉技能");
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
                        
			cm.sendOk("轉職成功,你現在已經是#r魔導師(冰,雷)#k了,並且學會四轉技能");
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
                        
			cm.sendOk("轉職成功,你現在已經是#r主教#k了,並且學會四轉技能");
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

			cm.sendOk("轉職成功,你現在已經是#r英雄#k了,並且學會四轉技能");
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

			cm.sendOk("轉職成功,你現在已經是#r聖騎士#k了,並且學會四轉技能");
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
			cm.sendOk("轉職成功,你現在已經是#r黑騎士#k了,並且學會四轉技能");
		} else if (status == 136) {
			cm.changeJob(MapleJob.BUCCANEER);
			cm.sendOk("轉職成功,你現在已經是#r拳霸(Viper)#k了,並且學會四轉技能,技能需要到魔法NANA處滿技能.");
		} else if (status == 139) {
			cm.changeJob(MapleJob.CORSAIR);
			cm.sendOk("轉職成功,你現在已經是#r槍神(Captain)#k了,並且學會四轉技能,技能需要到魔法NANA處滿技能.");
		}
	}
}	

