function trd(str) {
    const fr = {
        // Loot
        metal: 'Métal',
        crystal: 'Cristal',
        deuterium: 'Deutérium',

        // Ships
        small_carrier: 'Petit transporteur',
        large_carrier: 'Grand transporteur',
        light_fighter: 'Chasseur léger',
        heavy_fighter: 'Chasseur lourd',
        cruiser: 'Croiseur',
        battlecruiser: 'Vaisseau de bataille',
        colonization_ships: 'Vaiseau de colonisation',
        recycler: 'Recycleur',
        spy_probe: 'Sonde d\'espionnage',
        bomber: 'Bombardier',
        destroyer: 'Destructeur',
        death_star: 'Étoile de la mort',
        tracker: 'Traqueur',
        reaper: 'Faucheur',
        pathfinder: 'Éclaireur'
    };

    return fr[str] ?? 'No traduction for ' + str;
}