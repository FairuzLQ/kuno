import { FaUserShield, FaFileAlt, FaInfoCircle } from "react-icons/fa";

export default function KebijakanPrivasi() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
      {/* Container */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gradient mb-4">
          Kebijakan Privasi
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl text-center text-gray-700 mb-6">
          Kami melindungi privasi Anda dengan sepenuh hati
        </h2>

        {/* Date Last Changed */}
        <p className="text-sm text-center bg-gray-200 text-gray-600 px-4 py-2 rounded-md mb-8">
          Terakhir diperbarui: 23 Desember 2024
        </p>

        {/* Description Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="flex items-start space-x-4">
            <FaUserShield className="text-blue-500 text-3xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Perlindungan Data Anda
              </h3>
              <p className="text-gray-700 mt-2">
                Kami menggunakan berbagai langkah keamanan untuk memastikan
                bahwa informasi pribadi Anda terlindungi. Semua data dienkripsi
                dan hanya digunakan untuk tujuan yang telah disetujui.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-start space-x-4">
            <FaFileAlt className="text-green-500 text-3xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Pengumpulan Informasi
              </h3>
              <p className="text-gray-700 mt-2">
                Kami hanya mengumpulkan informasi yang diperlukan untuk
                meningkatkan pengalaman Anda di Kupas Tekno. Anda selalu
                memiliki kendali atas data yang kami kumpulkan.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-start space-x-4">
            <FaInfoCircle className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Hak dan Pilihan Anda
              </h3>
              <p className="text-gray-700 mt-2">
                Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
                informasi pribadi Anda kapan saja. Hubungi kami jika ada
                pertanyaan terkait kebijakan privasi ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
