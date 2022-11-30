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
        <div style={{
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
    <MDBFooter role="footcont" className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://reautydao.io/'
            role='button facebook'
            id='reautydao'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/ReautyDao'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://reautydao.io/'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/reautyapp/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/company/blingy/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://reautydao.io/'
            role='button'
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