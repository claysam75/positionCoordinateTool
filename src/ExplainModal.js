import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const step1svg = require('./step1.svg');
const ExplainModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow} className="mt-3">
        Show me the maths
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard="false"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>The Maths</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <h5>Step 1 - Calculate 'true' aperture</h5>
            <p>
              The downlight aperture which the driver needs to fit through isn't
              2D, it has depth, therefore the width which the driver needs to
              fit through is actually slightly wider than the measured aperture.
              <br />
              <br />
              This is a trigonometry problem. There is a right angle triangle
              formed where the aperture depth and width form a right angle, and
              the hypotenuse of that triangle is our 'true' aperture.
              <br />
            </p>
            <hr />
            <h5>Step 2 - Calculate the hypotenuse angle</h5>
            <p>
              The hypotenuse we calculated in step 1 is at an angle to the
              horizontal plane. We need that to correct with in a later step.
            </p>
            <hr />
            <h5>
              Step 3 - Find maximum angle driver can be at within aperture
            </h5>
            <p>
              To minimise the depth required to get the driver in the ceiling,
              we slide the driver into the downlight aperture at the maximum
              angle possible. This is limited by the true width/depth of the
              aperture itself. More trigonometry to calculate this.
            </p>
            <hr />
            <h5>Step 4 - Check if driver can make turn</h5>
            <p>
              In step 3 we put the driver into the aperture at the maximum
              possible angle. We can slide the driver along this angle, but that
              angle can't increase (dropping the far end of the driver) until
              the bottom edge of the driver is JUST past the edge of the
              aperture.
              <br />
              <br />
              Another right angle triangle is formed where the length of the
              driver is the hypotenuse. We know the angle the driver is at so
              can calculate the 'adjacent' of the triangle. If the adjacent is
              shorter than the available ceiling void, then the driver can begin
              to make the turn before hitting the upper limiting factor. If the
              adjacent is longer than the available void - the driver will hit
              the upper limit before the bottom edge of the driver moves past
              the aperture edge and won't be able to make the turn.
            </p>
            <hr />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExplainModal;
