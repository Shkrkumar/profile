import React from 'react'
import { Flex, Heading} from "@chakra-ui/react";
import { Link } from '@chakra-ui/react';



const Navbar = () => {
  return (
   <Flex gap={2} bgColor="skyblue">
    <Heading>
        <Link href="/">Shekhar Kumar</Link>
    </Heading>
    <Heading>
        <Link >Projects</Link>
    </Heading>
    <Heading>
        <Link> Experience</Link>
    </Heading>
   </Flex>
  )
}

export default Navbar
