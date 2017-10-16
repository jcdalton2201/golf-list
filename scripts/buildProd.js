const fs = require('fs');
const crypto = require('crypto');
const mkdirp = require('mkdirp');
const fse = require('fs-extra');
const replaceStream = require('replacestream');
const glob = require('glob-fs')({ gitignore: true });
class buildProd {
  constructor() {
    this.clearOldHash();
    this.createdocsDir();
    this.copyWeb();
    this.uglyFile();
  }
  clearOldHash(){
    const golffile = glob.readdirSync('docs/golf-web.*.js');
    glob.readdirSync('docs/golf-web.*.js.map');
    golffile.map((item)=>{
      if(item !== 'docs/golf-web.min.js' &&  item !== 'docs/golf-web.min.js.map'){
        console.log(`file name is ${item}`);
        fse.removeSync(item);
      }
    });
  }
  createdocsDir(){
    mkdirp.sync('docs');
  }
  copyWeb(){
    fse.copySync('web', 'docs');
    // fse.copySync('web/.htaccess', 'docs/.htaccess');
  }
  uglyFile(){
    const code = fs.readFileSync('.temp/golf-web.js','utf8');
    const fileHash = crypto.createHash('sha256').update(code).digest('hex');
    console.log(fileHash);
    fse.moveSync('docs/golf-web.min.js', `docs/golf-web.${fileHash}.js`);
    fse.moveSync('docs/golf-web.min.js.map', `docs/golf-web.${fileHash}.js.map`);
    fse.moveSync('docs/index.html', 'docs/temp.html');
    const writeStream = fs.createWriteStream('docs/index.html');
    fs.createReadStream('docs/temp.html')
      .pipe(replaceStream('golf-web.js', `golf-web.${fileHash}.js`))
      .pipe(writeStream);
    fse.removeSync('docs/temp.html');
  }
}
new buildProd();