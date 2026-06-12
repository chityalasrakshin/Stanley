const fs = require('fs');

function replaceFile(filePath, search, replacement) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(search, replacement);
    fs.writeFileSync(filePath, content);
    console.log("Updated", filePath);
  }
}

// 1. OHIFLogo.tsx
let p1 = "c:\\Users\\chity\\Desktop\\stanley\\platform\\ui-next\\src\\components\\Icons\\Sources\\OHIFLogo.tsx";
replaceFile(p1, /<path[\s\S]*?id="OpenHealthImagingFoundation"[\s\S]*?><\/path>/, '<text id="SkibidiScanText" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#FFFFFF" x="35" y="20">SkibidiScan</text>');

// 2. OHIFLogoHorizontal.tsx
let p2 = "c:\\Users\\chity\\Desktop\\stanley\\platform\\ui-next\\src\\components\\Icons\\Sources\\OHIFLogoHorizontal.tsx";
let svg2 = `<svg
    width="233"
    height="23"
    viewBox="0 0 233 23"
    fill="none"
    {...props}
  >
    <text fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#FFFFFF" x="30" y="18">SkibidiScan</text>
    <path d="M21.5 3C21.5 2.17157 20.8284 1.5 20 1.5H15C14.1716 1.5 13.5 2.17157 13.5 3V8C13.5 8.82843 14.1716 9.5 15 9.5H20C20.8284 9.5 21.5 8.82843 21.5 8V3ZM22.5 8C22.5 9.38071 21.3807 10.5 20 10.5H15C13.6193 10.5 12.5 9.38071 12.5 8V3C12.5 1.61929 13.6193 0.5 15 0.5H20C21.3807 0.5 22.5 1.61929 22.5 3V8Z" fill="#358CFD" />
    <path d="M9.5 3C9.5 2.17157 8.82843 1.5 8 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V8C1.5 8.82843 2.17157 9.5 3 9.5H8C8.82843 9.5 9.5 8.82843 9.5 8V3ZM10.5 8C10.5 9.38071 9.38071 10.5 8 10.5H3C1.61929 10.5 0.5 9.38071 0.5 8V3C0.5 1.61929 1.61929 0.5 3 0.5H8C9.38071 0.5 10.5 1.61929 10.5 3V8Z" fill="#358CFD" />
    <path d="M9.5 15C9.5 14.1716 8.82843 13.5 8 13.5H3C2.17157 13.5 1.5 14.1716 1.5 15V20C1.5 20.8284 2.17157 21.5 3 21.5H8C8.82843 21.5 9.5 20.8284 9.5 20V15ZM10.5 20C10.5 21.3807 9.38071 22.5 8 22.5H3C1.61929 22.5 0.5 21.3807 0.5 20V15C0.5 13.6193 1.61929 12.5 3 12.5H8C9.38071 12.5 10.5 13.6193 10.5 15V20Z" fill="#358CFD" />
    <path d="M21.5 15C21.5 14.1716 20.8284 13.5 20 13.5H15C14.1716 13.5 13.5 14.1716 13.5 15V20C13.5 20.8284 14.1716 21.5 15 21.5H20C20.8284 21.5 21.5 20.8284 21.5 20V15ZM22.5 20C22.5 21.3807 21.3807 22.5 20 22.5H15C13.6193 22.5 12.5 21.3807 12.5 20V15C12.5 13.6193 13.6193 12.5 15 12.5H20C21.3807 12.5 22.5 13.6193 22.5 15V20Z" fill="#358CFD" />
  </svg>
);

export default OHIFLogoHorizontal;`;
replaceFile(p2, /<svg[\s\S]*<\/svg>[\s\S]*?export default OHIFLogoHorizontal;/m, svg2);

// 3. OHIFLogoColorDarkBackground.tsx
let p3 = "c:\\Users\\chity\\Desktop\\stanley\\platform\\ui-next\\src\\components\\Icons\\Sources\\OHIFLogoColorDarkBackground.tsx";
replaceFile(p3, /<path[\s\S]*?id="OpenHealthImagingFoundation"[\s\S]*?><\/path>/, '<text id="SkibidiScanText" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#FFFFFF" x="85" y="45">SkibidiScan</text>');
