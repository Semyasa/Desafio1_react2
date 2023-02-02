import { Container } from "react-bootstrap";
import imagenerror from "../components/404.png"

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
      <img src={imagenerror} alt="" />
    </Container>
  );
};
