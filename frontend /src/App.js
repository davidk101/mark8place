import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from "./components/Footer"
import Homescreen from "./screens/Homescreen"
import Productscreen from "./screens/Productscreen"


function App() {
  return (
      <Router>
        <Header />
        <main className={'py-3'}>{/*padding provided by py-3*/}
            <Container>
                <Route path = '/' component = {Homescreen} exact /> {/* 'exact' prevents going to the homescreen for any keyword after '/' */ }
                <Route path = '/product/:id' component = {Productscreen} />
            </Container>
        </main>
        <Footer />
      </Router>
  )
}

export default App
