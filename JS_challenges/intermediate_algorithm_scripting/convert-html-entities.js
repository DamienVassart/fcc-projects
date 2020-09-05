/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  var htmlEntities = {
    '<' : '&lt;',
    '>' : '&gt;',
    '&' : '&amp;',
    '"' : '&quot;',
    '\'' : '&apos;'
  }
  return str.replace(/<|>|&|"|'/g, c => htmlEntities[c]);
}
