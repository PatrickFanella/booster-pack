import axios from 'axios';
import React, { useState, useEffect } from 'react';
import classes from './Card.module.css';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/ditto';

const Card = () => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setPokemon(response.data);
    });
  }, []);

  if (!pokemon) return null;

  const name = pokemon.name;
  const hp = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;
  const energy = '/images/energy1.png';
  const image = pokemon.sprites.front_default;
  const number = pokemon.id;
  const height = pokemon.height;
  const weight = pokemon.weight;
  const weaknessText = 'x2';
  const attack = pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat;
  const defense = pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat;
  const speed = pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat;

  return (
    <div className={classes.cardContainer}>
      <div className={classes.topBar}>
        <div className={classes.topLeft}>
          <div className={classes.type}>
            <span className={classes.typeText}>BASIC</span>
          </div>
          <div className={classes.name}>{name}</div>
        </div>
        <div className={classes.topRight}>
          <div className={classes.hp}>
            <span className={classes.hpText}>HP</span>
            {hp}
          </div>
          <img className={classes.energy} src={energy} alt='' />
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt='' />
        <div className={classes.imageInfo}>{`NO.${number} | HT:${height}' | WT:${weight}`}</div>
      </div>
      <div className={classes.bodyText}>
        <div className={classes.mainText}>
          <ul>
            <li>{`Attack: ${attack}`}</li>
            <li>{`Speed: ${speed}`}</li>
            <li>{`Defense: ${defense}`}</li>
          </ul>
        </div>
      </div>
      <div className={classes.bottomBar}>
        <div className={classes.weakness}>
          weakness <img className={classes.weaknessImage} src={energy} alt='' /> <span className={classes.weaknessText}>{weaknessText} </span> | resistance{' '}
        </div>
        <div className={classes.otherBottom}>
          retreat <img className={classes.weaknessImage} src={energy} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Card;
