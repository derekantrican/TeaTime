import './App.css';

function App() {
  return (
    <HeroImage/>
  );
}

function HeroImage() { 
  return (
    <header style={{ paddingLeft: 0, height: '100%' }}>
      <div
        className='p-5 text-center bg-image'
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundImage: "url('https://theturkeytraveler.com/wp-content/uploads/2022/08/Turkish-Tea-Shopping.jpg')", backgroundSize: 'cover', height: '100%' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
