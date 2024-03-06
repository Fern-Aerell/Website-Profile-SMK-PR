<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Pembuat;
use Illuminate\Http\Request;

class PembuatController extends Controller
{
    public function ambil_semua_data_pembuat() {
        $pembuats = Pembuat::all();
        return response()->json([
            'status' => 'Berhasil',
            'pesan' => 'Semua data pembuat berhasil diambil.',
            'data' => $pembuats,
        ]);
    }
    public function tambah_data_pembuat(Request $request) {
        $request->validate(
            [
                'nama' => 'required|string|max:255'
            ]
        );
        $data_baru_pembuat = Pembuat::create([
            'nama' => $request->nama
        ]);
        return response()->json([
            'status' => 'Berhasil',
            'pesan' => 'Data pembuat berhasil diambil.',
            'data' => $data_baru_pembuat,
        ]);
    }
    public function ambil_data_pembuat_dari_id($id) {
        $data_pembuat_dengan_id = Pembuat::find($id);
        if(!$data_pembuat_dengan_id) {
            return response()->json(
                [
                    'status' => 'Gagal',
                    'pesan' => "Data pembuat dengan id $id tidak ada.",
                ],
                404
            );
        }
        return response()->json([
            'status' => 'Berhasil',
            'pesan' => 'Data pembuat berhasil diambil.',
            'data' => $data_pembuat_dengan_id,
        ]);
    }
    public function perbarui_data_pembuat(Request $request, $id) {
        $request->validate(
            [
                'nama' => 'required|string|max:255'
            ]
        );
        $data_pembuat_dengan_id = Pembuat::find($id);
        if(!$data_pembuat_dengan_id) {
            return response()->json(
                [
                    'status' => 'Gagal',
                    'pesan' => "Data pembuat dengan id $id tidak ada.",
                ],
                404
            );
        }
        $data_pembuat_dengan_id->update([
            'nama' => $request->nama ?? $data_pembuat_dengan_id->nama
        ]);
        return response()->json([
            'status' => 'Berhasil',
            'pesan' => 'Data pembuat berhasil di update.',
            'data' => $data_pembuat_dengan_id,
        ]);
    }
    public function hapus_data_pembuat($id) {
        $data_pembuat_dengan_id = Pembuat::find($id);
        if(!$data_pembuat_dengan_id) {
            return response()->json(
                [
                    'status' => 'Gagal',
                    'pesan' => "Data pembuat dengan id $id tidak ada.",
                ],
                404
            );
        }
        $data_pembuat_dengan_id->delete();
        return response()->json([
            'status' => 'Berhasil',
            'pesan' => 'Data pembuat berhasil di hapus.'
        ]);
    }
}
