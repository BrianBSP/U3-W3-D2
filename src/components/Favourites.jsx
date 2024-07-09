import { ListGroup } from "react-bootstrap";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Favourites = () => {
  //const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.content);

  return (
    <ListGroup>
      {favourites.map((job, index) => (
        <ListGroup.Item key={index}>{job}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Favourites;
