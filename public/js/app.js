const app = Vue.createApp({
    mixins: [myMixins],
    data: function () {
        return {
            data_form: {
                univers: {
                    
                },
                players: [
                    defaultPlayer()
                ]
            },
            results: false
        }
    },
    methods: {
        addPlayer: function () {
            this.data_form.players.push(defaultPlayer())
        },
        deletePlayer: function (index) {
            if (this.data_form.players.length > 1) {
                this.data_form.players.splice(index, 1);
            }
        },
        resetFields: function (index) {
            this.data_form.players[index] = defaultPlayer();
        },
        refreshAll: function() {
            window.location.reload();
        },
        calculate: function() {
            let results = {};
            let playerName = '';
            let i = 1;

            for (player of this.data_form.players) {
                playerName = player.name;

                if (player.name == '') {
                    playerName = 'Joueur ' + i;
                }

                results[playerName] = {
                    'loot': {},
                    'ships': {}
                };

                // Gain Loot
                for (loot in player.loot) {
                    results[playerName]['loot'][loot] = player.loot[loot];
                }

                // Gain Ships
                for (ship in player.ships) {
                    results[playerName]['ships'][ship] = {
                        metal: ogame.ships[ship].metal * player.ships[ship],
                        crystal: ogame.ships[ship].crystal * player.ships[ship],
                        deuterium: ogame.ships[ship].deuterium * player.ships[ship]
                    };
                }
                i++;
            }

            this.results = results;
            scrollToBottom();
        },
        lossCalculation: function(player, resource, withLoot) {
            let result = 0;

            for (let ship in this.results[player]['ships']) {
                result -= this.results[player]['ships'][ship][resource];
            }

            // Prend en compte le butin
            if (withLoot) {
                result += this.results[player]['loot'][resource];
            }

            return parseInt(result);
        },
        lossTotal: function(player) {
            let result = 0;

            ['metal', 'crystal', 'deuterium'].forEach((ress) => {
                result += this.lossCalculation(player, ress, true);
            });

            return parseInt(result);
        },
        excessLoot(player) {

        }
    }
});

registerComponents(app);

app.mount('#app');