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
        calculate: function() {
            // Parcourir chaque joueur
            // Afficher dans des cases les pertes 
            let results = {};
            let playerName = '';
            let i = 1;

            for (player of this.data_form.players) {
                playerName = player.name;

                if (player.name == '') {
                    playerName = 'Joueur ' + i;
                }

                results[playerName] = {};

                for (ship in player.ships) {
                    results[playerName][ship] = {
                        metal: ogame.ships[ship].metal * player.ships[ship],
                        crystal: ogame.ships[ship].crystal * player.ships[ship],
                        deuterium: ogame.ships[ship].deuterium * player.ships[ship]
                    };
                }
                i++;
            }

            this.results = results;
        },
        lossCalculation: function(player, resource) {
            let result = 0;

            for (let price in this.results[player]) {
                result += this.results[player][price][resource];
            }

            return result;
        },
        lossTotal: function(player) {
            let result = 0;

            for (let price in this.results[player]) {
                result += this.results[player][price]['metal'];
                result += this.results[player][price]['crystal'];
                result += this.results[player][price]['deuterium'];
            }

            return result;
        }
    }
});

registerComponents(app);

app.mount('#app');