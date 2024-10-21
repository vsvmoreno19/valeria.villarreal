import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { PageContainer } from "./CategoriesPage.styles";
import { Category } from "../../../types";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

const categories: Category[] = [
  { id: "663fef70d513515319551d1f", name: "Travel" },
  { id: "663fef70d513515319546d1f", name: "Food" },
];

function CategoriesPage() {
  const [rows, setRows] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setRows(categories);
  }, []);

  function handleEditItem(category: Category) {
    setSelectedCategory(category);
    setCategoryName(category.name);
    setIsEditing(true);
    setOpen(true);
  }

  function handleDeleteItem(categoryId: string) {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setRows(rows.filter(row => row.id !== categoryId));
    }
  }

  function handleAddItem() {
    setSelectedCategory(null);
    setCategoryName("");
    setIsEditing(false);
    setOpen(true);
  }

  function handleSave() {
    if (isEditing && selectedCategory) {
      setRows(rows.map(row => row.id === selectedCategory.id ? { ...row, name: categoryName } : row));
    } else {
      const newCategory: Category = { id: Date.now().toString(), name: categoryName };
      setRows([...rows, newCategory]);
    }
    setOpen(false);
    setSelectedCategory(null);
    setCategoryName("");
  }

  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
        <IconButton aria-label="add" onClick={handleAddItem}>
          <AddIcon />
        </IconButton>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit" onClick={() => handleEditItem(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDeleteItem(row.id)}>
                      <DeleteIcon />
                    </IconButton>                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{isEditing ? "Edit Category" : "Add Category"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            type="text"
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>{isEditing ? "Save" : "Add"}</Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}

export default CategoriesPage;