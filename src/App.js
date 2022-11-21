import { useState } from 'react';
import styled from "styled-components";

import Button from "./components/Button";
import Alert from "./components/Alert"

function App() {
  const [isOpenedAlert, setOpenedAlert] = useState(false);
  const handleOpen = () => setOpenedAlert(true);
  const handleClose = () => setOpenedAlert(false);

  return (
    <>
    <div>
      <Button color="primary">Primary button</Button>
      <Button color="primary" size="large">Primary large button</Button>
      <Button color="secondary">Secondary button</Button>
      <Button color="primary" disabled>Disabled button</Button>
    </div>

    <hr/>

    <button onClick={handleOpen}>Open alert</button>
    {isOpenedAlert && <Alert color="primary" onClose={handleClose}>Some text</Alert>}
    </>
  );
}

export default App;
