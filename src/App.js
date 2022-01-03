const App = () => {
  let list = [1, 2, 3, 4, 5];
  return (
    <div className="container-fluid ">
      <div className="bg-warning  row">
        <h1>facebook by React</h1>
      </div>
      <div className="row ">
        <div className="col-3 d-none d-md-block bg-light ">
          <ul className="list-unstyled fs-3 text-center ">
            <li>Home</li>
            <li>Gallary</li>
            <li>Messages</li>
            <li>Setting</li>
            <li>About us</li>
          </ul>
        </div>

        <div className="col-12 col-md-6 alert-success p-4 text-center mb-1  ">
          <h2>This is comment</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            dicta!
          </p>
        </div>

        <div className="col-3 d-none d-md-block  ">
          <h2>Advertisement</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, eaque
            autem est, error commodi ea repudiandae reprehenderit libero
            excepturi at iure ducimus omnis modi quam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

// export default function App() {
//   return (
//     <div>
//       <h2>This is first React</h2>
//     </div>
//   );
// }
