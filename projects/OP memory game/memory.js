// Class stores information for a card
class Cards {
    constructor(name, cardImageIcon) {
        this.name = name;
        this.cardImageIcon = cardImageIcon;
    }

    toString() {
        return this.name;
    }   
}


class MatchCards {
    constructor() {
        // Creates card list of all cards in img
        this.cardList= [
            "ace",
            "carrot",
            "chopper",
            "kid",
            "law",
            "luffy",
            "marco",
            "moria",
            "perona",
            "pudding",
            "rayleigh",
            "rosinante",
            "sabo",
            "shanks",
            "sogeking",
            "uta",
            "zoro"
        ];

        // Add objects
        this.board = document.getElementById("board");
        this.errorCountElem = document.getElementById("errorCount");
        this.restartButton = document.getElementById("restartButton");

        this.cardSet = [];
        this.errorCount = 0;
        this.card1Selected = null;
        this.card2Selected = null;
        this.gameReady = false;

        this.restartButton.addEventListener("click", () => this.restartGame());

        this.setupCards();
        this.shuffleCards();
        this.renderBoard();
        this.hideCards();
    }

    setupCards() {
        const cardBackImage = "./img/back.jpg";
        this.cardSet = [];
        this.cardList.forEach(card => {
            const cardImage = './img/${cardName}.jpg';
            this.cardSet.push(new Cards(cardName, cardImage));
        });
        this.card
    }

}
