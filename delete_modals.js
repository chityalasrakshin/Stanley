const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, searchRegex, replacement) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(searchRegex, replacement);
    fs.writeFileSync(filePath, content);
    console.log("Updated", filePath);
  }
}

// 1. WorkList.tsx
let p1 = "c:\\Users\\chity\\Desktop\\stanley\\platform\\app\\src\\routes\\WorkList\\WorkList.tsx";
replaceInFile(p1, /InvestigationalUseDialog,\s*/g, '');
replaceInFile(p1, /<InvestigationalUseDialog[^>]*\/>\s*/g, '');

// 2. LegacyWorkList.tsx
let p2 = "c:\\Users\\chity\\Desktop\\stanley\\platform\\app\\src\\routes\\LegacyWorkList\\LegacyWorkList.tsx";
replaceInFile(p2, /InvestigationalUseDialog,\s*/g, '');
replaceInFile(p2, /<InvestigationalUseDialog[^>]*\/>\s*/g, '');

// 3. ViewerHeader.tsx
let p3 = "c:\\Users\\chity\\Desktop\\stanley\\extensions\\default\\src\\ViewerLayout\\ViewerHeader.tsx";
replaceInFile(p3, /const AboutModal = customizationService\.getCustomization\(\s*'ohif\.aboutModal'\s*\);\s*/g, '');
let aboutMenuRegex = /\{\s*title:\s*AboutModal\?.menuTitle[^{}]*?content:\s*AboutModal,[^{}]*?containerClassName:\s*AboutModal\?.containerClassName[^{}]*?\},/g;
replaceInFile(p3, aboutMenuRegex, '');
replaceInFile(p3, /title:\s*AboutModal\?.menuTitle \?\? t\('Header:About'\),\s*icon:\s*'info',\s*onClick:\s*\(\) =>\s*show\(\{\s*content:\s*AboutModal,\s*title:\s*AboutModal\?.title \?\? t\('AboutModal:About OHIF Viewer'\),\s*containerClassName:\s*AboutModal\?.containerClassName \?\? 'max-w-md',\s*\}\),/g, '');

// Also remove from ViewerHeader.tsx if we missed anything (let's use a simpler regex for the menu option)
replaceInFile(p3, /\{\s*title:\s*AboutModal\?\.menuTitle[\s\S]*?'max-w-md',\s*\}\),\s*\},\s*/g, '');

// 4. getCustomizationModule.tsx
let p4 = "c:\\Users\\chity\\Desktop\\stanley\\extensions\\default\\src\\getCustomizationModule.tsx";
replaceInFile(p4, /import aboutModalCustomization from '\.\/customizations\/aboutModalCustomization';\n/g, '');
replaceInFile(p4, /\.\.\.aboutModalCustomization,\n\s*/g, '');

// 5. ui-next/src/components/index.ts
let p5 = "c:\\Users\\chity\\Desktop\\stanley\\platform\\ui-next\\src\\components\\index.ts";
replaceInFile(p5, /export \{ default as InvestigationalUseDialog \} from '\.\/InvestigationalUseDialog';\n/g, '');
replaceInFile(p5, /AboutModal, /g, '');
replaceInFile(p5, /^\s*AboutModal,\s*\n/gm, '');

// 6. ui-next/src/components/OHIFModals/index.ts
let p6 = "c:\\Users\\chity\\Desktop\\stanley\\platform\\ui-next\\src\\components\\OHIFModals\\index.ts";
replaceInFile(p6, /export \{ AboutModal \} from '\.\/AboutModal';\n/g, '');

// File removal
const filesToRemove = [
  "c:\\Users\\chity\\Desktop\\stanley\\platform\\ui-next\\src\\components\\OHIFModals\\AboutModal.tsx",
  "c:\\Users\\chity\\Desktop\\stanley\\extensions\\default\\src\\customizations\\aboutModalCustomization.tsx"
];

filesToRemove.forEach(f => {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log("Deleted", f);
  }
});

const folderToRemove = "c:\\Users\\chity\\Desktop\\stanley\\platform\\ui-next\\src\\components\\InvestigationalUseDialog";
if (fs.existsSync(folderToRemove)) {
  fs.rmSync(folderToRemove, { recursive: true, force: true });
  console.log("Deleted folder", folderToRemove);
}
