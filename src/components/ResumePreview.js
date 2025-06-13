import { Box } from "@chakra-ui/react";
import { useResume } from "../Context";
import DividerTemplate from "./ResumeTemplates/DividerTemplate";
import HorizontalTemplate from "./ResumeTemplates/HorizontalTemplate";

const ResumePreview = () => {
  const { template, printElem } = useResume();

  return (
    <>
      <Box
        bg={"white"}
        w={{ base: "100%", md: "794px" }}
        maxW={{ base: "400px", md: "none" }}
        h={"1123px"}
        rounded={"md"}
        shadow={"md"}
        overflow={"hidden"}
        minH={"100vh"}
      >
        <div ref={printElem}>
          {template === "divider" ? (
            <DividerTemplate />
          ) : (
            <HorizontalTemplate />
          )}
        </div>
      </Box>
    </>
  );
};

export default ResumePreview;
