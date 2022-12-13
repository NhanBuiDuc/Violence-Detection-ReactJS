import { Card, Image, Text } from '@mantine/core';
import React from 'react';
import Subcription from '../model/Subcription';
import Camera from '../model/Camera'
import { useEffect,useState } from 'react';
import CurrentUser from '../model/CurrentUser';


async function fetchdata (account_id){
    let data = await Subcription.getSubcriptionByAccountId(account_id)
    return (
      data.body
    )
}
function Demo() {
    const currentuser = new CurrentUser()
    currentuser.parse()
    const [data, setdata] = useState("");
    useEffect( () => {
      fetchdata(currentuser.account_id).then(function(result){
        setdata(result)
        return result})
    }, [])
    console.log(data)
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
          src={data}
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