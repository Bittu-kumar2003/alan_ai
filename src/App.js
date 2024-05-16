// import React, { useState, useEffect } from "react";
// import alanBtn from "@alan-ai/alan-sdk-web";

// import NewsCards from "./components/NewsCards/NewsCards";
// const alanKey =
//   "298cdc02329b3ab086f92dabbd2bae852e956eca572e1d8b807a3e2338fdd0dc/stage";
// const App = () => {
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [activeArticle,setActiveArticle]=useState(0);

//   useEffect(() => {
//     alanBtn({
//       key: alanKey,
//       onCommand: ({ command, articles }) => {
//         if (command === "newHeadlines") {
//           //alert("This code was executed");
//           // console.log(articles);
//           setNewsArticles(articles);
//         }else if(command==='highlight'){
//           setActiveArticle((preActiveArticle)=>preActiveArticle+1)
//         }else if(command==='open'){
//           console.log(Number);
//           window.open(articles[Number].url,'_blank');
//         }
//       },
//     });
//   }, []);
//   return (
//     <>
//       {/* <h1>Alan AI News Application</h1> */}
//       <div>
//         <img
//           src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64f5aad0cbdbf0b7d248f4aa_alan%20ai_1.webp"
//           alt="alan logo"
//           style={{
//             height: "27vmin",
//             borderRadius: "10",
//             padding: "0 40%",
//             margin: "3% 0",
//             height: "35vmin",
//             marginLeft: 20,
//           }}
//         ></img>
//       </div>
//       <NewsCards articles={newsArticles} activeArticle={activeArticle} />
//     </>
//   );
// };
// export default App;

import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/NewsCards/NewsCards";
import Header from "./Header";

