import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import { useState, useEffect } from "react";

const modeloDefaultPersona = {
    id: 0,
    name: '',
    description: '',
    isCompleted: false
}

const ModalPersona = ({ showModalPersona, setShowModalPersona, setPersonaAEditar, personaAEditar, guardarPersona, editarPersona }) => {

    const [currentPersonaData, setCurrentPersonaData] = useState(modeloDefaultPersona);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);


        if (e.target.name == 'isCompleted') {
            setCurrentPersonaData({
                ...currentPersonaData, [e.target.name]: (e.target.value == 'on' ? true : false)
            });
        } else {
            setCurrentPersonaData({
                ...currentPersonaData, [e.target.name]: e.target.value
            });
        }
    }

    const enviarDatos = () => {
        if (currentPersonaData.id == 0) {
            guardarPersona(currentPersonaData);

        } else {
            editarPersona(currentPersonaData); //
        }

        setCurrentPersonaData(modeloDefaultPersona);
    }

    useEffect(() => {
        if (personaAEditar != null) {
            setCurrentPersonaData(personaAEditar);
        } else {
            setCurrentPersonaData(modeloDefaultPersona);
        }

        // setCurrentPersonaData(modeloDefaultPersona);
    }, [personaAEditar])

    const cerrarModal = () => {
        setShowModalPersona(!showModalPersona);
        setPersonaAEditar(null);
    }

    return (
        <Modal isOpen={showModalPersona}>
            <ModalHeader>
                {currentPersonaData.id == 0 ? "Nueva persona" : "Editar persona"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="name" onChange={(e) => actualizaDato(e)} value={currentPersonaData.name} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Descripción</Label>
                        <Input name="description" onChange={(e) => actualizaDato(e)} value={currentPersonaData.description} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Es completado</Label>
                        {/*
                        <Input name="isCompleted" onChange={(e) => actualizaDato(e)} value={currentPersonaData.isCompleted} />
    */}

                        <Input name="isCompleted" type="switch" role="switch" checked={currentPersonaData.isCompleted ? 'on' : ''}
                            onChange={(e) => actualizaDato(e)} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos} >Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal} >Cerrar</Button>
            </ModalFooter>

        </Modal>
    )
}

export default ModalPersona;

