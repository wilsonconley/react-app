import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = ["New York", "Paris", "Chicago"];

  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button color="secondary" onClick={() => setShowAlert(true)}>
        Show Alert
      </Button>
    </div>
  );
}

export default App;
