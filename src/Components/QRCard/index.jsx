import React from 'react';

import { Card, CardBody, Image, Text, Stack } from '@chakra-ui/react'

import QRImage from '../../assets/images/image-qr-code.png'

function QRCard(){

  return(
    <Card maxW={'340px'} id='qr-card' align={'center'}>
      <CardBody id='qr-card-body'>
        <Image
          src={QRImage}
          alt='QR Code for Frontend Mentor website'
          id='qr-image'
        />
      <Stack id='qr-card-text' justify={'space-evenly'}>
        <Text as={'b'} fontSize={'1.4rem'} id='bold'>
          Improve your front-end skills by building projects
        </Text>
        <Text id='text' fontSize={'1rem'}>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </Text>        
      </Stack>
      </CardBody>
    </Card>
  )

}

export default QRCard;