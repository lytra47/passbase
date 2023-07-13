import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SavedCards from "./subComponents/SavedCards";
import { useEffect } from "react";

function Saved() {
  const auth = localStorage.getItem("user");
  const userEmail = JSON.parse(auth).email;
  const [userPassKey, setUserPassKey] = useState([]);

  useEffect(() => {
    fetchData(userEmail);
  }, []);

  async function fetchData() {
    let result = await fetch(`http://127.0.0.1:5000/getpass/${userEmail}`);
    result = await result.json();
    setUserPassKey(result);
  }

  return (
    <Container className="mt-5">
      <Row>
        {userPassKey.length > 0 ? (
          <>
            {userPassKey.map((pass, index) => (
              <SavedCards key={index} index={index} pass={pass} />
            ))}
          </>
        ) : null}
      </Row>
    </Container>
  );
}

export default Saved;
