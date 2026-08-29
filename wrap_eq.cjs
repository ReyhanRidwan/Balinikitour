const fs = require('fs');
let code = fs.readFileSync('src/components/RaftingDetailPage.tsx', 'utf8');

const target = `            {/* 5. PERLENGKAPAN YANG WAJIB DIBAWA */}
            <div className="bg-[#2D3748] rounded-2xl p-6 sm:p-7 border border-[#4A5568]/60 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 border-b border-[#4A5568]/60 pb-3">
                <div className="w-8 h-8 rounded-lg bg-[#DD6B20]/20 flex items-center justify-center text-[#DD6B20]">
                  <ShoppingBag size={18} />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Perlengkapan yang Wajib Dibawa (Need to Bring)</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {pkgData.equipment?.map((eq, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#1A202C]/90 rounded-xl border border-[#4A5568]/60 flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#DD6B20]/15 text-[#DD6B20] flex items-center justify-center">
                      {eq.icon === 'sun' ? (
                        <Sun size={20} />
                      ) : eq.icon === 'swim' ? (
                        <Activity size={20} />
                      ) : (
                        <Shirt size={20} />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">{eq.title}</span>
                      {eq.subtitle && (
                        <span className="text-[10px] text-[#A0AEC0] italic font-sans">({eq.subtitle})</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>`;

const replacement = `            {/* 5. PERLENGKAPAN YANG WAJIB DIBAWA */}
            {pkgData.equipment && pkgData.equipment.length > 0 && (
            <div className="bg-[#2D3748] rounded-2xl p-6 sm:p-7 border border-[#4A5568]/60 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 border-b border-[#4A5568]/60 pb-3">
                <div className="w-8 h-8 rounded-lg bg-[#DD6B20]/20 flex items-center justify-center text-[#DD6B20]">
                  <ShoppingBag size={18} />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Perlengkapan yang Wajib Dibawa (Need to Bring)</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {pkgData.equipment.map((eq, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#1A202C]/90 rounded-xl border border-[#4A5568]/60 flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#DD6B20]/15 text-[#DD6B20] flex items-center justify-center">
                      {eq.icon === 'sun' ? (
                        <Sun size={20} />
                      ) : eq.icon === 'swim' ? (
                        <Activity size={20} />
                      ) : (
                        <Shirt size={20} />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">{eq.title}</span>
                      {eq.subtitle && (
                        <span className="text-[10px] text-[#A0AEC0] italic font-sans">({eq.subtitle})</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}`;

code = code.replace(target, replacement);
fs.writeFileSync('src/components/RaftingDetailPage.tsx', code);
