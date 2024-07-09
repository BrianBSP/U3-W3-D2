import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  console.log(favourites);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <h1>Preferiti</h1>
        </Col>
        <Col>
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
                <p>
                  ⭐️ <Link to={"/" + fav.company_name}>{fav.company_name}</Link>{" "}
                  <span
                    className="ms-2"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: fav,
                      })
                    }
                  >
                    🚮
                  </span>
                </p>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

{
  /* <ListGroup>
  {favourites.map((job, index) => (
    <ListGroup.Item key={index}>{job}</ListGroup.Item>
  ))}
</ListGroup> */
}
