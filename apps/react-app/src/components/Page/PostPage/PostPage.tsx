import Banner from "../../Banner";
import Comments from "../../Comments";
import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

const post = {
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/30/90/8a/caption.jpg?w=1200&h=-1&s=1",
  title: "Chipinque",
  postID: "001",
  comments: [
    {
      _id: "01",
      author: 'Valeria Villarreal',
      content:'Post Page Comment 1',
      createdAt: "2024",
      updatedAt: "2024",
      __v: "000",
    },
    {
      _id: "02",
      author: 'Anonymus',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      createdAt: "2024",
      updatedAt: "2024",
      __v: "000",
    },
   ],
   description: "Parque impresionante en un entorno boscoso, famoso por sus senderos naturales y un observatorio en la montaña.",
 };

function PostPage() {
  return (
    <Container container>
      <BannerContainer item>
        <Banner postImage={post.image} postTitle={post.title} ></Banner>
      </BannerContainer>

      <DescriptionContainer item>
        <p>{post.description}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        <Comments comments={post.comments}></Comments>
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
