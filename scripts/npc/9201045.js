var status = 0; 
var maps = Array(100000005, 105070002, 800010100, 105090900, 682000001, 240020101, 240020401, 230040420, 990000900, 801040003, 220080001, 211042400, 240060200, 800020130); 
var mapsname = Array("�K�ҽޤ��颻(Ĩۣ��)", "Ĩۣ������(�L��Ĩۣ��)", "�Ѭӷ���(��Ĩۣ��)", "�Q�A�G���x�|(������)", "�ۼv�˪L(�]��)", "����h�˪L(���N)", "�Q���s�Ϯ��a(���s)", "�֨ȥ����}��(����)", "��̴����y", "�饻�s�j", "�ɶ��𪺥���(�x��)", "���]", "�t���s���}��", "�Ѫ�"); 
var selectedMap = -1; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (status >= 3 && mode == 0) { 
            cm.sendOk("�n��,�p�G�A�M�w�n�h����,�ڷ|�ַܼN�ǰe�A��."); 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else { 
            cm.sendOk("�n��,�p�G�A�M�w�n�h����,�ڷ|�ַܼN�ǰe�A��."); 
            cm.dispose(); 
            return; 
        } if (status == 0) { 
            cm.sendYesNo("HI�A�ڬOVIP�M��BOSS�Ū��Ǫ��ǰe���Ať��GM���b�Ҽ{�������q���a������BOSS�ǰe�A���L�A�OVIP���ܴN���ξ�ߤF�I"); 
        } else if (status == 1) { 
            var selStr = "��ܧA���ت��a.#b"; 
                for (var i = 0; i < maps.length; i++) { 
                selStr += "\r\n#L" + i + "#" + mapsname[ i ]+""; 
                } 
            cm.sendSimple(selStr); 
            
        } else if (status == 2) { 
            cm.sendYesNo("�A�u���n�h " + mapsname[selection] + "��?"); 
            selectedMap = selection; 
        } 
        
        else if (status == 3) { 
            cm.warp(maps[selectedMap], 0); 
            cm.dispose(); 
        }
    }
}