import React, { useEffect, useState } from 'react'
import { Button, Container, Card } from 'react-bootstrap'
import Curses from '../COURSES/Curses'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div style={{ marginTop: '150px' }}>
      <Container>
        <Link to={'/CreateCurses'}>
        <Button variant="primary" size="lg">
          Create Curse
        </Button>
        </Link>
        <Curses ></Curses>
      </Container>
    </div>
  )
}

export default Home