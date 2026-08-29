const fs = require('fs');
let code = fs.readFileSync('src/components/RaftingDetailPage.tsx', 'utf8');

const regex = /<div className="bg-\[\#2D3748\]\/40 rounded-2xl p-6 sm:p-8 border border-\[\#4A5568\]\/60 space-y-6">[\s\S]*?Perlengkapan yang Wajib Dibawa[\s\S]*?<\/div>\s*<\/div>/;

// Wait, let's just find the starting `<div>` before `Perlengkapan yang Wajib Dibawa`.
