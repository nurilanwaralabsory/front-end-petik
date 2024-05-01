import React from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function TableCourse() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get("https://api.sukmax.my.id/course");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourse();
  }, []);

  const LastCourse = currentPage * coursesPerPage;
  const FirstCourse = LastCourse - coursesPerPage;
  const currentCourses = courses.slice(FirstCourse, LastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/course/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Layout>
        <h2 className="title">Courses</h2>
        <h3 className="subtitle">List of Courses</h3>
        <Link to={"/course/add"} className="button is-primary mb-2">
          Add New
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>{course.desc}</td>
                  <td>
                    <img src={course.url} className="image is-128x128 mb-5" alt="img" />
                  </td>
                  <td>
                    <Link to={`/course/edit/${course.id}`} className="button is-info is-small">
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        if (window.confirm("Apakah anda yakin ingin menghapus?")) {
                          deleteCourse(course.id);
                        }
                      }}
                      className="button is-small is-danger ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink first onClick={() => paginate(1)} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink previous onClick={() => paginate(currentPage - 1)} />
                  </PaginationItem>
                  {[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map((number) => (
                    <PaginationItem key={number + 1} active={number + 1 === currentPage}>
                      <PaginationLink onClick={() => paginate(number + 1)}>{number + 1}</PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationLink next onClick={() => paginate(currentPage + 1)} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink last onClick={() => paginate(Math.ceil(courses.length / coursesPerPage))} />
                  </PaginationItem>
                </Pagination>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Layout>
    </div>
  );
}

export default TableCourse;
