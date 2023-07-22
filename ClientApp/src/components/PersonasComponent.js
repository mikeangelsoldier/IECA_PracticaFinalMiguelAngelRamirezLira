import { useState, useEffect } from 'react';
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalPersona from './ModalPersona';
import TablaPersona from './TablaPersona';


const PersonasComponent = () => {

  const [personas, setPersonas] = useState([]);
  const [showModalPersona, setShowModalPersona] = useState(false);
  const [personaAEditar, setPersonaAEditar] = useState(null);








  const mostrarPersonas = async () => {
    const response = await fetch("api/persona/Lista");

    if (response.ok) {
      const data = await response.json();

      setPersonas(data);

      console.log("personas: ", personas);
    } else {
      console.log("Error en los datos de la lista");
    }
  }

  useEffect(() => {
    mostrarPersonas();
  }, [])


  const guardarPersona = async (persona) => {
    const response = await fetch("api/persona/Guardar", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(persona)
    })

    if (response.ok) {
      setShowModalPersona(!showModalPersona);
      mostrarPersonas();
    }
  }

  const editarPersona = async (persona) => {
    const response = await fetch("api/persona/Editar", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(persona)
    })

    if (response.ok) {
      setShowModalPersona(!showModalPersona);
      mostrarPersonas();
    }
  }

  const eliminarPersona = async (id) => {

    var respuesta = window.confirm("¿Estás seguro de eliminar el elemento?");


    if (!respuesta) {
      return;
    }

    const response = await fetch("api/persona/Eliminar/" + id, {
      method: 'DELETE',

    });
    /**  
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(persona)
      */


    if (response.ok) {
      mostrarPersonas();
    }
  }



  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Lista de personas</h5>
            </CardHeader>
            <CardBody>
              <Button size="sm" color="success" onClick={() => setShowModalPersona(!showModalPersona)}>Nueva persona</Button>
              <hr></hr>
              <TablaPersona data={personas}
                setPersonaAEditar={setPersonaAEditar}
                showModalPersona={showModalPersona}
                setShowModalPersona={setShowModalPersona}
                eliminarPersona={eliminarPersona}

              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ModalPersona showModalPersona={showModalPersona}
        setShowModalPersona={setShowModalPersona}
        guardarPersona={guardarPersona}
        personaAEditar={personaAEditar}
        setPersonaAEditar={setPersonaAEditar}
        editarPersona={editarPersona}
      />
    </Container>
  );

}

export default PersonasComponent;