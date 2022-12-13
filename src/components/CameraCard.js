import { Card, Image, Text } from '@mantine/core';
import React from 'react';



function Demo() {
  return (
    <div>
    <Card
      shadow="sm"
      p="xl"
      component="a"
    //   href=""
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427056_sd.jpg;maxHeight=640;maxWidth=550"
          height={160}
          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
    </div>
  );
}

export default Demo;