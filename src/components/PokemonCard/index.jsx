import { Spacing } from "../Spacing";
import { Type } from "../Type";
import { Card, Column, Image, Name, Row } from "./styles";

export const PokemonCard = ({
  isGrid,
  pokemon,
}) => {
  return isGrid
    ? (
      <Card $isGrid={isGrid} $type={pokemon?.types[0].name}>
        <Row>
          <Column>
            <Image $isGrid={isGrid} src={pokemon.imageUrl} />
          </Column>

          <Column>
            {
              pokemon?.types.map((type) => (
                <Type key={type.name} $type={type.name}>{type.name}</Type>
              ))
            }
          </Column>
        </Row>

        <Name>{pokemon.name}</Name>
      </Card>
    ) : (
      <Card $isGrid={isGrid} $type={pokemon?.types[0].name}>
        <Spacing $right={8}>
          <Image $isGrid={isGrid} src={pokemon.imageUrl} />
        </Spacing>

        <Column>
          <Spacing $bottom={8}>
            <Name>{pokemon.name}</Name>
          </Spacing>

          <Row>
            <Column>
              {
                pokemon?.types.map((type) => (
                  <Type key={type.name} $type={type.name}>{type.name}</Type>
                ))
              }
            </Column>

            <Column>HP</Column>
          </Row>
        </Column>
      </Card>
    );
};
