const fs=require('fs'),path=require('path');
const {Document,Packer,Paragraph,TextRun,AlignmentType,HeadingLevel,Footer,PageNumber}=require('docx');
const [,,quyen,tenQuyen,cum,outFile,...files]=process.argv;
function runs(text){
  const out=[];let it=false,st=false,buf='';
  const flush=()=>{if(buf)out.push(new TextRun({text:buf,italics:it,strike:st}));buf='';};
  for(let i=0;i<text.length;i++){
    if(text.startsWith('~~',i)){flush();st=!st;i++;continue;}
    if(text[i]==='*'){flush();it=!it;continue;}
    if(text[i]==='\\'&&text[i+1]==='*'){buf+='*';i++;continue;}
    buf+=text[i];
  }
  flush();return out;
}
const body=[];
const nums=[];
files.forEach((f,fi)=>{
  const lines=fs.readFileSync(f,'utf8').split('\n');
  for(let raw of lines){
    const l=raw.trim();
    if(!l) continue;
    if(l.startsWith('# ')) continue;
    if(l.startsWith('## ')){
      const t=l.slice(3).trim();
      body.push(new Paragraph({heading:HeadingLevel.HEADING_1,pageBreakBefore:true,alignment:AlignmentType.CENTER,spacing:{before:600,after:480},children:[new TextRun({text:t})]}));
      continue;
    }
    if(l.replace(/\\/g,'')==='* * *'){
      body.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:240,after:240},children:[new TextRun('* * *')]}));continue;
    }
    if(/^\*\(Hết chương/.test(l)||/^\*— Hết Quyển/.test(l)||l==='&nbsp;'){
      if(l==='&nbsp;') continue;
      body.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:360},children:[new TextRun({text:l.replace(/^\*|\*$/g,''),italics:true})]}));continue;
    }
    body.push(new Paragraph({alignment:AlignmentType.JUSTIFIED,spacing:{after:120,line:360},indent:{firstLine:454},children:runs(l)}));
  }
});
const cover=[
 new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:2400,after:240},children:[new TextRun({text:'THƯƠNG NGUYÊN KÝ',bold:true,size:44})]}),
 new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:240},children:[new TextRun({text:`Quyển ${quyen} — ${tenQuyen}`,size:32})]}),
 new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:600},children:[new TextRun({text:cum,italics:true,size:26})]}),
];
const doc=new Document({
 styles:{default:{document:{run:{font:'Times New Roman',size:26}}},
  paragraphStyles:[{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{size:32,color:'2E74B5',font:'Times New Roman'},paragraph:{outlineLevel:0}}]},
 sections:[{properties:{page:{size:{width:11906,height:16838},margin:{top:1440,right:1440,bottom:1440,left:1440}}},
  footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({children:[PageNumber.CURRENT],size:20})]})]})},
  children:[...cover,...body]}]
});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync(outFile,b);console.log('ok',outFile)});
