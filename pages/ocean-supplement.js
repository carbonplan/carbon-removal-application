import Markdown from "../markdown/supplements/ocean.md";
import { Box } from "theme-ui";

const Index = () => {
  return (
    <Box sx={{ width: "800px", mt: [5], mx: "auto" }}>
      <Markdown />
    </Box>
  );
};

export default Index;