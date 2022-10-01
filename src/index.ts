/**
 * Completer cette fonction
 */
function encode(valeur: string) {
  return valeur.split("").reverse().join("");
}
/******************************************************
 * LE CODE CI-DESSOUS FAIT FONCTIONNER LA PAGE TU PEUX
 * LE MODIFIER POUR COMPRENDRE COMMENT IL FONCTIONNE
 * MAIS ATTENTION DE NE PAS L'EFFACER...
 ******************************************************
 */

const FORM = document.querySelector("form");
FORM?.addEventListener("submit", function (e: SubmitEvent) {
  e.preventDefault();

  const CURRENT_FORM = e.target as HTMLFormElement;

  const INPUT_TEXT_TO_ENCODE = CURRENT_FORM.textToEncode;
  const INPUT_ENCODED_TEXT = CURRENT_FORM.textEncoded;
  const RESULT: any = encode(INPUT_TEXT_TO_ENCODE.value);

  if (INPUT_TEXT_TO_ENCODE.value.length <= 1) {
    INPUT_ENCODED_TEXT.value = `💻 Vous n'avez rien rempli ou Il n'y a pas assez de caractère pour faire ce jeu`;
  } else {
    INPUT_ENCODED_TEXT.value = RESULT;
  }
});
