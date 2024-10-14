import { Grid } from "@mui/material";
import { PageContainer } from "./CategoriesPage.styles";


function CategoriesPage() {
  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
      </Grid>
    </PageContainer>
  );
}

export default CategoriesPage;