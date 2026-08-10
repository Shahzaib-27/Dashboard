import { useState } from "react";
import { DayPicker } from "react-day-picker"; 
import "react-day-picker/style.css";
import { CalendarDays } from "lucide-react";

export const Calendar = () => {
  const [selected, setSelected] = useState<Date | undefined>(
    new Date()
  );

  return (
    <div className=" group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#151b35] via-[#10162b] to-[#0b1022] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_20px_80px_rgba(34,211,238,0.10)] ">

      {/*  GLOW  */}

      <div className=" absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl " />

      <div className="relative z-10">

        {/*  HEADER  */}

        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">

              <div className=" flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 ">
                <CalendarDays size={20} />
              </div>

              <div>

                <p className=" text-[10px] uppercase tracking-[0.25em] text-cyan-400 ">
                  Schedule
                </p>

                <h2 className="text-xl font-bold text-white">
                  Calendar
                </h2>

              </div>
            </div>
          </div>

          {/*  TODAY  */}

          <button
            onClick={() => setSelected(new Date())}
            className=" rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-400 transition hover:bg-cyan-400/20 "
          >
            Today
          </button>
        </div>

        {/*  SELECTED DATE  */}

        <div className=" mb-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md ">
          <p className="text-xs text-gray-400">
            Selected Date
          </p>

          <p className="mt-1 text-sm font-semibold text-white">
            {selected
              ? selected.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "No date selected"}
          </p>
        </div>

        {/*  CALENDAR  */}

        <div className=" flex justify-center rounded-2xl border border-white/10 bg-black/10 p-3 ">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            showOutsideDays
            className="beautiful-calendar"
          />
        </div>

      </div>

      {/*  CUSTOM CALENDAR CSS  */}

      <style>
        {`
          .beautiful-calendar {
            --rdp-accent-color: #22d3ee;
            --rdp-accent-background-color: rgba(34, 211, 238, 0.15);
            --rdp-day-height: 40px;
            --rdp-day-width: 40px;
            --rdp-day_button-height: 36px;
            --rdp-day_button-width: 36px;
          }

          .beautiful-calendar .rdp-caption_label {
            color: white;
            font-size: 16px;
            font-weight: 700;
          }

          .beautiful-calendar .rdp-weekday {
            color: #6b7280;
            font-size: 11px;
            font-weight: 600;
          }

          .beautiful-calendar .rdp-day {
            color: #d1d5db;
          }

          .beautiful-calendar .rdp-day_button {
            border-radius: 12px;
            transition: all 0.2s ease;
          }

          .beautiful-calendar .rdp-day_button:hover {
            background: rgba(34, 211, 238, 0.15);
            color: #22d3ee;
            transform: scale(1.08);
          }

          .beautiful-calendar .rdp-selected .rdp-day_button {
            background: linear-gradient(
              135deg,
              #06b6d4,
              #8b5cf6
            );
            color: white;
            font-weight: 700;
            box-shadow:
              0 0 15px rgba(34, 211, 238, 0.35);
          }

          .beautiful-calendar .rdp-today:not(.rdp-selected)
            .rdp-day_button {
            border: 1px solid #22d3ee;
            color: #22d3ee;
          }

          .beautiful-calendar .rdp-outside {
            color: #374151;
          }

          .beautiful-calendar .rdp-button_previous,
          .beautiful-calendar .rdp-button_next {
            color: #22d3ee;
            border-radius: 10px;
            transition: all 0.2s ease;
          }

          .beautiful-calendar .rdp-button_previous:hover,
          .beautiful-calendar .rdp-button_next:hover {
            background: rgba(34, 211, 238, 0.15);
          }
        `}
      </style>

    </div>
  );
};