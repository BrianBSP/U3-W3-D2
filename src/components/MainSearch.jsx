import { useState } from "react";
import { Container, Row, Col, Form /* Button */ } from "react-bootstrap";
import Job from "./Job";
//import Favourites from "./Favourites";
import { Link /* useNavigate */ } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  //const [jobs, setJobs] = useState([]);

  const jobs = useSelector((state) => state.job.results);
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  //const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));

    /* try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <Container>
      <div>
        {/* <Button onClick={() => navigate("/preferiti")}>Preferit</Button> */}
        <Link to="/preferiti" className="btn btn-primary mt-2">
          Preferiti
          {/* <Favourites /> */}
        </Link>
      </div>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1 text-center mt-4">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
