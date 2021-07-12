import React from 'react';
import useStyles from './RecipesMaterialUi.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.cardBody} raised={true} >
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            Img
          </Avatar>
        }
        title="Title of Recipe Here"
        subheader="Style Of Food Here"
      />
      <CardMedia
        className={classes.cardMedia}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Example text for a description of the recipe.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={classes.expand, {
            [classes.expandOpen]: expanded,
          }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph>
            Example step one:
          </Typography>
          <Typography paragraph>
            Example step two:
          </Typography>
          <Typography paragraph>
            Example step three:
          </Typography>
          <Typography>
            Example step four:
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}