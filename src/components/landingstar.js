import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import gql from 'graphql-tag';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import './landing.css'
function Landingstar() {
 
  const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 2
    },
    h1:{
      color:'white'
    },
    media: {
      height: 150,
      width: 250
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }));
  const classes = useStyles();

const GET_FILM = gql`
  query
  {
  allFilms{
    films
    {
      title
      episodeID
      producers
      releaseDate
      openingCrawl
      created
    }
  }
  allPeople{
    people{
      name
      birthYear
      homeworld{
        name
      }
    }
  }
}
`;
const { loading, error, data } = useQuery(GET_FILM);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data)
return (
<div className={classes.root}>
<h1 className={classes.h1}>Peliculas</h1>
<Grid container spacing={2}>
<Grid className={classes.grid} item xs={4}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/6PqhD5t/4.jpg"}
        title= {data.allFilms.films[0].title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allFilms.films[0].title} Episodio: {data.allFilms.films[0].episodeID}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.allFilms.films[0].openingCrawl}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body3" color="textSecondary" component="p">
       Estrenada en: {data.allFilms.films[0].releaseDate}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
       Producida: {data.allFilms.films[0].producers}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={4}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/gDdL49v/5.jpg"}
        title= {data.allFilms.films[1].title}
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="h2">
        {data.allFilms.films[1].title} Episodio: {data.allFilms.films[1].episodeID}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.allFilms.films[1].openingCrawl}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body3" color="textSecondary" component="p">
       Estrenada en: {data.allFilms.films[1].releaseDate}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
       Producida: {data.allFilms.films[1].producers}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={4}>    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/QKsMWJs/6.jpg"}
        title= {data.allFilms.films[2].title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allFilms.films[2].title} Episodio: {data.allFilms.films[2].episodeID}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.allFilms.films[2].openingCrawl}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body3" color="textSecondary" component="p">
       Estrenada en: {data.allFilms.films[2].releaseDate}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
       Producida: {data.allFilms.films[2].producers}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
</Grid>
<Grid container spacing={3}>
  <Grid className={classes.grid} item xs={4}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/X4VvwC5/1.jpg"}
        title= {data.allFilms.films[3].title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allFilms.films[3].title} Episodio: {data.allFilms.films[3].episodeID}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.allFilms.films[3].openingCrawl}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body3" color="textSecondary" component="p">
       Estrenada en: {data.allFilms.films[3].releaseDate}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
       Producida: {data.allFilms.films[3].producers}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={4}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/xfyr5qm/2.jpg"}
        title= {data.allFilms.films[4].title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allFilms.films[4].title} Episodio: {data.allFilms.films[4].episodeID}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.allFilms.films[4].openingCrawl}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body3" color="textSecondary" component="p">
       Estrenada en: {data.allFilms.films[4].releaseDate}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
       Producida: {data.allFilms.films[4].producers}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={4}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/mCf1LvS/3.jpg"}
        title= {data.allFilms.films[5].title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allFilms.films[5].title} Episodio: {data.allFilms.films[5].episodeID}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {data.allFilms.films[5].openingCrawl}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Typography variant="body3" color="textSecondary" component="p">
       Estrenada en: {data.allFilms.films[5].releaseDate}
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
       Producida: {data.allFilms.films[5].producers}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
</Grid>
{/* ------------------------------------------------------- */}
<h1 className={classes.h1}>Personajes Principales</h1>
<Grid container spacing={2}>
<Grid className={classes.grid} item xs={2}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/qk1M91v/luke.jpg"}
        title= {data.allPeople.people[0].name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allPeople.people[0].name} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lugar de nacimiento: {data.allPeople.people[0].homeworld.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Typography variant="body3" color="textSecondary" component="p">
       Año de nacimiento: {data.allPeople.people[0].birthYear}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={2}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/pncmTVL/obiwan.jpg"}
        title= {data.allPeople.people[9].name}
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="h2">
        {data.allPeople.people[9].name} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lugar de nacimiento: {data.allPeople.people[9].homeworld.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Typography variant="body3" color="textSecondary" component="p">
       Año de nacimiento: {data.allPeople.people[9].birthYear}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={2}>    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/hWtjFyX/anakin.jpg"}
        title= {data.allPeople.people[10].name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allPeople.people[10].name} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lugar de nacimiento: {data.allPeople.people[10].homeworld.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Typography variant="body3" color="textSecondary" component="p">
       Año de nacimiento: {data.allPeople.people[10].birthYear}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
</Grid>
<Grid container spacing={3}>
  <Grid className={classes.grid} item xs={2}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/S0YNQxY/yoda.jpg" }
        title= {data.allPeople.people[18].name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allPeople.people[18].name} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lugar de nacimiento: {data.allPeople.people[18].homeworld.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Typography variant="body3" color="textSecondary" component="p">
       Año de nacimiento: {data.allPeople.people[18].birthYear}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={2}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/x6vxgpg/hansolo.jpg"}
        title= {data.allPeople.people[13].name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allPeople.people[13].name} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lugar de nacimiento: {data.allPeople.people[13].homeworld.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Typography variant="body3" color="textSecondary" component="p">
       Año de nacimiento: {data.allPeople.people[13].birthYear}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
  <Grid className={classes.grid} item xs={2}>
    <Paper className={classes.paper}>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={"https://i.ibb.co/3CdTBgd/American-actress-Carrie-Fisher-on-the-set-of-Star-Wars-Episode-IV-A-New-Hope-written-directed-and-pr.jpg"}
        title= {data.allPeople.people[4].name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {data.allPeople.people[4].name} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Lugar de nacimiento: {data.allPeople.people[4].homeworld.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Typography variant="body3" color="textSecondary" component="p">
       Año de nacimiento: {data.allPeople.people[4].birthYear}
        </Typography>
    </CardActions>
  </Card>
    </Paper>
  </Grid>
</Grid>

</div>


);
}
export default Landingstar;
