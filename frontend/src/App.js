import { useState } from "react";
import FileUpload from "./components/upload";
import ImageCanvas from "./components/imageViewer";
import ReportViewer from "./components/reportViewer";
import "./App.css";

export default function App() {
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const [annotations, setAnnotations] = useState(null);
  const [report, setReport] = useState("");

  return (
    <div className="app-container">
      <div className="panel left">
        <FileUpload onUpload={setOriginalImageUrl} />
      </div>
      <div className="panel center">
        <ImageCanvas imageUrl={originalImageUrl} onDetect={setAnnotations} />
      </div>
      <div className="panel right">
        <ReportViewer
          annotations={annotations}
          onReport={setReport}
          report={report}
        />
      </div>
    </div>
  );
}
