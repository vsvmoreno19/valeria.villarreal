import React, { useEffect, useState, useCallback } from "react";
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
import { getCategories, createCategory, updateCategory, deleteCategory } from "../../../api";
import Loading from "../../Loading";
import { CategoriesResponse } from "../../catTypes";


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
  const [loadingCategories, setLoadingCategories] = useState(false);

  const onError = useCallback(() => {
    console.log("error");
  }, []);

  const onLoading = (isLoading: boolean) => {
    setLoadingCategories(isLoading);
  };

  const getCategoriesList = useCallback(async () => {
    const onSuccess = (data: CategoriesResponse[]) => {
      const transformedData: Category[] = data.map(item => ({
        id: item._id,
        name: item.name,
      }));
      setRows(transformedData);
      console.log("added rows", transformedData);
    };

    await getCategories({ onSuccess, onError, onLoading });
  }, [onError]);

  const addCategory = useCallback(
    async (newCategory: { name: string }) => {
      const onSuccess = (data: CategoriesResponse) => {
        const transformedData: Category = {
          id: data._id,
          name: data.name,
        };
        setRows(prevRows => [...prevRows, transformedData]);
        console.log("Category successfully created.");
      };

      await createCategory({ newCategory, onSuccess, onError, onLoading });
    },
    [onError]
  );

  const removeCategory = useCallback(
    async (categoryID: string) => {
      const onSuccess = () => {
        setRows(prevRows => prevRows.filter(row => row.id !== categoryID));
        console.log("Category successfully deleted.");
      };
      await deleteCategory({ categoryID, onSuccess, onError, onLoading });
    },
    [onError]
  );

  const updateCategoryData = useCallback(
    async (categoryID: string, updatedCategory: { name: string }) => {
      const onSuccess = async () => {
        getCategoriesList();
        console.log("Category successfully updated.");
      };

      await updateCategory({ categoryID, updatedCategory, onSuccess, onError, onLoading });
    },
    [getCategoriesList, onError]
  );

  useEffect(() => {
    getCategoriesList();
  }, [getCategoriesList]);

  const handleEditItem = (category: Category) => {
    setSelectedCategory(category);
    setCategoryName(category.name);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDeleteItem = (categoryID: string) => {
    removeCategory(categoryID);
  };

  const handleAddItem = () => {
    setSelectedCategory(null);
    setCategoryName("");
    setIsEditing(false);
    setOpen(true);
  };

  const handleSave = async () => {
    if (isEditing && selectedCategory) {
      await updateCategoryData(selectedCategory.id, { name: categoryName });
    } else {
      await addCategory({ name: categoryName });
    }
    setOpen(false);
    setSelectedCategory(null);
    setCategoryName("");
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
    setCategoryName("");
  };

  const handleRequestSort = (property: keyof Category) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = rows.slice().sort((a, b) => {
    if (orderBy === "name") {
      return (order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    }
    return 0;
  });

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  if (!rows || loadingCategories) return <Loading />;

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

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>{isEditing ? "Save" : "Create"}</Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}

export default CategoriesPage;