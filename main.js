const {program} = require('commander');
const fs = require('fs');
const path = require('path');

function readJsonFile(filePath){
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }catch(err){
        console.error('Error reading file:', err);
        return null;
    }
}

program
    .requiredOption('-i, --input <path>', 'output extra debugging')
    .option('-o, --output <path>', 'small pizza size')
    .option('-d, --display', 'small pizza size')

program.parse(process.argv);

const {input, output, display} = program.opts();

if(!input){
    console.log('Please specify input file');
}

const inputPath = path.resolve(input);
const result = readJsonFile(inputPath);

if (output || display){
    if (output){
        const outputPath = path.resolve(output);
        fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    }
    if (display){
        console.log(result);
    }
}