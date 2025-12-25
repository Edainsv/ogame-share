/**
 * Permet de créer un ID unique
 */
function uid(prefix = '') {
    if (prefix != '') {
        prefix = prefix + '_';
    }

    return prefix + '_' + crypto.randomUUID().replaceAll('-', '');
}