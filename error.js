/**
 * Created by antonyastrebov on 9/13/17.
 */
var util = require('util');

var phares = {
    "Hello": "Привет",
    "world": "мир"
};

function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError, PhraseError);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
    if (!phares[name]) {
        throw new PhraseError("Нет такой фразы: " + name);
    }

    return phares[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, "Нет такой страницы");
    }

    return util.format("%s %s!", getPhrase("*****"), getPhrase("world"));
}

try {
    var page = makePage("index.html");
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.log("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }
}
