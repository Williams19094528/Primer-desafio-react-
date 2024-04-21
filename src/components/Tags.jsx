import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

function Tags() {
  return (
    <Stack
      direction="horizontal"
      gap={5}
      className="d-flex justify-content-center"
    >
      <Badge bg="primary" style={{ fontSize: "1.5em" }}>
        Primary
      </Badge>
      <Badge bg="secondary" style={{ fontSize: "1.5em" }}>
        Secondary
      </Badge>
      <Badge bg="success" style={{ fontSize: "1.5em" }}>
        Success
      </Badge>
      <Badge bg="danger" style={{ fontSize: "1.5em" }}>
        Danger
      </Badge>
    </Stack>
  );
}

export default Tags;
