import { ButtonGroup } from '@mui/material';
import { Category } from '../catTypes';
import { Container, StyledButton } from './CategoryButtonGroup.styles';
import { ReactNode } from 'react';

interface CategoryButtonGroupProps {
  categories: Category[];
  selectedCategory: Category | null;
}

function CategoryButtonGroup({ categories, selectedCategory }: CategoryButtonGroupProps) {
  const categoryNodes: ReactNode[] = [];
  categories.forEach((category) => {
    categoryNodes.push(
      <StyledButton type="button" selected={false}>
        {category.name}
      </StyledButton>
    );
  });
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        {categoryNodes}
      </ButtonGroup>
    </Container>
  );
}
export default CategoryButtonGroup;