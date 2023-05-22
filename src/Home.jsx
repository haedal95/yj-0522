import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

const dataBear = [
  {
    text: "6월이벤트",
    image:
      "https://images.unsplash.com/photo-1682687221363-72518513620e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    text: "7월이벤트",
    image:
      "https://plus.unsplash.com/premium_photo-1683299266036-9e9b6c9d9152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    text: "8월이벤트",
    image:
      "https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Layout>
        <VStack w={"full"} alignItems={"flex-start"} py={"140px"}>
          {/* 메인 */}

          <VStack w="full">
            <VStack spacing={8} w="inherit" px={4} alignItems={"flex-start"}>
              <Text fontWeight={"600"} fontSize={24}>
                곰돌이
              </Text>

              <Grid gap={2} gridTemplateColumns={"1fr 1fr"} w={"full"}>
                <GridItem
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  bgImage={
                    "https://d2v80xjmx68n4w.cloudfront.net/members/portfolios/gMYKY1667317951.jpg"
                  }
                  bgPosition={"top center"}
                  bgSize={"cover"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                  ></Box>
                </GridItem>
                <GridItem
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  bgImage={
                    "https://www.hushwish.com/wp-content/uploads/2021/05/cha_belly_thumb04.jpg"
                  }
                  bgPosition={"top center"}
                  bgSize={"cover"}
                ></GridItem>
                <GridItem
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  bgImage={
                    "https://image.auction.co.kr/itemimage/1b/ac/12/1bac12d846.jpg"
                  }
                  bgPosition={"top center"}
                  bgSize={"cover"}
                ></GridItem>
                <GridItem
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  bgImage={
                    "https://png.pngtree.com/png-clipart/20211022/ourlarge/pngtree-cute-brown-bear-cartoon-eat-cookies-sticker-png-image_3998512.png"
                  }
                  bgPosition={"center"}
                  bgSize={"cover"}
                ></GridItem>
                <GridItem
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  bgImage={
                    "https://img.freepik.com/premium-vector/cute-happy-smiling-baby-bear-in-scarf-and-hat-flat-cartoon-character-illustration-icon-isolated-on-white-baby-bear-character_92289-573.jpg"
                  }
                  bgPosition={"top center"}
                  bgSize={"cover"}
                  position={"relative"}
                  overflow={"hidden"}
                ></GridItem>
                <GridItem
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  bgImage={
                    "https://png.pngtree.com/png-clipart/20211020/ourlarge/pngtree-cute-korean-bear-with-rainbow-png-image_3998894.png"
                  }
                  bgPosition={"top center"}
                  bgSize={"cover"}
                  position={"relative"}
                  overflow={"hidden"}
                ></GridItem>
              </Grid>
            </VStack>
          </VStack>

          {/* 메인2 */}
          <VStack w="full">
            <VStack spacing={8} w="inherit" px={2} alignItems={"flex-start"}>
              <Text fontWeight={"600"} fontSize={24}>
                이벤트
              </Text>
              <Grid gap={4} w="full">
                {dataBear.map((list, index) => (
                  <GridItem
                    key={index}
                    rounded={"lg"}
                    h="120px"
                    padding={"90px"}
                    backgroundImage={`url(${list.image})`}
                    backgroundSize="cover"
                    backgroundPosition={"center center"}
                    position={"relative"}
                  >
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      w="full"
                      h="full"
                      bgGradient="linear(to-b, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7))"
                    >
                      <Text
                        w="full"
                        align="center"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform={"translate(-50%, -50%)"}
                        fontWeight={900}
                        fontSize="20"
                        color="black.600"
                      >
                        {list.text}
                        {index}
                      </Text>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
