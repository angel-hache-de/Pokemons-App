import React, { FC } from "react";

import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface FavoriteCardPokemon {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<FavoriteCardPokemon> = ({ pokemonId }) => {
  const router = useRouter();

  const onClickFavorite = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={onClickFavorite}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
