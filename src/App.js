import 'bootstrap/dist/css/bootstrap.min.css';

import CatechismChiefPart from './Components/CatechismChiefPart';
import Henkel from './Translations/henkel.json';
import Jacobs from './Translations/jacobs.json';

import { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Navbar, Container, Form, Collapse, NavbarBrand } from 'react-bootstrap';

import './App.css';
import Home from './Home';


function App() {
  //Get the chief part from the path name
  let pathname = window.location.pathname.replace(/\//g, '');

  //Get the translation id from the hash
  const hash = window.location.hash.replace('#', '');

  const [translation, setTranslation] = useState(Henkel);
  const [translationID, setTranslationID] = useState(hash);

  //On component updates, make sure the corresponding translation json set is assigned
  useEffect(() => {
    switch (translationID) {
      case 'henkel':
        setTranslation(Henkel);
        break;
      case 'jacobs':
        setTranslation(Jacobs);
        break;
      default:
        setTranslation(Henkel);
        break;
    }
  });


  return (
    <div className="App">
      <Navbar bg="light" className='sticky-top'>


        <Container className="justify-content-md-center" id="settings-select">
          <Form.Select className='form-select-md' value={pathname} name="part-select" onChange={(e) => {
            let path = '/' + e.target.value + '/#' + translationID;
            if (e.target.value == '') path = '/#' + translationID;
            window.location.replace(path);

          }}>
            <option value="">Home</option>
            <option value="preface">Preface</option>
            <option value="ten-commandments">The Ten Commandments</option>
            <option value="creed">The Creed</option>
            <option value="lords-prayer">The Lord's Prayer</option>
            <option value="baptism">Sacrament of Holy Baptism</option>
            <option value="confession">Confession</option>
            <option value="lords-supper">Sacrament of the Altar</option>
            <option value="prayers">Prayers</option>
            <option value="table-of-duties">Table of Duties</option>
          </Form.Select>

          <Form.Select value={translationID} className='form-select-md' name="translation" onChange={(e) => {
            let v = e.target.value;
            setTranslationID(v);
            window.location.replace(window.location.pathname + '#' + v);


          }}>
            <option value="henkel">Henkel BoC (1852)</option>
            <option value="jacobs">Henry E. Jacobs (1882)</option>

          </Form.Select>
        </Container>



      </Navbar>


      <Container className="p5 my-5 mx-auto reader">

        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/preface'} element={<CatechismChiefPart id="preface" translation={translation.preface} />} />
            <Route path='/ten-commandments' element={<CatechismChiefPart id="ten-commandments" translation={translation.tencommandments} />} />
            <Route path='/creed' element={<CatechismChiefPart id="creed" translation={translation.creed} />}>  </Route>
            <Route path="/lords-prayer" element={<CatechismChiefPart id="lords-prayer" translation={translation.lordsprayer} />}>  </Route>
            <Route path="/baptism" element={<CatechismChiefPart id="baptism" translation={translation.baptism} />}></Route>
            <Route path="/confession" element={<CatechismChiefPart id="confession" translation={translation.confession} />}></Route>
            <Route path="/lords-supper" element={<CatechismChiefPart id="lords-supper" translation={translation.lordsSupper} />}></Route>
            <Route path="/prayers" element={<CatechismChiefPart id="prayers" translation={translation.prayers} />}></Route>
            <Route path="/table-of-duties" element={<CatechismChiefPart id="table-of-duties" translation={translation.duties} />}></Route>
          </Routes>
        </BrowserRouter>


      </Container>

      <Container>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <span className='text-muted'><a href="/">Luther's Small Catechism</a></span>
        <span class="text-muted">© <a href="https://merctraider.me" target="_blank">merctraider</a> 2022 Some Rights Reserved.</span>
        

        </footer>
      </Container>

    </div>
  );
}

export default App;
