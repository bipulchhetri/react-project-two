import { Stack, VStack,Heading,Text } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
  return (
    
   <Stack direction={['column','row']} h={'100vh'}>
    <VStack w={'full'}>
        <video
        controls
        controlsList='nodownload'
        src=''
        style={{
            width:'100%',
        }}>

        </video>
      
    </VStack>
    <VStack alignItems={'flex-start'} p={'8'} w={'full'}>
        <Heading>HD Videos List</Heading>
        <Text>This a sample videos</Text>
    </VStack>
<VStack w={['full' ,'xl']} alignItems={'stretch'}
p="8" spacing={'8'}
>

</VStack>

   </Stack>
   
  )
}

export default Videos

