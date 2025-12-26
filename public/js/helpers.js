/**
 * Permet de créer un ID unique
 */
function uid(prefix = '') {
    if (prefix != '') {
        prefix = prefix + '_';
    }

    return prefix + '_' + crypto.randomUUID().replaceAll('-', '');
}

function scrollToBottom() {
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
}

function plural(quantity, word, suffix = 's', replace = null) {
    if (Math.abs(quantity) <= 1) return word;

    if (replace) {
        return word.replace(replace[0], replace[1]);
    }

    return word + suffix;
}
