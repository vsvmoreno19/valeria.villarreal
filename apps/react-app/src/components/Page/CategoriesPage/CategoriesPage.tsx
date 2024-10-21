import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import { PageContainer } from "./CategoriesPage.styles";
import { Category } from "../../../types";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof Category>("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  function handleRequestSort(property: keyof Category) {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  }

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const sortedRows = rows.slice().sort((a, b) => {
    if (orderBy === "name") {
      return (order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    }
    return 0;
  });

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleRequestSort("name")}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit" onClick={() => handleEditItem(row)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDeleteItem(row.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>                    
                  </TableCell>
                </TableRow>
              ))}
              {paginatedRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    No categories available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`}
          />
        </TableContainer>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{isEditing ? "Edit Category" : "Create Category"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>{isEditing ? "Save" : "Create"}</Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}

export default CategoriesPage;