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
UnitTypes.zenith.health = 3100;
UnitTypes.zenith.armor = 7;
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

// ==========================================
// Mixed Tech Rebalance - Unit Damage
// ==========================================

function setBulletDamage(weapon, damage) {
    if (weapon == null || weapon.bullet == null) return;
    weapon.bullet.damage = damage;
}

function setUnitWeaponDamage(unit, damage) {
    if (unit == null || unit.weapons == null) return;

    unit.weapons.each(weapon => {
        setBulletDamage(weapon, damage);
    });
}

function setUnitWeaponDamageByIndex(unit, index, damage) {
    if (unit == null || unit.weapons == null) return;
    if (index < 0 || index >= unit.weapons.size) return;

    setBulletDamage(unit.weapons.get(index), damage);
}

// --- Mech tree ---

setUnitWeaponDamage(UnitTypes.dagger, 15.0);
setUnitWeaponDamage(UnitTypes.mace, 90.0);
setUnitWeaponDamage(UnitTypes.fortress, 150.0);


// --- green mech tree ---

// --- Purple spider tree ---

const crawler = UnitTypes.crawler;
if (crawler != null && crawler.weapons.size > 0) {
    const weapon = crawler.weapons.get(0);

    if (weapon.bullet != null) {
        weapon.bullet.splashDamage = 150.0;
    }
}

setUnitWeaponDamage(UnitTypes.atrax, 45.0);
setUnitWeaponDamageByIndex(UnitTypes.spiroct, 0, 34.5);
setUnitWeaponDamageByIndex(UnitTypes.spiroct, 1, 27.0);

// --- Core units ---

setUnitWeaponDamage(UnitTypes.alpha, 15.75);
setUnitWeaponDamage(UnitTypes.beta, 15.75);
setUnitWeaponDamage(UnitTypes.gamma, 15.75);

// --- Function that makes continuous damage changes possible ----
function setContinuousLaserTotalDamage(weapon, totalDamage) {
    if (weapon == null || weapon.bullet == null) return;
    const bullet = weapon.bullet;
    if (bullet.damageInterval <= 0 || bullet.lifetime <= 0) return;
    const damageTicks = bullet.lifetime / bullet.damageInterval;
    bullet.damage = totalDamage / damageTicks;
}

const vela = UnitTypes.vela;

if (vela != null && vela.weapons.size > 0) {
    setContinuousLaserTotalDamage(vela.weapons.get(0), 600.0);
}
setUnitWeaponDamage(UnitTypes.pulsar, 40.0);.
setUnitWeaponDamage(UnitTypes.quasar, 120.0);
