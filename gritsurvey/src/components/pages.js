import React from 'react';
import InputSelection from './input-selection';
import gritQuestions from './grit-questions';
import { Link } from 'react-router-dom';

//Odd numbered questions are 'negative': "Very much like me" indicates
//lower grit

// const Page1 = () => {
//   return (
//     <div>
//       <h2>
//         {gritQuestions[0].text}
//       </h2>
//       <InputSelection />
//     </div>
//   );
// };

// function makePage(pageNumber) {
//   let index = pageNumber - 1;
//   return () => {
//     return (
//       <div>
//         <h2>
//           {gritQuestions[index].text}
//         </h2>
//         <InputSelection />
//       </div>
//     );
//   };
// }

// toDo: render 10 makePage components efficiently. Route them each to their own page

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start);

const args = range(1, 10);

const Pages = args.map(function(pageNumber) {
  let index = pageNumber - 1;
  return props => {
    return (
      <div className="question-container">
        <h2>
          {gritQuestions[index].text}
        </h2>
        <InputSelection />
      </div>
    );
  };
});

const navList = args.map(number => {
  return (
    <li>
      <Link to={`q${number}`}>
        Q.{number}
      </Link>
    </li>
  );
});

export { Pages, navList };
