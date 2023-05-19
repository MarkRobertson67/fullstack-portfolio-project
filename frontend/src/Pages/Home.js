import HeadLights from "../assets/HeadLights.webp";


function Home() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', height: '100vh', paddingTop: "250px" }}>
      <div>
      
      </div>
      <img
        src={HeadLights}
        alt="Car Button Logo"
        className="logo-image"
        style={{
          width: "520px",
          height: "auto",
        }}
      />
      <div>
      <h2 style={{ textAlign: "center" }}>Welcome</h2>

        <h3>To Luxury Rides App</h3>
      </div>
    </div>
    );
  }
  
  export default Home;