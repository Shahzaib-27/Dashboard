import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  const digitalHours = hours % 12 || 12;

  const formattedHours = String(digitalHours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";

  const date = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] p-6">

      {/* GLOW 1 */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* GLOW 2 */}
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full">

        {/* HEADER */}
        <div className="mb-6 flex items-center justify-center sm:justify-start">
          <div>
            <p className="text-center text-xs uppercase tracking-[0.25em] text-cyan-400 sm:text-left">
              Current Time
            </p>

            <h2 className="mt-1 text-center text-xl font-bold text-white sm:text-left">
              Dashboard Clock
            </h2>
          </div>
        </div>

        <div className=" justify-between items-center grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            
             {/* CLOCK + DIGITAL CLOCK */}
             
            <div className="flex min-h-100 w-full items-center justify-center">

              {/* ANALOG CLOCK */}
              <div className="relative h-56 w-56 shrink-0">

                {/* OUTER GLOW */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl" />

                {/* CLOCK BODY */}
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-cyan-400/40 bg-[#0a1023] shadow-[0_0_35px_rgba(34,211,238,0.15)]">

                  {/* INNER RING */}
                  <div className="absolute inset-3 rounded-full border border-white/10" />

                  {/* HOUR MARKERS */}
                  
                  {Array.from({ length: 12 }).map((_, index) => {
                    const angle = index * 30;

                    return (
                      <div
                        key={index}
                        className="absolute left-1/2 top-1/2 h-full w-full"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        }}
                      >
                        <span className="absolute left-1/2 top-3 h-2 w-1 -translate-x-1/2 rounded-full bg-cyan-300" />
                      </div>
                    );
                  })}

                  {/* 12 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(0deg) translateY(-78px) rotate(0deg)",
                    }}
                  >
                    12
                  </span>

                  {/* 1 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(30deg) translateY(-78px) rotate(-30deg)",
                    }}
                  >
                    1
                  </span>

                  {/* 2 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(60deg) translateY(-78px) rotate(-60deg)",
                    }}
                  >
                    2
                  </span>

                  {/* 3 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(90deg) translateY(-78px) rotate(-90deg)",
                    }}
                  >
                    3
                  </span>

                  {/* 4 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(120deg) translateY(-78px) rotate(-120deg)",
                    }}
                  >
                    4
                  </span>

                  {/* 5 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(150deg) translateY(-78px) rotate(-150deg)",
                    }}
                  >
                    5
                  </span>

                  {/* 6 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(180deg) translateY(-78px) rotate(-180deg)",
                    }}
                  >
                    6
                  </span>

                  {/* 7 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(210deg) translateY(-78px) rotate(-210deg)",
                    }}
                  >
                    7
                  </span>

                  {/* 8 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(240deg) translateY(-78px) rotate(-240deg)",
                    }}
                  >
                    8
                  </span>

                  {/* 9 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(270deg) translateY(-78px) rotate(-270deg)",
                    }}
                  >
                    9
                  </span>

                  {/* 10 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(300deg) translateY(-78px) rotate(-300deg)",
                    }}
                  >
                    10
                  </span>

                  {/* 11 */}
                  <span
                    className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                    style={{
                      transform:
                        "translate(-50%, -50%) rotate(330deg) translateY(-78px) rotate(-330deg)",
                    }}
                  >
                    11
                  </span>

                  {/* HOUR HAND */}
                  <motion.div
                    className="absolute bottom-1/2 left-1/2 h-13.75 w-1.25 origin-bottom -translate-x-1/2 rounded-full bg-white"
                    animate={{
                      rotate: hourAngle,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "linear",
                    }}
                  />

                  {/* MINUTE HAND */}
                  <motion.div
                    className="absolute bottom-1/2 left-1/2 h-18.75 w-0.75 origin-bottom -translate-x-1/2 rounded-full bg-cyan-400"
                    animate={{
                      rotate: minuteAngle,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "linear",
                    }}
                  />

                  {/* SECOND HAND */}
                  <motion.div
                    className="absolute bottom-1/2 left-1/2 h-21.25 w-0.5 origin-bottom -translate-x-1/2 rounded-full bg-pink-500"
                    animate={{
                      rotate: secondAngle,
                    }}
                    transition={{
                      duration: 0.15,
                      ease: "linear",
                    }}
                  />

                  {/* CENTER */}
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />

                </div>
              </div>

            </div>

            {/* DIGITAL CLOCK */}
            <div className="flex w-full flex-col items-center justify-center text-center">

              <p className="mb-2 text-sm text-gray-400">
                Digital Time
              </p>

              {/* HOURS + MINUTES + AM/PM */}
              <div className="flex items-center justify-center gap-2">

                <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                  {formattedHours}:{formattedMinutes}
                </span>

                <span className="mb-2 text-lg font-semibold text-cyan-400">
                  {period}
                </span>

              </div>

              {/* SECONDS */}
              <div className="mt-1 text-lg tracking-[0.3em] text-gray-400">
                :{formattedSeconds}
              </div>

              {/* DATE */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
                <p className="text-sm text-gray-300">
                  {date}
                </p>
              </div>

              {/* TIMEZONE */}
              <p className="mt-4 text-xs text-gray-500">
                Local Time
              </p>

            </div>
        </div>
      </div>
    </div>
  );
};