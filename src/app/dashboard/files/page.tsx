import { FileBrowser } from "../_components/file-browser";

export default function FilesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Your Files</h1>
        <FileBrowser title="Your Files" />
      </div>
    </div>
  );
}
