import React from 'react'
import { Form, Container, Col, FormControl, Button } from 'react-bootstrap';
const Search = (props) => {

    const [search, setSearch] = React.useState('');

    return (
        <div>
            <Container>
                <Form className="mt-2">
                    <Form.Row className="align-items-center"> 
                        <Col sm={10} className="my-1">
                            <FormControl onChange={(e) => setSearch(e.target.value)} 
                                placeholder="PokeDex Search" />
                        </Col>
                        <Col sm={2} className="my-1">
                        <Button block onClick={(e) => props.getPokemon(search)}>Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </div>
    )
}

export default Search
