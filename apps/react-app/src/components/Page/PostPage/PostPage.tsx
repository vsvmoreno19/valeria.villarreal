import Banner from "../../Banner";
import Comments from "../../Comments";
import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";


import { useState, useEffect, useCallback } from "react";
import Loading from "../../Loading";
import { Post, PostResponse } from "../../catTypes";
import { getPost } from "../../../api/endpoints/posts";

/*const post = {
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
 };*/

  const postID = "671e5bfd4e1e9611a145afca"

function PostPage() {
    // ACT 9 - Use postID variable to fetch the post data
  const [post, setPost] = useState<Post>();

    /*get post*/
    const getPostData = useCallback(
      async ({
        postID
      }: {
        postID: string;
      }) => {
      const onSuccess = (data: PostResponse) => {        
        const post : Post = {
          id: data._id,
          title: data.title,
          image: data.image,
          description: data.description,
          category: data.category,
          comments: data.comments     
        }
       
        setPost(post);
        console.log(data)
      };
  
      await getPost({postID, onSuccess})
    }, []);
    /*+get post+*/

    useEffect(() => {
      if(postID) 
        getPostData({postID})
       }, [getPostData, postID]);

  if (!post) return <Loading />;

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
