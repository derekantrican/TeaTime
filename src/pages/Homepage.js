import { Link } from "react-router-dom";

export function HomePage() { 
    return (
      <header style={{ paddingLeft: 0, height: '100%' }}>
        <div
          className='p-5 text-center bg-image'
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundImage: "url('https://theturkeytraveler.com/wp-content/uploads/2022/08/Turkish-Tea-Shopping.jpg')", backgroundSize: 'cover', height: '100%' }}
        >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: 20 }}>
              <h1 className='mb-3'>A time for hanging out, drinking tea, playing games, and making friends</h1>
              <h4 className='mb-3'>Regardless of race, religion, culture, language level, or any other factor - all are welcome!</h4>
              <Link className='btn btn-outline-light btn-lg' style={{backgroundColor: 'rgba(130, 174, 245, 0.5)'}} to='/groups'>
                Find a group near you
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }