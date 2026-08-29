const fs = require('fs');
let code = fs.readFileSync('src/components/RaftingDetailPage.tsx', 'utf8');

const target1 = `              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#DD6B20]" size={16} />
                  <h3 className="font-semibold text-white">Area Penjemputan Gratis (Free Pickup):</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {pkgData.pickupAreas?.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-[#2D3748] text-xs text-[#E2E8F0] border border-[#4A5568]/60 font-medium"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>`;

const replacement1 = `              {pkgData.pickupAreas && pkgData.pickupAreas.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#DD6B20]" size={16} />
                  <h3 className="font-semibold text-white">Area Penjemputan Gratis (Free Pickup):</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {pkgData.pickupAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-[#2D3748] text-xs text-[#E2E8F0] border border-[#4A5568]/60 font-medium"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>
              )}`;

code = code.replace(target1, replacement1);

const target2 = `                {/* Dropdown Penjemputan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0AEC0] ml-1">Area Penjemputan (Pickup Area)</label>
                  <select
                    className="w-full bg-[#1A202C] text-white border border-[#4A5568] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DD6B20] focus:ring-1 focus:ring-[#DD6B20] appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500">Pilih Area Penjemputan (Select Area)</option>
                    {pkgData.pickupAreas?.map((area) => (
                      <option key={area} value={area} className="bg-[#1A202C] text-white">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>`;

const replacement2 = `                {/* Dropdown Penjemputan */}
                {pkgData.pickupAreas && pkgData.pickupAreas.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#A0AEC0] ml-1">Area Penjemputan (Pickup Area)</label>
                  <select
                    className="w-full bg-[#1A202C] text-white border border-[#4A5568] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DD6B20] focus:ring-1 focus:ring-[#DD6B20] appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500">Pilih Area Penjemputan (Select Area)</option>
                    {pkgData.pickupAreas.map((area) => (
                      <option key={area} value={area} className="bg-[#1A202C] text-white">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
                )}`;

code = code.replace(target2, replacement2);
fs.writeFileSync('src/components/RaftingDetailPage.tsx', code);