const alanKey =
  "298cdc02329b3ab086f92dabbd2bae852e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parseNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parseNumber - 1];
          console.log(parseNumber);
          if (parseNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, []); 
  return (
    <>
      <div>
        <Header />
        <img
          src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64f5aad0cbdbf0b7d248f4aa_alan%20ai_1.webp"
          alt="alan logo"
          style={{
            height: "35vmin",
            borderRadius: "10px",
            padding: "0 40%",
            margin: "3% 0",
            marginLeft: "20px",
          }}
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import alanBtn from "@alan-ai/alan-sdk-web";
// import NewsCards from "./components/NewsCards/NewsCards";

// const alanKey =
//   "298cdc02329b3ab086f92dabbd2bae852e956eca572e1d8b807a3e2338fdd0dc/stage";

// const App = () => {
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [activeArticle, setActiveArticle] = useState(0);

//   useEffect(() => {
//     alanBtn({
//       key: alanKey,
//       onCommand: ({ command, articles, number }) => {
//         if (command === "newHeadlines") {
//           setNewsArticles(articles);
//         } else if (command === "highlight") {
//           setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
//         } else if (command === "open") {
//           const articleIndex = number - 1;

//           if (articleIndex >= 0 && articleIndex < articles.length) {
//             window.open(articles[articleIndex].url, "_blank");
//             alanBtn().playText("Opening...");
//           } else {
//             alanBtn().playText("Article not found. Please try again.");
//           }
//         } else if (command === "openLink") {
//           if (
//             articles.length > 0 &&
//             activeArticle >= 0 &&
//             activeArticle < articles.length
//           ) {
//             const url = articles[activeArticle].url;
//             window.open(url, "_blank");
//             alanBtn().playText("Opening link...");
//           } else {
//             alanBtn().playText("No article to open. Please try again.");
//           }
//         }
//       },
//     });
//   }, [activeArticle, newsArticles]);

//   return (
//     <>
//       <div>
//         <img
//           src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64f5aad0cbdbf0b7d248f4aa_alan%20ai_1.webp"
//           alt="alan logo"
//           style={{
//             height: "35vmin",
//             borderRadius: "10px",
//             padding: "0 40%",
//             margin: "3% 0",
//             marginLeft: "20px",
//           }}
//         />
//       </div>
//       <NewsCards articles={newsArticles} activeArticle={activeArticle} />
//     </>
//   );
// };

// export default App;
// perfect code
// import React, { useState, useEffect } from "react";
// import alanBtn from "@alan-ai/alan-sdk-web";
// import NewsCards from "./components/NewsCards/NewsCards";
// import Header from "./Header";

// const alanKey =
//   "298cdc02329b3ab086f92dabbd2bae852e956eca572e1d8b807a3e2338fdd0dc/stage";

// const App = () => {
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [activeArticle, setActiveArticle] = useState(0);

//   useEffect(() => {
//     const alanInstance = alanBtn({
//       key: alanKey,
//       onCommand: ({ command, articles, number }) => {
//         if (command === "newHeadlines") {
//           setNewsArticles(articles);
//         } else if (command === "highlight") {
//           setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
//         } else if (command === "open") {
//           const articleIndex = number - 1;

//           if (articleIndex >= 0 && articleIndex < articles.length) {
//             const url = articles[articleIndex].url;
//             window.open(url, "_blank");
//             alanInstance.playText("Opening...");
//           } else {
//             alanInstance.playText("Article not found. Please try again.");
//           }
//         } else if (command === "openLink") {
//           if (
//             articles.length > 0 &&
//             activeArticle >= 0 &&
//             activeArticle < articles.length
//           ) {
//             const url = articles[activeArticle].url;
//             window.open(url, "_blank");
//             alanInstance.playText("Opening link...");
//           } else {
//             alanInstance.playText("No article to open. Please try again.");
//           }
//         }
//       },
//     });

//     return () => {
//       alanInstance.deactivate();
//     };
//   }, [activeArticle, newsArticles]);

//   return (
//     <>
//       <Header />

//       <div>
//         <img
//           src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64f5aad0cbdbf0b7d248f4aa_alan%20ai_1.webp"
//           alt="alan logo"
//           style={{
//             height: "35vmin",
//             borderRadius: "10px",
//             padding: "0 40%",
//             margin: "3% 0",
//             marginLeft: "20px",
//           }}
//         />
//       </div>

//       <NewsCards articles={newsArticles} activeArticle={activeArticle} />
//       <footer class="page-footer">
//         <small>© Copyright 2018. All rights reserved.</small>
//         <ul>
//           <li>
//             <a href="" target="_blank">
//               <i class="icon ion-logo-facebook"></i>
//             </a>
//           </li>
//           <li>
//             <a href="" target="_blank">
//               <i class="icon ion-logo-twitter"></i>
//             </a>
//           </li>
//           <li>
//             <a href="" target="_blank">
//               <i class="icon ion-logo-linkedin"></i>
//             </a>
//           </li>
//           <li>
//             <a href="" target="_blank">
//               <i class="icon ion-logo-github">dfsd</i>
//             </a>
//           </li>
//         </ul>
//       </footer>
//     </>
//   );
// };
// export default App;

// import React, { useState, useEffect } from "react";
// import NewsCards from "./components/NewsCards/NewsCards";
// import alanBtn from "@alan-ai/alan-sdk-web";

// const alanKey =
//   "298cdc02329b3ab086f92dabbd2bae852e956eca572e1d8b807a3e2338fdd0dc/stage";

// const App = () => {
//   const [newsArticles, setNewsArticles] = useState([]);
//   const [activeArticle, setActiveArticle] = useState(0);

//   useEffect(() => {
//     const alanInstance = alanBtn({
//       key: alanKey,
//       onCommand: ({ command, articles, number }) => {
//         if (command === "newHeadlines") {
//           setNewsArticles(articles);
//           setActiveArticle(0);
//         } else if (command === "highlight") {
//           setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
//         } else if (command === "open") {
//           const articleIndex = number - 1;
//           if (articleIndex >= 0 && articleIndex < articles.length) {
//             const url = articles[articleIndex].url;
//             window.open(url, "_blank");
//             alanInstance.playText("Opening...");
//           } else {
//             alanInstance.playText("Article not found. Please try again.");
//           }
//         } else if (command === "openLink") {
//           if (
//             articles.length > 0 &&
//             activeArticle >= 0 &&
//             activeArticle < articles.length
//           ) {
//             const url = articles[activeArticle].url;
//             window.open(url, "_blank");
//             alanInstance.playText("Opening link...");
//           } else {
//             alanInstance.playText("No article to open. Please try again.");
//           }
//         }
//       },
//     });

//     return () => {
//       alanInstance.deactivate();
//     };
//   }, [activeArticle, newsArticles]);

//   return (
//     <>
//       <div>
//         <div>
//           <img
//             src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64f5aad0cbdbf0b7d248f4aa_alan%20ai_1.webp"
//             alt="Alan AI Logo"
//             style={{
//               height: "35vmin",
//               borderRadius: "10px",
//               padding: "0 40%",
//               margin: "3% 0",
//               marginLeft: "20px",
//             }}
//           />
//         </div>
//         <NewsCards articles={newsArticles} activeArticle={activeArticle} />
//       </div>
//       {!newsArticles.length && (
// <div style={{ textAlign: "center" }}>
//   <p>
//     Created by{" "}
//     <a href="https://www.linkedin.com/in/adrian-hajdin/">Bittu Kumar</a>
//     {/* <a href="http://youtube.com/javascriptmastery">
//       JavaScript Mastery
//     </a> */}
//   </p>
//   <img
//     src="PLACEHOLDER_FOR_LOGO_URL"
//     height="50px"
//     alt="JavaScript Mastery Logo"
//     style={{ marginLeft: "20px" }}
//   />
// </div>
//       )}
//     </>
//   );
// };

// export default App;
