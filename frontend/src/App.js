// import { useState } from "react";
// import FileUpload from "./components/upload";
// import ImageCanvas from "./components/imageViewer";
// import ReportViewer from "./components/reportViewer";
// import "./App.css";

// export default function App() {
//   // Track multiple files, their annotations, and generated reports
//   const [imageUrls, setImageUrls] = useState([]);
//   const [annotations, setAnnotations] = useState([]);
//   const [reports, setReports] = useState([]);

//   return (
//     <div className="app-container">
//       {/* Upload DICOM(s) */}
//       <div className="panel left">
//         <FileUpload onUpload={setImageUrls} />
//       </div>

//       {/* Display and detect on each image */}
//       <div className="panel center">
//         <ImageCanvas imageUrls={imageUrls} onDetect={setAnnotations} />
//       </div>

//       {/* Show a report per image */}
//       <div className="panel right">
//         <ReportViewer
//           annotations={annotations}
//           onReport={setReports}
//           report={reports}
//         />
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import FileUpload from "./components/upload";
import ImageCanvas from "./components/imageViewer";
import ReportViewer from "./components/reportViewer";
import "./App.css";

export default function App() {
  const [imageUrls, setImageUrls] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [reports, setReports] = useState([]);

  return (
    <div className="app-root">
      {/* ───── HEADER ───── */}
      <header className="site-header">
        <div className="header-inner">
          <h1 className="logo">DentalCare AI</h1>
          <nav className="site-nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#upload" className="nav-link">
              Upload
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ───── HERO ───── */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">AI-Powered Dental Imaging & Reporting</h2>
          <p className="hero-subtitle">
            Upload your DICOM files and get instant cavity‐detection reports
            with actionable insights.
          </p>
          <a href="#upload" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      {/* ───── MAIN PANELS ───── */}
      <main className="main-panels">
        <div id="upload" className="panel upload-panel">
          <h3 className="panel-title">Upload DICOMs</h3>
          <FileUpload onUpload={setImageUrls} />
        </div>

        <div className="panel viewer-panel">
          <h3 className="panel-title">Image Viewer</h3>
          <ImageCanvas imageUrls={imageUrls} onDetect={setAnnotations} />
        </div>

        <div className="panel report-panel">
          <h3 className="panel-title">Reports & Suggestions</h3>
          <ReportViewer
            annotations={annotations}
            onReport={setReports}
            report={reports}
          />
        </div>
      </main>

      {/* ───── FEATURES ───── */}
      <section id="features" className="features-section">
        <h2 className="features-heading">Why Choose DentalCare AI?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🦷</div>
            <h4 className="feature-title">Accurate Detection</h4>
            <p className="feature-desc">
              Leveraging state-of-the-art models to detect cavities with high
              precision.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h4 className="feature-title">Fast Reporting</h4>
            <p className="feature-desc">
              Get comprehensive reports in seconds, reducing manual workload.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h4 className="feature-title">Actionable Insights</h4>
            <p className="feature-desc">
              Receive treatment suggestions and best practices to improve
              patient care.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <p>© 2025 DentalCare AI. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
