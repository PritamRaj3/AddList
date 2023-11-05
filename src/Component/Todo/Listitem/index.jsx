// import React from 'react';
// import './list_style.css'

// export default function Listitem({ ListData   }) {
// // console.log(ListData);

// // how to delete
// const deleteItem =(index)=>{
//   const updateDate =ListData.filter((currentData)=>{
//     return currentData.id !== index;
//   });

// }
//   return (
//     <div className='listitem_section'>
//       {
//         ListData.map((current) => {
//           console.log(current);
//           return (
//             <>
//               <div className="listitem" key={current.id}>
//                 <h3>{current.name}</h3>
//                 <div className="list-btn">
//                   <span>
//                     💱
//                   </span>
//                   <span onClick={()=>deleteItem(current.id)}>
//                     ❎
//                   </span>
//                 </div>
//               </div>
//             </>
//           )
//         })
//       }

//     </div>
//   )
// }
