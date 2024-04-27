import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

// import { BrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import ErrorPage from "./pages/ErrorPage";
// import Footer from "./components/Footer";
//
// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };
//
// const router = BrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/services",
//         element: <Services />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
//   {
//     path: "*",
//     element: <ErrorPage />,
//   },
// ]);
//
// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// };
//
// export default App;
