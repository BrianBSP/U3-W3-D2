import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavouriteAction } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  console.log(favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <h1>Preferiti</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col>
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
                <p>
                  ⭐️ <Link to={"/" + fav.company_name}>{fav.company_name}</Link>{" "}
                  <span className="ms-2" onClick={() => dispatch(removeFromFavouriteAction(fav._id))}>
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
