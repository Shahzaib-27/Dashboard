import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  PieChartdata,
  PieChartdataCOLORS,
} from "../Chartdata.ts";

export default function SimplePieChart() {
  const total = PieChartdata.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div
      className=" group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br
        from-[#151b35] via-[#10162b] to-[#0b1022] p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-200
        hover:border-purple-400/20 hover:shadow-[0_20px_80px_rgba(168,85,247,0.10)] "   >

      {/*   GLOW   */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56
          rounded-full bg-purple-500/10 blur-3xl"   />

      {/*   HEADER   */}
      <div
        className="relative z-10 mb-2   ">

        <p
          className=" text-[10px] font-semibold uppercase tracking-[0.25em]
            text-cyan-400 ">
          Pie-Chart Analytics
        </p>

        <h2
          className="  mt-1 text-xl font-bold tracking-tight text-white " >
          Ticket Distribution
        </h2>

        <p
          className=" mt-1 text-xs text-slate-400">
          Overview of tickets by category
        </p>

      </div>

      {/*   CHART   */}
      <div className="relative h-67.5 w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            {/*   GRADIENTS   */}
            <defs>

              {PieChartdataCOLORS.map(
                (color, index) => (

                  <linearGradient
                    key={index}
                    id={`pieGradient${index}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor={color}
                      stopOpacity={1}
                    />

                    <stop
                      offset="100%"
                      stopColor={color}
                      stopOpacity={0.55}
                    />

                  </linearGradient>

                )
              )}

            </defs>

            {/*   OUTER PIE   */}
           <Pie
              data={PieChartdata}
              cx="50%"
              cy="50%"
              innerRadius={68}
              outerRadius={105}
              paddingAngle={4}
              cornerRadius={8}
              dataKey="value"
              nameKey="name"
              stroke="none"
              isAnimationActive
              animationDuration={1200}
              label={({ name }) => name}
              labelLine={false}
            >

              {PieChartdata.map(
                (_, index) => (

                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#pieGradient${
                      index %
                      PieChartdataCOLORS.length
                    })`}
                  />

                )
              )}

            </Pie>

            {/*   INNER RING   */}
            <Pie
              data={[
                {
                  name: "background",
                  value: 100,
                },
              ]}
              cx="50%"
              cy="50%"
              innerRadius={63}
              outerRadius={66}
              dataKey="value"
              fill="#252d49"
              stroke="none"
            />
 
            {/*   TOOLTIP     */}
            <Tooltip
              cursor={false}
              contentStyle={{
                background:
                  "linear-gradient(135deg,#171e39,#0b1022)",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.45)",
                padding: "10px 14px",
              }}
              labelStyle={{
                color: "#ffffff",
                fontWeight: 600,
              }}
              itemStyle={{
                color: "#cbd5e1",
                fontSize: "12px",
              }}
              formatter={(value, name) => [
                `${value} tickets`,
                name,
              ]}
            />

          </PieChart>

        </ResponsiveContainer>

        {/*     CENTER   */}
        <div
          className=" pointer-events-none absolute left-1/2 top-1/2 flex
            -translate-x-1/2 -translate-y-1/2 flex-col items-center " >

          <span
            className=" text-3xl font-bold tracking-tight text-white " >
            {total}
          </span>

          <span
            className="  mt-1 text-[9px] uppercase tracking-[0.25em]
              text-slate-500 " >
            Total
          </span>

        </div>
      </div>

      {/*   CUSTOM LEGEND   */}
      <div
        className=" relative z-10 grid grid-cols-2 gap-3" >

        {PieChartdata.map(
          (item, index) => {

            const color =
              PieChartdataCOLORS[
                index %
                PieChartdataCOLORS.length
              ];

            const percentage =
              total > 0
                ? Math.round(
                    (item.value / total) *
                    100
                  )
                : 0;

            return (
              <div
                key={item.name}
                className="
                  group flex items-center justify-between rounded-xl
                  border border-white/10 bg-white/3 px-3 py-2.5
                  transition-all duration-300 hover:-translate-y-0.5
                  hover:border-white/20 hover:bg-white/[0.07]" >

                <div
                  className="flex min-w-0 items-center gap-2 " >

                  <span
                    className="  h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 10px ${color}`,
                    }}
                  />

                  <span
                    className=" truncate text-xs text-slate-300" >
                    {item.name}
                  </span>

                </div>

                <div
                  className="ml-2 flex items-center gap-2 " >

                  <span
                    className=" text-xs font-semibold text-white " >
                    {item.value}
                  </span>

                  <span
                    className="
                      text-[10px] text-slate-500" >
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
}