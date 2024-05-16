// import React from "react";
// import { Grid, Grow, Typography } from "@mui/material";

// import NewsCard from "../NewsCard/NewsCard";
// import useStyles from "./styles.js";

// const infoCards = [
//   { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
//   {
//     color: "#1565c0",
//     title: "News by Categories",
//     info: "Business, Entertainment, General, Health, Science, Sports, Technology",
//     text: "Give me the latest Technology news",
//   },
//   {
//     color: "#4527a0",
//     title: "News by Terms",
//     info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
//     text: "What's up with PlayStation 5",
//   },
//   {
//     color: "#283593",
//     title: "News by Sources",
//     info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
//     text: "Give me the news from CNN",
//   },
// ];

// const NewsCards = ({ articles, activeArticle }) => {
//   const classes = useStyles();

//   if (!articles.length) {
//     return (
//       <Grow in>
//         <Grid
//           className={classes.container}
//           container
//           alignItems="stretch"
//           spacing={3}
//         >
//           {infoCards.map((infoCard) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               className={classes.infoCard}
//             >
//               <div
//                 className={classes.card}
//                 style={{ backgroundColor: infoCard.color }}
//               >
//                 <Typography variant="h5" component="h5">
//                   {infoCard.title}
//                 </Typography>
//                 {infoCard.info ? (
//                   <Typography variant="h6" component="h6">
//                     <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
//                     {infoCard.info}
//                   </Typography>
//                 ) : null}
//                 <Typography variant="h6" component="h6">
//                   Try saying: <br /> <i>{infoCard.text}</i>
//                 </Typography>
//               </div>
//             </Grid>
//           ))}
//         </Grid>
//       </Grow>
//     );
//   }

//   return (
//     <Grow in>
//       <Grid
//         className={classes.container}
//         container
//         alignItems="stretch"
//         spacing={3}
//       >
//         {articles.map((article, i) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
//             <NewsCard activeArticle={activeArticle} i={i} article={article} />
//           </Grid>
//         ))}
//       </Grid>
//     </Grow>
//   );
// };

//export default NewsCards;

// import React from "react";
// import NewsCard from "../NewsCard/NewsCard";
// import { Grid, Grow, Typography } from "@mui/material";
// //import useStyles from './styles';

// const infoCards = [
//   {
//     color: "#00838f",
//     title: "Latest News",
//     text: "Give me the latest news",
//   },
//   {
//     color: "#1565c0",
//     title: "News by Categories",
//     info: "Business, Entertainment, General, Health, Science, Sports, Technology",
//     text: "Give me the latest Technology news",
//   },
//   {
//     color: "#4527a0",
//     title: "News by Terms",
//     info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
//     text: "What's up with PlayStation 5",
//   },
//   {
//     color: "#283593",
//     title: "News by Sources",
//     info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
//     text: "Give me the news from CNN",
//   },
// ];
// const NewsCards = ({ articles }) => {
//   //const classes=useStyles();
//   if (!articles.length) {
//     return (
//       <Grow in>
//         <Grid container alignItems="stretch" spacing={2}>
//           {infoCards.map((infoCard) => (
//             <Grid item xs={12} sm={6} md={4} lg={3}>
//               <div
//                 style={{
//                   backgroundColor: infoCard.color,
//                   display: "flex",
//                   flexDirection: "column",
//                   textAlign: "center",
//                 }}
//               >

//                 <Typography variant="h5" component="h5">
//                   {infoCard.title}
//                 </Typography>

//                 {infoCard.info ? (
//                   <Typography
//                     // sx={{ marginTop: "10px", marginLeft: "20px" }}
//                     color="black"
//                     variant="h6"
//                     component="h6"
//                   >
//                     <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
//                     {infoCard.info}
//                   </Typography>
//                 ) : null}
//                 <Typography variant="h6" component="h6">
//                   Try saying: <br /> <i>{infoCard.text}</i>
//                 </Typography>
//               </div>
//             </Grid>
//           ))}
//         </Grid>
//       </Grow>
//     );
//   }

//   return (
//     <Grow in>
//       <Grid container alignItems="stretch" spacing={3}>
//         {articles.map((articles, i) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
//             <NewsCard articles={articles} i={i} />
//           </Grid>
//         ))}
//       </Grid>
//     </Grow>
//     // <div>new card</div>
//   );
// };

// export default NewsCards;

import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@mui/material";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    text: "Give me the latest news",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const containerStyle = {
  padding: "0 5%",
  width: "100%",
  margin: 0,
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  minHeight: "40vh",
  padding: "5%",
  borderRadius: 10,
  color: "white",
};

const infoCard = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const NewsCards = ({ articles ,activeArticle}) => {
  if (!articles.length) {
    return (
      <Grow in>
        <Grid container alignItems="stretch" spacing={2} style={containerStyle}>
          {infoCards.map((infoCardData) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={infoCardData.title}>
              <div
                style={{
                  ...cardStyle,
                  backgroundColor: infoCardData.color,
                  ...infoCard,
                }}
              >
                <Typography variant="h5" component="h5" gutterBottom>
                  {infoCardData.title}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  {infoCardData.info && (
                    <>
                      <strong>{infoCardData.title.split(" ")[2]}</strong>:{" "}
                      <br />
                      {infoCardData.info}
                      <br />
                    </>
                  )}
                  <div style={{ paddingTop: "20px" }}>
                    Try saying: <br /> <i>{infoCardData.text}</i>
                  </div>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3} style={containerStyle}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <NewsCard articles={article} activeArticl={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
