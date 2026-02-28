import React, { useState } from 'react';

const InvestmentSectorsEditor: React.FC = () => {
    const [pathType, setPathType] = useState<'complex' | 'simple' | 'unknown'>('complex');
    const [rawPath, setRawPath] = useState('');

    // State for the complex path (32 values)
    const [p, setP] = useState({
        m1: 320, m2: 259, h1: 61,
        a1_1: 30, a1_2: 30, a1_3: 45, a1_4: 0, a1_5: 1, a1_6: 42, a1_7: 304,
        v1: -217,
        a2_1: 30, a2_2: 30, a2_3: 45, a2_4: 0, a2_5: 1, a2_6: 67, a2_7: 60,
        h2: 574,
        c1_1: 589, c1_2: 59, c1_3: 604, c1_4: 66, c1_5: 602, c1_6: 96,
        v2: 175,
        c2_1: 546, c2_2: 200, c2_3: 514, c2_4: 257, c2_5: 501, c2_6: 327
    });

    // State for the simple path (6 values)
    const [showEditor, setShowEditor] = useState(true);
    const [s, setS] = useState({
        m1: 498, m2: 387, v1: -222, h1: 725, v2: 384, h2: 499
    });

    const purplePath = pathType === 'complex'
        ? `M ${p.m1} ${p.m2} H ${p.h1} A ${p.a1_1} ${p.a1_2} ${p.a1_3} ${p.a1_4} ${p.a1_5} ${p.a1_6} ${p.a1_7} v ${p.v1} A ${p.a2_1} ${p.a2_2} ${p.a2_3} ${p.a2_4} ${p.a2_5} ${p.a2_6} ${p.a2_7} H ${p.h2} C ${p.c1_1} ${p.c1_2} ${p.c1_3} ${p.c1_4} ${p.c1_5} ${p.c1_6} V ${p.v2} C ${p.c2_1} ${p.c2_2} ${p.c2_3} ${p.c2_4} ${p.c2_5} ${p.c2_6}`
        : pathType === 'simple'
            ? `M ${s.m1} ${s.m2} v ${s.v1} H ${s.h1} V ${s.v2} H ${s.h2}`
            : rawPath;

    const updateP = (key: keyof typeof p, val: string) => {
        const num = parseFloat(val);
        if (!isNaN(num)) setP(prev => ({ ...prev, [key]: num }));
    };

    const updateS = (key: keyof typeof s, val: string) => {
        const num = parseFloat(val);
        if (!isNaN(num)) setS(prev => ({ ...prev, [key]: num }));
    };

    const handlePaste = (path: string) => {
        setRawPath(path);
        const parts = path.match(/-?\d+(\.\d+)?/g);
        if (!parts) {
            setPathType('unknown');
            return;
        }

        if (parts.length === 6) {
            setPathType('simple');
            setS({
                m1: parseFloat(parts[0]), m2: parseFloat(parts[1]),
                v1: parseFloat(parts[2]), h1: parseFloat(parts[3]),
                v2: parseFloat(parts[4]), h2: parseFloat(parts[5])
            });
        } else if (parts.length >= 31) {
            setPathType('complex');
            setP({
                m1: parseFloat(parts[0]), m2: parseFloat(parts[1]),
                h1: parseFloat(parts[2]),
                a1_1: parseFloat(parts[3]), a1_2: parseFloat(parts[4]), a1_3: parseFloat(parts[5]), a1_4: parseFloat(parts[6]), a1_5: parseFloat(parts[7]), a1_6: parseFloat(parts[8]), a1_7: parseFloat(parts[9]),
                v1: parseFloat(parts[10]),
                a2_1: parseFloat(parts[11]), a2_2: parseFloat(parts[12]), a2_3: parseFloat(parts[13]), a2_4: parseFloat(parts[14]), a2_5: parseFloat(parts[15]), a2_6: parseFloat(parts[16]), a2_7: parseFloat(parts[17]),
                h2: parseFloat(parts[18]),
                c1_1: parseFloat(parts[19]), c1_2: parseFloat(parts[20]), c1_3: parseFloat(parts[21]), c1_4: parseFloat(parts[22]), c1_5: parseFloat(parts[23]), c1_6: parseFloat(parts[24]),
                v2: parseFloat(parts[25]),
                c2_1: parseFloat(parts[26]), c2_2: parseFloat(parts[27]), c2_3: parseFloat(parts[28]), c2_4: parseFloat(parts[29]), c2_5: parseFloat(parts[30]), c2_6: parts[31] ? parseFloat(parts[31]) : 0
            });
        } else {
            setPathType('unknown');
        }
    };

    return (
        <section className="py-24 px-4 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-[#212529] text-center uppercase mb-8 tracking-wide">
                    INVESTMENT SECTORS EDITOR
                </h2>
                <p className="text-center text-red-600 font-bold mb-16 uppercase text-sm tracking-widest bg-red-50 py-2 rounded-lg border border-red-100 max-w-md mx-auto">
                    Utility Component - For Design Use Only
                </p>

                <div className="relative w-full max-w-[1000px] mx-auto hidden md:block aspect-[1.8/1]">
                    {/* SVG Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 550" fill="none" xmlns="http://www.w3.org/2000/svg">

                        {/* PREVIEW PATH */}
                        <path d={purplePath}
                            stroke="#4C51BF" strokeWidth="5" strokeLinecap="round" fill="none" />
                        {pathType === 'complex' && (
                            <circle cx={p.c2_5} cy={p.c2_6} r="7" fill="#4C51BF" />
                        )}
                        {pathType === 'simple' && (
                            <circle cx={s.h2} cy={s.v2} r="7" fill="#4C51BF" />
                        )}

                        {/* Other sectors (Static for reference) */}
                        <path d="M 550 80 H 920 A 30 30 0 0 1 950 110 V 220 A 30 30 0 0 1 920 250 H 650"
                            stroke="#ED8936" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.3" />
                        <path d="M 350 470 H 80 A 30 30 0 0 1 50 440 V 330 A 30 30 0 0 1 80 300 H 450"
                            stroke="#4299E1" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.3" />
                        <path d="M 650 300 H 920 A 30 30 0 0 1 950 330 V 440 A 30 30 0 0 1 920 470 H 550"
                            stroke="#48BB78" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.3" />
                    </svg>

                    <div className="opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-56 h-56 bg-white rounded-full border-[5px] border-[#1E1E54] flex flex-col items-center justify-center shadow-lg">
                        <div className="w-20 h-20 mb-1">
                            <img src="https://img.icons8.com/isometric-line/100/EB6925/tax.png" alt="Tax Icon" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-black text-[#212529] uppercase tracking-tighter">EDITOR</span>
                    </div>

                    {/* Text Positioning (Transparent) */}
                    <div className="absolute top-[18%] left-[7%] w-[38%] text-center opacity-30">
                        <h3 className="text-2xl font-black text-[#212529]">Life Insurance Premium</h3>
                    </div>
                </div>
            </div>

            {/* Path Editor Panel */}
            <div className="fixed bottom-4 right-4 z-[100] bg-white border-2 border-slate-200 rounded-xl shadow-2xl p-4 w-96 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-2 border-b">
                    <h4 className="font-black text-slate-800 uppercase text-xs">
                        SVG Path Editor ({pathType.toUpperCase()})
                    </h4>
                    <button
                        onClick={() => setShowEditor(!showEditor)}
                        className="bg-indigo-600 text-white px-2 py-1 rounded text-[10px] font-bold"
                    >
                        {showEditor ? 'HIDE' : 'SHOW'}
                    </button>
                </div>

                {showEditor && (
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <label className="text-indigo-600 font-black mb-2 block uppercase text-[10px]">Paste Complete Path Here</label>
                            <textarea
                                placeholder="Paste path starting with M..."
                                onChange={(e) => handlePaste(e.target.value)}
                                className="w-full h-20 border rounded text-[9px] p-2 focus:ring-2 focus:ring-indigo-400 outline-none font-mono"
                            />
                        </div>

                        {pathType === 'complex' && (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px]">
                                {Object.entries(p).map(([key, val]) => (
                                    <div key={key} className="flex flex-col">
                                        <label className="text-slate-500 font-bold mb-1">{key.toUpperCase()}</label>
                                        <input
                                            type="number"
                                            value={val}
                                            onChange={(e) => updateP(key as keyof typeof p, e.target.value)}
                                            className="border rounded px-2 py-1 focus:ring-1 focus:ring-indigo-400 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {pathType === 'simple' && (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px]">
                                {Object.entries(s).map(([key, val]) => (
                                    <div key={key} className="flex flex-col">
                                        <label className="text-slate-500 font-bold mb-1">{key.toUpperCase()}</label>
                                        <input
                                            type="number"
                                            value={val}
                                            onChange={(e) => updateS(key as keyof typeof s, e.target.value)}
                                            className="border rounded px-2 py-1 focus:ring-1 focus:ring-indigo-400 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {pathType === 'unknown' && (
                            <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg text-[10px] text-amber-700 font-medium">
                                Unknown path structure. Use the raw editor below.
                            </div>
                        )}

                        <div className="mt-6 border-t pt-4">
                            <label className="text-slate-500 font-bold mb-1 block uppercase text-[10px]">Resulting SVG Path (Editable)</label>
                            <textarea
                                value={purplePath}
                                onChange={(e) => handlePaste(e.target.value)}
                                className="w-full h-24 border rounded text-[8px] p-2 bg-slate-50 font-mono shadow-inner focus:ring-2 focus:ring-indigo-400 outline-none"
                            />
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(purplePath);
                                        alert('Path copied to clipboard!');
                                    }}
                                    className="flex-1 bg-slate-800 text-white py-3 rounded font-black uppercase text-[10px] tracking-widest hover:bg-slate-700 transition-colors"
                                >
                                    Copy Generated Path
                                </button>
                                <button
                                    onClick={() => {
                                        let terminator = '';
                                        if (pathType === 'complex') {
                                            terminator = `\n<circle cx="${p.c2_5}" cy="${p.c2_6}" r="7" fill="#4C51BF" />`;
                                        } else if (pathType === 'simple') {
                                            terminator = `\n<circle cx="${s.h2}" cy="${s.v2}" r="7" fill="#4C51BF" />`;
                                        }
                                        const fullCode = `<path d="${purplePath}" stroke="#4C51BF" strokeLinecap="round" fill="none" />${terminator}`;
                                        navigator.clipboard.writeText(fullCode);
                                        alert('Full SVG code copied!');
                                    }}
                                    className="px-3 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded font-black uppercase text-[9px] hover:bg-indigo-100 transition-colors"
                                    title="Copy Path + Circle"
                                >
                                    SVG Snippet
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default InvestmentSectorsEditor;
