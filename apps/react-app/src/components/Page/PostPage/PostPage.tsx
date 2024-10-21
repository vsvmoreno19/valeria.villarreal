import Banner from "../../Banner";
import Comments from "../../Comments";
import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

const post = {
  image: "https://th.bing.com/th/id/R.e0bad63364a867fea652212c254bf869?rik=avtecz5aXVdevA&riu=http%3a%2f%2fwww.viajejet.com%2fwp-content%2fviajes%2fLago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg&ehk=6qRhWDqqQAEkSFs%2bHP8p2Bl6XfPbjznSoORh%2bsEJ%2bQE%3d&risl=&pid=ImgRaw&r=0",
  title: 'A good place to camp',
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
   description: 'Beautiful water, incredible landscapes and huge bears everywhere. Everything your soul needs.',
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
