import React from "react";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import {
  WEEK_ENDING,
  RETAIL_SALES,
  WHOLESALE_SALES,
  UNITS_SOLD,
  RETAILER_MARGIN,
} from "../../constants/index";
import { setDataModifiedFlag } from "../../actions/index";

const Sales = (props) => {
  const modifyData = (data) => {
    data.forEach((row) => {
      row.retailSales =
        typeof row.retailSales === "string"
          ? row.retailSales
          : `$${row.retailSales.toLocaleString()}`;

      row.wholesaleSales =
        typeof row.wholesaleSales === "string"
          ? row.wholesaleSales
          : `$${row.wholesaleSales.toLocaleString()}`;

      row.unitsSold = row.unitsSold.toLocaleString();

      row.retailerMargin =
        typeof row.retailerMargin === "string"
          ? row.retailerMargin
          : `$${row.retailerMargin.toLocaleString()}`;
    });

    return data;
  };

  const renderTable = () => {
    const { sales } = props;

    if (sales !== undefined) {
      const products = modifyData(sales);
      const columns = [
        {
          dataField: "weekEnding",
          text: WEEK_ENDING,
          sort: true,
        },
        {
          dataField: "retailSales",
          text: RETAIL_SALES,
          sort: true,
        },
        {
          dataField: "wholesaleSales",
          text: WHOLESALE_SALES,
          sort: true,
        },
        {
          dataField: "unitsSold",
          text: UNITS_SOLD,
          sort: true,
        },
        {
          dataField: "retailerMargin",
          text: RETAILER_MARGIN,
          sort: true,
        },
      ];

      return (
        <div>
          <BootstrapTable
            keyField="id"
            data={products}
            columns={columns}
            striped
            hover
          />
        </div>
      );
    }
  };
  return <>{renderTable()}</>;
};

const mapStateToProps = (state) => {
  const { loadingReducer } = state;
  const { data } = loadingReducer;
  return {
    sales: data.sales,
    dataModified: data.dataModified,
  };
};

const mapDispatchToProps = { setDataModifiedFlag };
export default connect(mapStateToProps, mapDispatchToProps)(Sales);
