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
UnitTypes.flare.health = 150;
UnitTypes.horizon.health = 410;
UnitTypes.horizon.armor = 2
UnitTypes.zenith.health = 3100;
UnitTypes.zenith.armor = 7;
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
UnitTypes.retusa.health = 600;
UnitTypes.oxynoe.health = 1000;
UnitTypes.cyerce.health = 3600;
UnitTypes.risso.health = 750;
UnitTypes.minke.health = 2100;
UnitTypes.bryde.health = 5100;

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


// --- Air Units ---

setUnitWeaponDamage(UnitTypes.flare, 15.0);
setUnitWeaponSplashDamage(UnitTypes.horizon, 50.0);
setUnitWeaponDamage(UnitTypes.zenith, 30.0);
setUnitWeaponSplashDamage(UnitTypes.zenith, 30.0);


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
setUnitWeaponDamage(UnitTypes.pulsar, 40.0);
setUnitWeaponDamage(UnitTypes.quasar, 120.0);



// ==========================================
// Mixed Tech Rebalance - Turret Damage Functions
// ==========================================

function setAmmoDamage(turret, ammo, damage) {
    if (turret == null || turret.ammoTypes == null) return;

    const bullet = turret.ammoTypes.get(ammo);
    if (bullet == null) return;

    bullet.damage = damage;
}

function setAmmoSplashDamage(turret, ammo, damage) {
    if (turret == null || turret.ammoTypes == null) return;

    const bullet = turret.ammoTypes.get(ammo);
    if (bullet == null) return;

    bullet.splashDamage = damage;
}

function setAmmoFragDamage(turret, ammo, damage) {
    if (turret == null || turret.ammoTypes == null) return;

    const bullet = turret.ammoTypes.get(ammo);
    if (bullet == null || bullet.fragBullet == null) return;

    bullet.fragBullet.damage = damage;
}

// ==========================================
// Turrets
// ==========================================

// --- Duo ---
setAmmoDamage(Blocks.duo, Items.copper, 18);
setAmmoDamage(Blocks.duo, Items.graphite, 36);
setAmmoDamage(Blocks.duo, Items.silicon, 18);

// --- Scatter ---
setAmmoSplashDamage(Blocks.scatter, Items.lead, 60);
setAmmoSplashDamage(Blocks.scatter, Items.metaglass, 80);
setAmmoSplashDamage(Blocks.scatter, Items.scrap, 45);

// --- Scorch ---
setAmmoDamage(Blocks.scorch, Items.coal, 34);
setAmmoDamage(Blocks.scorch, Items.pyratite, 50);

// --- Hail ---
setAmmoDamage(Blocks.hail, Items.graphite, 55);
setAmmoDamage(Blocks.hail, Items.silicon, 55);
setAmmoDamage(Blocks.hail, Items.pyratite, 65);

// ==========================================
// Salvo
// ==========================================

setAmmoDamage(Blocks.salvo, Items.copper, 30);
setAmmoDamage(Blocks.salvo, Items.graphite, 62);
setAmmoDamage(Blocks.salvo, Items.pyratite, 50);
setAmmoSplashDamage(Blocks.salvo, Items.pyratite, 30);
setAmmoDamage(Blocks.salvo, Items.silicon, 46);
setAmmoDamage(Blocks.salvo, Items.thorium, 56);

// ==========================================
// Fuse
// ==========================================

setAmmoDamage(Blocks.fuse, Items.titanium, 132);
setAmmoDamage(Blocks.fuse, Items.thorium, 210);

// ==========================================
// Ripple
// ==========================================

setAmmoDamage(Blocks.ripple, Items.graphite, 80);
setAmmoSplashDamage(Blocks.ripple, Items.graphite, 140);

setAmmoDamage(Blocks.ripple, Items.silicon, 80);
setAmmoSplashDamage(Blocks.ripple, Items.silicon, 140);

setAmmoDamage(Blocks.ripple, Items.pyratite, 96);
setAmmoSplashDamage(Blocks.ripple, Items.pyratite, 180);

setAmmoDamage(Blocks.ripple, Items.blastCompound, 80);
setAmmoSplashDamage(Blocks.ripple, Items.blastCompound, 180);

setAmmoDamage(Blocks.ripple, Items.plastanium, 80);
setAmmoSplashDamage(Blocks.ripple, Items.plastanium, 180);
setAmmoFragDamage(Blocks.ripple, Items.plastanium, 28);

// ==========================================
// Cyclone
// ==========================================

setAmmoDamage(Blocks.cyclone, Items.metaglass, 12);
setAmmoSplashDamage(Blocks.cyclone, Items.metaglass, 90);
setAmmoFragDamage(Blocks.cyclone, Items.metaglass, 24);

setAmmoDamage(Blocks.cyclone, Items.blastCompound, 16);
setAmmoSplashDamage(Blocks.cyclone, Items.blastCompound, 90);

setAmmoDamage(Blocks.cyclone, Items.plastanium, 16);
setAmmoSplashDamage(Blocks.cyclone, Items.plastanium, 75);
setAmmoFragDamage(Blocks.cyclone, Items.plastanium, 24);

setAmmoDamage(Blocks.cyclone, Items.surgeAlloy, 26);
setAmmoSplashDamage(Blocks.cyclone, Items.surgeAlloy, 150);

// ==========================================
// Spectre
// ==========================================

setAmmoDamage(Blocks.spectre, Items.graphite, 100);
setAmmoDamage(Blocks.spectre, Items.thorium, 160);
setAmmoDamage(Blocks.spectre, Items.pyratite, 140);
setAmmoSplashDamage(Blocks.spectre, Items.pyratite, 40);

// ==========================================
// Arc and Lancer
// ==========================================

if (Blocks.arc != null && Blocks.arc.shootType != null) {
    Blocks.arc.shootType.damage = 24;
}

if (Blocks.lancer != null && Blocks.lancer.shootType != null) {
    Blocks.lancer.shootType.damage = 280;
}

// ==========================================
// Wave - Liquid Ammo
// ==========================================

setAmmoDamage(Blocks.wave, Liquids.slag, 8);

// ==========================================
// Tsunami - Liquid Ammo
// ==========================================

setAmmoDamage(Blocks.tsunami, Liquids.water, 0.4);
setAmmoDamage(Blocks.tsunami, Liquids.slag, 9.5);
setAmmoDamage(Blocks.tsunami, Liquids.cryofluid, 0.4);
setAmmoDamage(Blocks.tsunami, Liquids.oil, 0.4);

// ==========================================
// Segment - Point Defense
// ==========================================

Blocks.segment.bulletDamage = 60;

// ==========================================
// Parallax - Custom DPS
// ==========================================

Blocks.parallax.damage = 70 / 60;
