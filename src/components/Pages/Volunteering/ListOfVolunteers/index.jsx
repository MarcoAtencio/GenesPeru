import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Volunteer from '../Volunteer';
import { Title, Container, TitleCategory, Category } from './styles';
import { Context } from '@src/Context';

export default () => {
  const { id } = useParams();
  const { teams } = useContext(Context);
  const volunteers = teams[id - 1].volunteers;
  const capa = volunteers.filter((vol) => vol.role == 'Capacitaciones');
  const market = volunteers.filter((vol) => vol.role == 'Marketplace');
  const develop = volunteers.filter((vol) => vol.role == 'Desarrollador');
  return (
    <main>
      <Title>Voluntariado {teams[id - 1].semester}</Title>

      <Category>
        <TitleCategory>Marketplace</TitleCategory>
        <Container>
          {market.map((volunteer) => {
            return (
              <Volunteer
                key={volunteer.id}
                name={volunteer.name}
                image={volunteer.photoUrl}
              />
            );
          })}
        </Container>
      </Category>
      <Category>
        <TitleCategory>Capacitaciones</TitleCategory>
        <Container>
          {capa.map((volunteer) => {
            return (
              <Volunteer
                key={volunteer.id}
                name={volunteer.name}
                image={volunteer.photoUrl}
              />
            );
          })}
        </Container>
      </Category>

      <Category>
        <TitleCategory>Desarrolladores</TitleCategory>
        <Container>
          {develop.map((volunteer) => {
            return (
              <Volunteer
                key={volunteer.id}
                name={volunteer.name}
                image={volunteer.photoUrl}
              />
            );
          })}
        </Container>
      </Category>
    </main>
  );
};
