/*1. Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
a. Use at least one array.
b. Use at least two classes.
c. Your menu should have the options to create, view, and delete elements. */

class Character {
    constructor(name, job, specialization) {
        this.name = name;
        this.job = job;
        this.specialization = specialization;
    }

    describe() {
        return `${this.name} is a ${this.specialization} ${this.class}.`; 
    }
}

class Party {
    constructor(name, guild) {
        this.name = name;
        this.guild = guild;
        this.characters = [];
    }

    addPlayer(character) {
        if (character instanceof Character) {
            this.character.push(character);
        } else {
            throw new Error(`You can only add an instance of Character. Argument is not a Character: ${character}`);
        }
    }

    describe() {
        return `${this.name} has ${this.character.length} Characters, and is part of the ${guild} guild/s`;
    }
}

class Menu {
    constructor() {
        this.parties = [];
        this.selectedParty = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createParty();
                    break;
                case '2':
                    this.viewParty();
                    break;
                case '3':
                    this.deleteParty();
                    break;
                case '4':
                    this.displayParties();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('See you next time.');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new party
        2) view party
        3) delete party
        4) display all parties
        `)
    }

    showPartyMenuOptions(partyInfo) {
        return prompt(`
        0) back
        1) create character
        2) delete character
        -------------------
        ${partyInfo}
        `);
    }

    displayParties() {
        let partyString = '';
        for (let i = 0; i < this.parties.length; i++) {
            partyString += i + ') ' + this.parties[i].name + '\n';
        }
        alert(partyString);
    }

    createParty() {
        let name = prompt('Enter name of the new party:');
        let guild = prompt('Enter the name of the guild the new party is a part of:')
        this.parties.push(new Party(name, guild));
    }

    viewParty() {
        let index = prompt('Enter the index of the party to be viewed:');
        if (index > -1 && index < this.parties.length) {
            this.selectedParty = this.parties[index];
            let description = `
            Party Name: ${this.selectedParty.name} 
            Guild: ${this.selectedParty.guild} \n`;
            
            for (let i = 0; i < this.selectedParty.characters.length; i++) {
                description += i + ') ' + this.selectedParty.characters[i].name + ' - ' + this.selectedParty.characters[i].job + ' - ' + this.selectedParty.characters[i].specialization + '\n';
            }

            let selection = this.showPartyMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCharacter();
                    break;
                case '2':
                    this.deleteCharacter();
            }
        }
    }

    deleteParty() {
        let index = prompt('Enter the index of the party to be deleted:');
        if (index > -1 && index < this.selectedParty.length) {
            this.selectedParty.splice(index, 1);
        }
    }

    createCharacter() {
        let name = prompt('Enter name for new characer:');
        let job = prompt('Enter the job for new character:');
        let specialization = prompt('Enter the specialization for the new character:')
        this.selectedParty.characters.push(new Character(name, job, specialization));
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the character to be deleted:');
        if (index > -1 && index < this.selectedTeam.characters.length) {
            this.selectedTeam.characters.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();