const Name = "Mina";

const count = 3;

const msg = `Hallo ${Name},
du hast ${count} neue Nachrichten.
Viele Grüße!`;




const Username = 'Lorenzo'

function shout(strings, value) {
  return strings[0] +
    String(value).toUpperCase() + strings[1];
}

console.log(shout`Hallo ${Username}! Wie geht es dir?`);