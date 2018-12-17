/*
    This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                      Matthias Butz <matze@odinms.de>
                      Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() { 
    var cal = java.util.Calendar.getInstance(); 
    cal.set(java.util.Calendar.HOUR, 3); 
    cal.set(java.util.Calendar.MINUTE, 50); 
    cal.set(java.util.Calendar.SECOND, 0); 
    var nextTime = cal.getTimeInMillis(); 
    while (nextTime <= java.lang.System.currentTimeMillis()) { 
        nextTime += 1000 * 50 * 1; // Every 1 hour.
    } 
    setupTask = em.scheduleAtTimestamp("start", nextTime); 
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
var Message = new Array("���p�A���v~�g��600��,�����b������~ �d��50�� ���p�A��@��~",
 "�ۥѥ����c��U�ع�Ϊ��~~�w���ʶR",
 "�p�G���s�n1��Ш�ۥ��I�U��NPC,��L¾�~�@��򥿪A�@��",
 "�ۥ���JNPC�i�H���ݩʪk���H�ε}�����~,�i�H�ոչB��!§���i�h��O��NPC��",
 "�H�����H�ɥ�@save���s�ɪ��ʧ@,�H�K�^�f",
 "�w��i�J,���g���]�p�A- �� -�������a���o�r��",
 "NOIP�}��ϥΡGIP�Gdiebear.no-ip.org",
 "�T����WZ�ɮ�",
 "GM�u��2��:GM01,�i�R���s �Ф��n�۫H��_GM,",
 "GM���|�H�K�򪱮a�����b���K�X,�Ф��n�۫H�õ�",
 "�p�G���a������N���Ϋ�ĳ�i�H�h�׾´���",
 "�T��}�~��,��G�ۤv���D",
 "GM24�p�ɳ��b�u�W,�Ф��n�}�~��,�|�H�ɨ��ެd��",
 "�x�����}���Ghttp://diebear.no-ip.org/",
 "�T��}�}��n�J��,�p����Y���B��.���������|,�B���A���t�Ϋʸ�~�����z~�Ф��n�_�I",
 "�Ъ��a���n�m�ǥH�Χn�[,�ЩM�Ӭ۳B,�p�o�{�H�Oĵ�i�@��!��3���R���b��",
 "@help�i�H�d�ݫ��O",
 "��JNPC�i��o��}�L������,�H�Y���b��~�̰�20�� �i�H�ոչB��!",
 "�b�u�H�Ƭ��G"+em.Lianjie()); 
    em.getChannelServer().broadcastPacket( 
        net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "���g���]���i: " + Message[Math.floor(Math.random() * Message.length)])); 
    var iter = em.getInstances().iterator(); 
    while (iter.hasNext()) { 
        var eim = iter.next(); 
    } 
}