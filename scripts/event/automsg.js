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
var Message = new Array("本私服倍率~經驗600倍,金錢在此不說~ 寵物50倍 讓私服更耐玩~",
 "自由市場販賣各種實用物品~歡迎購買",
 "如果海盜要1轉請到自由點萬能NPC,其他職業一轉跟正服一樣",
 "自由轉蛋NPC可以轉屬性法杖以及稀有物品,可以試試運氣!禮物可去能力值NPC換",
 "人物請隨時打@save做存檔的動作,以免回逆",
 "歡迎進入,楓狂之夜私服- ˇ -ˋ祝玩家玩得愉快",
 "NOIP開放使用：IP：diebear.no-ip.org",
 "禁止更改WZ檔案",
 "GM只有2位:GM01,可愛的龍 請不要相信仿冒GM,",
 "GM不會隨便跟玩家索取帳號密碼,請不要相信亂給",
 "如果玩家有任何意見或建議可以去論壇提問",
 "禁止開外掛,後果自己知道",
 "GM24小時都在線上,請不要開外掛,會隨時巡邏查看",
 "官網網址為：http://diebear.no-ip.org/",
 "禁止開破攻登入器,如抓到嚴重處分.不給予機會,且本服有系統封號~提醒您~請不要冒險",
 "請玩家不要搶怪以及吵架,請和諧相處,如發現以記警告一次!滿3次刪除帳號",
 "@help可以查看指令",
 "轉蛋NPC可獲得改良過的神裝,以即捲軸數~最高20捲 可以試試運氣!",
 "在線人數為："+em.Lianjie()); 
    em.getChannelServer().broadcastPacket( 
        net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "楓狂之夜公告: " + Message[Math.floor(Math.random() * Message.length)])); 
    var iter = em.getInstances().iterator(); 
    while (iter.hasNext()) { 
        var eim = iter.next(); 
    } 
}