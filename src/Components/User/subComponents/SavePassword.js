import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function SavePassword({ email }) {
  const [saveUsername, setSaveUsername] = useState("");
  const [saveWebsite, setSaveWebsite] = useState("");
  const [enterPassword, setenterPassword] = useState("");
  const [savePassword, setSavePassword] = useState("");
  const [saveNotes, setSaveNotes] = useState("");

  async function handleSavePass() {
    if (enterPassword !== savePassword) return alert("Password does not match");

    const data = { saveUsername, saveWebsite, savePassword, saveNotes };

    console.log(JSON.stringify(data));
    let result = await fetch("http://127.0.0.1:5000/savePassword", {
      method: "Put",
      body: JSON.stringify({ email, data }),
      headers: { "Content-Type": "Application/json" },
    });
    result = await result.json();
    if (result) {
      result.exist
        ? alert("credentials already exist in db.")
        : alert("Password added");
      return;
    }
    alert("Something went wrong.");
  }

  return (
    <>
      <Row className="pt-3 ps-3 pe-3">
        <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
          <Card>
            <Card.Body>
              <InputGroup className="mb-3">
                <Form.Control
                  value={saveUsername}
                  onChange={(e) => setSaveUsername(e.target.value)}
                  placeholder="Username"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  value={saveWebsite}
                  onChange={(e) => setSaveWebsite(e.target.value)}
                  placeholder="Website"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  value={enterPassword}
                  onChange={(e) => setenterPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Password"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  value={savePassword}
                  onChange={(e) => setSavePassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
          <Card>
            <Card.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="mb-2">Notes</Form.Label>
                <Form.Control
                  className="mb-2"
                  value={saveNotes}
                  onChange={(e) => setSaveNotes(e.target.value)}
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
              <Button onClick={handleSavePass} className="w-100 mb-3 p-2">
                Save
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default SavePassword;
