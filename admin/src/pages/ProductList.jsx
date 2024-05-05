import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../redux/apiCalls";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductListContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductListItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const ProductListEditButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ProductListDeleteIcon = styled(DeleteOutline)`
  color: #ff7676;
  cursor: pointer;
`;

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <Link to={"/product/" + params.row._id}>
              <ProductListEditButton>Edit</ProductListEditButton>
            </Link>
            <ProductListDeleteIcon
              onClick={() => handleDelete(params.row._id)}
            />
          </ProductListItem>
        );
      },
    },
  ];

  return (
    <ProductListContainer>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </ProductListContainer>
  );
}
