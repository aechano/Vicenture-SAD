class ProfanityChecker {

    constructor() {
        const Filter = require('bad-words');
        const bad_words_ph = require('filipino-badwords-list');
        const bad_words_en = require('badwords-list');
        const new_filter = new Filter({ list: bad_words_ph.array });
        new_filter.addWords(...bad_words_en.array);
        this.filter = new_filter;
    }

    isProfanity(sentence) {
        return this.filter.isProfane(sentence);
    }

    getProfanity(sentence) {
        const profanityArray = [];
        sentence.split(" ").forEach((word) => {
            if (this.filter.isProfane(word)) {
                profanityArray.push(word);
            }
        });
        return profanityArray;
    }
}

export { ProfanityChecker }