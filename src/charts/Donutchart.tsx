import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Donutchartdata,
  DonutcharttypeColors,
} from "../Chartdata.ts";

const Donutchart = () => {
  const total = Donutchartdata.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className=" group relative overflow-hidden rounded-3xl border border-white/10
      bg-linear-to-br from-[#151b35] via-[#10162b] to-[#0b1022] p-6 
      shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500
      hover:border-cyan-400/20 hover:shadow-[0_20px_80px_rgba(34,211,238,0.10)]">

      {/*  BACKGROUND GLOW  */}
      <div className=" pointer-events-none absolute -right-24 -top-24 h-64 w-64
        rounded-full bg-cyan-400/10 blur-3xl "/>

      <div className=" pointer-events-none absolute -bottom-24 -left-24 h-64 w-64
        rounded-full bg-purple-500/10 blur-3xl" />

      {/*  HEADER  */}
      <div className="relative z-10">

        <div className=" flex items-start justify-between">

          <div>
            <div className=" flex items-center gap-2  ">

              <span className="  h-2 w-2 rounded-full bg-cyan-400
                shadow-[0_0_12px_#22d3ee]" />

              <p className=" text-[10px] font-semibold uppercase tracking-[0.25em]
                text-cyan-400">
                Donut-chart Analytics
              </p>

            </div>

            <h2 className=" mt-2 text-xl font-bold tracking-tight text-white ">
              Tickets By Type
            </h2>

            <p className=" mt-1 text-xs text-[#7f89a8] ">
              Distribution of support tickets
            </p>
          </div>
        </div>
      </div>

      {/*  CHART  */}
      <div className="  relative mt-2 h-70 w-full">

        <ResponsiveContainer width="100%"  height="100%" >

          <PieChart>
            <defs>
              {DonutcharttypeColors.map(
                (color, index) => (

                  <linearGradient
                    key={index}
                    id={`premiumGradient${index}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1">

                    <stop
                      offset="0%"
                      stopColor={color}
                      stopOpacity={1} />

                    <stop
                      offset="55%"
                      stopColor={color}
                      stopOpacity={0.85}/>

                    <stop
                      offset="100%"
                      stopColor={color}
                      stopOpacity={0.45}/>

                  </linearGradient>
                )
              )}

            </defs>

            {/*   OUTER GLOW RING  */}
            <Pie
              data={Donutchartdata}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="47%"
              innerRadius={91}
              outerRadius={122}
              paddingAngle={5}
              cornerRadius={10}
              stroke="none"
              isAnimationActive
              animationDuration={1400}>

              {Donutchartdata.map(
                (_, index) => (

                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#premiumGradient${index})`}/>

                )
              )}

            </Pie>

            {/*   INNER RING   */}
            <Pie
              data={[
                {
                  name: "inner",
                  value: 100,
                },
              ]}
              dataKey="value"
              cx="50%"
              cy="47%"
              innerRadius={82}
              outerRadius={86}
              stroke="none"
              fill="#252d4b"
              isAnimationActive={false}/>

            {/*   TOOLTIP   */}
            <Tooltip
              cursor={false}
              contentStyle={{
                background:
                  "linear-gradient(135deg,#171e38,#0b1022)",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.5)",
                padding: "12px 14px",
              }}
              labelStyle={{
                color: "#fff",
                fontWeight: 600,
                marginBottom: "5px",
              }}
              itemStyle={{
                color: "#cbd5e1",
                fontSize: "12px",
              }}
              formatter={(value, name) => [
                `${value} tickets`,
                name,
              ]} />

          </PieChart>
        </ResponsiveContainer>

        {/*   CENTER   */}
        <div className=" pointer-events-none absolute left-1/2 top-[47%]
          flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ">

          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full
            border border-white/5 bg-[#0f1529]/95
            shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl ">

            <span className=" bg-linear-to-r from-cyan-300 via-white to-purple-300
              bg-clip-text text-4xl font-bold tracking-tight text-transparent">
              {total}
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em]
              text-[#6f7895]">
              Total Tickets
            </span>
          </div>
        </div>
      </div>

      {/*   LEGEND   */}
      <div className="relative z-10 mt-1 grid grid-cols-2 gap-3">

        {Donutchartdata.map(
          (item, index) => {

            const percentage =
              total > 0
                ? Math.round(
                    (item.value / total) *
                    100
                  )
                : 0;

            const color =
              DonutcharttypeColors[index] ||
              "#22d3ee";

            return (
              <div
                key={item.name}
                className=" group/item rounded-2xl border border-white/5
                  bg-white/3 px-3 py-3 backdrop-blur-md
                  transition-all duration-300 hover:-translate-y-1
                  hover:border-white/10 hover:bg-white/6
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">

                <div className=" flex items-center justify-between ">

                  <div className=" flex min-w-0 items-center gap-2">

                    <span className="h-2.5 w-2.5 shrink-0 rounded-full "
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 0 12px ${color}`,
                      }}
                    />

                    <span className=" truncate text-xs font-medium text-[#b9c1d7]">
                      {item.name}
                    </span>

                  </div>

                  <span className="text-xs font-bold text-white">
                    {item.value}
                  </span>

                </div>

                {/*   PROGRESS   */}
                <div className=" mt-2 h-1 overflow-hidden rounded-full bg-white/5 ">

                  <div className=" h-full rounded-full transition-all duration-700 "
                    style={{
                      width: `${percentage}%`,
                      background:
                        `linear-gradient(90deg, ${color}, transparent)`,
                      boxShadow:
                        `0 0 10px ${color}`,
                    }}
                  />

                </div>

                <div className="mt-1 flex justify-between">

                  <span className="text-[9px] uppercase tracking-wider text-[#59627e]">
                    Share
                  </span>

                  <span className=" text-[10px] font-semibold text-[#7f89a8] ">
                    {percentage}%
                  </span>
                </div>
              </div>
            );
          }
        )}

      </div>
    </div>
  );
};

export default Donutchart;