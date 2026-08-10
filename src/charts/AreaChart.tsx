
import {AreaChart,Area,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid,} from "recharts";
import { AreaChartdata } from "../Chartdata.ts";

const SimpleAreaChart = () => {
return (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#151b35] via-[#10162b] to-[#0b1022] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-cyan-400/20 hover:shadow-[0_20px_80px_rgba(34,211,238,0.10)]">

  {/* Background Glow */}
    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full
        bg-cyan-400/10 
        blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mb-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Area-Chart Analytics
                </p>
          </div>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
            Activity Overview
            </h2>

            <p className="mt-1 text-xs text-[#7f89a8]">
              Activity performance over time
            </p>

        </div>
      </div>

      {/* Chart */}
      <div className="relative h-75 w-full">

        <ResponsiveContainer width="100%" height="100%">

        <AreaChart 
          data={AreaChartdata} 
          margin={{top: 10,right: 10,left: -20,bottom: 0}}>

          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#21c8ff" stopOpacity={0.45} />
              <stop offset="45%" stopColor="#21c8ff" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#21c8ff" stopOpacity={0} />
            </linearGradient>

            <filter id="areaGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
          </defs>

        <CartesianGrid 
          stroke="#303750" 
          strokeOpacity={0.45} 
          strokeDasharray="3 5" 
          vertical={false} />
        

        <XAxis 
          dataKey="time" 
          stroke="#66708e" 
          tick={{fill: "#7f89a8",fontSize: 10}} 
          tickLine={false} 
          axisLine={false} 
          dy={8} />

        <YAxis 
        stroke="#66708e" 
        width={35} 
        tick={{fill: "#7f89a8",fontSize: 10}} 
        tickLine={false} 
        axisLine={false} />

        <Tooltip 
          cursor={{stroke: "#21c8ff",strokeWidth: 1,strokeDasharray: "4 4"}} 
          contentStyle={{background: "linear-gradient(135deg, #171e38, #0b1022)",
          border: "1px solid rgba(255,255,255,0.12)",borderRadius: "14px",boxShadow: "0 20px 50px rgba(0,0,0,0.5)",padding: "12px 14px"}} 
          labelStyle={{color: "#ffffff",fontWeight: 600,marginBottom: "6px"}} 
          itemStyle={{color: "#21c8ff",fontSize: "12px",fontWeight: 600}} 
          formatter={(value) => [`${value}`,"Activity"]} />

          <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#21c8ff" 
          strokeWidth={3} 
          fill="url(#areaGradient)" 
          filter="url(#areaGlow)" 
          dot={{r: 3,fill: "#21c8ff",stroke: "#0b1022",strokeWidth: 2}} 
          activeDot={{r: 6,fill: "#21c8ff",stroke: "#ffffff",strokeWidth: 2}} 
          animationDuration={1400} 
          animationEasing="ease-out"
           />

        </AreaChart>
      </ResponsiveContainer>
      </div>

        {/* Bottom Info */}
        <div className="relative z-10 mt-3 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"/>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#66708e]">
                Activity
              </span>
        </div>
      </div>

  </div>
);
};

export default SimpleAreaChart;
