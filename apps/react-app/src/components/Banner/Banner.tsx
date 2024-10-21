import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { BannerContent, BannerTitle, Container } from "./Banner.styles";
import { useNavigate } from "react-router-dom";

function Banner({postImage, postTitle}:{postImage : string, postTitle: string }) {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Container image={postImage}>
      <BannerContent>
        <Button  onClick={handleHomeClick} sx={{ color: "white" }} startIcon={<ArrowBackIosIcon />}>
          View Home 
        </Button>
        <BannerTitle variant="h3">{postTitle}</BannerTitle>
        
      </BannerContent>
    </Container>
  );
}

export default Banner;