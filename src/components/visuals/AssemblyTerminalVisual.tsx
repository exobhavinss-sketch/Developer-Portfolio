import React from "react";

export const AssemblyTerminalVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[260px] max-h-[360px] bg-[#111111] text-[#fbf9f9] rounded-t-lg p-5 flex flex-col justify-between overflow-hidden relative border-b border-[#303031] select-none font-mono">
      {/* AGC DSKY Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#303031] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3ecf8e]"></span>
          <span className="text-white font-semibold tracking-wider">
            AGC BLOCK II • COMANCHE 055
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-[#858383]">
          <span>VERB: 37</span>
          <span>NOUN: 63</span>
          <span className="text-[#3ecf8e]">PROG: 11</span>
        </div>
      </div>

      {/* Assembly Source Listing Preview */}
      <div className="py-2.5 space-y-1 text-xs text-[#bec6e0] overflow-hidden">
        <div className="flex items-center gap-4 text-[#747878]">
          <span className="w-12 text-right">001042</span>
          <span className="text-white font-bold">TC</span>
          <span className="text-[#dbe1ff]">INTPRET</span>
          <span className="text-[#747878] hidden sm:inline"># INTERPRETIVE EXECUTIVE CALL</span>
        </div>
        <div className="flex items-center gap-4 text-[#747878]">
          <span className="w-12 text-right">001043</span>
          <span className="text-white font-bold">VLOAD</span>
          <span className="text-[#316bf3]">RN</span>
          <span className="text-[#747878] hidden sm:inline"># POSITION VECTOR TO VEHICLE</span>
        </div>
        <div className="flex items-center gap-4 text-[#747878]">
          <span className="w-12 text-right">001044</span>
          <span className="text-white font-bold">VSU</span>
          <span className="text-[#316bf3]">RLS</span>
          <span className="text-[#747878] hidden sm:inline"># SUBTRACT LUNAR LANDING SITE</span>
        </div>
        <div className="flex items-center gap-4 text-[#747878]">
          <span className="w-12 text-right">001045</span>
          <span className="text-white font-bold">STORE</span>
          <span className="text-[#dbe1ff]">RANGE_VEC</span>
          <span className="text-[#747878] hidden sm:inline"># STORE RELATIVE COORD VECTOR</span>
        </div>
        <div className="flex items-center gap-4 text-[#747878]">
          <span className="w-12 text-right">001046</span>
          <span className="text-white font-bold">TC</span>
          <span className="text-[#3ecf8e]">POSTJUMP</span>
          <span className="text-[#3ecf8e]">RADAR_CHK</span>
        </div>
      </div>

      {/* Terminal Telemetry Footer */}
      <div className="flex items-center justify-between text-[11px] pt-3 border-t border-[#303031] text-[#858383]">
        <div className="flex items-center gap-2">
          <span className="text-[#3ecf8e]">●</span>
          <span>COMPILED FOR MODERN EXPLORATION</span>
        </div>
        <span className="text-[#bec6e0]">ASSEMBLY • MIT IL</span>
      </div>
    </div>
  );
};
