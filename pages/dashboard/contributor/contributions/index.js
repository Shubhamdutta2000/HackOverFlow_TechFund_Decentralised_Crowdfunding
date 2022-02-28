import { useEffect, useState } from "react";
import Layout from "layout/Layout";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Typography,
} from "@mui/material";
import { useStyles } from "../../../../styles/prevContributions.style.js";
import { useRouter } from "next/router";

const Contributions = () => {
  const classes = useStyles();
  const router = useRouter()
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).isAuthenticated
      : false
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [router])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Layout>
      <Typography variant="heading" className={classes.prevContributionHeading}>
        Previous Investments
      </Typography>
      <Typography
        variant="description"
        className={classes.prevContributionDescription}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
        dolor sit amet.
      </Typography>

      {/* Table */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead style={{ backgroundColor: "#E9EAFF" }}>
            <TableCell
              style={{ padding: "1.3rem 0 1.3rem" }}
              variant="heading"
              align="center"
              className={classes.tableHeading}
            >
              Id
            </TableCell>
            <TableCell variant="heading" className={classes.tableHeading}>
              Title of Idea
            </TableCell>
            <TableCell variant="heading" className={classes.tableHeading}>
              Contribution Date
            </TableCell>
            <TableCell
              variant="heading"
              align="center"
              className={classes.tableHeading}
            >
              Amount Contributed
            </TableCell>
            <TableCell
              variant="heading"
              className={classes.tableHeading}
              align="center"
            >
              See Details
            </TableCell>
          </TableHead>
          <TableBody>
            {["1", "2"].map((userRow) => (
              <TableRow key={userRow}>
                <TableCell className={classes.tableCell_id} align="center">
                  1234
                </TableCell>
                <TableCell
                  align="justify"
                  component="th"
                  className={classes.tableCell_userName}
                >
                  Learn Web 3.0
                </TableCell>
                <TableCell className={classes.tableCell_password}>
                  February 28, 2022
                </TableCell>
                <TableCell
                  align="center"
                  component="th"
                  className={classes.tableCell_date}
                >
                  time
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.seeDetailsBtn}
                    size="small"
                  >
                    View Idea
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Contributions;
