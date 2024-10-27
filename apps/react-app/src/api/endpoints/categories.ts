import { AxiosError, AxiosResponse } from "axios";

import axios from "../axios";
import {
  // Category,
  CategoriesResponse,
  NewCategory
} from "../../types";

export const getCategories = async ({
  onSuccess,
  onError,
  onLoading,
}: {
  onSuccess?: (data: CategoriesResponse[]) => void;
  onError?: (error: AxiosError) => void;
  onLoading?: (isLoading: boolean) => void;
}) => {
  onLoading && onLoading(true);

  await axios({
    url: "/categories",
    method: "get",
  })
    .then((response: AxiosResponse) => {
      const data: CategoriesResponse[] = response.data;
      if (response.status === 200 && onSuccess) onSuccess(data);
    })
    .catch((error: AxiosError) => {
      console.error(`${error}`);
      onError && onError(error);
    })
    .finally(() => onLoading && onLoading(false));
};

// ACT 9 - Create callbacks fuctions to call create, update and delete APIs
export const  createCategory = async ({
  newCategory,
  onSuccess,
  onError,
  onLoading,
}: {
  newCategory: NewCategory;
  onSuccess?: (data: CategoriesResponse) => void;
  onError?: (error: AxiosError) => void;
  onLoading?: (isLoading: boolean) => void;
}) => {
  onLoading && onLoading(true);

  await axios({
    method: "post",
    url: `/categories`,
    data: newCategory,
  })
    .then((response: AxiosResponse) => {
      const data: CategoriesResponse = response.data;
      if (response.status === 201 && onSuccess) onSuccess(data);
    })
    .catch((error: AxiosError) => {
      console.error(`${error}`);
      onError && onError(error);
    })
    .finally(() => onLoading && onLoading(false));
};

export const  updateCategory = async ({
  categoryID,
  updatedCategory,
  onSuccess,
  onError,
  onLoading,
}: {
  categoryID: string;
  updatedCategory: NewCategory;
  onSuccess?: (data: CategoriesResponse) => void;
  onError?: (error: AxiosError) => void;
  onLoading?: (isLoading: boolean) => void;
}) => {
  onLoading && onLoading(true);

  await axios({
    method: "patch",
    url: `/categories/${categoryID}`,
    data: updatedCategory,
  })
    .then((response: AxiosResponse) => {
      const data: CategoriesResponse = response.data;
      if (response.status === 201 && onSuccess || response.status === 200 && onSuccess) onSuccess(data);
    })
    .catch((error: AxiosError) => {
      console.error(`${error}`);
      onError && onError(error);
    })
    .finally(() => onLoading && onLoading(false));
};

export const  deleteCategory = async ({
  categoryID,
  onSuccess,
  onError,
  onLoading,
}: {
  categoryID: string;
  onSuccess?: () => void;
  onError?: (error: AxiosError) => void;
  onLoading?: (isLoading: boolean) => void;
}) => {
  onLoading && onLoading(true);

  await axios({
    method: "delete",
    url: `/categories/${categoryID}`
  })
    .then((response: AxiosResponse) => {
      if (response.status === 204 && onSuccess || response.status === 200 && onSuccess) onSuccess();
    })
    .catch((error: AxiosError) => {
      console.error(`${error}`);
      onError && onError(error);
    })
    .finally(() => onLoading && onLoading(false));
};