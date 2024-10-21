import React, { createContext, useState, useCallback } from "react";

import { Post } from "../types";

interface PostContextProps {
  posts: Post[] | null;
  getPosts: (categoryID?: string) => void;
  removePost: ({
    postID,
    selectedCategoryID,
  }: {
    postID: string;
    selectedCategoryID?: string;
  }) => void;
}

interface PostProviderProps {
  children: React.JSX.Element;
}

export const PostContext = createContext<PostContextProps>({
  posts: [],
  getPosts: () => {},
  removePost: () => {},
});

const postList: Post[] = [
  {
    id: "664128a212f505651c18d676",
    title: "Travel",
    image: "https://th.bing.com/th/id/R.e0bad63364a867fea652212c254bf869?rik=avtecz5aXVdevA&riu=http%3a%2f%2fwww.viajejet.com%2fwp-content%2fviajes%2fLago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg&ehk=6qRhWDqqQAEkSFs%2bHP8p2Bl6XfPbjznSoORh%2bsEJ%2bQE%3d&risl=&pid=ImgRaw&r=0",
    description: "Vacations time to relax",
    category: {
      _id: "663fef70d513515319551d1f",
      name: "Travel Name Category",
      createdAt: "2024-05-11T22:21:36.759Z",
      updatedAt: "2024-05-14T13:47:54.653Z",
      __v: 0,
    },
    comments: [
      "6641f7d912f505651c18d68e",
      "66424d2c12f505651c18d91c",
      "66424d3812f505651c18d923",
    ],
  },
  {
    id: "664128a212f505651c18d6kf6",
    title: "Favorite food",
    image:
    "https://th.bing.com/th/id/R.2d66d3ce21d052726c2c527a03da4f4c?rik=3FedcY2H7LDtBw&riu=http%3a%2f%2ftheartofplating.com%2fwp-content%2fuploads%2f2015%2f06%2fEvan_Feature.jpg&ehk=KCxZkONbpjuAYhfpKxoeHgIizR%2fy1U0LM6olKn1d8go%3d&risl=&pid=ImgRaw&r=0",
    description: "Food Description",
    category: {
      _id: "663fef70d513515319546d1f",
      name: "Food Name Category",
      createdAt: "2024-05-11T22:21:36.759Z",
      updatedAt: "2024-05-14T13:47:54.653Z",
      __v: 0,
    },
    comments: [
      "6641f7d912f505651c18d68e",
      "66424d2c12f505651c18d91c",
    ],
  },
];

export function PostProvider({
  children,
}: PostProviderProps): React.JSX.Element {
  const [serverData, setServerData] = useState(postList);
  const [posts, setPosts] = useState<Post[] | null>(postList);

  const getPosts = useCallback(
    (categoryID?: string) => {
      const selectedCategory = serverData.filter(
        (post: Post) => post.category?._id === categoryID
      );
      const newPosts = categoryID ? selectedCategory : serverData;
      setPosts(newPosts);
    },
    [serverData]
  );

  const removePost = useCallback(
    ({
      postID,
      selectedCategoryID,
    }: {
      postID: string;
      selectedCategoryID?: string;
    }) => {
      setServerData((prev) => prev.filter((post: Post) => post.id !== postID));
      getPosts(selectedCategoryID);
    },
    [getPosts]
  );

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        removePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
