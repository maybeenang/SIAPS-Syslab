import React from "react";
import Footer from "../layouts/Footer";
import {
  StatusTaskProgress,
  StatusTaskDone,
} from "../components/WarningContent";
import BarChart from "../layouts/BarChart";
import Header from "../layouts/Header";

export default function Beranda() {
  return (
    <>
      <main className="main-loged">
        <div className="container">
          <Header />
        </div>
        <div className="container schedule-content">
          <div className="header">
            <div className="title-container">
              <h2>Jadwal Hari Ini</h2>
              <p>
                <b>{2} jadwal</b> untuk diselesaikan
              </p>
            </div>
            <div className="count-today">
              <div className="schedule-today">
                <p>Diproses</p>
                <h3 id="scheduleProgress">{"1"}</h3>
              </div>
              <div className="schedule-today">
                <p>Selesai</p>
                <h3 id="scheduleDone">{"1"}</h3>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Instansi</th>
                  <th>Lokasi</th>
                  <th>Petugas</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PT Tanggamus Electric Power</td>
                  <td>Lampung</td>
                  <td>Engineer</td>
                  <td>
                    <StatusTaskProgress />
                  </td>
                </tr>
                <tr>
                  <td>PT Tanggamus Electric Power</td>
                  <td>Lampung</td>
                  <td>Engineer</td>
                  <td>
                    <StatusTaskDone />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <div className="title-header">
              <h3>Grafik Kinerja</h3>
              <p>
                Periode{" "}
                <b>
                  {"Januari"} - {"Juni"} {"2023"}
                </b>
              </p>
            </div>
          </div>
          <div className="chart-container">
            <BarChart />
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </main>
    </>
  );
}