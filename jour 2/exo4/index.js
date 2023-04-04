const readline = require('readline')
const students = ["Alan", "Sonia", "Sophie"];
const rl = readline.createInterface(process.stdin, process.stdout)
rl.setPrompt("What's up ? >")
rl.prompt();

rl.on('line',function(line){
const isDataSet = students.find((std)=> std.toLowerCase() == line.trim().toLocaleLowerCase() ?std+" trouvé !":"" )
if(isDataSet){
    process.exit(0);
}

rl.prompt()
}).on('close',function(){
    console.log('Sayonara !')
    return;
})