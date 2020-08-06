import React from 'react';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Card from '../components/Card';
import GroupOfCards from '../components/GroupOfCards';

const Home = () => {
  return (
    <>
      <Hero />
      <Title>About Me</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus
        vel, amet, placeat ratione commodi numquam aliquam praesentium illo
        laboriosam impedit soluta dolore itaque dignissimos quibusdam, non
        recusandae ut odio. Corporis quas ab, repellendus placeat debitis autem
        maiores laudantium distinctio ducimus ipsum aperiam voluptates! Fugiat
        iusto quasi enim dolorem asperiores beatae architecto libero nisi illo
        <br></br>
        <br></br>
        Quisquam ullam obcaecati incidunt possimus nesciunt sequi optio rerum
        tenetur dolores dicta saepe non, id vitae praesentium? Reiciendis
        tenetur laudantium, nulla sapiente laboriosam impedit officia pariatur
        omnis quibusdam voluptate nisi placeat nam assumenda? Earum aut dolores
      </p>

      <GroupOfCards>
        <Card title="Projects" />
        <Card title="Resume" />
        <Card title="Contact" />
      </GroupOfCards>
    </>
  );
};

export default Home;
