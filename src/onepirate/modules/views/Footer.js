import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Copyright() {
    return (
      <React.Fragment>
        <div data-testid="copycont" style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "row",
                  justifyContent: "center",
                
              }}>
        <p style={{fontSize: "2vh", color: "#000"}}>{'©  '}</p>
        <a style={{fontSize: "2vh", color: "#000"}} href="https://reautydao.io">
          ReautyDAO
        </a>{' - '}
        <p style={{fontSize: "2vh", color: "#000"}}>{new Date().getFullYear()}</p>
        </div>
      </React.Fragment>
    );
  }

export default function Footer() {
  return (
    <MDBFooter data-testid="footcont" className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0' data-testid="container">
        <section className='mb-4' data-testid="section">
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://reautydao.io/'
            data-testid='buttonfb'
            id='reautydao'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/ReautyDao'
            data-testid='buttontw'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://reautydao.io/'
            data-testid='buttongo'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/reautyapp/'
            data-testid='buttonig'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/company/blingy/'
            data-testid='buttonli'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://reautydao.io/'
            data-testid='buttondis'
          >
            <MDBIcon fab icon='discord' />
          </MDBBtn>
        </section>
             <img src={require("../views/reauty-logo.png")}
             style={{height: "10vh"}} alt="Logo"/>
      </MDBContainer>
      <Copyright />
    </MDBFooter>
  );
}