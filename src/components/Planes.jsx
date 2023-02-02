
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Navigation() {
  return (
    <>
    <div>
      Correo:
    </div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="name@example.com"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <div className="">
          Descripción
        </div>
      <InputGroup className="">
        <InputGroup.Text>Escriba Descripción</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
    </>
  );
}
