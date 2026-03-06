function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await wait(1000);
  console.log("1 Sekunde später");
}

run()
  .then(() => console.log("then: fertig"))
  .catch((err) => console.error("catch:", err))
  .finally(() => console.log("finally: immer"));

