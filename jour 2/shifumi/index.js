const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

rl.setPrompt("$bot251 > ");
rl.prompt();

rl.on('line',()=>{
    
    rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0); // arrêt du processus
});