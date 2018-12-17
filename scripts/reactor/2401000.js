function act() {
    rm.mapMessage(5, "隨著震耳的恐怖聲音,暗黑龍王,終於出現了.各位勇士們~快打倒吧");
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810026, 76, 260);
    rm.createMapMonitor(2,240050400,"sp","8810010,8810011,8810012,8810013,8810014,8810015,8810016,8810017",0,8810018);
    rm.createMapMonitor(2,240050400,"sp","8810002,8810004,8810005,8810006,8810007,8810008,8810009",1,8810003);
    //the map id and portal name is choosen randomly here, so u guys change accordingly
}