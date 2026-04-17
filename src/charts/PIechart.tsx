// import {  PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend} from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];


// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// export default function SimplePieChart() {
//   return (
//     <div className="mb-10">
//       <h1 className='bg-black text-white max-w-50 text-center m-2 p-2 rounded-lg'>PieChart</h1>
//         <div className="bg-gray-300 max-w-[470px] h-79  w-full rounded-lg p-2">
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 dataKey="value"
//                 label
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend/>

//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//     </div>
//   );
// }