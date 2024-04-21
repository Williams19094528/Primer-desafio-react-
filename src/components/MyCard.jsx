import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function MyCard() {
  return (
    <div className="contenedor">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg"
        />
        <Card.Body>
          <Card.Title>Juanito </Card.Title>
          <Card.Text>
            muy obediente y se destaca en diversas disciplinas, como el trabajo
            policial, el pastoreo, el trabajo de búsqueda y rescate
          </Card.Text>
          <Badge bg="primary">Adoptame</Badge>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2020/12/21/08/36/dog-5849152_640.jpg"
        />
        <Card.Body>
          <Card.Title>Panchito </Card.Title>
          <Card.Text>
            muy obediente y se destaca en diversas disciplinas, como el trabajo
            policial, el pastoreo, el trabajo de búsqueda y rescate.
          </Card.Text>
          <Badge bg="success">Adoptame</Badge>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2020/10/06/11/50/dog-5632005_640.jpg"
        />
        <Card.Body>
          <Card.Title>Fiorela</Card.Title>
          <Card.Text>
            muy obediente y se destaca en diversas disciplinas, como el trabajo
            policial, el pastoreo, el trabajo de búsqueda y rescate
          </Card.Text>
          <Badge bg="danger">Adoptame</Badge>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106_640.jpg"
        />
        <Card.Body>
          <Card.Title>Julieta </Card.Title>
          <Card.Text>
            muy obediente y se destaca en diversas disciplinas, como el trabajo
            policial, el pastoreo, el trabajo de búsqueda y rescate
          </Card.Text>
          <Badge bg="info">Adoptame</Badge>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
