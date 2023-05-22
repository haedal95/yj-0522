import {
  Box,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { children } from "react";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

export default function Layout({ children }) {
  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w="sm">
          {/* 헤더 */}

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w="inherit"
            h="120px"
            bg="gray.200"
            position={"fixed"}
            top={0}
            zIndex={9}
          >
            <AiOutlineSearch size={32} />
            <Text>수상한 곰 찾기</Text>
          </Box>

          {/* 본문 */}
          {children}

          {/* 푸터 */}
          <VStack w="inherit">
            <Box
              w="inherit"
              h="120px"
              bg="gray.200"
              position={"fixed"}
              bottom={0}
            >
              <HStack
                h="inherit"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Link to="/">
                  <VStack w={"full"}>
                    {" "}
                    <AiOutlineHome />
                    <Text>홈</Text>
                  </VStack>
                </Link>

                <Link to="/pro">
                  <VStack w={"full"}>
                    {" "}
                    <AiOutlineProfile />
                    <Text>프로필</Text>
                  </VStack>
                </Link>

                <Link to="/co">
                  <VStack w={"full"}>
                    {" "}
                    <BiPhoneCall />
                    <Text>연락처</Text>
                  </VStack>
                </Link>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
