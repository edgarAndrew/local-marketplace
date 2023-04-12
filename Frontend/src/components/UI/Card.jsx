import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

export default function ItemCard() {
  const navigate = useNavigate();

  const cardClickHandler = (id) => {
    console.log("card clicked");
    navigate("/product")
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={cardClickHandler}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/id/1/200/300"
          alt="Paella dish"
        />
        <CardContent>
          <Typography fontWeight={700} variant="body1">
            Rs 100000
          </Typography>
          <Typography variant="body1">Brand Name</Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2">Panjim</Typography>
      </CardActions>
    </Card>
  );
}
