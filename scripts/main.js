UnitTypes.collaris.legCount = 10
UnitTypes.latum.hidden = false
UnitTypes.renale.hidden = false
// Redibujar el Command Center por encima de las unidades terrestres.
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
