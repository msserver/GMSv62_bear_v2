importPackage(net.sf.odinms.client);

var status = 0;
var price = 1;
var skills = new Array(4101004, 1001, 1001003, 2001003, 2001002, 3001003, 1101007, 1101006, 1101005, 1201005, 1201004, 1201006, 1005, 1301007, 1301006, 1301005, 1301004, 2101001, 2301003, 5101003, 3101002, 3101004, 3201002, 4101003, 4201002, 1111002, 1211006, 1211004, 1211003, 1211005, 1211008, 1211007, 1311008, 2111005, 2311003, 4111001, 4111002, 4211005, 4211003, 1121000, 1221004, 1221003, 2121004, 2121002, 3121002, 4121006); 

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) 
        cm.dispose();
    else {
        if (mode == 0)
            cm.dispose();
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var seleskill = "�� #h #,�ڬO�[�ޯ�npc-�~�P��!�p�G�A������ �ڴN�����A�F!!���� �o�ǧޯ�O�s��o�̴Ϊ����U~~\r\n�����O�K�O�� �����a.\r\n#r#e�ɥR:#n: �ӥB�� ���ݭn���ӥ���MP.#k\r\n#b" + price + " �]���৹�����K�O �u�n1��XD �N��@�����a .#b";
            for (var i = 0; i < skills.length; i++) {
                seleskill += "\r\n#L" + i + "##s" + skills[i] + "#     #q" + skills[i] + "##l";
            }
            seleskill += "#k";
            cm.sendSimple(seleskill);
        } else if (status == 1) {
            if (cm.getMeso() < price) {
                cm.sendOk("�A�s�@�����S�� �رi #h #.");
                cm.dispose();
            } else {
                var buff = SkillFactory.getSkill(skills[selection]);
                cm.sendOk("Enjoy your buff.");
                cm.gainMeso(-price);
                cm.giveBuff(skills[selection], buff.getMaxLevel());
                cm.dispose();
            }
        }
    }
}  