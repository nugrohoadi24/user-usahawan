<template>
    <div>
        <div class="laporan">
        <div class="row">
            <div class="col-md-3 laporan-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Data Terlapor</h3>
                <p>Silahkan isi data Terlapor, sertakan juga bukti yang valid.</p>
                <a href="#/pelapor">
                    <input type="submit" name="" value="Kembali"/><br/>
                </a>
            </div>
            <div class="col-md-9 laporan-right">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="laporan-heading">Form Laporan Terlapor</h3>
                        <form class="was-validated needs-validation row laporan-form" v-on:submit.prevent="saveDataTerlapor">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="nama_terlapor" id="nama_terlapor" v-model="nama_terlapor" class="form-control m-2" placeholder="Nama Terlapor *" required/>
                                </div>
                                <div class="form-group">
                                    <select class="form-control m-2" name="jenis_kelamin_terlapor" id="jenis_kelamin_terlapor" v-model="jenis_kelamin_terlapor" required>
                                        <option class="hidden" value="" selected disabled>Jenis Kelamin *</option>
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="number" name="no_telp_terlapor" id="no_telp_terlapor" v-model="no_telp_terlapor" minlength="10" maxlength="13" class="form-control m-2" placeholder="Nomor Telepon Terlapor *" required/>
                                </div>
                                <div class="form-group">
                                    <textarea  name="alamat_terlapor" id="alamat_terlapor" v-model="alamat_terlapor" class="form-control is-invalid m-2" placeholder="Alamat Terlapor *" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" name="email_terlapor" id="email_terlapor" v-model="email_terlapor" class="form-control m-2" placeholder="Email Terlapor (Jika Ada)" />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="nama_dpd_terlapor" id="nama_dpd_terlapor" v-model="nama_dpd_terlapor" class="form-control m-2" placeholder="Nama Ketua DPD Domisili (Jika Ada)" />
                                </div>
                                <div class="form-group">
                                    <select name="kasus" id="kasus" v-model="kasus" class="form-control m-2" required>
                                        <option class="hidden" value="" selected disabled>Kasus *</option>
                                        <option>Utang Piutang Primer</option>
                                        <option>Utang Piutang Sekunder</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select name="penyelesaian" id="penyelesaian" v-model="penyelesaian" class="form-control m-2" required>
                                        <option class="hidden" value="" selected disabled>Penyelesaian yang diinginkan *</option>
                                        <option>Pelunasan</option>
                                        <option>Permohonan Maaf</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12 mt-2 left-2">
                                <div class="form-group">
                                    <textarea name="uraian_kasus" id="uraian_kasus" v-model="uraian_kasus" class="form-control m-2 ckeditor " placeholder="Uraian Kasus *" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label class="form-group left-2 fix-btm-2">Foto Pribadi</label>
                                <div class="custom-file">
                                    <input type="file" name="foto_pelapor" id="foto_pelapor" @change="handleFotoPribadi" class="form-control m-2" required>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="form-group left-2 fix-btm-2">Foto KTP</label>
                                <div class="custom-file">
                                    <input type="file" name="ktp_pelapor" id="ktp_pelapor" @change="handleFotoKTP" class="form-control m-2" required>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="form-group mt-2 left-2 fix-btm-2">Bukti Dokumen Pelaporan </label>
                                <p class="left-2 note">*Dijadikan Dalam Satu File PDF</p>
                                <div class="custom-file">
                                    <input type="file" name="primary_document" id="primary_document" @change="handlePrimaryDocument" class="form-control m-2" accept=".pdf" required>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label class="form-group mt-2 left-2 fix-btm-2">Bukti Pelaporan Pendukung</label>
                                <p class="left-2 note">*Contoh : Foto Pelaku, Sosial Media, dsb</p>
                                <div class="custom-file">
                                    <input type="file" name="secondary_document" id="secondary_document" @change="handleSecondaryDocument" class="form-control m-2" required>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="checkbox" class="custom-control-input m-2" required>
                                <label class="form-group">Saya Bertanggungjawab Terhadap Laporan Yang Saya Buat</label>
                            </div>
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <input type="submit" class="btnlaporan text-center font-white" value="Kirim Laporan"/>
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
    name: 'Terlapor',
    data() {
        return {
            dataLaporan: [],
            dataLaporan2: [],
            nama_terlapor: '',
            jenis_kelamin_terlapor: '',
            no_telp_terlapor: '',
            alamat_terlapor: '',
            email_terlapor: '',
            nama_dpd_terlapor: '',
            kasus: '',
            penyelesaian: '',
            uraian_kasus: '',
            foto_pelapor: null,
            ktp_pelapor: null,
            primary_document: null,
            secondary_document: null,

        };
    },
    methods: {
        handleFotoPribadi(e) {
            this.foto_pelapor = e.target.files[0]
        },
        handleFotoKTP(e) {
            this.ktp_pelapor = e.target.files[0]
        },
        handlePrimaryDocument(e) {
            this.primary_document = e.target.files[0]
        },
        handleSecondaryDocument(e) {
            this.secondary_document = e.target.files[0]
        },
        saveDataTerlapor() {
            var terlaporStored = {
                "nama_terlapor": this.nama_terlapor,
                "jenis_kelamin_terlapor": this.jenis_kelamin_terlapor,
                "no_telp_terlapor": this.no_telp_terlapor,
                "alamat_terlapor": this.alamat_terlapor,
                "email_terlapor": this.email_terlapor,
                "nama_dpd_terlapor": this.nama_dpd_terlapor,
                "kasus": this.kasus,
                "penyelesaian": this.penyelesaian,
                "uraian_kasus": this.uraian_kasus,
                "kategori": "Laporan",
                "status": "PROSES",
            }

            const parsed = JSON.stringify(terlaporStored);
            localStorage.setItem('dataLaporan2', parsed);
            this.submitData()
        },
        submitData() {
            let formData = new FormData()

            formData.append('nama_pelapor', this.dataLaporan.nama_pelapor)
            formData.append('jenis_kelamin_pelapor', this.dataLaporan.jenis_kelamin_pelapor)
            formData.append('tanggal_lahir_pelapor', this.dataLaporan.tanggal_lahir_pelapor)
            formData.append('alamat_pelapor', this.dataLaporan.alamat_pelapor)
            formData.append('no_telp_pelapor', this.dataLaporan.no_telp_pelapor)
            formData.append('email_pelapor', this.dataLaporan.email_pelapor)
            formData.append('nama_pembina_pelapor', this.dataLaporan.nama_pembina_pelapor)
            formData.append('nama_dpd_pelapor', this.dataLaporan.nama_dpd_pelapor)
            formData.append('tanggal_transaksi', this.dataLaporan.tanggal_transaksi)
            formData.append('total_kerugian', this.dataLaporan.total_kerugian)

            formData.append('nama_terlapor', this.nama_terlapor)
            formData.append('jenis_kelamin_terlapor', this.jenis_kelamin_terlapor)
            formData.append('no_telp_terlapor', this.no_telp_terlapor)
            formData.append('alamat_terlapor', this.alamat_terlapor)
            formData.append('email_terlapor', this.email_terlapor)
            formData.append('nama_dpd_terlapor', this.nama_dpd_terlapor)
            formData.append('kasus', this.kasus)
            formData.append('penyelesaian', this.penyelesaian)
            formData.append('uraian_kasus', this.uraian_kasus)
            formData.append('kategori', "Laporan")
            formData.append('status', "PROSES")

            formData.append('foto_pelapor', this.foto_pelapor)
            formData.append('ktp_pelapor', this.ktp_pelapor)
            formData.append('primary_document', this.primary_document)
            formData.append('secondary_document', this.secondary_document)
            
            var that = this;
            axios({
            method: "post",
            url: "http://localhost/api/laporan",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                alert(response.data.message)
                that.$router.push('/sukses');
            })
            .catch(function () {
                alert('Data Gagal Dikirim, silahkan periksa inputan anda')
            });
            this.removeDataLaporan()
        },
        removeDataLaporan() {
            localStorage.removeItem('dataLaporan1')
        },
    },
    async mounted() {
        var dataStorage = await localStorage.getItem('dataLaporan1')
        this.dataLaporan = await JSON.parse(dataStorage)

        if (localStorage.getItem('dataLaporan2')) {
            try {
                this.dataLaporan2 = JSON.parse(localStorage.getItem('dataLaporan2'));
            } catch(e) {
                localStorage.removeItem('dataLaporan2')
            }
        }
        
    }

}
</script>

<style>

</style>