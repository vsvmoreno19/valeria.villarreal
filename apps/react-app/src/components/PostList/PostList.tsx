import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, IconButton, Typography } from '@mui/material';
import { CardActions, CardContainer, CardContent, PostCard } from './PostList.styles';
import { ReactNode } from 'react';
import { shorten } from '../../utils';

const posts = [
  {
    id: '1.23',
    title: 'A good place to camp',
    image:
      'https://th.bing.com/th/id/R.e0bad63364a867fea652212c254bf869?rik=avtecz5aXVdevA&riu=http%3a%2f%2fwww.viajejet.com%2fwp-content%2fviajes%2fLago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg&ehk=6qRhWDqqQAEkSFs%2bHP8p2Bl6XfPbjznSoORh%2bsEJ%2bQE%3d&risl=&pid=ImgRaw&r=0',
    description: 'Beautiful water, incredible landscapes and huge bears everywhere. Everything your soul needs.',
    category: 'Travel',
    comments: [
      {
        id: '2.1',
        author: 'Valeria Scarlett',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '2.2',
        author: 'Anonymus',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  },
  {
    id: '1.24',
    title: 'The average path a grandparent took to get to school',
    image: 'https://th.bing.com/th/id/R.df8ba69a16ad146c6e8cc769fa900ab0?rik=qYqjcnEnWzdXug&pid=ImgRaw&r=0',
    description: "Don't forget to bring your machete in case you encounter the devil or some stones in case witches appear. ",
    category: 'Travel',
    comments: [
      {
        id: '2.1',
        author: 'Valeria Villarreal',
        content:
          'Third one comment'
      }
    ]
  }
];

const postCards: ReactNode[] = [];

posts.forEach((post) => {
  postCards.push(
    <PostCard item xs={12} image={posts[0].image} md={6}>
      <CardContainer>
        <CardContent>
          <h1>{post.title}</h1>
          <h3>{post.comments.map(comment => (
            <div key={comment.id}>
               <p><strong>{comment.author}:</strong> {comment.content}</p>
            </div>
          ))}</h3>
          <h3>{shorten(post.description, 70)}</h3>
          <Typography variant="overline">{post.category}</Typography>
        </CardContent>
        <CardActions className="card-actions">
          <IconButton color="inherit">
            <EditIcon />
          </IconButton>
          <IconButton color="inherit">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </CardContainer>
    </PostCard>
  );
});

function PostList() {
  return (
    <Grid container columns={{ md: 12, xs: 12 }}>
      {postCards}
    </Grid>
  );
}

export default PostList;