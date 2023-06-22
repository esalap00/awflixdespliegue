import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from  '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import classes from './VistaUser.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ListaFavoritos() {
    const [peliculas, setPeliculas] = useState([]);
    const [carga, setCarga] = useState(true);
    const {idUser} = useParams("idUser");

    useEffect(() => {
        var pelis = [];
        if(carga===true){
            
            const getPeliculas= async () => {
                await axios.get("http://localhost:5000/peliculas")
                .then(async devolucion => {
                    for(var i=0; i<devolucion.data.length; i++){
                        var pelicula = {
                            id: devolucion.data[i]._id,
                            titulo: devolucion.data[i].titulo,
                            sinopsis: devolucion.data[i].sinopsis,
                            genero: devolucion.data[i].genero,
                            valoracion: devolucion.data[i].valoracion,
                            foto: devolucion.data[i].foto,
                            favorito: false
                        }
                    }

                await axios.post("http://localhost:5000/favoritos/" + idUser)
                .then(fav => {
                    for(var j=0; j<fav.data.length; j++){
                        if(fav.data[j].idPelicula===pelicula.id){
                            pelicula.favorito = true;
                        }
                    } 
                });

            });
            setPeliculas(pelis);
            setCarga(false);
            getPeliculas();
        };
        };
    }, []);

    console.log(peliculas)

    return (
        <Grid container spacing={4} className={classes.cardGrid} sx={{ml: "5%", mt: "2%", width: "90%" }}>
        {peliculas.map((pelicula) => (
          <Grid item key={pelicula._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4" component="h2" align='center' sx={{ height: "80px"}}>
                    {pelicula.titulo}
                  </Typography>
                  <Box sx={{height: "50%"}}>
                    <img src={pelicula.foto} className={classes.fotoCartel} alt="Cartel"/>
                  </Box>
                  <Typography>
                    sinopsis: {pelicula.sinopsis}
                  </Typography>
                  <Typography>
                    Género: {pelicula.genero}
                  </Typography>
                  <Typography>
                    Valoración: {pelicula.valoracion}
                  </Typography>
                   
                </CardContent>
  
            </Card>
          </Grid>
        ))}
      </Grid>
    );
}