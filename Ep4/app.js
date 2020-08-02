new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },

    methods: {
        startNewGame: function () {
            this.turns = [];
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;


        },

        attack: function () {
            //Monster Attack
            this.checkPlayerOption()
            //Player Attack

            $damage =  this.inputDamage(50, 50);
            this.monsterHealth -= $damage;

            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player attack Monster' + ' ' + $damage
            })

            this.monsterAttack();


        },

        heal: function() {
          if (this.playerHealth > 70){
              return false;
          }
          if (this.playerHealth < 60 ){
              return this.playerHealth += 5;
          }
        },

        inputDamage: function (minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },

        monsterAttack: function () {
          $damage =   this.playerHealth -= this.inputDamage(30, 50);
            this.turns.unshift({
                isPlayer: false,
                textLog: 'Monster attack Player' + ' ' + $damage
            })

        },
        checkPlayerOption: function () {
            if (this.monsterHealth < 0) {
                if (confirm(' You Win! Play again?')) {

                   return this.startNewGame();
                } else {
                    return  this.gameIsRunning = false;
                }
            } else if (this.playerHealth < 0) {
                if (confirm(' You Lose! Play again?')) {
                     this.startNewGame();
                } else {
                   this.gameIsRunning = false
                }


            }
        }


    }
})