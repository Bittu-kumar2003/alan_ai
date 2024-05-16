// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@mui/material";

// const NewsCard = ({
//   articles: { description, publishedAt, source, title, urlToImage },
//   i,
// }) => {
//   //const classes=usestyles();
//   return (
//     <Card>
//       <CardActionArea>
//         {/* <CardMedia
//           image={
//             urlToImage ||
//             "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
//           }
//           title={title}
//         /> */}
//         {/* <CardMedia sx={{height:"250"}}  image={urlToImage}/> */}
//         <div>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Image URL: {urlToImage}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {new Date(publishedAt).toDateString()}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {source.name}
//           </Typography>
//         </div>
//         <Typography gutterBottom variant="h5">
//           {title}
//         </Typography>
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>

//       <CardActions>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//         <Typography variant="h5" color="textSecondary">
//           {i + 1}
//         </Typography>
//       </CardActions>
//     </Card>
//   );
// };

// export default NewsCard;

// import React, { useState, useEffect, createRef } from "react";
// import {
//   Card,
//   CardActions,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@mui/material";
// const NewsCard = ({
//   articles: { description, publishedAt, source, title, urlToImage },
//   i,
//   activeArticle,
// }) => {
//   const [elRefs, setElRefs] = useState([]);
//   const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

//   useEffect(() => {
//     window.scroll(0, 0);

//     setElRefs((refs) =>
//       Array(20)
//         .fill()
//         .map((_, j) => refs[j] || createRef())
//     );
//   }, []);

//   useEffect(() => {
//     if (i === activeArticle && elRefs[activeArticle]) {
//       scrollToRef(elRefs[activeArticle]);
//     }
//   }, [i, activeArticle, elRefs]);
//   return (
//     <Card
//       ref={elRefs[i]}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         borderBottom: "10px solid white",
//         padding: "10px",
//       }}
//     >
//       <CardActionArea>
//         {urlToImage && (
//           <CardMedia
//             component="img"
//             src={urlToImage}
//             title={title}
//             style={{ maxWidth: 400, maxHeight: 400 }}
//           />
//         )}
//         <CardMedia
//           image={
//             urlToImage ||
//             "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
//           }
//           title={title}
//         />
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             margin: "20px",
//           }}
//         >
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {new Date(publishedAt).toDateString()}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {source.name}
//           </Typography>
//         </div>

//         <Typography sx={{ padding: "0 16px" }} gutterBottom variant="h5">
//           {title}
//         </Typography>
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>

//       <CardActions
//         sx={{
//           padding: "0 16px 8px 16px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//         <Typography variant="h5" color="textSecondary">
//           {i + 1}
//         </Typography>
//       </CardActions>
//     </Card>
//   );
// };

// export default NewsCard;

// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@mui/material";

// const NewsCard = ({
//   articles: { description, publishedAt, source, title, urlToImage },
//   i,
//   activeArticle,
// }) => {
//   return (
//     <Card
//       className={activeArticle === i ? "activeCard" : ""}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         borderBottom:
//           activeArticle === i ? "10px solid #22289a" : "10px solid white", // Change border color based on active status
//         padding: "10px",
//       }}
//     >
//       <CardActionArea>
//         {urlToImage && (
//           <CardMedia
//             component="img"
//             src={urlToImage}
//             title={title}
//             style={{ maxWidth: 400, maxHeight: 400 }}
//           />
//         )}
//         <CardMedia
//           image={
//             urlToImage ||
//             "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
//           }
//           title={title}
//         />
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             margin: "20px",
//           }}
//         >
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {new Date(publishedAt).toDateString()}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="h2">
//             {source.name}
//           </Typography>
//         </div>

//         <Typography sx={{ padding: "0 16px" }} gutterBottom variant="h5">
//           {title}
//         </Typography>
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>

//       <CardActions
//         sx={{
//           padding: "0 16px 8px 16px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//         <Typography variant="h5" color="textSecondary">
//           {i + 1}
//         </Typography>
//       </CardActions>
//     </Card>
//   );
// };

// export default NewsCard;



import React, { useRef, useEffect } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const NewsCard = ({
  articles: { description, publishedAt, source, title, urlToImage },
  i,
  activeArticle,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Check if this card is the active one and if it's not the first card
    if (activeArticle === i && i > 0) {
      const previousCard = document.getElementById(`card-${i - 1}`);
      // Scroll to the previous card if it exists
      if (previousCard) {
        previousCard.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeArticle, i]);

  return (
    <Card
      id={`card-${i}`}
      ref={cardRef}
      className={activeArticle === i ? "activeCard" : ""}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom:
          activeArticle === i ? "10px solid #22289a" : "10px solid white",
        padding: "10px",
      }}
    >
      <CardActionArea>
        {urlToImage && (
          <CardMedia
            component="img"
            src={urlToImage}
            title={title}
            style={{ maxWidth: 400, maxHeight: 400 }}
          />
        )}
        <CardMedia
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          title={title}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            style={{ cursor: "pointer" }}
          >
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>

        <Typography sx={{ padding: "0 16px" }} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{
          padding: "0 16px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;


