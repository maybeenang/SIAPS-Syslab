import React from "react";
import Header from "../../layouts/Header";
import useDetailKaryawan from "../../hooks/useDetailKaryawan";
import { useParams } from "react-router-dom";
import Footer from "../../layouts/Footer";
import { useState, useEffect } from "react";
import { SaveButton } from "../../components/ActionButton";
import { ErrorPage, LoadingPage } from "../HandlingPages";

function DetailKaryawan() {
  const { id } = useParams();
  const { data, isLoading, error } = useDetailKaryawan(id);

  const [input, setInput] = useState({
    nama: data?.nama,
    nip: data?.nip,
    alamat: data?.alamat,
    telp: data?.telp,
    jabatan: data?.jabatan.jabatan,
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setInput({
      nama: data?.nama,
      nip: data?.nip,
      alamat: data?.alamat,
      telp: data?.telp,
      jabatan: data?.jabatan.jabatan,
    });
  }, [data]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <main className="main-loged details-page">
          <div className="container">
            <Header />
          </div>
          <div className="container details-container">
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="nama">NIP</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    defaultValue={data?.nip}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label htmlFor="nama">Nama</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    defaultValue={data?.nama}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label
                  onClick={() => {
                    console.log(
                      data?.jabatan.jabatan.charAt(0).toUpperCase() +
                        data?.jabatan.jabatan.slice(1)
                    );
                  }}
                  htmlFor="nama"
                >
                  Jabatan
                </label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="jabatan"
                    id="jabatan"
                    defaultValue={
                      data?.jabatan.jabatan.charAt(0).toUpperCase() +
                      data?.jabatan.jabatan.slice(0)
                    }
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label htmlFor="nama">Alamat</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    defaultValue={data?.alamat}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label htmlFor="nama">Nomor Telepon</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    defaultValue={data?.telp}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <SaveButton path={""} text={"Simpan"} />
              </div>
            </div>
          </div>
          <div className="container">
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}

/* 
[
  {
    "id": "442309b7-4366-4e70-9576-ed459d790179",
    "nip": "120140186",
    "password": "HendriAldiZulfan12345",
    "nama": "Hendri Aldi Zulfan",
    "alamat": "Sinar Negeri, Kec.Pubian, Kab.Lampung Tengah",
    "telp": "+62857889418464",
    "jabatanId": 1,
    "refreshToken": null,
    "createAt": "2023-08-08T18:30:06.287Z",
    "updateAt": "2023-08-08T19:18:48.623Z",
    "jabatan": {
      "id": 1,
      "jabatan": "kepala cabang"
    }
  }
] 
*/

export default DetailKaryawan;