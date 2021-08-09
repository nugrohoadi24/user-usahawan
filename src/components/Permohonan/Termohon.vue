<template>
  <div>
    <div class="laporan">
        <div class="row">
            <div class="col-md-3 laporan-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Data Pemohon</h3>
                <p>Silahkan isi data Anda (Termohon), kami akan bantu prosesnya.</p>
                <a href="#/pemohon">
                    <input type="submit" name="" value="Kembali"/><br/>
                </a>
            </div>
            <div class="col-md-9 laporan-right">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="laporan-heading">Form Permohonan Termohon</h3>
                        <form class="was-validated needs-validation row laporan-form" v-on:submit.prevent="saveDataTermohon">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="nama_termohon" id="nama_termohon" v-model="nama_termohon" class="form-control m-2" placeholder="Nama Termohon *" required/>
                                </div>
                                <div class="form-group">
                                    <select name="jenis_kelamin_termohon" id="jenis_kelamin_termohon" v-model="jenis_kelamin_termohon" class="form-control m-2" required>
                                        <option class="hidden" value="" selected disabled>Jenis Kelamin *</option>
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="number" name="no_telp_termohon" id="no_telp_termohon" v-model="no_telp_termohon" minlength="10" maxlength="13" class="form-control m-2" placeholder="Nomor Telepon Termohon *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="provinsi_termohon" id="provinsi_termohon" v-model="provinsi_termohon" class="form-control m-2" placeholder="Provinsi Termohon *" required/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="kota_termohon" id="kota_termohon" v-model="kota_termohon" class="form-control m-2" placeholder="Kabupaten/Kota Termohon *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="kecamatan_termohon" id="kecamatan_termohon" v-model="kecamatan_termohon" class="form-control m-2" placeholder="Kecamatan Termohon *" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="kelurahan_termohon" id="kelurahan_termohon" v-model="kelurahan_termohon" class="form-control m-2" placeholder="Kelurahan Termohon *" />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control is-invalid m-2" name="alamat_termohon" id="alamat_termohon" v-model="alamat_termohon" placeholder="Alamat Lengkap Pemohon *" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="form-group left-2 fix-btm-2">Foto Pribadi</label>
                                <div class="custom-file">
                                    <input type="file" class="form-control m-2" @change="handleFotoPribadi" required>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="form-group left-2 fix-btm-2">Foto KTP</label>
                                <div class="custom-file">
                                    <input type="file" class="form-control m-2" @change="handleFotoKTP" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6 ">
                                <input type="submit" class="btnlaporan text-center font-white" value="Kirim Permohonan"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Termohon',
    data() {
        return {
            dataPermohonan: [],
            dataPermohonan2: [],
            nama_termohon: '',
            jenis_kelamin_termohon: '',
            no_telp_termohon: '',
            provinsi_termohon: '',
            kota_termohon: '',
            kecamatan_termohon: '',
            kelurahan_termohon: '',
            alamat_termohon: '',
            foto_pemohon: null,
            ktp_pemohon: null,
        }
    },
    methods: {
        handleFotoPribadi(e) {
            this.foto_pemohon = e.target.files[0]
        },
        handleFotoKTP(e) {
            this.ktp_pemohon = e.target.files[0]
        },
        saveDataTermohon() {
            var termohonStorage = {
                "nama_termohon": this.nama_termohon,
                "jenis_kelamin_termohon": this.jenis_kelamin_termohon,
                "no_telp_termohon": this.no_telp_termohon,
                "alamat_termohon": this.alamat_termohon,
                "provinsi_termohon": this.provinsi_termohon,
                "kota_termohon": this.kota_termohon,
                "kecamatan_termohon": this.kecamatan_termohon,
                "kelurahan_termohon": this.kelurahan_termohon,
                "kategori": "Laporan",
                "status": "PROSES",
            }

            const parsed = JSON.stringify(termohonStorage);
            localStorage.setItem('dataPermohonan2', parsed);
            this.submitData()
        },
        submitData() {
            let formData = new FormData()
            formData.append('nama_pemohon', this.dataPermohonan.nama_pemohon)
            formData.append('jenis_kelamin_pemohon', this.dataPermohonan.jenis_kelamin_pemohon)
            formData.append('tanggal_lahir_pemohon', this.dataPermohonan.tanggal_lahir_pemohon)
            formData.append('alamat_pemohon', this.dataPermohonan.alamat_pemohon)
            formData.append('no_telp_pemohon', this.dataPermohonan.no_telp_pemohon)
            formData.append('email_pemohon', this.dataPermohonan.email_pemohon)
            formData.append('nama_pembina_pemohon', this.dataPermohonan.nama_pembina_pemohon)
            formData.append('nama_dpd_pemohon', this.dataPermohonan.nama_dpd_pemohon)
            formData.append('kepentingan', this.dataPermohonan.kepentingan)

            formData.append('nama_termohon', this.nama_termohon)
            formData.append('jenis_kelamin_termohon', this.jenis_kelamin_termohon)
            formData.append('no_telp_termohon', this.no_telp_termohon)
            formData.append('provinsi_termohon', this.provinsi_termohon)
            formData.append('kota_termohon', this.kota_termohon)
            formData.append('kecamatan_termohon', this.kecamatan_termohon)
            formData.append('kelurahan_termohon', this.kelurahan_termohon)
            formData.append('alamat_termohon', this.alamat_termohon)
            formData.append('kategori', "Laporan")
            formData.append('status', "PROSES")
            
            formData.append('foto_pemohon', this.foto_pemohon)
            formData.append('ktp_pemohon', this.ktp_pemohon)

            axios({
            method: "post",
            url: "http://localhost/api/permohonan",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                alert(response.data.message)
            })
            .catch(function (e) {
                console.log(e);
                alert('Data Gagal Dikirim, silahkan periksa inputan anda')
                
            });
        },
    },
    async mounted() {
        var dataStorage = await localStorage.getItem('dataPermohonan1')
        this.dataPermohonan = await JSON.parse(dataStorage)
        
        if (localStorage.getItem('dataPermohonan2')) {
            try {
                this.dataPermohonan2 = JSON.parse(localStorage.getItem('dataPermohonan2'));
                console.log(this.dataPermohonan2, 'Aaa')
            } catch(e) {
                localStorage.removeItem('dataPermohonan2')
            }
        }
    }

}
</script>

<style>

</style>