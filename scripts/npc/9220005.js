var status = 0; 
var maps = Array(103000105, 682000403, 251010402, 220060301, 240040600, 250020000, 230040400, 910500000, 910300000, 680010000, 670000100, 990000200, 103000890, 209000001, 980010020, 990000400, 682000304, 920020000); 
var mapsname = Array("#r�j���F(#b�A�X�������a)", "#r��u����(#b�A�X�������a)", "#r����l���s�Φѱ_2 (#b�A�X�������a)", "#r�`�F���s��(#b�A�X���������a)", "#r�D�_�ޤs�p(#b�A�X�������a)", "#r��ŭ׷ҳ�(#b�A�X�������a)", "#r�T��(#b�A�X���������a)", "#r�p��(#b�A�X���������a)", "#r�F�J�|���V�m��(#b�A�X���������a)", "#r�m�\�a��(#b�A�X�C�����a)", "#r�m�\�a��2(#b�A�X�C�����a)", "#r�i�֩Ǧa��(#b�A�X�C�������a)", "#r�����ަa��(#b�A�X�C�����a)", "#r���������a��(#b�A�X�C�����a)", "#r���F�j��k�v(#b�A�X���������a)", "#r���F�a��(#b�A�X���������a)", "#rBOSS�B�s�a��(#b�A�X�������a)", "#r150����ù�K��a��(#b�A�X�������a)"); 
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
            cm.sendYesNo("HI�A�ڬOVIP�M�νm�ų��ǰe�AGM���p�G�A�o�{��n���a�Ͻ��pô�L�I"); 
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