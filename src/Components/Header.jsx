import React from 'react'
import{
 
    DrawerCloseButton,
  
    Button, Drawer, DrawerContent, DrawerOverlay, useDisclosure, DrawerHeader, DrawerBody, VStack, HStack,
} from "@chakra-ui/react"
import{Link}from"react-router-dom"
import{BiMenuAltLeft}from"react-icons/bi"
const Header = () => {
    const{isOpen,onOpen,onClose}=useDisclosure();
  return (
    <>
    <Button position={'sticky'} m={5} p={0} left={4} colorScheme="cyan"
     borderRadius={'full'}
     onClick={onOpen}>
        <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay/>
      <DrawerContent>
       <DrawerCloseButton/>
       <DrawerHeader>VIDEOTUBE</DrawerHeader>
     <DrawerBody>
      <VStack>
        <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
          <Link to={'/'}>HOME</Link>
        </Button>
        <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
          <Link to={'/Vidoes'}>Videos</Link>
        </Button>
        <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
          <Link to={'/videos?category=free'}>Free videos</Link>
        </Button>
        <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
          <Link to={'/upload'}>Upload Videos</Link>
        </Button>
      </VStack>
      <HStack pos={'absolute'} bottom={'10'} w={'full'} left={'1'} justifyContent={'center'}>
        <Button onClick={onClose}  colorScheme={'purple'}>
          <Link to={'/login'}>LOGIN</Link>
        </Button>
        <Button  onClick={onClose}  colorScheme={'purple'} variant={'outline'}>
          <Link to={'/signup'}>Signup</Link>
        </Button>
      </HStack>
     </DrawerBody>
      </DrawerContent>

    </Drawer>
    </>
  )
}

export default Header

