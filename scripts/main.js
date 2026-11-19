UnitTypes.collaris.legCount = 10
UnitTypes.latum.hidden = false
UnitTypes.renale.hidden = false
// Failed draw of Command Center above stuff, rework pending.
Events.run(Trigger.draw, () => {
    Draw.draw(Layer.groundUnit + 1, () => {
        Groups.build.each(build => {
            if (
                build != null &&
                build.block != null &&
                build.block.name == "command-center"
            ) {
                build.draw();
            }
        });
    });
});
// ==========================================
// Mixed Tech Rebalance 
// ==========================================
UnitTypes.dagger.health = 650;
UnitTypes.mace.health = 1800;
UnitTypes.fortress.health = 4000;
UnitTypes.zenith.health = 2000;
UnitTypes.zenith.armor = 3;
UnitTypes.risso.health = 750;
UnitTypes.mono.health = 300;
UnitTypes.poly.health = 650;
UnitTypes.mega.health = 1000;
UnitTypes.nova.health = 900;
UnitTypes.pulsar.health = 1000;
UnitTypes.quasar.health = 2300;
UnitTypes.crawler.health = 300;
UnitTypes.atrax.health = 1100;
UnitTypes.spiroct.health = 3000;
UnitTypes.alpha.health = 400;
UnitTypes.beta.health = 600;
UnitTypes.gamma.health = 800;
