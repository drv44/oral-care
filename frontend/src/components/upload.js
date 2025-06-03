import { useRef, useState } from "react";
import client from "../api/client";
import Spinner from "./Spinner";
import "./upload.css"

export default function FileUpload({ onUpload }) {
  const fileInput = useRef();
  const [loading, setLoading] = useState(false);

  const uploadAll = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setLoading(true);
    try {
      const uploads = files.map(async (file) => {
        const form = new FormData();
        form.append("file", file);
        const res = await client.post("/upload/", form, {
          responseType: "blob",
        });
        return URL.createObjectURL(res.data);
      });
      const urls = await Promise.all(uploads);
      onUpload(urls);
    } catch (err) {
      alert("One or more uploads failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // return (
  //   <div style={{ position: "relative", alignItems: "center"}}>
  //     <h3>Upload DICOM(s)</h3>
  //     <input
  //       type="file"
  //       accept=".dcm,.rvg"
  //       multiple
  //       ref={fileInput}
  //       onChange={uploadAll}
  //       disabled={loading}
  //     />

  //     {loading && <Spinner />}

  //     <button
  //       disabled={loading}
  //       onClick={() => fileInput.current.click()}
  //       style={{ marginTop: "8px" }}
  //     >
  //       {loading ? "Uploading..." : "Get Diagnosis"}
  //     </button>
  //   </div>
  // );
  return (
    <div className="file-upload-container">
      <h3 className="file-upload-title">Upload DICOM(s)</h3>

      {/* Hide the native file input visually */}
      <input
        type="file"
        accept=".dcm,.rvg"
        multiple
        ref={fileInput}
        onChange={uploadAll}
        disabled={loading}
        className="file-input-hidden"
      />

      {/* Show a spinner if loading */}
      {loading && <Spinner />}

      <button
        className="upload-button"
        disabled={loading}
        onClick={() => fileInput.current.click()}
      >
        {loading ? "Uploading..." : "Get Diagnosis"}
      </button>
    </div>
  );
}
