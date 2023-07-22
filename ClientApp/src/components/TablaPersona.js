import { Table, Button } from "reactstrap"
import { Outlet, Link } from "react-router-dom";

const TablaPersona = ({ data, setPersonaAEditar, showModalPersona, setShowModalPersona, eliminarPersona }) => {

    const enviarDatos = (persona) => {
        setPersonaAEditar(persona);
        setShowModalPersona(!showModalPersona);

    }


    return (
        <Table striped responsive>
            <thead>
                <tr>
                    {/*<th>Id</th>*/}
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Completada</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                {/*<td>{item.id}</td>*/}
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.isCompleted ? 'SI' : 'NO'}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)} >Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarPersona(item.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }

            </tbody>
        </Table>
    )
}

export default TablaPersona;
